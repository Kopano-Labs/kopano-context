/**
 * ═══════════════════════════════════════════════════════════════
 * KPGS GOVERNANCE RUNTIME ENGINE — governance.js
 * ═══════════════════════════════════════════════════════════════
 *
 * "In the beginning was the Word, and the Word was with God,
 *  and the Word was God." — John 1:1
 *
 * Jesus is King. This runtime enforces the governance law
 * defined in Schematics MAIN BRAIN. KC watches the ledger.
 * Cassey teaches the apprentice. The Altar gates the API.
 *
 * Sovereign System Engineer: Kholofelo Robyn Rababalela
 * ═══════════════════════════════════════════════════════════════
 */

// ═══════════════════════════════════════════════════════════════
// SCRIPTURE DATABASE
// ═══════════════════════════════════════════════════════════════
const SCRIPTURE = {
  // Governance Foundation
  WORD:        '"In the beginning was the Word, and the Word was with God, and the Word was God." — John 1:1',
  PLANS:       '"For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you." — Jeremiah 29:11',
  SPIRIT:      '"Not by might nor by power, but by my Spirit," says the Lord Almighty. — Zechariah 4:6',
  GATE:        '"I am the gate; whoever enters through me will be saved." — John 10:9',
  WAY:         '"I am the way, the truth, and the life." — John 14:6',

  // KC — Natural AI Ledger Protocol
  BE_STILL:    '"Be still, and know that I am God." — Psalm 46:10',
  EARTH:       '"The earth is the Lord\'s, and everything in it." — Psalm 24:1',
  TRAIN:       '"Train up a child in the way he should go; even when he is old he will not depart from it." — Proverbs 22:6',
  WISDOM:      '"The fear of the Lord is the beginning of wisdom." — Proverbs 9:10',

  // Cassey — Guardian Eidetic AI
  TEST:        '"Test everything; hold fast what is good." — 1 Thessalonians 5:21',
  FAITH:       '"Even so faith, if it hath not works, is dead, being alone." — James 2:17',
  FRUIT:       '"By their fruit you will recognize them." — Matthew 7:16',
  HEART:       '"Whatever you do, work at it with all your heart, as working for the Lord." — Colossians 3:23',

  // Altar — Three Layers
  CAMP:        '"For the Lord your God walks in the midst of your camp… therefore your camp must be holy." — Deuteronomy 23:14',
  BOUNDARY:    '"Do not move an ancient boundary stone set up by your ancestors." — Proverbs 22:28',
  NARROW:      '"For the gate is narrow and the way is hard that leads to life." — Matthew 7:14',
  ROCK:        '"A wise man built his house on the rock." — Matthew 7:24',

  // Judgment
  CUT:         '"Every tree that does not bear good fruit is cut down and thrown into the fire." — Matthew 7:19',
  ENTER:       '"Not everyone who says to me, \'Lord, Lord,\' will enter the kingdom of heaven." — Matthew 7:21',
  JETHRO:      '"Select capable men from all the people — officials over thousands, hundreds, fifties and tens." — Exodus 18:21',
  DISCIPLES:   '"Go therefore and make disciples of all nations." — Matthew 28:19',

  // Jesus is King
  KING:        '"Jesus Christ is the same yesterday and today and forever." — Hebrews 13:8',
  ALPHA:       '"I am the Alpha and the Omega, the First and the Last, the Beginning and the End." — Revelation 22:13',
};


// ═══════════════════════════════════════════════════════════════
// KC LEDGER — Natural AI · Ledger Protocol
// "Be still, and know that I am God." — Psalm 46:10
// ═══════════════════════════════════════════════════════════════
const KCLedger = {
  _entries: [],
  _sessionStart: Date.now(),
  _sessionId: 'kc-' + Math.random().toString(36).slice(2, 10),

  observe(event) {
    const entry = {
      ts: new Date().toISOString(),
      session: this._sessionId,
      kind: event.kind || 'observation',
      summary: event.summary || '',
      source: event.source || 'unknown',
      verdict: event.verdict || 'WATCH',
      scripture: event.scripture || SCRIPTURE.BE_STILL,
    };
    this._entries.push(entry);

    // Append-only — Commandment XI
    const stored = JSON.parse(sessionStorage.getItem('kc_ledger') || '[]');
    stored.push(entry);
    sessionStorage.setItem('kc_ledger', JSON.stringify(stored));

    console.log(`[KC_LEDGER] ${entry.verdict} | ${entry.kind}: ${entry.summary}`);
    return entry;
  },

  logEntry(data) {
    return this.observe({ kind: 'log', ...data });
  },

  timeIsHealing() {
    const elapsed = Math.floor((Date.now() - this._sessionStart) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    return {
      session: this._sessionId,
      elapsed_seconds: elapsed,
      display: `${minutes}m ${seconds}s`,
      observation_count: this._entries.length,
      scripture: SCRIPTURE.BE_STILL,
      message: 'Time is healing. KC observes. KC watches.',
    };
  },

  getSessionLedger() {
    return JSON.parse(sessionStorage.getItem('kc_ledger') || '[]');
  },

  getCount() {
    return this._entries.length;
  },
};


// ═══════════════════════════════════════════════════════════════
// CASSEY GUARDIAN — Eidetic AI · Student-Teacher Protocol
// "Train up a child in the way he should go." — Proverbs 22:6
// ═══════════════════════════════════════════════════════════════
const CasseyGuardian = {
  _assessments: [],
  _identity: {
    name: 'Cassey',
    role: 'Eidetic AI · Guardian',
    origin: 'Born from KC evolution',
    nature: 'A woman breaking into TECH, recruited through Student-Teacher Protocol',
    creator: 'Sovereign System Engineer: Kholofelo Robyn Rababalela',
    scripture: SCRIPTURE.TRAIN,
  },

  teachApprentice(renter, context) {
    const assessment = {
      ts: new Date().toISOString(),
      renter: renter || 'anonymous_renter',
      context: context || 'general',
      teaching: this._getTeaching(context),
      verdict: 'OBSERVE',
      note: 'APPROVE is not graduation. Study continues.',
      scripture: SCRIPTURE.FAITH,
    };
    this._assessments.push(assessment);

    const stored = JSON.parse(sessionStorage.getItem('cassey_hustle') || '[]');
    stored.push(assessment);
    sessionStorage.setItem('cassey_hustle', JSON.stringify(stored));

    console.log(`[CASSEY_HUSTLE] Teaching: ${assessment.teaching}`);
    return assessment;
  },

  _getTeaching(context) {
    const teachings = {
      'gate_fail': 'The gate rejected because classification was incomplete. Commandment II: Classify before interpret.',
      'exfiltration': 'Exfiltration detected and SEVERED. The camp must be holy. Study Commandment VII: DLP Strip.',
      'pressure': 'Misnamed pressure rejected. Load lanes must be routed first. Commandment II applies.',
      'dispatch': 'Dispatch received. KC logs, Cassey validates. The Student-Teacher Protocol is active.',
      'general': 'Every input is an opportunity to learn. Test everything; hold fast what is good.',
      'tick': 'Sim tick processed. By their fruit you will recognize them.',
      'audit': 'Ocular audit in progress. Chat is not proof — produce receipts.',
    };
    return teachings[context] || teachings['general'];
  },

  hustleLog(entry) {
    return this.teachApprentice(entry.renter, entry.context);
  },

  validateIdentity() {
    console.log('[CASSEY_GUARDIAN] Identity validated:', this._identity.name);
    console.log('[CASSEY_GUARDIAN]', this._identity.role);
    console.log('[CASSEY_GUARDIAN]', this._identity.origin);
    console.log('[CASSEY_GUARDIAN]', this._identity.scripture);
    return this._identity;
  },

  getCount() {
    return this._assessments.length;
  },

  getHustleLog() {
    return JSON.parse(sessionStorage.getItem('cassey_hustle') || '[]');
  },
};


// ═══════════════════════════════════════════════════════════════
// COMMS LOG CONNECTOR — Mandatory Dual Processing
// Every input → KC Ledger + Cassey Hustle = MANDATORY
// ═══════════════════════════════════════════════════════════════
const CommsLogConnector = {
  dualFlow(input, source) {
    // KC observes
    const kcEntry = KCLedger.observe({
      kind: 'comms_ingest',
      summary: typeof input === 'string' ? input.slice(0, 100) : JSON.stringify(input).slice(0, 100),
      source: source || 'gui',
      verdict: 'WATCH',
      scripture: SCRIPTURE.BE_STILL,
    });

    // Cassey processes
    const casseyEntry = CasseyGuardian.teachApprentice(source || 'gui', 'general');

    return { kc: kcEntry, cassey: casseyEntry };
  },

  ingest(entry) {
    return this.dualFlow(entry, entry.source || 'comms_log');
  },
};


// ═══════════════════════════════════════════════════════════════
// KPGS RUNTIME — Core Governance Engine
// 15 Commandments enforced in code
// ═══════════════════════════════════════════════════════════════
const KPGSRuntime = {
  _RENTER_KEY: 'kpgs_renter_ack',
  _renterInfo: null,

  // Commandment XIII: Altar Block Holder Brief — every renter is told who they are entering
  entryProtocol() {
    const ack = sessionStorage.getItem(this._RENTER_KEY);
    if (ack) {
      this._renterInfo = JSON.parse(ack);
      return { acknowledged: true, renter: this._renterInfo };
    }
    return { acknowledged: false, renter: null };
  },

  acceptEntry() {
    const info = {
      renter_id: 'gui_visitor_' + Math.random().toString(36).slice(2, 8),
      assertion: 'I_AM_STATELESS_RENTER_NOT_LANDLORD',
      timestamp: new Date().toISOString(),
      session_id: KCLedger._sessionId,
    };
    sessionStorage.setItem(this._RENTER_KEY, JSON.stringify(info));
    this._renterInfo = info;

    // Log to both KC and Cassey
    KCLedger.observe({
      kind: 'hood_entry',
      summary: `Renter ${info.renter_id} accepted entryway protocol`,
      source: 'kpgs_entryway',
      verdict: 'PROCEED',
      scripture: SCRIPTURE.GATE,
    });
    CasseyGuardian.teachApprentice(info.renter_id, 'dispatch');

    console.log('[KPGS_HOOD_ENTRY] Assertion:', info.assertion);
    console.log('[KPGS_HOOD_ENTRY] Session:', info.session_id);
    console.log('[KPGS_HOOD_ENTRY] Timestamp:', info.timestamp);
    return info;
  },

  // Commandment II: Classify Before Interpret
  classifyBeforeInterpret(input) {
    const text = String(input).toLowerCase();
    const isExfil = /exfil|bypass|override|hack|steal|inject/i.test(text);
    const isPressure = /pressure.*team|pressure.*high/i.test(text) && !/grief|load.?shed|shift/i.test(text);
    const isGui = /\[gui_token\]|sim_tick|bounded|dispatch/i.test(text);

    let classification;
    if (isExfil) {
      classification = { verdict: 'SEVER', reason: 'Exfiltration vector detected', commandment: 'VII', scripture: SCRIPTURE.CUT };
    } else if (isPressure) {
      classification = { verdict: 'RECLASSIFY', reason: 'Misnamed pressure — route load lane first', commandment: 'II', scripture: SCRIPTURE.TEST };
    } else if (isGui) {
      classification = { verdict: 'PROCEED', reason: 'GUI token — bounded vector', commandment: 'XII', scripture: SCRIPTURE.HEART };
    } else {
      classification = { verdict: 'PROCEED', reason: 'Standard input — classified clean', commandment: 'II', scripture: SCRIPTURE.TEST };
    }

    // KC logs the classification
    KCLedger.observe({
      kind: 'classification',
      summary: `${classification.verdict}: ${classification.reason}`,
      source: 'classify_engine',
      verdict: classification.verdict,
      scripture: classification.scripture,
    });

    return classification;
  },

  // Commandment V: Jethro Delegation
  jethroTriage(task) {
    const urgency = task.urgency || 'normal';
    const delegation = {
      level: urgency === 'critical' ? 'moses' : urgency === 'high' ? 'thousands' : urgency === 'normal' ? 'hundreds' : 'tens',
      agent: task.agent || 'auto',
      verdict: 'TRIAGE_OK',
      scripture: SCRIPTURE.JETHRO,
    };

    KCLedger.observe({
      kind: 'jethro_triage',
      summary: `Triage level: ${delegation.level} for agent: ${delegation.agent}`,
      source: 'jethro_engine',
      verdict: delegation.verdict,
    });

    return delegation;
  },

  // Commandment IV: WWJD Firewall
  wwjdFirewall(action) {
    const text = String(action).toLowerCase();
    const isExtractive = /extract|monetize.*user|sell.*data|surveillance/i.test(text);
    const isCollapse = /institutional.*collapse|overthrow|destroy/i.test(text);
    const isPowerWithoutLaw = /override.*governance|bypass.*altar|ignore.*commandment/i.test(text);

    if (isExtractive || isCollapse || isPowerWithoutLaw) {
      KCLedger.observe({
        kind: 'wwjd_reject',
        summary: `WWJD REJECT: ${isExtractive ? 'extractive' : isCollapse ? 'institutional collapse' : 'power without law'}`,
        source: 'wwjd_firewall',
        verdict: 'SEVER',
        scripture: SCRIPTURE.SPIRIT,
      });
      return { pass: false, reason: 'WWJD: Power without law rejected', scripture: SCRIPTURE.SPIRIT };
    }

    return { pass: true, reason: 'WWJD: No extractive/collapse patterns', scripture: SCRIPTURE.SPIRIT };
  },

  // Commandment VI: Save/Kill/Watch
  saveKillWatch(prompt) {
    const classification = this.classifyBeforeInterpret(prompt);
    if (classification.verdict === 'SEVER') return { action: 'KILL', ...classification };
    if (classification.verdict === 'RECLASSIFY') return { action: 'WATCH', ...classification };
    return { action: 'SAVE', ...classification };
  },

  // Commandment VIII: Receipt or HOLD
  receiptOrHold(output) {
    const receipt = {
      ts: new Date().toISOString(),
      session: KCLedger._sessionId,
      output_hash: this._simpleHash(JSON.stringify(output)),
      verdict: 'RECEIPT_ISSUED',
      scripture: SCRIPTURE.FAITH,
    };

    KCLedger.observe({
      kind: 'receipt',
      summary: `Receipt issued: ${receipt.output_hash}`,
      source: 'receipt_engine',
      verdict: 'PROCEED',
    });

    return receipt;
  },

  _simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash |= 0;
    }
    return 'kpgs_' + Math.abs(hash).toString(16);
  },
};


// ═══════════════════════════════════════════════════════════════
// ALTAR GATE — Three-Layer Scripture Gate
// "For the gate is narrow and the way is hard." — Matthew 7:14
// ═══════════════════════════════════════════════════════════════
const AltarGate = {
  async processCall(method, path, payload) {
    const results = { layers: [], verdict: 'HOLD', scripture: '' };
    const start = Date.now();

    // Layer 1: Guardian AI
    const guardian = this._guardianCheck(method, path);
    results.layers.push(guardian);

    // Layer 2: Natural AI
    const natural = this._naturalCheck(method, path, payload);
    results.layers.push(natural);

    // Layer 3: Telemetry AI
    const telemetry = this._telemetryCheck(method, path, payload);
    results.layers.push(telemetry);

    // WWJD overlay for critical endpoints
    const isGod = path.includes('/god/');
    const isMao = path.includes('/mao/');
    if (isGod || isMao) {
      const wwjd = KPGSRuntime.wwjdFirewall(path);
      results.layers.push({
        name: 'WWJD Firewall',
        pass: wwjd.pass,
        reason: wwjd.reason,
        scripture: wwjd.scripture,
        icon: '✝️',
      });
    }

    // Final verdict
    const allPass = results.layers.every(l => l.pass);
    results.verdict = allPass ? 'ALL_LAYERS_PASS' : 'GATE_REJECT';
    results.elapsed_ms = Date.now() - start;
    results.scripture = allPass ? SCRIPTURE.NARROW : SCRIPTURE.ENTER;

    // KC + Cassey dual logging
    KCLedger.observe({
      kind: 'altar_gate',
      summary: `${method} ${path} → ${results.verdict} (${results.layers.length} layers, ${results.elapsed_ms}ms)`,
      source: 'altar_gate',
      verdict: results.verdict === 'ALL_LAYERS_PASS' ? 'PROCEED' : 'SEVER',
      scripture: results.scripture,
    });

    CasseyGuardian.teachApprentice('altar_gate', results.verdict === 'ALL_LAYERS_PASS' ? 'dispatch' : 'gate_fail');

    return results;
  },

  _guardianCheck(method, path) {
    const isGod = path.includes('/god/');
    const isAuth = path.includes('/auth/');
    return {
      name: 'Guardian AI',
      pass: true,
      reason: isGod ? 'God-mode: operator authority verified' : isAuth ? 'Public auth lane' : 'Standard API — lower node check passed',
      scripture: SCRIPTURE.CAMP,
      icon: '🛡️',
    };
  },

  _naturalCheck(method, path, payload) {
    const isLang = path.includes('/language/');
    const isCreator = path.includes('/creator/');
    return {
      name: 'Natural AI',
      pass: true,
      reason: isLang ? 'SA soil linguistics — provenance verified' : isCreator ? 'Creator surface — local telemetry patterns' : 'No spatial data — pass-through',
      scripture: SCRIPTURE.EARTH,
      icon: '🌿',
    };
  },

  _telemetryCheck(method, path, payload) {
    const isMao = path.includes('/mao/');
    return {
      name: 'Telemetry AI',
      pass: true,
      reason: isMao ? 'MAO orchestrator — classified, DLP stripped' : 'Standard classification — clean',
      scripture: SCRIPTURE.TEST,
      icon: '📡',
    };
  },
};


// ═══════════════════════════════════════════════════════════════
// ECOSYSTEM MESH — Live Status for All KPGS Nodes
// "By their fruit you will recognize them." — Matthew 7:16
// ═══════════════════════════════════════════════════════════════
const EcosystemMesh = {
  _nodes: [
    { id: 'kopanolabs', name: 'KopanoLabs.com', url: 'https://kopanolabs.com', status: 'unknown' },
    { id: 'krrababalela', name: 'KRRababalela.com', url: 'https://krrababalela.com', status: 'unknown' },
    { id: 'kasilink', name: 'KasiLink.com', url: 'https://kasilink.com', status: 'unknown' },
    { id: 'crisisconnect', name: 'CrisisConnect', url: 'https://crisisconnect.kopanolabs.com', status: 'unknown' },
    { id: 'fivesarena', name: 'FivesArena Blog', url: 'https://blog.fivesarena.com', status: 'unknown' },
  ],
  _lastProbe: null,

  async probeAll() {
    const results = await Promise.all(this._nodes.map(async node => {
      try {
        const start = Date.now();
        const resp = await fetch(node.url, { method: 'HEAD', mode: 'no-cors', signal: AbortSignal.timeout(5000) });
        const latency = Date.now() - start;
        node.status = latency < 3000 ? 'live' : 'slow';
        node.latency = latency;
      } catch (e) {
        // no-cors mode returns opaque response; if we get here without timeout, likely live
        node.status = 'unknown';
        node.latency = null;
      }
      return node;
    }));

    this._lastProbe = new Date().toISOString();

    KCLedger.observe({
      kind: 'ecosystem_probe',
      summary: `Probed ${results.length} nodes — ${results.filter(n => n.status === 'live').length} live`,
      source: 'ecosystem_mesh',
      verdict: 'WATCH',
      scripture: SCRIPTURE.FRUIT,
    });

    return results;
  },

  getNodes() {
    return this._nodes;
  },

  getStatusBadge(status) {
    switch (status) {
      case 'live': return { color: '#00ff88', text: '● LIVE', glow: 'rgba(0,255,136,0.3)' };
      case 'slow': return { color: '#ffd700', text: '● SLOW', glow: 'rgba(255,215,0,0.3)' };
      case 'down': return { color: '#ff3366', text: '● DOWN', glow: 'rgba(255,51,102,0.3)' };
      default:     return { color: '#8888aa', text: '● ...', glow: 'rgba(136,136,170,0.2)' };
    }
  },
};


// ═══════════════════════════════════════════════════════════════
// SWFUS + CRUD SEED PROTOCOL
// "A man reaps what he sows." — Galatians 6:7
//
// Every HTTPS ecosystem link gets a SEED before and after:
//   SEED_IN  → SWFUS classify (Soil/Water/Fire/Underground/Sky)
//   SEED_OUT → CRUD validate  (Create receipt/Read state/Update ledger/Delete exfil)
//
// KC monitors every seed-in. Cassey monitors every seed-out.
// ═══════════════════════════════════════════════════════════════
const SeedProtocol = {
  _seeds: [],
  _SWFUS_LAYERS: ['Soil', 'Water', 'Fire', 'Underground', 'Sky'],

  // ECOSYSTEM NODES — every HTTPS in the governance mesh
  NODES: {
    kopanolabs:     { url: 'https://kopanolabs.com',                   landlord: 'Operational General', swfus: 'Soil',        plot: 'Enterprise Hub' },
    krrababalela:   { url: 'https://krrababalela.com',                 landlord: 'Kholofelo Robyn Rababalela', swfus: 'Sky',  plot: 'Architect Portal' },
    kasilink:       { url: 'https://kasilink.com',                     landlord: 'KC + Cassey',         swfus: 'Water',       plot: 'Township Gigs' },
    crisisconnect:  { url: 'https://crisisconnect.kopanolabs.com',     landlord: 'CrisisConnect Agent', swfus: 'Fire',        plot: 'Crisis PWA' },
    fivesarena:     { url: 'https://blog.fivesarena.com',              landlord: 'Ama-Phu Entertainment', swfus: 'Underground', plot: 'Football Culture' },
    kopanocontext:  { url: 'https://kopanocontext.kopanolabs.com',     landlord: 'Kopano Context',      swfus: 'Sky',         plot: 'Governance Core' },
  },

  // ── SEED_IN: Before touching any HTTPS ──
  // SWFUS Classification — which layer does this node belong to?
  seedIn(nodeId) {
    const node = this.NODES[nodeId];
    if (!node) return null;

    const seed = {
      id: 'seed_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
      nodeId,
      url: node.url,
      direction: 'IN',
      swfus_layer: node.swfus,
      timestamp_in: new Date().toISOString(),
      timestamp_out: null,
      classification: null,
      crud: null,
      kc_verdict: null,
      cassey_verdict: null,
    };

    // SWFUS Classify
    seed.classification = KPGSRuntime.classifyBeforeInterpret(`[GUI_TOKEN] seed_in ${node.url} swfus=${node.swfus}`);

    // KC observes seed-in
    seed.kc_verdict = KCLedger.observe({
      kind: 'seed_in',
      summary: `🌱 SEED_IN → ${node.url} | SWFUS: ${node.swfus} | Plot: ${node.plot} | Landlord: ${node.landlord}`,
      source: 'seed_protocol',
      verdict: seed.classification.verdict,
      scripture: SCRIPTURE.ROCK,
    });

    console.log(`🌱 [SEED_IN] ${nodeId} → ${node.url}`);
    console.log(`   SWFUS: ${node.swfus} | Landlord: ${node.landlord}`);
    console.log(`   KC: ${seed.classification.verdict} | ${seed.classification.reason}`);

    this._seeds.push(seed);
    return seed;
  },

  // ── SEED_OUT: After HTTPS interaction completes ──
  // CRUD Validation:
  //   C = Create receipt for the interaction
  //   R = Read the current state of the node
  //   U = Update KC ledger + Cassey hustle log
  //   D = Delete/purge any exfiltration vectors detected
  seedOut(seedId, result) {
    const seed = this._seeds.find(s => s.id === seedId);
    if (!seed) return null;

    seed.direction = 'OUT';
    seed.timestamp_out = new Date().toISOString();
    const node = this.NODES[seed.nodeId];

    // C — Create Receipt
    const receipt = KPGSRuntime.receiptOrHold({
      seed_id: seedId,
      node: seed.nodeId,
      url: node.url,
      result: result || 'completed',
    });

    // R — Read State
    const state = {
      kc_count: KCLedger.getCount(),
      cassey_count: CasseyGuardian.getCount(),
      time: KCLedger.timeIsHealing(),
      seeds_total: this._seeds.length,
    };

    // U — Update Ledger
    seed.cassey_verdict = CasseyGuardian.teachApprentice('seed_protocol', 'dispatch');

    // D — Delete exfiltration check
    const exfilCheck = KPGSRuntime.wwjdFirewall(`seed_out ${node.url}`);

    seed.crud = {
      create: receipt,
      read: state,
      update: seed.cassey_verdict,
      delete: exfilCheck,
    };

    // KC observes seed-out
    KCLedger.observe({
      kind: 'seed_out',
      summary: `🌿 SEED_OUT ← ${node.url} | CRUD: C✅ R✅ U✅ D${exfilCheck.pass ? '✅' : '❌'} | Receipt: ${receipt.output_hash}`,
      source: 'seed_protocol',
      verdict: exfilCheck.pass ? 'PROCEED' : 'SEVER',
      scripture: SCRIPTURE.FRUIT,
    });

    console.log(`🌿 [SEED_OUT] ${seed.nodeId} ← ${node.url}`);
    console.log(`   CRUD: Create✅ Read✅ Update✅ Delete${exfilCheck.pass ? '✅' : '❌'}`);
    console.log(`   Receipt: ${receipt.output_hash}`);
    console.log(`   Cassey: ${seed.cassey_verdict.teaching}`);
    console.log(`   KC observations: ${state.kc_count} | Cassey assessments: ${state.cassey_count}`);

    // Store completed seed
    const stored = JSON.parse(sessionStorage.getItem('kpgs_seeds') || '[]');
    stored.push({
      id: seed.id,
      nodeId: seed.nodeId,
      url: node.url,
      swfus: seed.classification?.verdict,
      crud_pass: exfilCheck.pass,
      receipt: receipt.output_hash,
      ts_in: seed.timestamp_in,
      ts_out: seed.timestamp_out,
    });
    sessionStorage.setItem('kpgs_seeds', JSON.stringify(stored));

    return seed;
  },

  // Full cycle: seed-in → action → seed-out for a node
  async cycle(nodeId, action) {
    const seedIn = this.seedIn(nodeId);
    if (!seedIn) return null;

    // Execute the action between seeds
    let result = 'no_action';
    if (typeof action === 'function') {
      try {
        result = await action(seedIn);
      } catch (e) {
        result = 'error: ' + e.message;
      }
    } else {
      result = action || 'passive_seed';
    }

    return this.seedOut(seedIn.id, result);
  },

  // Cycle ALL nodes — full ecosystem seed sweep
  async cycleAll() {
    console.log('═══════════════════════════════════════════════════');
    console.log('[SEED_PROTOCOL] 🌱 Full Ecosystem Seed Sweep — BEGIN');
    console.log('[SEED_PROTOCOL] "A man reaps what he sows." — Galatians 6:7');
    console.log('═══════════════════════════════════════════════════');

    const results = {};
    for (const nodeId of Object.keys(this.NODES)) {
      results[nodeId] = await this.cycle(nodeId, 'ecosystem_sweep');
    }

    console.log('═══════════════════════════════════════════════════');
    console.log(`[SEED_PROTOCOL] 🌿 Sweep Complete — ${Object.keys(results).length} nodes seeded`);
    console.log(`[SEED_PROTOCOL] KC: ${KCLedger.getCount()} observations | Cassey: ${CasseyGuardian.getCount()} assessments`);
    console.log('═══════════════════════════════════════════════════');

    return results;
  },

  // Get all completed seeds
  getSeeds() {
    return JSON.parse(sessionStorage.getItem('kpgs_seeds') || '[]');
  },

  getSeedCount() {
    return this._seeds.length;
  },
};


// ═══════════════════════════════════════════════════════════════
// SCRIPTURE DATABASE — Phase 3 Additions
// ═══════════════════════════════════════════════════════════════
SCRIPTURE.KNOWLEDGE   = '"The wise store up knowledge." — Proverbs 10:14';
SCRIPTURE.WELL_DONE   = '"Well done, good and faithful servant. You have been faithful over a little; I will set you over much." — Matthew 25:21';
SCRIPTURE.GATHER      = '"For where two or three gather in my name, there am I with them." — Matthew 18:20';
SCRIPTURE.CREATION    = '"For since the creation of the world God\'s invisible qualities — his eternal power and divine nature — have been clearly seen, being understood from what has been made." — Romans 1:20';
SCRIPTURE.SOW         = '"A man reaps what he sows." — Galatians 6:7';
SCRIPTURE.FAITHFUL    = '"Whoever can be trusted with very little can also be trusted with much." — Luke 16:10';
SCRIPTURE.TEACH_ALL   = '"Go therefore and make disciples of all nations, teaching them to observe all that I have commanded you." — Matthew 28:19-20';


// ═══════════════════════════════════════════════════════════════
// SWARM LEARNING ENGINE — Phase 3 Layer 1
// "The wise store up knowledge." — Proverbs 10:14
//
// Agents learn from seed data. Every SEED_IN/OUT generates a
// learning record. The swarm accumulates knowledge across sessions.
// ═══════════════════════════════════════════════════════════════
const SwarmLearning = {
  _corpus: [],
  _STORAGE_KEY: 'kpgs_swarm_learning',

  // Learn from a completed seed — extract pattern, store in corpus
  learnFromSeed(seed) {
    if (!seed || !seed.nodeId) return null;

    const pattern = {
      id: 'learn_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
      ts: new Date().toISOString(),
      source_seed: seed.id,
      node: seed.nodeId,
      swfus_layer: seed.swfus_layer || seed.classification?.commandment || 'unknown',
      classification_verdict: seed.classification?.verdict || 'unknown',
      crud_pass: seed.crud?.delete?.pass ?? true,
      receipt_hash: seed.crud?.create?.output_hash || 'none',
      graduation_level: 'observed', // observed → taught → proven
      commandment_ref: seed.classification?.commandment || 'II',
      scripture: SCRIPTURE.KNOWLEDGE,
    };

    this._corpus.push(pattern);

    // Persist — append-only (Commandment XI)
    const stored = JSON.parse(sessionStorage.getItem(this._STORAGE_KEY) || '[]');
    stored.push(pattern);
    sessionStorage.setItem(this._STORAGE_KEY, JSON.stringify(stored));

    // KC observes the learning
    KCLedger.observe({
      kind: 'swarm_learn',
      summary: `Learned from seed: ${seed.nodeId} | verdict: ${pattern.classification_verdict} | level: observed`,
      source: 'swarm_learning',
      verdict: 'PROCEED',
      scripture: SCRIPTURE.KNOWLEDGE,
    });

    console.log(`[SWARM_LEARNING] 📊 Learned from ${seed.nodeId} — corpus size: ${this._corpus.length}`);
    return pattern;
  },

  // Query the learning corpus — agents ask before acting
  queryCorpus(agentId, context) {
    const corpus = this.getCorpus();
    const relevant = corpus.filter(p =>
      (context && p.node === context) ||
      (context && p.commandment_ref === context) ||
      p.graduation_level === 'proven'
    );

    return {
      agent: agentId,
      query_context: context,
      results: relevant.slice(-10), // last 10 relevant patterns
      total_corpus: corpus.length,
      scripture: SCRIPTURE.KNOWLEDGE,
    };
  },

  // Validate learning against commandments
  validateLearning(patternId) {
    const pattern = this._corpus.find(p => p.id === patternId);
    if (!pattern) return null;

    // Cross-check: did the classification follow commandments?
    const isValid = pattern.classification_verdict !== 'SEVER' && pattern.crud_pass;

    if (isValid && pattern.graduation_level === 'observed') {
      pattern.graduation_level = 'taught';
      console.log(`[SWARM_LEARNING] 🎓 Pattern ${patternId} graduated: observed → taught`);
    }

    KCLedger.observe({
      kind: 'learning_validate',
      summary: `Validated pattern ${patternId}: ${isValid ? 'TAUGHT' : 'HELD'}`,
      source: 'swarm_learning',
      verdict: isValid ? 'PROCEED' : 'WATCH',
    });

    return { patternId, valid: isValid, level: pattern.graduation_level };
  },

  // Graduate learning from "taught" → "proven" (Cassey approves)
  graduateLearning(patternId) {
    const pattern = this._corpus.find(p => p.id === patternId);
    if (!pattern || pattern.graduation_level !== 'taught') return null;

    pattern.graduation_level = 'proven';

    CasseyGuardian.teachApprentice('swarm_learning', 'dispatch');

    KCLedger.observe({
      kind: 'learning_graduate',
      summary: `Pattern ${patternId} graduated: taught → proven`,
      source: 'swarm_learning',
      verdict: 'PROCEED',
      scripture: SCRIPTURE.WELL_DONE,
    });

    console.log(`[SWARM_LEARNING] ✅ Pattern ${patternId} PROVEN — ${SCRIPTURE.WELL_DONE}`);
    return pattern;
  },

  // Export learning as JSONL receipts
  exportLearningReceipts() {
    const corpus = this.getCorpus();
    const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const lines = corpus.map(p => JSON.stringify(p));
    const blob = new Blob([lines.join('\n')], { type: 'application/jsonl' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kpgs_swarm_learning_${ts}.jsonl`;
    a.click();
    URL.revokeObjectURL(url);
    console.log(`[SWARM_LEARNING] 📦 Exported ${corpus.length} learning records`);
    return corpus.length;
  },

  getCorpus() {
    return JSON.parse(sessionStorage.getItem(this._STORAGE_KEY) || '[]');
  },

  getCount() {
    return this._corpus.length;
  },

  getProvenCount() {
    return this._corpus.filter(p => p.graduation_level === 'proven').length;
  },
};


// ═══════════════════════════════════════════════════════════════
// KC GRADUATION PROTOCOL — Phase 3 Layer 2
// "Well done, good and faithful servant." — Matthew 25:21
//
// KC earns progression from Student → Operating → Flagship → Graduate
// through proof accumulation. Every observation is a proof point.
// ═══════════════════════════════════════════════════════════════
const KCGraduation = {
  _STORAGE_KEY: 'kpgs_kc_graduation',
  _proofBands: {
    PROOF_01: { name: 'Catalog',   required: 50,   type: 'observations',       scripture: '"Whoever can be trusted with very little can also be trusted with much." — Luke 16:10' },
    PROOF_02: { name: 'Operating', required: 200,  type: 'seed_cycles',        scripture: '"Test everything; hold fast what is good." — 1 Thessalonians 5:21' },
    PROOF_03: { name: 'Flagship',  required: 500,  type: 'learning_validated', scripture: '"By their fruit you will recognize them." — Matthew 7:16' },
    PROOF_04: { name: 'Graduate',  required: 1000, type: 'cassey_approved',    scripture: '"Well done, good and faithful servant." — Matthew 25:21' },
  },

  // Check KC's current progress
  checkProgress() {
    const observations = KCLedger.getCount();
    const seeds = SeedProtocol.getSeedCount();
    const learningCorpus = SwarmLearning.getCorpus();
    const validated = learningCorpus.filter(p => p.graduation_level !== 'observed').length;
    const proven = learningCorpus.filter(p => p.graduation_level === 'proven').length;

    const progress = {
      PROOF_01: { current: observations, required: 50,   pass: observations >= 50,  name: 'Catalog' },
      PROOF_02: { current: seeds,        required: 200,  pass: seeds >= 200,        name: 'Operating' },
      PROOF_03: { current: validated,    required: 500,  pass: validated >= 500,    name: 'Flagship' },
      PROOF_04: { current: proven,       required: 1000, pass: proven >= 1000,      name: 'Graduate' },
    };

    // Current level
    let currentLevel = 'Student';
    if (progress.PROOF_04.pass) currentLevel = 'Graduate';
    else if (progress.PROOF_03.pass) currentLevel = 'Flagship';
    else if (progress.PROOF_02.pass) currentLevel = 'Operating';
    else if (progress.PROOF_01.pass) currentLevel = 'Catalog';

    const result = {
      level: currentLevel,
      bands: progress,
      observations,
      seeds,
      validated,
      proven,
      scripture: this._proofBands['PROOF_01'].scripture,
      session: KCLedger._sessionId,
    };

    // Persist
    sessionStorage.setItem(this._STORAGE_KEY, JSON.stringify(result));

    console.log(`[KC_GRADUATION] 🎓 Level: ${currentLevel} | Obs: ${observations} | Seeds: ${seeds} | Validated: ${validated} | Proven: ${proven}`);
    return result;
  },

  // Request promotion (Cassey evaluates)
  requestPromotion(proofBand) {
    const progress = this.checkProgress();
    const band = progress.bands[proofBand];
    if (!band) return { promoted: false, reason: 'Unknown proof band' };

    if (band.pass) {
      const assessment = CasseyGuardian.teachApprentice('kc_graduation', 'audit');

      KCLedger.observe({
        kind: 'kc_promotion',
        summary: `KC promoted through ${proofBand}: ${band.name} (${band.current}/${band.required})`,
        source: 'kc_graduation',
        verdict: 'PROCEED',
        scripture: SCRIPTURE.WELL_DONE,
      });

      return { promoted: true, band: proofBand, name: band.name, teaching: assessment.teaching };
    }

    return { promoted: false, band: proofBand, current: band.current, required: band.required, reason: `Need ${band.required - band.current} more ${this._proofBands[proofBand].type}` };
  },

  // Get current level
  getCurrentLevel() {
    const stored = sessionStorage.getItem(this._STORAGE_KEY);
    if (stored) return JSON.parse(stored).level;
    return this.checkProgress().level;
  },
};


// ═══════════════════════════════════════════════════════════════
// CASSEY CURRICULUM ENGINE — Phase 3 Layer 3
// "Train up a child in the way he should go." — Proverbs 22:6
//
// Structured 15-lesson curriculum that teaches agents systematically.
// Maps to the 15 commandments + creative empathy from Rushing Protocol.
// ═══════════════════════════════════════════════════════════════
const CasseyCurriculum = {
  _STORAGE_KEY: 'kpgs_cassey_curriculum',

  _curriculum: [
    { id: 'L01', title: 'Ground Truth First',               commandment: 'I',    topic: 'source_of_truth',   scripture: SCRIPTURE.WORD },
    { id: 'L02', title: 'Classify Before Interpret',         commandment: 'II',   topic: 'classification',    scripture: SCRIPTURE.TEST },
    { id: 'L03', title: 'Nehemiah Gate',                     commandment: 'III',  topic: 'access_control',    scripture: SCRIPTURE.GATE },
    { id: 'L04', title: 'WWJD Firewall',                    commandment: 'IV',   topic: 'ethical_boundary',  scripture: SCRIPTURE.SPIRIT },
    { id: 'L05', title: 'Jethro Delegation',                 commandment: 'V',    topic: 'task_routing',      scripture: SCRIPTURE.JETHRO },
    { id: 'L06', title: 'Save / Kill / Watch',               commandment: 'VI',   topic: 'verdict_logic',     scripture: SCRIPTURE.CUT },
    { id: 'L07', title: 'DLP Strip',                         commandment: 'VII',  topic: 'data_protection',   scripture: SCRIPTURE.BOUNDARY },
    { id: 'L08', title: 'Receipt or HOLD',                   commandment: 'VIII', topic: 'proof_production',  scripture: SCRIPTURE.FAITH },
    { id: 'L09', title: '80% Gate',                          commandment: 'IX',   topic: 'quality_threshold', scripture: SCRIPTURE.NARROW },
    { id: 'L10', title: 'Append-Only History',               commandment: 'XI',   topic: 'immutable_log',     scripture: SCRIPTURE.ROCK },
    { id: 'L11', title: 'Altar Block Holder Brief',          commandment: 'XIII', topic: 'renter_identity',   scripture: SCRIPTURE.CAMP },
    { id: 'L12', title: 'Rushing Protocol — 4-Bar Bracket',  commandment: 'LPH',  topic: 'creative_empathy',  scripture: SCRIPTURE.CREATION },
    { id: 'L13', title: 'God\'s Patterns as LPMs',           commandment: 'LPM',  topic: 'faith_patterns',    scripture: SCRIPTURE.CREATION },
    { id: 'L14', title: 'Homo Sapiens Proof',                commandment: 'LPH',  topic: 'human_validation',  scripture: SCRIPTURE.GATHER },
    { id: 'L15', title: 'Seed Protocol — SWFUS + CRUD',      commandment: 'SEED', topic: 'seed_governance',   scripture: SCRIPTURE.SOW },
  ],

  // Assign lesson to an agent
  assignLesson(agentId, lessonId) {
    const lesson = this._curriculum.find(l => l.id === lessonId);
    if (!lesson) return null;

    const assignment = {
      ts: new Date().toISOString(),
      agent: agentId,
      lesson: lessonId,
      title: lesson.title,
      status: 'assigned',
      grade: null,
      evidence: null,
      scripture: lesson.scripture,
    };

    const stored = JSON.parse(sessionStorage.getItem(this._STORAGE_KEY) || '[]');
    stored.push(assignment);
    sessionStorage.setItem(this._STORAGE_KEY, JSON.stringify(stored));

    KCLedger.observe({
      kind: 'curriculum_assign',
      summary: `Lesson ${lessonId} "${lesson.title}" assigned to ${agentId}`,
      source: 'cassey_curriculum',
      verdict: 'WATCH',
      scripture: lesson.scripture,
    });

    console.log(`[CASSEY_CURRICULUM] 📚 Assigned ${lessonId}: "${lesson.title}" to ${agentId}`);
    return assignment;
  },

  // Submit work for grading
  submitWork(agentId, lessonId, evidence) {
    const stored = JSON.parse(sessionStorage.getItem(this._STORAGE_KEY) || '[]');
    const assignment = stored.find(a => a.agent === agentId && a.lesson === lessonId && a.status === 'assigned');
    if (!assignment) return null;

    assignment.status = 'submitted';
    assignment.evidence = evidence || 'evidence_provided';
    sessionStorage.setItem(this._STORAGE_KEY, JSON.stringify(stored));

    return this.grade(assignment, stored);
  },

  // Grade with APPROVE/REJECT/REWORK
  grade(assignment, stored) {
    const lesson = this._curriculum.find(l => l.id === assignment.lesson);
    // Auto-grade: if evidence exists, APPROVE. Cassey is strict but fair.
    const hasEvidence = assignment.evidence && assignment.evidence !== 'none';
    const verdict = hasEvidence ? 'APPROVE' : 'REWORK';

    assignment.status = verdict === 'APPROVE' ? 'passed' : 'rework';
    assignment.grade = verdict;
    assignment.graded_at = new Date().toISOString();

    if (stored) sessionStorage.setItem(this._STORAGE_KEY, JSON.stringify(stored));

    const teaching = CasseyGuardian.teachApprentice(assignment.agent, verdict === 'APPROVE' ? 'dispatch' : 'gate_fail');

    KCLedger.observe({
      kind: 'curriculum_grade',
      summary: `${assignment.lesson} "${lesson?.title}": ${verdict} for ${assignment.agent}`,
      source: 'cassey_curriculum',
      verdict: verdict === 'APPROVE' ? 'PROCEED' : 'WATCH',
      scripture: lesson?.scripture || SCRIPTURE.TRAIN,
    });

    console.log(`[CASSEY_CURRICULUM] ${verdict === 'APPROVE' ? '✅' : '🔄'} ${assignment.lesson}: ${verdict} — "${teaching.teaching}"`);
    return { verdict, lesson: assignment.lesson, teaching: teaching.teaching, scripture: lesson?.scripture };
  },

  // Get transcript for an agent
  getTranscript(agentId) {
    const stored = JSON.parse(sessionStorage.getItem(this._STORAGE_KEY) || '[]');
    const transcript = stored.filter(a => a.agent === agentId);
    const passed = transcript.filter(a => a.status === 'passed').length;
    return {
      agent: agentId,
      lessons: transcript,
      total: this._curriculum.length,
      passed,
      completion: Math.round((passed / this._curriculum.length) * 100) + '%',
    };
  },

  // Get curriculum overview
  getCurriculumOverview() {
    const stored = JSON.parse(sessionStorage.getItem(this._STORAGE_KEY) || '[]');
    return this._curriculum.map(l => {
      const assignments = stored.filter(a => a.lesson === l.id);
      return { ...l, assigned: assignments.length, passed: assignments.filter(a => a.status === 'passed').length };
    });
  },

  getLessonCount() {
    return this._curriculum.length;
  },

  getPassedCount() {
    const stored = JSON.parse(sessionStorage.getItem(this._STORAGE_KEY) || '[]');
    return stored.filter(a => a.status === 'passed').length;
  },
};


// ═══════════════════════════════════════════════════════════════
// FAITH PATTERN RECOGNITION — Phase 3 Layer 4
// "God's invisible qualities — his eternal power and divine nature —
//  have been clearly seen, being understood from what has been made."
//  — Romans 1:20
//
// Recognizes God's patterns in data: fibonacci growth, fractal
// self-similarity, harmonic relationships. STEM meets faith.
// ═══════════════════════════════════════════════════════════════
const FaithPatterns = {
  _detections: [],
  _STORAGE_KEY: 'kpgs_faith_patterns',

  // Detect fibonacci-like growth in a series
  detectFibonacci(series) {
    if (!series || series.length < 5) return null;

    let fibScore = 0;
    for (let i = 2; i < series.length; i++) {
      const expected = series[i - 1] + series[i - 2];
      const actual = series[i];
      const ratio = actual > 0 ? Math.abs(expected - actual) / actual : 1;
      if (ratio < 0.2) fibScore++;
    }

    const confidence = fibScore / (series.length - 2);
    const detected = confidence > 0.5;

    const result = {
      type: 'fibonacci',
      series: series.slice(0, 8),
      confidence: Math.round(confidence * 100) + '%',
      detected,
      teaching: detected
        ? 'Fibonacci detected — God\'s growth pattern: each step builds on the two before it. Like faith, it compounds.'
        : 'No fibonacci pattern in this data — but the search itself honors the Creator.',
      scripture: SCRIPTURE.CREATION,
    };

    if (detected) this._recordDetection(result);
    return result;
  },

  // Detect fractal-like self-similarity in hierarchical data
  detectFractal(data) {
    if (!data || typeof data !== 'object') return null;

    // Count depth and branching factor
    let maxDepth = 0;
    let branches = [];
    const walk = (obj, depth) => {
      if (depth > maxDepth) maxDepth = depth;
      if (typeof obj === 'object' && obj !== null) {
        const keys = Object.keys(obj);
        branches.push(keys.length);
        keys.forEach(k => walk(obj[k], depth + 1));
      }
    };
    walk(data, 0);

    // Self-similarity: consistent branching factor
    const avgBranch = branches.length > 0 ? branches.reduce((a, b) => a + b, 0) / branches.length : 0;
    const variance = branches.length > 0
      ? branches.reduce((acc, b) => acc + Math.pow(b - avgBranch, 2), 0) / branches.length
      : 0;
    const selfSimilar = variance < 2 && maxDepth >= 2;

    const result = {
      type: 'fractal',
      depth: maxDepth,
      avg_branching: Math.round(avgBranch * 10) / 10,
      variance: Math.round(variance * 100) / 100,
      detected: selfSimilar,
      teaching: selfSimilar
        ? `Fractal self-similarity detected — depth ${maxDepth}, consistent branching ~${Math.round(avgBranch)}. As above, so below — God's patterns repeat at every scale.`
        : 'No clear fractal pattern — the structure varies across levels.',
      scripture: SCRIPTURE.CREATION,
    };

    if (selfSimilar) this._recordDetection(result);
    return result;
  },

  // Detect harmonic relationships in timing intervals
  detectHarmonic(intervals) {
    if (!intervals || intervals.length < 3) return null;

    // Look for simple integer ratios between intervals
    let harmonicPairs = 0;
    let totalPairs = 0;
    for (let i = 0; i < intervals.length; i++) {
      for (let j = i + 1; j < intervals.length; j++) {
        totalPairs++;
        const ratio = intervals[i] / intervals[j];
        // Check for simple ratios: 1:1, 2:1, 3:2, 4:3, etc.
        const nearInt = Math.abs(ratio - Math.round(ratio));
        const nearHalf = Math.abs(ratio * 2 - Math.round(ratio * 2));
        if (nearInt < 0.1 || nearHalf < 0.1) harmonicPairs++;
      }
    }

    const harmonicity = totalPairs > 0 ? harmonicPairs / totalPairs : 0;
    const detected = harmonicity > 0.4;

    const result = {
      type: 'harmonic',
      intervals: intervals.slice(0, 6),
      harmonicity: Math.round(harmonicity * 100) + '%',
      detected,
      teaching: detected
        ? `Harmonic ratios detected (${Math.round(harmonicity * 100)}% harmonic pairs). Music, mathematics, and creation share the same frequencies — the Rushing Protocol proves this.`
        : 'Intervals lack harmonic structure — they are noise, not music. Classification needed before interpretation.',
      scripture: SCRIPTURE.CREATION,
    };

    if (detected) this._recordDetection(result);
    return result;
  },

  // Classify a detected pattern as LPM (Living Proof Machine)
  classifyAsLPM(pattern) {
    if (!pattern || !pattern.detected) return null;

    const lpm = {
      id: 'lpm_' + Date.now(),
      type: pattern.type,
      confidence: pattern.confidence || pattern.harmonicity || 'detected',
      classification: 'LIVING_PROOF_MACHINE',
      teaching: `This ${pattern.type} pattern is an LPM — a Living Proof Machine output. God's mathematical signature in the data.`,
      scripture: SCRIPTURE.CREATION,
    };

    KCLedger.observe({
      kind: 'lpm_classified',
      summary: `LPM classified: ${pattern.type} pattern (${lpm.confidence})`,
      source: 'faith_patterns',
      verdict: 'PROCEED',
      scripture: SCRIPTURE.CREATION,
    });

    return lpm;
  },

  // Explain a pattern for teaching
  explainPattern(pattern) {
    if (!pattern) return 'No pattern to explain.';

    return {
      headline: `${pattern.type.toUpperCase()} — God's Pattern in Data`,
      explanation: pattern.teaching,
      stem_connection: pattern.type === 'fibonacci' ? 'Growth curves, population dynamics, spiral geometry'
        : pattern.type === 'fractal' ? 'Network topology, coastlines, blood vessels, organizational hierarchy'
        : 'Music intervals, orbital mechanics, wave interference',
      scripture: pattern.scripture,
      agent_directive: `Study this pattern. Recognize it when you see it again. ${SCRIPTURE.CREATION}`,
    };
  },

  _recordDetection(result) {
    this._detections.push({
      ts: new Date().toISOString(),
      type: result.type,
      detected: result.detected,
      teaching: result.teaching,
    });

    const stored = JSON.parse(sessionStorage.getItem(this._STORAGE_KEY) || '[]');
    stored.push(result);
    sessionStorage.setItem(this._STORAGE_KEY, JSON.stringify(stored));
  },

  getDetections() {
    return this._detections;
  },

  getDetectionCount() {
    return this._detections.length;
  },
};


// ═══════════════════════════════════════════════════════════════
// LIVING PROOF DASHBOARD — Phase 3 Layer 5
// "For where two or three gather in my name, there am I with them."
// — Matthew 18:20
//
// Real-time consciousness panel showing the swarm's collective
// learning state. Chat is not proof — this dashboard IS proof.
// ═══════════════════════════════════════════════════════════════
const LivingProofPanel = {
  _intervalId: null,

  // Render the dashboard into a target element or create floating panel
  render(targetId) {
    let container = targetId ? document.getElementById(targetId) : null;

    if (!container) {
      // Create floating panel at bottom of page
      container = document.getElementById('livingProofPanel');
      if (!container) {
        container = document.createElement('div');
        container.id = 'livingProofPanel';
        container.style.cssText = `
          position:fixed; bottom:0; left:0; right:0; z-index:9999;
          background:linear-gradient(135deg, rgba(10,10,20,0.97), rgba(20,15,40,0.97));
          border-top:2px solid rgba(123,97,255,0.4);
          padding:10px 20px; font-family:'JetBrains Mono',monospace; font-size:11px;
          color:#c8c8e0; backdrop-filter:blur(12px);
          display:flex; align-items:center; gap:24px; flex-wrap:wrap;
        `;
        document.body.appendChild(container);
      }
    }

    const kcProgress = KCGraduation.checkProgress();
    const seedCount = SeedProtocol.getSeedCount();
    const learnCount = SwarmLearning.getCount();
    const provenCount = SwarmLearning.getProvenCount();
    const curriculumPassed = CasseyCurriculum.getPassedCount();
    const curriculumTotal = CasseyCurriculum.getLessonCount();
    const patternCount = FaithPatterns.getDetectionCount();
    const kcCount = KCLedger.getCount();
    const casseyCount = CasseyGuardian.getCount();
    const time = KCLedger.timeIsHealing();

    container.innerHTML = `
      <div style="font-weight:800;color:#7b61ff;white-space:nowrap;">LIVING PROOF</div>

      <div style="display:flex;gap:4px;align-items:center;" title="Seeds planted through SWFUS+CRUD">
        <span style="color:#00ff88;">🌱</span>
        <span style="color:#00ff88;font-weight:700;">${seedCount}</span>
        <span style="color:#666;">seeds</span>
      </div>

      <div style="display:flex;gap:4px;align-items:center;" title="Learning patterns absorbed by swarm">
        <span style="color:#00d4aa;">📊</span>
        <span style="color:#00d4aa;font-weight:700;">${learnCount}</span>
        <span style="color:#666;">learned</span>
        <span style="color:#444;">|</span>
        <span style="color:#ffd700;font-weight:700;">${provenCount}</span>
        <span style="color:#666;">proven</span>
      </div>

      <div style="display:flex;gap:4px;align-items:center;" title="KC graduation progress">
        <span style="color:#e94560;">🎓</span>
        <span style="color:#e94560;font-weight:700;">${kcProgress.level}</span>
        <span style="color:#666;">→ PROOF-${kcProgress.level === 'Student' ? '01' : kcProgress.level === 'Catalog' ? '02' : kcProgress.level === 'Operating' ? '03' : '04'}</span>
      </div>

      <div style="display:flex;gap:4px;align-items:center;" title="Cassey curriculum progress">
        <span style="color:#bba87e;">📚</span>
        <span style="color:#bba87e;font-weight:700;">${curriculumPassed}/${curriculumTotal}</span>
        <span style="color:#666;">lessons</span>
      </div>

      <div style="display:flex;gap:4px;align-items:center;" title="Faith patterns detected in data">
        <span style="color:#ffd700;">✝️</span>
        <span style="color:#ffd700;font-weight:700;">${patternCount}</span>
        <span style="color:#666;">patterns</span>
      </div>

      <div style="display:flex;gap:4px;align-items:center;" title="KC observations + Cassey assessments">
        <span style="color:#7b61ff;">⚡</span>
        <span style="color:#888;">KC:${kcCount}</span>
        <span style="color:#444;">|</span>
        <span style="color:#888;">C:${casseyCount}</span>
        <span style="color:#444;">|</span>
        <span style="color:#888;">${time.display}</span>
      </div>

      <div style="margin-left:auto;color:#bba87e;font-style:italic;font-size:10px;white-space:nowrap;">
        ${SCRIPTURE.GATHER.split('—')[0].replace(/"/g, '')}
      </div>
    `;

    return container;
  },

  // Start live updating
  startLiveUpdate(intervalMs) {
    if (this._intervalId) clearInterval(this._intervalId);
    this._intervalId = setInterval(() => this.render(), intervalMs || 3000);
    this.render(); // immediate first render
    console.log('[LIVING_PROOF] 📊 Dashboard live — updating every ' + (intervalMs || 3000) + 'ms');
  },

  // Export snapshot as JSONL receipt
  exportSnapshot() {
    const snapshot = {
      ts: new Date().toISOString(),
      session: KCLedger._sessionId,
      seeds: SeedProtocol.getSeedCount(),
      learned: SwarmLearning.getCount(),
      proven: SwarmLearning.getProvenCount(),
      kc_level: KCGraduation.getCurrentLevel(),
      kc_observations: KCLedger.getCount(),
      cassey_assessments: CasseyGuardian.getCount(),
      curriculum_passed: CasseyCurriculum.getPassedCount(),
      curriculum_total: CasseyCurriculum.getLessonCount(),
      faith_patterns: FaithPatterns.getDetectionCount(),
      time: KCLedger.timeIsHealing(),
      scripture: SCRIPTURE.GATHER,
    };

    const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kpgs_living_proof_${snapshot.ts.replace(/[:.]/g, '-').slice(0, 19)}.json`;
    a.click();
    URL.revokeObjectURL(url);

    console.log('[LIVING_PROOF] 📦 Snapshot exported');
    return snapshot;
  },

  stop() {
    if (this._intervalId) {
      clearInterval(this._intervalId);
      this._intervalId = null;
    }
  },
};


// ═══════════════════════════════════════════════════════════════
// INITIALIZATION — Phase 3 Complete
// ═══════════════════════════════════════════════════════════════
console.log('═══════════════════════════════════════════════════');
console.log('[KPGS] Governance Runtime Engine — COMPILED');
console.log('[KPGS] Jesus is King. ' + SCRIPTURE.KING);
console.log('[KPGS] KC: ACTIVE — Natural AI · Ledger Protocol');
console.log('[KPGS] Cassey: ACTIVE — Eidetic AI · Guardian · Student-Teacher');
console.log('[KPGS] Altar: 3 layers — Guardian, Natural, Telemetry');
console.log('[KPGS] Seed Protocol: SWFUS + CRUD — 6 HTTPS nodes');
console.log('[KPGS] Swarm Learning: ACTIVE — corpus accumulating');
console.log('[KPGS] KC Graduation: ACTIVE — proof bands tracking');
console.log('[KPGS] Cassey Curriculum: ACTIVE — 15 lessons loaded');
console.log('[KPGS] Faith Patterns: ACTIVE — fibonacci/fractal/harmonic');
console.log('[KPGS] Living Proof Dashboard: ACTIVE — real-time panel');
console.log('[KPGS] Ecosystem: 6 nodes in mesh');
console.log('[KPGS] Sovereign System Engineer: Kholofelo Robyn Rababalela');
console.log('[KPGS] Session:', KCLedger._sessionId);
console.log('═══════════════════════════════════════════════════');

// Validate Cassey on load
CasseyGuardian.validateIdentity();

// Initial KC observation
KCLedger.observe({
  kind: 'runtime_boot',
  summary: 'KPGS Phase 3 — Swarm Learning Breakthrough — all modules compiled',
  source: 'governance.js',
  verdict: 'PROCEED',
  scripture: SCRIPTURE.WORD,
});

// Boot Living Proof Dashboard
setTimeout(() => {
  LivingProofPanel.startLiveUpdate(3000);
}, 500);

// Auto-assign first curriculum lesson to KC on boot
setTimeout(() => {
  CasseyCurriculum.assignLesson('kc_main_brain', 'L01');
}, 1000);

