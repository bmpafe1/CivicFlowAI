/* Extra fictional data for the learning centre, news, jobs, staff, administration and treasury views. */
window.DATA = {
  courses: [
    { id: 'c1', cat: 'Civil status', title: ['Why and how to register a birth on time', 'Pourquoi et comment déclarer une naissance à temps'], lang: 'English · Pidgin audio', mins: 6,
      lessons: [['Why a birth certificate matters', 'School exams, ID card, passport, inheritance and health insurance all need it. Without it a child can be shut out of the First School Leaving Certificate exam.'],
                ['Born in a health centre', 'The centre notifies the council. You get an SMS or voice call: confirm the details in the app, by replying 1, or by phone. It is free within the legal period.'],
                ['Born at home', 'Declare the birth in the app or at the council with two witnesses and the mother’s ID card. Do it quickly to avoid the late-registration procedure.']],
      quiz: { q: ['Your baby was born at Hillview Health Centre. What do you do first?', 'Votre bébé est né au centre de santé. Que faites-vous d’abord ?'], a: [['Wait for the SMS and confirm the details', 'Attendre le SMS et confirmer'], ['Travel to the council with two witnesses', 'Aller à la commune avec deux témoins'], ['Wait until the child starts school', 'Attendre l’entrée à l’école']], ok: 0 } },
    { id: 'c2', cat: 'Civil status', title: ['Late registration step by step', 'La déclaration tardive pas à pas'], lang: 'English · French', mins: 8,
      lessons: [['When is a registration late?', 'When the legal period after birth has passed [to be confirmed by the council].'], ['What to prepare', 'Hospital birth note if any, parents’ ID cards, and any document the council lists. The assistant gives you the exact list for your case.'], ['What happens next', 'The registrar checks your file. A court judgment may be needed in some cases [to be confirmed]. You pay the official fee and receive a QR certificate.']],
      quiz: { q: ['Who decides whether your late registration is approved?', 'Qui approuve la déclaration tardive ?'], a: [['The AI assistant', 'L’assistant IA'], ['The council registrar', 'L’officier d’état civil'], ['The health centre', 'Le centre de santé']], ok: 1 } },
    { id: 'c3', cat: 'Your rights', title: ['Official fees and how to avoid extortion', 'Tarifs officiels et extorsion'], lang: 'Pidgin · English', mins: 4,
      lessons: [['Only official fees', 'Every council fee is published. Pay only at the council or by mobile money and always get a QR receipt.'], ['On the road', 'Nobody should collect cash on the road for jackets or licences. Agents verify by scanning your badge.'], ['Report it', 'Report illegal demands anonymously in the app, on WhatsApp or by voice.']],
      quiz: { q: ['A man asks for cash for your rider jacket on the road. What do you do?', 'Un homme demande de l’argent liquide pour la chasuble. Que faire ?'], a: [['Pay him to avoid trouble', 'Payer'], ['Show your digital badge and report the demand', 'Montrer le badge et signaler'], ['Give him your PIN', 'Donner votre code PIN']], ok: 1 } },
    { id: 'c4', cat: 'Digital skills', title: ['Using the council app and mobile money safely', 'Utiliser l’application et le mobile money en sécurité'], lang: 'English · French · Pidgin', mins: 7,
      lessons: [['Your account', 'Sign in with your phone number. Choose your language and how you want to be contacted.'], ['Paying safely', 'You confirm payments with your PIN on your own phone. Council staff will never ask for your PIN.'], ['Checking documents', 'Every certificate and receipt has a QR code. Anyone can check it on the Verify page.']],
      quiz: { q: ['Who may ask for your mobile money PIN?', 'Qui peut demander votre code PIN ?'], a: [['Council staff', 'Les agents de la commune'], ['Nobody', 'Personne'], ['The assistant', 'L’assistant']], ok: 1 } },
    { id: 'c5', cat: 'Business', title: ['Starting a small business in Limbe', 'Créer une petite activité à Limbe'], lang: 'English · French', mins: 9,
      lessons: [['Find your category', 'Use the tax checker: the 2025/2026 finance law sets categories by activity and turnover.'], ['Register with the council', 'Apply online, upload your ID and pay the registration fee.'], ['Keep your receipts', 'Each payment has a QR receipt. Keep them on your phone for checks.']],
      quiz: { q: ['A business with over 10 million FCFA turnover pays tax to…', 'Une entreprise de plus de 10 millions FCFA paie ses impôts à…'], a: [['The council', 'La commune'], ['The national tax authority', 'L’administration fiscale nationale'], ['The market chief', 'Le chef de marché']], ok: 1 } },
    { id: 'h1', cat: 'Health workers', title: ['Notifying births and deaths with the health centre portal', 'Déclarer naissances et décès via le portail'], lang: 'English · French', mins: 10, audience: 'health',
      lessons: [['Notify within the day', 'Record each birth before the mother leaves. Dictate or photograph the birth note to save time.'], ['Talk to the mother', 'Explain that she will receive an SMS or call and must confirm. Offer to enrol expectant mothers at antenatal visits.'], ['No network?', 'Notifications are saved on the device and sent automatically later.']],
      quiz: { q: ['The network is down. What happens to your birth notification?', 'Pas de réseau : que devient la déclaration ?'], a: [['It is lost', 'Elle est perdue'], ['It is saved and sent later', 'Elle est enregistrée et envoyée plus tard'], ['You must write it on paper', 'Il faut l’écrire sur papier']], ok: 1 } }
  ],
  videos: [
    ['Civil status', 'How to confirm a birth in 2 minutes', 'Pidgin', '1:40'], ['Civil status', 'Late registration explained', 'English', '2:10'], ['Civil status', 'Obtenir une copie d’acte sans se déplacer', 'Français', '1:55'],
    ['Your rights', 'Rider jacket: the official price', 'Pidgin', '0:50'], ['Business', 'Which tax category am I in?', 'English', '3:05'], ['Digital skills', 'Mobile money safety', 'Pidgin', '2:20'],
    ['Digital skills', 'Using the USSD menu on a basic phone', 'English', '1:30'], ['Health workers', 'Health centre portal in 5 minutes', 'English', '5:00']
  ],
  training: [
    { id: 't1', type: 'Online learning', title: 'Python programming for beginners', provider: 'Council partner course (online)', when: 'Self-paced', seats: null },
    { id: 't2', type: 'Online learning', title: 'Hairdressing and braiding techniques', provider: 'Video course', when: 'Self-paced', seats: null },
    { id: 't3', type: 'Onsite training', title: 'Basic computer and smartphone skills', provider: 'University of Buea digital centre (proposed partner)', when: '2 Dec 2026, 9:00 · Council hall', seats: 25 },
    { id: 't4', type: 'Onsite training', title: 'Bookkeeping for small traders', provider: 'Council business desk', when: '9 Dec 2026, 14:00 · Council hall', seats: 30 },
    { id: 't5', type: 'Career meet-up', title: 'Youth career and apprenticeship fair', provider: 'Limbe II Council', when: '16 Dec 2026, 10:00 · Community hall', seats: 120 },
    { id: 't6', type: 'Recommended site', title: 'Udemy', provider: 'udemy.com', when: 'External', seats: null },
    { id: 't7', type: 'Recommended site', title: 'GeeksforGeeks', provider: 'geeksforgeeks.org', when: 'External', seats: null }
  ],
  jobs: [
    { id: 'j1', title: ['Civil status clerk (data entry)', 'Agent de saisie état civil'], type: 'Contract · 12 months', close: '2026-11-30', desc: 'Help digitise the civil status registers since 2007.' },
    { id: 'j2', title: ['Apprentice: municipal IT support', 'Apprenti : support informatique'], type: 'Apprenticeship · 6 months', close: '2026-12-10', desc: 'Support staff and citizens using the new platform.' },
    { id: 'j3', title: ['Community mobiliser (part-time)', 'Mobilisateur communautaire (temps partiel)'], type: 'Part-time', close: '2026-12-05', desc: 'Run sensitisation sessions in neighbourhoods and health centres.' }
  ],
  news: [
    { date: '2026-11-10', title: ['Births can now be registered from health centres', 'Les naissances peuvent désormais être déclarées depuis les centres de santé'], body: ['Two health centres in Limbe II now notify births directly to the council. Parents only need to confirm by SMS, app or phone.', 'Deux centres de santé de Limbe II déclarent les naissances directement à la commune. Les parents confirment par SMS, application ou téléphone.'], tag: 'Civil status' },
    { date: '2026-11-05', title: ['Official rider jacket price published', 'Prix officiel de la chasuble publié'], body: ['The jacket costs 6,500 FCFA (demo), payable only at the council or by mobile money. Report any other demand.', 'La chasuble coûte 6 500 FCFA (démo), payable uniquement à la commune ou par mobile money.'], tag: 'Riders' },
    { date: '2026-10-28', title: ['Council session: 2027 budget adopted', 'Session du conseil : budget 2027 adopté'], body: ['The budget and minutes are published in both languages in the transparency section.', 'Le budget et le procès-verbal sont publiés dans les deux langues.'], tag: 'Council' },
    { date: '2026-10-20', title: ['Free registration week for children without certificates', 'Semaine de déclaration gratuite'], body: ['From 1 to 5 December, late registration fees are waived for children under 12 (demo).', 'Du 1er au 5 décembre, frais de déclaration tardive offerts aux moins de 12 ans (démo).'], tag: 'Campaign' }
  ],
  publications: [
    ['Budget 2027 (adopted 28 Oct 2026)', 'Budget 2027', 'PDF · EN/FR'], ['Minutes: council session of 28 Oct 2026', 'Procès-verbal : session du 28 oct. 2026', 'PDF · EN/FR'],
    ['Mayor’s order on market fees', 'Arrêté municipal sur les droits de place', 'PDF · EN/FR'], ['Administrative account 2025', 'Compte administratif 2025', 'PDF · EN/FR']
  ],
  staff: [
    { name: 'Registrar Mbua', role: 'Civil status registrar', email: 'registrar@limbe2.example', mfa: true, active: true },
    { name: 'Clerk Ewane', role: 'Civil status clerk', email: 'clerk1@limbe2.example', mfa: true, active: true },
    { name: 'Treasurer Nfor', role: 'Municipal treasurer', email: 'treasury@limbe2.example', mfa: true, active: true },
    { name: 'Officer Ashu', role: 'Business and tax officer', email: 'tax@limbe2.example', mfa: false, active: true },
    { name: 'Agent Molua', role: 'Field agent', email: 'agent1@limbe2.example', mfa: true, active: true },
    { name: 'Officer Etongo', role: 'Community development officer', email: 'cdo@limbe2.example', mfa: true, active: true },
    { name: 'Former clerk', role: 'Civil status clerk', email: 'old.clerk@limbe2.example', mfa: false, active: false }
  ],
  audit: [
    ['2026-11-12 08:41', 'Registrar Mbua', 'Signed', 'BC-2026-01482'], ['2026-11-12 08:30', 'Clerk Ewane', 'Viewed', 'CP-2026-00890'], ['2026-11-12 08:12', 'AI assistant', 'Pre-checked', 'LR-2026-00207'],
    ['2026-11-11 15:02', 'Treasurer Nfor', 'Approved refund', 'RC-2026-77211'], ['2026-11-11 10:20', 'Officer Etongo', 'Published (EN/FR)', 'News: health centre births'], ['2026-11-10 09:05', 'Secretary General', 'Disabled account', 'old.clerk@limbe2.example']
  ],
  kb: [
    { q: 'Office opening hours', a: 'Monday–Friday, 7:30am–3:30pm (demo).', status: 'Approved', by: 'Officer Etongo', date: '2026-11-10', fr: true, pcm: true },
    { q: 'Documents for late birth registration', a: 'Hospital birth note (if any), parents’ ID cards, [other document].', status: 'Approved', by: 'Registrar Mbua', date: '2026-11-08', fr: true, pcm: true },
    { q: 'Rider jacket price', a: '6,500 FCFA (demo), council or mobile money only.', status: 'Approved', by: 'Officer Ashu', date: '2026-11-05', fr: true, pcm: true },
    { q: 'Court judgment for late registration', a: '[When a court judgment is required, to be confirmed]', status: 'Draft: needs registrar', by: 'AI suggestion from 41 citizen questions', date: '2026-11-11', fr: false, pcm: false },
    { q: 'Marriage notice period', a: '[Notice period to be confirmed]', status: 'Draft: needs registrar', by: 'AI suggestion from 12 citizen questions', date: '2026-11-09', fr: false, pcm: false }
  ],
  sessions: [
    { date: '2026-12-15', title: 'Ordinary session: civil status digitisation progress', status: 'Agenda draft' },
    { date: '2026-10-28', title: 'Budget session 2027', status: 'Minutes published' }
  ],
  secondary: [
    { centre: 'Secondary centre: Bota (demo)', type: 'Birth declaration', name: 'Grace Elonge', date: '2026-11-11', status: 'To review' },
    { centre: 'Secondary centre: Mile 4 (demo)', type: 'Death declaration', name: 'Joseph Nkwelle', date: '2026-11-10', status: 'To review' }
  ],
  operators: [
    { id: 'OP-0412', name: 'Mama Ndolo Food Stall', type: 'Street food', cat: 'A', paid: '2026-12-31', zone: 'Mile 4 market' },
    { id: 'OP-0389', name: 'Ngwa Phone Repairs', type: 'Small shop', cat: 'B', paid: '2026-09-30', zone: 'Down Beach' },
    { id: 'OP-0501', name: 'Eposi Braiding Salon', type: 'Hairdressing', cat: 'A', paid: '2027-03-31', zone: 'Bota' }
  ],
  complaintsSeed: [
    { ref: 'CMP-2026-0141', topic: 'Waste collection', text: 'Rubbish not collected for 2 weeks at Church Street.', date: '2026-11-06', status: 'In progress', service: 'Environment', reply: 'Truck scheduled for 13 Nov.' },
    { ref: 'CMP-2026-0137', topic: 'Civil status', text: 'Waited 3 hours at the counter.', date: '2026-11-02', status: 'Answered', service: 'Civil status', reply: 'Appointments can now be booked in the app to avoid queues.' }
  ]
};

/* Public council information hub (per council) */
DATA.hub = {
  limbe2: {
    mayor: ['Message from the Mayor (demo): Our priority this year is to bring council services closer to every resident: registering births at health centres, lighting our markets and keeping you informed about every project.', 'Message du Maire (démo) : notre priorité est de rapprocher les services de chaque habitant et de vous informer sur chaque projet.'],
    contact: { address: 'Council hall, [address to confirm], Limbe', phone: '+237 6XX XX XX 00', email: 'info@limbe2.example', hours: 'Mon–Fri 7:30–15:30' },
    projects: [
      { id: 'p1', title: ['Civil status digitisation', 'Numérisation de l’état civil'], status: 'In progress', progress: 45, budget: 48000000, funder: 'Council + Cities Deliver grant (proposed)', start: '2026-09-01', end: '2027-12-31', place: 'Council hall and 2 secondary centres', desc: ['Digitising registers since 2007 and issuing QR-verifiable certificates.', 'Numérisation des registres depuis 2007 et actes vérifiables par QR.'], updates: [['2026-11-10', 'Two health centres connected for birth notification'], ['2026-10-15', 'Register volume 3 (2009) 32% captured'], ['2026-09-01', 'Project launched']] },
      { id: 'p2', title: ['Mile 4 market solar lighting', 'Éclairage solaire du marché Mile 4'], status: 'In progress', progress: 70, budget: 22500000, funder: 'Council budget 2026', start: '2026-07-01', end: '2026-12-20', place: 'Mile 4 market', desc: ['60 solar street lights to make evening trading safer.', '60 lampadaires solaires pour sécuriser le commerce du soir.'], updates: [['2026-11-05', '42 of 60 lights installed'], ['2026-08-20', 'Contractor selected after public tender']] },
      { id: 'p3', title: ['Health centre link-up', 'Connexion des centres de santé'], status: 'In progress', progress: 60, budget: 6000000, funder: 'Council + partners', start: '2026-10-01', end: '2027-03-31', place: 'All health centres in Limbe II', desc: ['Every maternity notifies births directly to the council.', 'Chaque maternité déclare les naissances à la commune.'], updates: [['2026-11-10', 'Hillview and Seaside centres live']] },
      { id: 'p4', title: ['Bota drainage rehabilitation', 'Réhabilitation des caniveaux de Bota'], status: 'Planned', progress: 0, budget: 35000000, funder: 'FEICOM (application submitted)', start: '2027-02-01', end: '2027-08-31', place: 'Bota', desc: ['Clearing and rebuilding 2.4 km of drains to reduce flooding.', 'Curage et reconstruction de 2,4 km de caniveaux.'], updates: [['2026-10-30', 'Funding application submitted']] },
      { id: 'p5', title: ['Church Street resurfacing', 'Réfection de Church Street'], status: 'Completed', progress: 100, budget: 18000000, funder: 'Council budget 2025', start: '2025-11-01', end: '2026-06-30', place: 'Church Street', desc: ['1.1 km road resurfaced with new drainage.', '1,1 km de route refaite avec caniveaux.'], updates: [['2026-06-30', 'Handed over to the public']] },
      { id: 'p6', title: ['Civil status desk at the hospital', 'Bureau d’état civil à l’hôpital'], status: 'Planned', progress: 5, budget: 7500000, funder: 'Council + FEICOM (to be explored)', start: '2027-03-01', end: '2027-06-30', place: 'Limbe Regional Hospital maternity', desc: ['A council civil status desk in the maternity so parents leave with the birth certificate, as Yaoundé II did at the Hôpital central.', 'Un bureau d’état civil communal à la maternité pour que les parents repartent avec l’acte de naissance, comme Yaoundé II à l’Hôpital central.'], updates: [['2026-11-12', 'Proposal shared with the hospital and BUNEC South-West agency']] }
    ],
    events: [
      { id: 'e1', date: '2026-11-22', time: '07:00', title: ['Community clean-up day', 'Journée de salubrité'], place: 'All quarters', cat: 'Community' },
      { id: 'e2', date: '2026-12-01', time: '08:00', title: ['Free registration week (1–5 Dec)', 'Semaine de déclaration gratuite (1–5 déc.)'], place: 'Council hall', cat: 'Civil status' },
      { id: 'e3', date: '2026-12-02', time: '09:00', title: ['Computer and smartphone skills training', 'Formation informatique et smartphone'], place: 'Council hall', cat: 'Training' },
      { id: 'e4', date: '2026-12-15', time: '10:00', title: ['Ordinary council session (open to the public)', 'Session ordinaire du conseil (publique)'], place: 'Council chamber', cat: 'Council' },
      { id: 'e5', date: '2026-12-16', time: '10:00', title: ['Youth career and apprenticeship fair', 'Salon de l’emploi des jeunes'], place: 'Community hall', cat: 'Jobs' }
    ],
    reports: [
      ['Annual report 2025', 'Rapport annuel 2025', 'PDF · 2.1 MB'], ['Projects progress report, Q3 2026', 'Rapport d’avancement des projets, T3 2026', 'PDF · 0.8 MB'],
      ['Civil status statistics, October 2026', 'Statistiques d’état civil, octobre 2026', 'PDF · 0.3 MB'], ['External audit report 2025', 'Rapport d’audit 2025', 'PDF · 1.4 MB']
    ],
    gallery: [
      { t: ['Solar lights at Mile 4 market', 'Lampadaires au marché Mile 4'], d: '2026-11-05', scene: 'lights' },
      { t: ['First digital birth certificate', 'Premier acte numérique'], d: '2026-11-03', scene: 'doc' },
      { t: ['Church Street after resurfacing', 'Church Street refaite'], d: '2026-06-30', scene: 'road' },
      { t: ['Sensitisation at Hillview maternity', 'Sensibilisation à la maternité'], d: '2026-10-21', scene: 'people' },
      { t: ['Budget session 2027', 'Session budgétaire 2027'], d: '2026-10-28', scene: 'hall' },
      { t: ['Clean-up day, Bota', 'Journée de salubrité, Bota'], d: '2026-09-27', scene: 'clean' }
    ],
    notices: [['Water cut in Down Beach, 14 Nov, 8:00–14:00 (utility notice)', 'Coupure d’eau à Down Beach, 14 nov., 8h–14h'], ['Market fees: new payment by mobile money from 1 Dec', 'Droits de place : paiement mobile money dès le 1er déc.']]
  },
  douala3: {
    mayor: ['Message from the Mayor (demo): Welcome to our new online services.', 'Mot du Maire (démo) : bienvenue sur nos nouveaux services en ligne.'],
    contact: { address: 'Hôtel de ville, [adresse à confirmer], Douala', phone: '+237 6XX XX XX 10', email: 'contact@douala3.example', hours: 'Lun–Ven 7h30–15h30' },
    projects: [
      { id: 'd1', title: ['Logpom market rehabilitation', 'Réhabilitation du marché de Logpom'], status: 'In progress', progress: 35, budget: 60000000, funder: 'Budget communal', start: '2026-06-01', end: '2027-06-30', place: 'Logpom', desc: ['New stalls and drainage.', 'Nouveaux comptoirs et drainage.'], updates: [['2026-10-01', 'Phase 1 terminée']] },
      { id: 'd2', title: ['Online civil status services', 'État civil en ligne'], status: 'Planned', progress: 10, budget: 20000000, funder: 'Plateforme partagée', start: '2027-01-15', end: '2027-12-31', place: 'Hôtel de ville', desc: ['Joining the shared platform.', 'Adhésion à la plateforme partagée.'], updates: [['2026-11-01', 'Convention signée']] }
    ],
    events: [{ id: 'f1', date: '2026-12-05', time: '09:00', title: ['Open day: online services', 'Journée portes ouvertes : services en ligne'], place: 'Hôtel de ville', cat: 'Community' }],
    reports: [['Annual report 2025', 'Rapport annuel 2025', 'PDF · 1.8 MB']],
    gallery: [{ t: ['Logpom market works', 'Travaux du marché de Logpom'], d: '2026-10-01', scene: 'hall' }],
    notices: [['Hôtel de ville closed on 8 December', 'Hôtel de ville fermé le 8 décembre']]
  }
};

/* Electronic document management: national register index (fictional) */
DATA.records = [
  { id: 'R1', council: 'limbe2', type: 'Birth', ref: 'Register 2009 · vol. 3 · no. 412', name: 'Marie Ngole', dob: '2009-03-05', mother: 'Esther Ngole', father: 'Paul Ngole', digitised: true, verified: true, conf: 98, page: 104 },
  { id: 'R2', council: 'limbe2', type: 'Birth', ref: 'Register 2007 · vol. 2 · no. 287', name: 'Ndive Eposi', dob: '2007-06-18', mother: 'Eposi Ndive', father: 'Mbella Ndive', digitised: true, verified: true, conf: 95, page: 61 },
  { id: 'R3', council: 'limbe2', type: 'Birth', ref: 'Register 2004 · vol. 1 · no. 133 (index card)', name: 'Clovis Ayuk', dob: '2004-02-11', mother: 'Mary Ayuk', father: 'Thomas Ayuk', digitised: false, verified: false, conf: 0, page: null },
  { id: 'R4', council: 'limbe2', type: 'Marriage', ref: 'Register 2011 · no. 58', name: 'Divine Akum & Brenda Fon', dob: '2011-08-20', mother: '', father: '', digitised: true, verified: false, conf: 81, page: 12 },
  { id: 'R5', council: 'buea', type: 'Birth', ref: 'Buea register 1998 · no. 1188', name: 'Mary Ashu Ebot', dob: '1998-09-02', mother: 'Comfort Ashu', father: 'John Ebot', digitised: true, verified: true, conf: 97, page: 210 },
  { id: 'R6', council: 'limbe1', type: 'Birth', ref: 'Limbe I register 1998 · no. 902', name: 'Mary Ebot Ashu', dob: '1998-09-12', mother: 'Comfort Ashu', father: '', digitised: true, verified: true, conf: 92, page: 77 },
  { id: 'R7', council: 'douala3', type: 'Birth', ref: 'Douala III registre 1998 · n° 4410', name: 'Marie Ebot', dob: '1997-12-30', mother: 'Ashu Comfort', father: '', digitised: true, verified: true, conf: 88, page: 15 },
  { id: 'R8', council: 'buea', type: 'Birth', ref: 'Buea register 2007 · no. 1314', name: 'Joseph Nfor Tamfu', dob: '2007-03-21', mother: 'Grace Tamfu', father: '', digitised: true, verified: true, conf: 94, page: 112 }
];
DATA.registers = [
  { council: 'limbe2', name: 'Births 2007–2010', vols: 9, pages: 3600, scanned: 3600, verified: 3420, issues: 14 },
  { council: 'limbe2', name: 'Births 2011–2015', vols: 12, pages: 4800, scanned: 3100, verified: 2200, issues: 9 },
  { council: 'limbe2', name: 'Births 2001–2006 (crisis-damaged)', vols: 8, pages: 3200, scanned: 640, verified: 300, issues: 41 },
  { council: 'limbe2', name: 'Marriages 2007–2015', vols: 4, pages: 1400, scanned: 1400, verified: 1100, issues: 3 },
  { council: 'limbe2', name: 'Deaths 2007–2015', vols: 3, pages: 900, scanned: 450, verified: 200, issues: 2 },
  { council: 'limbe2', name: 'Council deliberations 2010–2026', vols: 16, pages: 2900, scanned: 2900, verified: 2900, issues: 0 },
  { council: 'limbe2', name: 'Building permits 2015–2026', vols: 10, pages: 5200, scanned: 1300, verified: 900, issues: 5 }
];
