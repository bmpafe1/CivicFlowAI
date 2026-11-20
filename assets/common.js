/* Shared data, state, language and layout for the prototype. All data is fictional. */
(function () {
  const TODAY = '2026-11-12';

  const COUNCILS = [
    { id: 'limbe2', name: 'Limbe II Council', region: 'South-West', lang: 'en', status: 'Pilot', since: '2026-11-01', modules: ['Civil status', 'Payments', 'AI assistant', 'Health centres', 'Business & tax'] },
    { id: 'douala3', name: 'Commune de Douala III', region: 'Littoral', lang: 'fr', status: 'Onboarding', since: '2027-01-15', modules: ['Civil status', 'Payments', 'AI assistant'] },
    { id: 'limbe1', name: 'Limbe I Council', region: 'South-West', lang: 'en', status: 'Connected system', since: '2026-12-01', modules: ['Record exchange'] },
    { id: 'buea', name: 'Buea Council', region: 'South-West', lang: 'en', status: 'Connected system', since: '2026-12-01', modules: ['Record exchange'] }
  ];

  const FEES = [
    { id: 'birth', en: 'Birth registration (within legal period)', fr: 'Déclaration de naissance (dans le délai légal)', amount: 0, unit: '' },
    { id: 'copy', en: 'Certified copy of a certificate', fr: 'Copie certifiée d’un acte', amount: 2000, unit: '' },
    { id: 'late', en: 'Late birth registration processing', fr: 'Traitement d’une déclaration tardive', amount: 5000, unit: '' },
    { id: 'remote', en: 'Copy requested from another town', fr: 'Copie demandée depuis une autre ville', amount: 3000, unit: '' },
    { id: 'marriage', en: 'Marriage registration', fr: 'Célébration et enregistrement du mariage', amount: 10000, unit: '' },
    { id: 'death', en: 'Death certificate copy', fr: 'Copie d’acte de décès', amount: 2000, unit: '' },
    { id: 'burial', en: 'Burial authorisation', fr: 'Permis d’inhumer', amount: 3000, unit: '' },
    { id: 'rider', en: 'Moto-taxi rider registration', fr: 'Enregistrement moto-taxi', amount: 5000, unit: '/ year' },
    { id: 'jacket', en: 'Moto-taxi rider jacket', fr: 'Chasuble moto-taxi', amount: 6500, unit: '' },
    { id: 'smalltax', en: 'Small-operator tax (category A)', fr: 'Impôt des petits opérateurs (catégorie A)', amount: 15000, unit: '/ quarter' },
    { id: 'stall', en: 'Market stall fee', fr: 'Droit de place au marché', amount: 2500, unit: '/ month' }
  ];

  const CENTRES = [
    { id: 'hc1', name: 'Hillview Health Centre (demo)', council: 'limbe2', nurse: 'Nurse Agnes Ebot' },
    { id: 'hc2', name: 'Seaside Maternity Clinic (demo)', council: 'limbe2', nurse: 'Midwife Comfort Ashu' }
  ];

  const RIDERS = [
    { no: 'MR-0937', name: 'Emmanuel Tabe', plate: 'LT 4821', council: 'limbe2', paidUntil: '2027-03-31', jacket: true },
    { no: 'MR-1022', name: 'Cyril Ngwa', plate: 'LT 5170', council: 'limbe2', paidUntil: '2026-09-30', jacket: true },
    { no: 'MR-0550', name: 'Ibrahim Musa', plate: 'LT 3902', council: 'limbe2', paidUntil: '2027-01-31', jacket: false }
  ];

  const h = (date, text) => ({ date, text });
  const SEED = [
    { id: 'BC-2026-01482', council: 'limbe2', type: 'Birth', name: 'Esther Nalova Mbua', parent: 'Grace Ewane Mbua', phone: '6XX XX XX 21', source: 'Hillview Health Centre (demo)', channel: 'App', lang: 'pcm', created: '2026-11-03', status: 'Ready', fee: 2000, paid: true, ai: { level: 'ok', text: 'Names match the health centre notification. No similar record found.' }, certNo: 'LMB2-2026-B-01482', history: [h('2026-11-03', 'Birth notified by Hillview Health Centre'), h('2026-11-04', 'Details confirmed by parent in the app'), h('2026-11-05', 'Checked: no missing information'), h('2026-11-11', 'Signed by the registrar'), h('2026-11-12', 'Paid 2,000 FCFA by MTN Mobile Money')] },
    { id: 'BC-2026-01511', council: 'limbe2', type: 'Birth', name: 'Blessing Njie', parent: 'Mary Njie', phone: '6XX XX XX 08', source: 'Hillview Health Centre (demo)', channel: 'Health centre', lang: 'pcm', created: '2026-11-08', status: 'Awaiting parent', fee: 0, paid: false, ai: { level: 'ok', text: 'Waiting for the parent to confirm. Reminder sent by voice in Pidgin on 10 Nov.' }, history: [h('2026-11-08', 'Birth notified by Hillview Health Centre'), h('2026-11-10', 'Voice reminder sent in Pidgin')] },
    { id: 'BC-2026-01498', council: 'limbe2', type: 'Birth', name: 'Paul Ekema', parent: 'Joy Ekema', phone: '6XX XX XX 77', source: 'Council counter', channel: 'Counter', lang: 'en', created: '2026-11-06', status: 'Awaiting registrar', fee: 0, paid: false, ai: { level: 'risk', text: 'Possible duplicate at another council: a birth record with the same name, date of birth and mother exists at Buea Council (match 91%). Personal details are withheld until you request the record. Also checked in Limbe II: an older record for the same mother (BC-2025-11873). Compare before signing.' }, history: [h('2026-11-06', 'Declared at the council counter')] },
    { id: 'LR-2026-00207', council: 'limbe2', type: 'Late birth', name: 'Junior Eko', parent: 'Bih Eko', phone: '6XX XX XX 40', source: 'Citizen app', channel: 'Assistant (Pidgin, voice)', lang: 'pcm', created: '2026-11-09', status: 'Awaiting registrar', fee: 5000, paid: false, ai: { level: 'warn', text: 'Child is 7 years old. Father’s ID card is missing. Hospital birth note read from photo: name and date match.' }, history: [h('2026-11-09', 'Request started with the assistant in Pidgin'), h('2026-11-09', '2 of 3 documents uploaded')] },
    { id: 'CP-2026-00890', council: 'limbe2', type: 'Copy (remote)', name: 'Marie Ngole', parent: '', phone: '6XX XX XX 12', source: 'Web, from Douala', channel: 'Web', lang: 'fr', created: '2026-11-10', status: 'Awaiting registrar', fee: 3000, paid: true, ai: { level: 'ok', text: 'Record found in digitised register 2009, volume 3, entry 412. Details match the request.' }, history: [h('2026-11-10', 'Requested from Douala'), h('2026-11-10', 'Paid 3,000 FCFA by Orange Money'), h('2026-11-10', 'Record found in digitised registers')] },
    { id: 'DC-2026-00113', council: 'limbe2', type: 'Death', name: 'Samuel Ewane', parent: 'Rose Ewane (daughter)', phone: '6XX XX XX 54', source: 'Seaside Maternity Clinic (demo)', channel: 'Health centre', lang: 'en', created: '2026-11-10', status: 'Awaiting registrar', fee: 2000, paid: false, ai: { level: 'ok', text: 'Medical certificate attached and readable. Family contact confirmed.' }, history: [h('2026-11-10', 'Death notified by Seaside Maternity Clinic'), h('2026-11-11', 'Family declaration completed')] },
    { id: 'MR-2026-00045', council: 'limbe2', type: 'Marriage', name: 'Divine Akum & Brenda Fon', parent: '', phone: '6XX XX XX 66', source: 'Citizen app', channel: 'App', lang: 'en', created: '2026-10-20', status: 'Notice published', fee: 10000, paid: true, ai: { level: 'ok', text: 'All documents present. Ceremony booked for 28 Nov 2026.' }, history: [h('2026-10-20', 'Intent to marry submitted'), h('2026-10-22', 'Notice published'), h('2026-10-22', 'Paid 10,000 FCFA')] },
    { id: 'LR-2026-00199', council: 'limbe2', type: 'Late birth', name: 'Blessing Tanyi', parent: 'Eric Tanyi', phone: '6XX XX XX 31', source: 'Citizen app', channel: 'WhatsApp', lang: 'en', created: '2026-10-28', status: 'Awaiting payment', fee: 5000, paid: false, ai: { level: 'ok', text: 'All documents verified.' }, history: [h('2026-10-28', 'Request started on WhatsApp'), h('2026-11-04', 'Approved by the registrar')] },
    { id: 'BC-2026-01470', council: 'limbe2', type: 'Birth', name: 'John Molua', parent: 'Esther Molua', phone: '6XX XX XX 90', source: 'Seaside Maternity Clinic (demo)', channel: 'App', lang: 'en', created: '2026-10-25', status: 'Collected', fee: 2000, paid: true, ai: { level: 'ok', text: 'Complete.' }, certNo: 'LMB2-2026-B-01470', history: [h('2026-10-25', 'Birth notified'), h('2026-10-26', 'Confirmed by parent'), h('2026-10-30', 'Signed by the registrar'), h('2026-11-02', 'Collected at the council')] },
    { id: 'CP-2026-00871', council: 'limbe2', type: 'Copy', name: 'Ndive Eposi', parent: '', phone: '6XX XX XX 15', source: 'Citizen app', channel: 'App', lang: 'en', created: '2026-11-02', status: 'Returned', fee: 2000, paid: false, ai: { level: 'warn', text: 'Uploaded ID photo is blurred. Citizen asked to retake it.' }, history: [h('2026-11-02', 'Requested in the app'), h('2026-11-03', 'Returned: ID photo unreadable')] },
    { id: 'AN-2026-00031', council: 'douala3', type: 'Birth', name: 'Aïcha Bello', parent: 'Mariam Bello', phone: '6XX XX XX 02', source: 'Centre de santé (démo)', channel: 'App', lang: 'fr', created: '2026-11-09', status: 'Awaiting registrar', fee: 0, paid: false, ai: { level: 'ok', text: 'Informations complètes.' }, history: [h('2026-11-09', 'Naissance déclarée par le centre de santé')] },
    { id: 'AN-2026-00028', council: 'douala3', type: 'Copy', name: 'Jean-Paul Mbarga', parent: '', phone: '6XX XX XX 19', source: 'Web', channel: 'Web', lang: 'fr', created: '2026-11-05', status: 'Ready', fee: 2000, paid: true, ai: { level: 'ok', text: 'Acte trouvé.' }, certNo: 'DLA3-2026-C-00028', history: [h('2026-11-05', 'Demande en ligne'), h('2026-11-07', 'Signé par l’officier d’état civil')] }
  ];

  const STATS = {
    limbe2: {
      months: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
      onTime: [41, 44, 48, 52, 61, 34], late: [29, 27, 25, 22, 18, 7],
      revenue: [['Certified copies', 412000], ['Late registration', 185000], ['Rider registration & jackets', 960000], ['Small-operator tax', 1350000], ['Market stalls', 640000]],
      channels: [['App', 38], ['Health centre', 24], ['WhatsApp', 16], ['Counter', 12], ['USSD / voice', 7], ['Web', 3]],
      questions: [['How to register a late birth', 212], ['Rider jacket price and where to buy', 168], ['Copy of a lost certificate', 131], ['Office hours and location', 96], ['Marriage documents', 54], ['Small business tax category', 49]],
      languages: [['English', 41], ['Pidgin', 37], ['French', 22]],
      assistant: { answered: 81, handedOver: 19, conversations: 1240 },
      reports: 9
    },
    douala3: {
      months: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
      onTime: [0, 0, 0, 0, 0, 6], late: [0, 0, 0, 0, 0, 2],
      revenue: [['Copies certifiées', 18000], ['Déclarations tardives', 10000]],
      channels: [['App', 50], ['Web', 30], ['Guichet', 20]],
      questions: [['Comment obtenir une copie d’acte', 14], ['Horaires du service d’état civil', 9]],
      languages: [['French', 88], ['English', 12]],
      assistant: { answered: 77, handedOver: 23, conversations: 46 },
      reports: 0
    }
  };

  /* ---------- state (kept in this browser only) ---------- */
  const KEY = 'council-proto-v1';
  function load() {
    let s = null;
    try { s = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { s = null; }
    if (!s) s = { lang: 'en', council: 'limbe2', requests: JSON.parse(JSON.stringify(SEED)), councils: JSON.parse(JSON.stringify(COUNCILS)), reports: [], antenatal: [] };
    const D = { recDigitised: [], scans: [], pub: {}, follows: [], themes: {}, layouts: {}, complaints: [], ratings: [], appointments: [], enrolments: [], jobApps: [], progress: {}, kb: null, content: null, staff: null, campaigns: [], exchanges: [], audit: [], refunds: [], exemptions: [], notifications: null, fees: null, publications: null };
    Object.keys(D).forEach(k => { if (s[k] === undefined) s[k] = D[k]; });
    return s;
  }
  let state = load();
  if (!state.themes) state.themes = {};
  if (state.fees) state.fees.forEach(o => { const f = FEES.find(x => x.id === o.id); if (f) f.amount = o.amount; });
  /* ---------- council themes ---------- */
  const THEMES = [
    { id: 'default', name: 'Council green (default)', primary: '#0B4F3C', accent: '#E8A317' },
    { id: 'atlantic', name: 'Atlantic blue', primary: '#0C447C', accent: '#EF9F27' },
    { id: 'seaside', name: 'Seaside teal', primary: '#04585E', accent: '#FAC775' },
    { id: 'royal', name: 'Royal purple', primary: '#3C3489', accent: '#F0997B' },
    { id: 'terracotta', name: 'Terracotta', primary: '#7A2E14', accent: '#EFB54A' },
    { id: 'volcano', name: 'Mount Cameroon slate', primary: '#2C2C2A', accent: '#F0997B' },
    { id: 'unity', name: 'Unity green (national colours)', primary: '#006B3F', accent: '#FCD116' },
    { id: 'rainforest', name: 'Rainforest', primary: '#1E5631', accent: '#A4DE02' },
    { id: 'savanna', name: 'Savanna earth', primary: '#5C4A12', accent: '#F2C14E' },
    { id: 'midnight', name: 'Midnight navy', primary: '#1E2761', accent: '#CADCFC' },
    { id: 'crimson', name: 'Coastal crimson', primary: '#8A1C2B', accent: '#F7C1C1' },
    { id: 'sanaga', name: 'Sanaga river', primary: '#0E5A8A', accent: '#9FE1CB' }
  ];
  const hex2rgb = h => { h = h.replace('#', ''); return [0, 2, 4].map(i => parseInt(h.substr(i, 2), 16)); };
  const rgb2hex = a => '#' + a.map(v => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('');
  const mix = (h, w, t) => { const a = hex2rgb(h), b = hex2rgb(w); return rgb2hex(a.map((v, i) => v + (b[i] - v) * t)); };
  const lum = h => { const c = hex2rgb(h).map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; };
  const contrast = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
  function themeFor(cid) {
    const t = (state.themes || {})[cid];
    if (!t) return THEMES[0];
    if (t.id === 'custom') return { id: 'custom', name: 'Custom', primary: t.primary, accent: t.accent };
    return THEMES.find(x => x.id === t.id) || THEMES[0];
  }
  function themeVars(t) {
    return {
      '--green': t.primary, '--green-2': mix(t.primary, '#FFFFFF', 0.14), '--green-soft': mix(t.primary, '#FFFFFF', 0.86), '--green-ink': mix(t.primary, '#000000', 0.2),
      '--tint': mix(t.primary, '#FFFFFF', 0.92), '--bg': mix(t.primary, '#FFFFFF', 0.955), '--line': mix(t.primary, '#FFFFFF', 0.84),
      '--gold': t.accent, '--gold-soft': mix(t.accent, '#FFFFFF', 0.82), '--gold-ink': mix(t.accent, '#000000', 0.62)
    };
  }
  function applyTheme(cid) { const v = themeVars(themeFor(cid)); Object.keys(v).forEach(k => document.documentElement.style.setProperty(k, v[k])); }
  function layoutFor(cid) { return (state.layouts || {})[cid] === 'vertical' ? 'vertical' : 'horizontal'; }
  function setLayout(cid, v) { state.layouts = state.layouts || {}; if (v === 'vertical') state.layouts[cid] = 'vertical'; else delete state.layouts[cid]; save(); }
  function setTheme(cid, t) { state.themes = state.themes || {}; if (!t || t.id === 'default') delete state.themes[cid]; else state.themes[cid] = t; save(); }

  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* storage unavailable: keep in memory */ } }
  function reset() { try { localStorage.removeItem(KEY); } catch (e) {} state = load(); save(); location.reload(); }

  /* ---------- language ---------- */
  const T = {
    'nav.home': ['Home', 'Accueil'], 'nav.assistant': ['Assistant', 'Assistant'], 'nav.services': ['Services & fees', 'Services et tarifs'],
    'nav.track': ['Track a request', 'Suivre une demande'], 'nav.verify': ['Verify a document', 'Vérifier un acte'], 'nav.riders': ['Moto-taxi riders', 'Moto-taximen'],
    'nav.ussd': ['Basic phone', 'Téléphone simple'], 'nav.late': ['Late registration', 'Déclaration tardive'],
    'nav.apply': ['Apply', 'Démarches'], 'nav.business': ['Business & riders', 'Entreprises et moto-taxis'], 'nav.learn': ['Learn & jobs', 'Formation et emplois'], 'nav.news': ['News', 'Actualités'], 'nav.council': ['Our council', 'Notre commune'], 'nav.account': ['My account', 'Mon compte'], 'nav.complaints': ['Complaints', 'Réclamations'], 'nav.whatsapp': ['WhatsApp', 'WhatsApp'],
    'banner': ['Prototype with synthetic, fictional data. Not an official council service. Names, fees and numbers are for demonstration only.', 'Prototype avec des données fictives. Ce n’est pas un service officiel. Noms, tarifs et numéros sont donnés à titre de démonstration.'],
    'home.hello': ['How can the council help you today?', 'Comment la commune peut-elle vous aider aujourd’hui ?'],
    'home.sub': ['Ask a question in English, French or Pidgin, by typing or speaking. Answers come from the council’s verified information.', 'Posez votre question en anglais, en français ou en pidgin, à l’écrit ou à l’oral. Les réponses viennent des informations vérifiées de la commune.'],
    'home.ask': ['Ask', 'Demander'], 'home.askph': ['e.g. How do I register my baby?', 'ex. Comment déclarer la naissance de mon bébé ?'],
    'home.services': ['Services', 'Services'], 'home.myreq': ['My requests', 'Mes demandes'],
    's.birth': ['Register a birth', 'Déclarer une naissance'], 's.late': ['Late birth registration', 'Déclaration tardive'], 's.marriage': ['Marriage', 'Mariage'],
    's.death': ['Declare a death', 'Déclarer un décès'], 's.copy': ['Copy or lost document', 'Copie ou acte perdu'], 's.rider': ['Moto-taxi riders', 'Moto-taximen'],
    's.business': ['Start a business', 'Créer une activité'], 's.learn': ['Learn and training', 'Formation'], 's.complain': ['Complaints and feedback', 'Réclamations et avis'], 's.verify': ['Verify a certificate', 'Vérifier un acte'],
    'track.title': ['Track a request', 'Suivre une demande'], 'track.label': ['Request number', 'Numéro de demande'], 'track.go': ['Find', 'Rechercher'],
    'verify.title': ['Verify a certificate or receipt', 'Vérifier un acte ou un reçu'], 'verify.label': ['Certificate or receipt number', 'Numéro d’acte ou de reçu'],
    'fees.title': ['Services and official fees', 'Services et tarifs officiels'],
    'fees.note': ['These are the only fees the council charges. Pay only through the council or by mobile money, always with a QR receipt.', 'Ce sont les seuls frais perçus par la commune. Payez uniquement à la commune ou par mobile money, toujours avec un reçu QR.'],
    'common.back': ['Back', 'Retour'], 'common.continue': ['Continue', 'Continuer'], 'common.staff': ['Talk to a council staff member', 'Parler à un agent de la commune']
  };
  function t(k) { const v = T[k]; if (!v) return k; return state.lang === 'fr' ? v[1] : v[0]; }
  function applyI18n(root) {
    (root || document).querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.getAttribute('data-i18n')); });
    (root || document).querySelectorAll('[data-i18n-ph]').forEach(el => { el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph'))); });
    document.documentElement.lang = state.lang;
  }
  function setLang(l) { state.lang = l; save(); applyI18n(); document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.l === l)); document.dispatchEvent(new CustomEvent('langchange')); }

  /* ---------- helpers ---------- */
  const fmt = n => n === 0 ? (state.lang === 'fr' ? 'Gratuit' : 'Free') : n.toLocaleString('en-US').replace(/,/g, ',') + ' FCFA';
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const dateFmt = d => { const [y, m, dd] = d.split('-'); const M = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; return (+dd) + ' ' + M[+m - 1] + ' ' + y; };
  const council = () => state.councils.find(c => c.id === state.council) || state.councils[0];
  const requests = (all) => all ? state.requests : state.requests.filter(r => r.council === state.council);
  const certPrefix = cid => ({ limbe2: 'LMB2', douala3: 'DLA3', limbe1: 'LMB1', buea: 'BUEA' }[cid] || cid.toUpperCase().slice(0, 4));
  const findReq = id => state.requests.find(r => r.id.toUpperCase() === String(id || '').trim().toUpperCase());
  function newId(prefix) {
    const nums = state.requests.filter(r => r.id.startsWith(prefix)).map(r => +r.id.split('-')[2]);
    const n = (nums.length ? Math.max(...nums) : 100) + 1;
    return prefix + '-2026-' + String(n).padStart(5, '0');
  }
  function addRequest(r) { state.requests.unshift(r); save(); return r; }
  function updateRequest(id, patch, note) { const r = findReq(id); if (!r) return; Object.assign(r, patch); if (note) r.history.push(h(TODAY, note)); save(); return r; }
  const STATUS_CLASS = { 'Ready': 'b-ok', 'Collected': 'b-grey', 'Awaiting parent': 'b-warn', 'Awaiting registrar': 'b-info', 'Awaiting payment': 'b-warn', 'Returned': 'b-risk', 'Notice published': 'b-info', 'Submitted': 'b-info', 'Retrieval in progress': 'b-warn', 'Awaiting other council': 'b-info' };
  const STATUS_FR = { 'Ready': 'Prêt', 'Collected': 'Retiré', 'Awaiting parent': 'En attente du parent', 'Awaiting registrar': 'En attente de l’officier', 'Awaiting payment': 'En attente de paiement', 'Returned': 'Renvoyé', 'Notice published': 'Publication faite', 'Submitted': 'Soumis', 'Retrieval in progress': 'Recherche en cours', 'Awaiting other council': 'En attente d\u2019une autre commune' };
  const badge = s => '<span class="badge ' + (STATUS_CLASS[s] || 'b-grey') + '">' + esc(state.lang === 'fr' ? (STATUS_FR[s] || s) : s) + '</span>';
  const aiBadge = a => '<span class="badge ' + ({ ok: 'b-ok', warn: 'b-warn', risk: 'b-risk' }[a.level]) + '">' + ((state.lang === 'fr' ? { ok: 'Complet', warn: 'À vérifier', risk: 'Problème possible' } : { ok: 'Complete', warn: 'Check needed', risk: 'Possible problem' })[a.level]) + '</span>';
  function plain(r) {
    const fr = state.lang === 'fr';
    switch (r.status) {
      case 'Ready': return fr ? 'Votre document est prêt. Téléchargez-le maintenant ou retirez la copie imprimée à la commune.' : 'Your document is ready. Download it now, or collect the printed copy at the council after 10am.';
      case 'Collected': return fr ? 'Le document a été retiré.' : 'This document has been collected. Nothing more to do.';
      case 'Awaiting parent': return fr ? 'Le centre de santé a déclaré la naissance. Le parent doit confirmer les informations.' : 'The health centre has notified the birth. The parent now needs to confirm the details. It takes two minutes.';
      case 'Awaiting registrar': return fr ? 'Votre demande est complète et attend la signature de l’officier d’état civil, en général sous 3 jours ouvrables.' : 'Your request is complete and waiting for the registrar to review and sign it, usually within 3 working days.';
      case 'Awaiting payment': return fr ? 'Votre demande est approuvée. Il reste à payer les frais officiels.' : 'Your request is approved. Pay the official fee to receive the certificate.';
      case 'Returned': return fr ? 'Il manque une information. Voir la note ci-dessous et corrigez votre demande.' : 'Something needs fixing before the council can continue. See the note below.';
      case 'Retrieval in progress': return fr ? 'Votre acte n\u2019est pas encore numérisé. Un agent recherche et scanne le registre (environ 3 jours ouvrables). Vous serez prévenu dès qu\u2019il est prêt.' : 'Your record is not digitised yet. A clerk is retrieving and scanning the register page, usually within 3 working days. You will be notified as soon as it is ready to download.';
      case 'Awaiting other council': return fr ? 'Demande transmise à l\u2019autre commune, qui détient l\u2019acte.' : 'Your request has been sent to the council that holds the record. You will be notified when it is issued.';
      case 'Notice published': return fr ? 'La publication est faite. La cérémonie est réservée.' : 'The marriage notice is published and the ceremony date is booked.';
      default: return fr ? 'Votre demande a été reçue.' : 'Your request has been received.';
    }
  }
  function qrSvg(text, size) {
    size = size || 120; let x = 0; for (const ch of String(text)) x = (x * 31 + ch.charCodeAt(0)) >>> 0;
    const n = 21, c = size / n; let rects = '';
    const finder = (fx, fy) => '<rect x="' + (fx * c + c / 2) + '" y="' + (fy * c + c / 2) + '" width="' + (6 * c) + '" height="' + (6 * c) + '" fill="none" stroke="#1B1B1B" stroke-width="' + c + '"/><rect x="' + ((fx + 2) * c) + '" y="' + ((fy + 2) * c) + '" width="' + (3 * c) + '" height="' + (3 * c) + '" fill="#1B1B1B"/>';
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      if ((i < 8 && j < 8) || (i > 12 && j < 8) || (i < 8 && j > 12)) continue;
      x = (x * 1103515245 + 12345) >>> 0; if ((x >>> 16) & 1) rects += '<rect x="' + (i * c) + '" y="' + (j * c) + '" width="' + c + '" height="' + c + '" fill="#1B1B1B"/>';
    }
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" role="img" aria-label="Demo QR code for ' + esc(text) + '"><rect width="' + size + '" height="' + size + '" fill="#fff"/>' + rects + finder(0, 0) + finder(14, 0) + finder(0, 14) + '</svg>';
  }
  function toast(msg) { let el = document.getElementById('toast'); if (!el) { el = document.createElement('div'); el.id = 'toast'; el.className = 'toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); } el.textContent = msg; el.classList.add('show'); clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove('show'), 3000); }
  const param = k => new URLSearchParams(location.search).get(k);

  /* ---------- layout ---------- */
  const PORTALS = [
    ['citizen', 'Citizen', 'index.html'], ['clinic', 'Health centre', 'clinic.html'], ['staff', 'Registrar', 'staff.html'], ['treasury', 'Treasurer', 'treasury.html'],
    ['mobile', 'Mobile app', 'app.html'], ['agent', 'Field agent', 'agent.html'], ['archives', 'Archives', 'archives.html'], ['admin', 'Administration', 'admin.html'], ['manage', 'Management', 'dashboard.html'], ['platform', 'All councils', 'platform.html'],
    ['how', 'How it works', 'architecture.html'], ['tour', 'Demo guide', 'start.html'], ['coverage', 'Coverage', 'coverage.html']
  ];
  const CITIZEN_NAV = [['home', 'nav.home', 'index.html'], ['assistant', 'nav.assistant', 'assistant.html'], ['apply', 'nav.apply', 'apply.html'], ['business', 'nav.business', 'business.html'], ['learn', 'nav.learn', 'learn.html'], ['council', 'nav.council', 'council.html'], ['track', 'nav.track', 'track.html'], ['account', 'nav.account', 'account.html']];
  function renderShell() {
    const b = document.body, portal = b.dataset.portal || 'citizen', page = b.dataset.page || '';
    if (new URLSearchParams(location.search).get('app') === '1') window.name = 'app';
    const app = window.name === 'app';
    if (app) document.body.classList.add('app-mode');
    applyTheme(portal === 'clinic' ? CENTRES[0].council : portal === 'platform' ? '__none' : state.council);
    const shell = document.getElementById('shell'); if (!shell) return;
    let nav = '';
    if (portal === 'citizen') nav = '<nav aria-label="Citizen menu">' + CITIZEN_NAV.map(n => '<a href="' + n[2] + '" class="' + (n[0] === page ? 'active' : '') + '" data-i18n="' + n[1] + '"></a>').join('') + '</nav>';
    const sub = { citizen: 'Council services', clinic: 'Health centre portal', staff: 'Staff · Civil status', treasury: 'Staff · Treasury', agent: 'Field agent app', admin: 'Staff · Administration', manage: 'Council management', platform: 'Platform console · all councils', how: 'How it works', mobile: 'Mobile app preview', archives: 'Staff · Archives and records', tour: 'Prototype', coverage: 'Prototype' }[portal];
    const councilSel = ['citizen', 'staff', 'manage', 'treasury', 'admin', 'agent', 'mobile', 'archives'].includes(portal) ?
      '<label class="sr" for="councilSel">Council</label><select id="councilSel" class="council-select">' + state.councils.filter(c => c.status !== 'Connected system').map(c => '<option value="' + c.id + '"' + (c.id === state.council ? ' selected' : '') + '>' + esc(c.name) + '</option>').join('') + '</select>' : '';
    shell.innerHTML =
      '<div class="demo-banner" data-i18n="banner"></div>' +
      '<div class="demo-bar"><span>Demo view:</span>' + PORTALS.map(p => '<a href="' + p[2] + '" class="' + (p[0] === portal ? 'active' : '') + '">' + p[1] + '</a>').join('') + '<a href="#" id="resetDemo" style="margin-left:auto;color:#C9D2CE">Reset demo data</a></div>' +
      '<header class="topbar"><div class="wrap"><div class="brand"><small>' + sub + '</small><strong>' + esc(portal === 'platform' ? 'All councils' : portal === 'clinic' ? CENTRES[0].name : council().name) + '</strong></div>' + nav +
      '<div class="row">' + councilSel + '<div class="lang" role="group" aria-label="Language"><button data-l="en" class="' + (state.lang === 'en' ? 'on' : '') + '">EN</button><button data-l="fr" class="' + (state.lang === 'fr' ? 'on' : '') + '">FR</button></div></div></div></header>';
    if (!app && layoutFor(portal === 'clinic' ? CENTRES[0].council : portal === 'platform' ? '__none' : state.council) === 'vertical') {
      document.body.classList.add('layout-vertical');
      const side = document.createElement('aside'); side.className = 'sidebar'; side.setAttribute('aria-label', 'Main menu');
      side.innerHTML = '<div class="brand"><small>' + sub + '</small><strong>' + esc(portal === 'clinic' ? CENTRES[0].name : council().name) + '</strong></div>' + nav +
        '<div class="demo-views"><span>Demo view</span>' + PORTALS.map(p => '<a href="' + p[2] + '" class="' + (p[0] === portal ? 'active' : '') + '">' + p[1] + '</a>').join('') + '<a href="#" class="reset-side" style="color:#C9D2CE;margin-top:6px">Reset demo data</a></div>';
      side.querySelector('.reset-side').addEventListener('click', e => { e.preventDefault(); reset(); });
      document.body.insertBefore(side, document.body.firstChild);
    }
    if (app) {
      shell.querySelector('.demo-bar').remove();
      const nav = shell.querySelector('.topbar nav'); if (nav) nav.remove();
      const tb = document.createElement('nav'); tb.className = 'tabbar'; tb.setAttribute('aria-label', 'App menu');
      tb.innerHTML = [['index.html', 'nav.home'], ['assistant.html', 'nav.assistant'], ['apply.html', 'nav.apply'], ['track.html', 'nav.track'], ['account.html', 'nav.account']].map(x => '<a href="' + x[0] + '" class="' + (location.pathname.endsWith(x[0]) ? 'on' : '') + '" data-i18n="' + x[1] + '"></a>').join('');
      document.body.appendChild(tb);
    }
    shell.querySelectorAll('.lang button').forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.l)));
    const sel = document.getElementById('councilSel'); if (sel) sel.addEventListener('change', () => { state.council = sel.value; const c = council(); state.lang = c.lang; save(); location.reload(); });
    const rd = document.getElementById('resetDemo'); if (rd) rd.addEventListener('click', e => { e.preventDefault(); reset(); });
    const f = document.createElement('div'); f.className = 'footer'; f.innerHTML = (portal === 'citizen' ? '<div class="row small" style="margin-bottom:8px"><a href="services.html">' + t('nav.services') + '</a><a href="verify.html">' + t('nav.verify') + '</a><a href="rider.html">' + t('nav.riders') + '</a><a href="complaints.html">' + t('nav.complaints') + '</a><a href="news.html">' + t('nav.news') + '</a><a href="whatsapp.html">WhatsApp</a><a href="ussd.html">' + t('nav.ussd') + '</a><a href="late-registration.html">' + t('nav.late') + '</a></div>' : '') + 'Digital Council Services Platform · prototype for discussion with Limbe II Council and partners · November 2026 · open source (Apache 2.0) · <a href="architecture.html">How it works</a>'; document.body.appendChild(f);
    applyI18n();
  }

  /* ---------- AI assistant (rule-based demo of a knowledge-base assistant) ---------- */
  const KB = [
    { id: 'late', kw: ['late', 'tardive', 'tardif', 'seven year', 'years old', 'no get birth', 'exam', 'school', 'no born certificate', 'never registered', 'pass time', 'don reach'],
      en: 'Because the child is older than the legal period, this is a late birth registration.\nYou will need: the hospital birth note (if any), the mother’s ID card, the father’s ID card if declared, and [other document confirmed by the council].\nOfficial fee: 5,000 FCFA (demo).\nI can start the request with you now and fill in the form by asking you simple questions.',
      fr: 'L’enfant a dépassé le délai légal : il s’agit d’une déclaration tardive.\nPièces à fournir : certificat d’accouchement (si disponible), CNI de la mère, CNI du père s’il est déclaré, et [autre pièce confirmée par la commune].\nFrais officiels : 5 000 FCFA (démo).\nJe peux commencer la demande avec vous maintenant.',
      pcm: 'No worry, we fit help you. Because the pikin don pass the time wey law give, na "late registration".\nYou go need: hospital paper for the born (if you get am), mama ID card, papa ID card if e dey, and [other document wey council go confirm].\nOfficial money: 5,000 FCFA (demo).\nYou want make I start the request for you now? I go ask you some small questions.',
      action: ['late-registration.html', 'Start late registration', 'Commencer la déclaration tardive', 'Start the request'] },
    { id: 'birth', kw: ['register my baby', 'baby', 'born', 'naissance', 'bébé', 'birth', 'new born', 'don born'],
      en: 'If your baby was born in a health centre linked to the council, the birth is already notified. You will receive an SMS or voice call to confirm the details. Registration is free within the legal period.\nIf the baby was born at home, you can declare the birth in the app with two witnesses.',
      fr: 'Si votre bébé est né dans un centre de santé relié à la commune, la naissance est déjà déclarée. Vous recevrez un SMS ou un appel pour confirmer. La déclaration est gratuite dans le délai légal.\nPour une naissance à domicile, déclarez-la dans l’application avec deux témoins.',
      pcm: 'If your pikin born for health centre wey council get link, the centre don already send the born to council. You go get SMS or voice call make you confirm. E free if you do am quick.\nIf the pikin born for house, you fit declare am for the app with two witness.' },
    { id: 'lost', kw: ['lost', 'lose', 'perdu', 'crise', 'égaré', 'perdre', 'copy', 'copie', 'duplicate', 'crisis', 'missing certificate', 'don lost'],
      en: 'You can get a certified copy without travelling back. Give me the name on the certificate, the approximate date of birth and the mother’s name, and I will search the council’s digitised records.\nOfficial fee: 3,000 FCFA from another town, 2,000 FCFA at the council (demo).',
      fr: 'Vous pouvez obtenir une copie certifiée sans vous déplacer. Donnez-moi le nom, la date de naissance approximative et le nom de la mère : je cherche dans les registres numérisés.\nFrais officiels : 3 000 FCFA depuis une autre ville, 2 000 FCFA sur place (démo).',
      pcm: 'You fit get copy without you travel go back. Give me the name wey dey for the paper, the year wey e born, and mama name, I go search for council record.\nOfficial money: 3,000 FCFA from another town (demo).' ,
      action: ['find.html', 'Find my certificate now', 'Rechercher mon acte', 'Find my certificate']},
    { id: 'rider', kw: ['jacket', 'chasuble', 'rider', 'okada', 'bend skin', 'moto', 'bike', 'seize', 'pay cash', 'extortion', 'racket'],
      en: 'The official price of the rider jacket at this council is 6,500 FCFA (demo), paid only through the council or by mobile money, always with a QR receipt.\nNobody should collect cash on the road. If someone asked you for money, you can report it anonymously.',
      fr: 'Le prix officiel de la chasuble est de 6 500 FCFA (démo), payable uniquement à la commune ou par mobile money, avec reçu QR.\nPersonne ne doit encaisser d’argent liquide sur la route. Vous pouvez signaler anonymement toute demande illégale.',
      pcm: 'The official price for rider jacket na 6,500 FCFA (demo). You pay only for council or with mobile money, and you go get QR receipt.\nNobody suppose collect cash for road. If person don ask you money, you fit report am, nobody go know say na you.',
      action: ['rider.html', 'Rider services', 'Services moto-taxi', 'Rider services'] },
    { id: 'fees', kw: ['fee', 'cost', 'how much', 'price', 'combien', 'tarif', 'frais', 'how much e be', 'money'],
      en: 'Here are the council’s official fees (demo values). These are the only amounts you should pay.', fr: 'Voici les tarifs officiels de la commune (valeurs de démo). Ce sont les seuls montants à payer.', pcm: 'See the official money wey council dey collect (demo). Na only this one you suppose pay.',
      action: ['services.html', 'See all fees', 'Voir tous les tarifs', 'See all the money'] },
    { id: 'hours', kw: ['open', 'hours', 'time', 'where is', 'office', 'heure', 'horaire', 'adresse', 'where council', 'which time'],
      en: 'The civil status office is open Monday to Friday, 7:30am to 3:30pm (demo). You can also book a time slot in the app to avoid queuing.', fr: 'Le service d’état civil est ouvert du lundi au vendredi, de 7h30 à 15h30 (démo). Vous pouvez réserver un créneau dans l’application.', pcm: 'The office dey open Monday to Friday, 7:30 for morning reach 3:30 for afternoon (demo). You fit book time for the app so you no go stand for line.' },
    { id: 'death', kw: ['death', 'died', 'décès', 'deceased', 'don die', 'my father die', 'my mother die', 'passed away'],
      en: 'I’m sorry for your loss. Here is everything the family will need, step by step:\n1. Declare the death. If it happened in a health facility, the facility has already notified the council; you only complete the declaration.\n2. Death certificate: issued after the registrar signs. Copy 2,000 FCFA (demo).\n3. Burial authorisation: request it in the app once the death is declared. 3,000 FCFA (demo). If the body is moved to another town, ask for a transfer of remains.\n4. Copies for the bank, pension or insurance: order extra certified copies at the same time.\nShall I start the declaration with you?',
      fr: 'Toutes nos condoléances. Voici tout ce dont la famille aura besoin :\n1. Déclarer le décès (si le décès a eu lieu dans une formation sanitaire, elle a déjà informé la commune).\n2. Acte de décès : délivré après signature de l’officier. Copie 2 000 FCFA (démo).\n3. Permis d’inhumer : à demander dans l’application après la déclaration. 3 000 FCFA (démo). Transfert de corps si l’inhumation a lieu dans une autre ville.\n4. Copies pour la banque, la pension ou l’assurance : commandez-les en même temps.\nVoulez-vous que je commence la déclaration ?',
      pcm: 'Sorry for your loss. This na all wetin family go need:\n1. Declare the death. If e happen for hospital, hospital don already tell council.\n2. Death certificate after registrar sign. Copy na 2,000 FCFA (demo).\n3. Burial permit for the app after the declaration, 3,000 FCFA (demo). If una go carry the body go another town, ask for transfer of remains.\n4. Copies for bank, pension or insurance: order them the same time.\nYou want make I start the declaration with you?',
      action: ['apply.html?s=death', 'Start the declaration', 'Commencer la déclaration', 'Start am'] },
    { id: 'burial', kw: ['burial', 'bury', 'inhumer', 'inhumation', 'transfer of remains', 'corpse', 'mortuary', 'funeral', 'transfert de corps', 'burial permit'],
      en: 'A burial authorisation is issued by the council after the death has been declared. Official fee: 3,000 FCFA (demo). If the burial will be in another town, ask at the same time for a transfer of remains. You can request both in the app and pay by mobile money; the authorisation has a QR code the police or the cemetery can check.',
      fr: 'Le permis d’inhumer est délivré par la commune après la déclaration du décès. Frais officiels : 3 000 FCFA (démo). Si l’inhumation a lieu dans une autre ville, demandez aussi un transfert de corps. Les deux se demandent dans l’application, paiement par Mobile Money, avec un code QR vérifiable.',
      pcm: 'Council di give burial permit after una don declare the death. Na 3,000 FCFA (demo). If una go bury for another town, ask transfer of remains the same time. You fit ask both for the app and pay with mobile money.',
      action: ['apply.html?s=burial', 'Request a burial authorisation', 'Demander un permis d’inhumer', 'Ask for burial permit'] },
    { id: 'displaced', kw: ['displaced', 'idp', 'destroyed', 'burnt', 'burned', 'burn', 'déplacé', 'run comot', 'we run', 'fighting', 'archives', 'brûlé', 'detruit', 'détruit'],
      en: 'Many families lost documents during the crisis. Here is what we can do:\n1. I search the registers of every council on the platform, including councils where records were moved. You only need the name, approximate date and place of birth and the mother’s name.\n2. If the record is found, you get a certified copy without travelling.\n3. If the register was destroyed, the record can be re-established through the court. You will need [proof accepted by the court, confirmed by the council], for example a baptism card, school record or two witnesses.\nShall I start the search?',
      fr: 'Beaucoup de familles ont perdu leurs documents pendant la crise :\n1. Je recherche dans les registres de toutes les communes de la plateforme.\n2. Si l’acte est trouvé, vous recevez une copie certifiée sans vous déplacer.\n3. Si le registre a été détruit, l’acte peut être reconstitué par le tribunal avec [preuves acceptées, confirmées par la commune].\nVoulez-vous lancer la recherche ?',
      pcm: 'Plenty family don lose their paper for the crisis time. I fit search the register for all council for the platform. If we see am, you go get copy and you no need travel. If the register don burn, court fit make the record again with [proof wey court accept]. You want make I start the search?',
      action: ['find.html', 'Search all councils', 'Rechercher dans toutes les communes', 'Start the search'] },
    { id: 'scam', kw: ['is this message', 'scam', 'fake', 'arnaque', 'real council', 'this sms', 'this message', 'forwarded', 'is it true', 'send money', 'frauduleux', 'message from council', 'na council'],
      en: 'Paste or forward the message and I will check it. The council only writes from the sender name “LIMBE II” or WhatsApp number [official number], and only asks you to pay inside the app, by USSD or to the council merchant code with a QR receipt. Never send money to a personal number.',
      fr: 'Collez ou transférez le message et je le vérifie. La commune n’écrit que depuis l’expéditeur « LIMBE II » ou le numéro WhatsApp [numéro officiel], et ne demande jamais de payer sur un numéro personnel.',
      pcm: 'Paste the message make I check am. Council di write only from “LIMBE II” or WhatsApp [official number]. Council no go ever tell you make you send money for person e number.',
      action: ['verify.html#message', 'Check a message', 'Vérifier un message', 'Check the message'] },
    { id: 'mydata', kw: ['my data', 'my information', 'données personnelles', 'mes données', 'what you know about me', 'delete my', 'data protection', 'correct my data', 'privacy', 'about me', 'data do you', 'data you have', 'personal data'],
      en: 'You have the right to see the personal data the council holds about you and to ask for corrections, under Law No. 2024/017. I can prepare the request for you; the council must answer within [legal time limit].',
      fr: 'Vous avez le droit de consulter vos données personnelles détenues par la commune et d’en demander la rectification (loi n° 2024/017). Je peux préparer la demande.',
      pcm: 'You get right to see the information wey council get about you and ask make dem correct am. I fit prepare the request for you.',
      action: ['account.html#data', 'Open my data', 'Mes données', 'Open my data'] },
    { id: 'marriage', kw: ['marriage', 'married', 'wedding', 'mariage', 'marry'],
      en: 'To marry at the council, both partners submit their documents and an intent to marry. The notice is published before the ceremony. Fee: 10,000 FCFA (demo). I can list the documents for your situation.', fr: 'Pour se marier à la commune, les futurs époux déposent leurs pièces et une demande. La publication est faite avant la cérémonie. Frais : 10 000 FCFA (démo).', pcm: 'For marry for council, una two go bring una documents and tell council say una wan marry. Council go publish am before the day. Money na 10,000 FCFA (demo).' },
    { id: 'business', kw: ['business', 'shop', 'trade', 'licence', 'license', 'tax', 'impôt', 'commerce', 'boutique', 'stall', 'market'],
      en: 'For a small business, three steps: 1) check your tax category under the 2025/2026 finance law, 2) register with the council, 3) pay by mobile money and keep the QR receipt. Large businesses deal with the national tax authority. What kind of business is it?', fr: 'Pour une petite activité : 1) vérifier votre catégorie fiscale selon la loi de finances 2025/2026, 2) vous enregistrer à la commune, 3) payer par mobile money et garder le reçu QR. Les grandes entreprises relèvent de l’administration fiscale nationale.', pcm: 'For small business, na three step: 1) check which tax category you dey, 2) register for council, 3) pay with mobile money and keep QR receipt. Big company dey go national tax office. Wetin be your business?',
      action: ['services.html#business', 'Business guide', 'Guide entreprise', 'Business guide'] },
    { id: 'staff', kw: ['staff', 'human', 'person', 'agent', 'talk to', 'parler', 'call me'],
      en: 'I’ll pass this conversation to a council staff member. You’ll get a call back during office hours (demo).', fr: 'Je transmets la conversation à un agent de la commune. Vous serez rappelé pendant les heures d’ouverture (démo).', pcm: 'I go give your matter to council staff. Dem go call you back for office time (demo).' },
    { id: 'hello', kw: ['hello', 'hi', 'bonjour', 'good morning', 'how far', 'salut', 'morning'],
      en: 'Hello! I’m the council assistant. I can explain procedures, fees and documents, start a request with you, or check a request number.', fr: 'Bonjour ! Je suis l’assistant de la commune. Je peux expliquer les démarches, les tarifs et les pièces à fournir, ou suivre une demande.', pcm: 'How far! I be council assistant. I fit explain how to do things, the money and the documents, start request with you, or check your request number.' }
  ];
  function detectLang(text) {
    const s = ' ' + text.toLowerCase() + ' ';
    const pcm = [' wetin ', ' pikin ', ' don ', ' dey ', ' una ', ' na ', ' wan ', ' fit ', ' abeg ', ' how far', ' no get ', ' e no ', ' ma '].filter(w => s.includes(w)).length;
    const fr = [' je ', ' mon ', ' ma fille', ' mon fils', ' comment ', ' bonjour', ' est ', ' acte', ' pour ', ' une ', ' le ', ' la ', ' des ', 'é', 'è', 'ç'].filter(w => s.includes(w)).length;
    if (pcm >= 2) return 'pcm'; if (fr >= 2) return 'fr'; return state.lang === 'fr' ? 'fr' : 'en';
  }
  function assistantAnswer(text) {
    const lang = detectLang(text), s = text.toLowerCase();
    const idm = text.match(/[A-Z]{2}-\d{4}-\d{5}/i);
    if (idm) {
      const r = findReq(idm[0]);
      if (!r) return { lang, text: lang === 'fr' ? 'Je ne trouve pas cette demande. Vérifiez le numéro.' : lang === 'pcm' ? 'I no see that request. Check the number again.' : 'I can’t find that request number. Please check it.' };
      return { lang, text: (lang === 'pcm' ? 'I don check am. ' : '') + r.id + ' (' + r.type + ', ' + r.name + '): ' + plain(r), action: ['track.html?id=' + r.id, 'Open request', 'Ouvrir la demande', 'Open the request'] };
    }
    let best = null, score = 0;
    KB.forEach(k => { const sc = k.kw.filter(w => s.includes(w)).length; if (sc > score) { score = sc; best = k; } });
    if (!best) return { lang, text: lang === 'fr' ? 'Je n’ai pas d’information vérifiée sur ce sujet. Voulez-vous que je vous mette en relation avec un agent de la commune ?' : lang === 'pcm' ? 'I no get correct information for this one. You want make I connect you with council staff?' : 'I don’t have verified council information on that. Would you like me to connect you to a council staff member?', handover: true };
    const a = { lang, text: best[lang] || best.en, id: best.id };
    if (best.action) a.action = best.action;
    if (best.id === 'fees') a.fees = true;
    return a;
  }

  window.App = { THEMES, layoutFor, setLayout, themeFor, themeVars, setTheme, applyTheme, contrast, mix, TODAY, FEES, CENTRES, RIDERS, STATS, get state() { return state; }, save, reset, t, applyI18n, setLang, fmt, esc, dateFmt, council, requests, findReq, certPrefix, newId, addRequest, updateRequest, badge, aiBadge, plain, qrSvg, toast, param, renderShell, assistantAnswer, h };
  window.addEventListener('storage', e => { if (e.key !== KEY) return; const prev = JSON.stringify(state.themes), prevL = JSON.stringify(state.layouts || {}); state = load(); if (JSON.stringify(state.layouts || {}) !== prevL && window.name !== 'app') { location.reload(); return; } if (JSON.stringify(state.themes) !== prev) { const p = document.body.dataset.portal; applyTheme(p === 'clinic' ? CENTRES[0].council : p === 'platform' ? '__none' : state.council); } });
  applyTheme(state.council);
  document.addEventListener('DOMContentLoaded', renderShell);
})();
