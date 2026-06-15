/**
 * Kopano Context Service Worker - Offline APWA Handler
 * Jesus is King.
 */

const CACHE_NAME = 'kpgs-cache-v2';
const ASSETS = [
  './index.html',
  './governance.js',
  './manifest.json',
  './agi_council_room_mockup_1774727653901.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Intercept the telemetry sync endpoint
  if (url.pathname === '/api/v1/telemetry/sync' && event.request.method === 'POST') {
    event.respondWith(
      event.request.clone().json()
        .then((payload) => {
          const receiptId = 'sw_ack_' + Math.random().toString(36).slice(2, 10);
          const responsePayload = {
            status: 'accepted',
            receiptId: receiptId,
            timestamp: new Date().toISOString(),
            message: 'CBP telemetry processed by offline service worker',
            echo_id: payload.eventId
          };
          return new Response(JSON.stringify(responsePayload), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          });
        })
        .catch((err) => {
          return new Response(JSON.stringify({
            status: 'rejected',
            reason: 'Invalid JSON payload received by Service Worker: ' + err.message
          }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
          });
        })
    );
    return;
  }

  // Standard cache-first strategy for static resources
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((response) => {
        // Return valid responses, don't cache foreign APIs
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return response;
      });
    }).catch(() => {
      // Offline fallback
      if (event.request.mode === 'navigate') {
        return caches.match('./index.html');
      }
    })
  );
});
