export const canvas: any = {
  Risikoklasse: ['Kl. I', 'Kl. IIa', 'andere'],
  supportTypes: [
    '... Überwachung oder Linderung von Krankheiten',
    '... Linderung oder Kompensierung von Verletzungen oder Behinderung',
    'Dient Primärprävention',
  ],
  usersegment: [
    'Patienten',
    'Patienten und Ärzte/Therapeuten gemeinsam',
    'Nur Leistngserbringer, z.B. Praxisausstattung',
  ],
  normRequirements: [
    'Fähigkeit, Konformität zu erklären (Medizinprodukt "zertifizieren"): z.B. Zertifizierung nach ISO13485',
    'Erfüllung Datenschutzanforderungen und Datensicherheit: z.B. nach DSGVO und Sdtand der Technik',
  ],
  poducerRequirements: [
    [
      // 'a) Medizinischer Nutzen',
      'Verbesserung des Gesundheitszustands',
      'Verkürzung der Krankheitsdauer',
      'Verlängerung des Überlebens',
      'Verbesserung der Lenbensqualität',
    ],
    [
      // 'b) Patientenrelevate Struktur- und Verfahrensverbesserungen',
      'Koordination der Behandlungsabläufe',
      'Ausrichtung der Behandlung an Leitlinien und Standards',
      'Adhärenz',
      'Erleichterung des Zustands zur Versorgung',
      'Patientensicherheit',
      'Gesundheitskompetenz, Patientensouveränität',
      'Bewältigung krankheitsbedingter Schwierigkeiten im Alltag',
      'Aufwandsreduzierung für Patienten, Angehörige',
    ],
    [
      // 'c) Ökonomischer Nutzen',
      'Arbeitsreduzierung',
      'Kostenreduzierung',
    ],
  ],
  appRequirements: [
    'Sicherheit und Funktionstauglichkeit',
    'Datenschutz und Datensicherheit',
    'Qualität und Interoperabilität',
    'Robustheit',
    'Verbraucherschutz',
    'Nutzerfreundlichkeit',
    'Unterstützung und Leistungserbringer',
    'Qualität der medizinischen Inhalte',
    'Patientensicherheit',
  ],
  sectionEight: [
    { value: 'Entwicklung des Medizinproduktes', checked: false },
    {
      value: 'Zertifizierung (ISO 13485), CE-Konformitätserklärung',
      checked: false,
    },
    { value: 'Datenschutz, Interoperabilität erfüllen', checked: false },
    {
      value: 'Beratung beim BfArM einreichen (3 Monate Bearbeitung)',
      checked: false,
    },
    { value: 'Nachweise liefern', checked: true },
    { value: 'Vergütungsbeträge übermitteln', checked: false },
    { value: 'optional: BfArM-Nachfragen bearbeiten', checked: false },
    { value: 'temporäre Aufnahme ins DiGA-Verzeichnis', checked: false },
    {
      value: 'Studien, Nachweis positiver Versorgungseffekte',
      checked: true,
    },
    { value: 'dauerhafte Aufnahme ins DiGA-Verzeichnis', checked: true },
    { value: 'Änderungsanzeige einreichen', checked: false },
    { value: 'Ablehnung des Antrages analysieren', checked: false },
  ],
  sectionNine: [
    {
      name: 'Aufnahme ins DiGA-Verzeichnis (3.000 € ...9.900 €, § 25 DiGAV)',
      amount: '3000€',
    },
    {
      name: 'Auskünfte und Beratung (250 € ...5.000 €, § 27 DiGAV)',
      amount: '250€',
    },
    {
      name:
        'Prüfung des Nachweises positiver Versorgungseffekte nach der Erprobung (1.500 ...6.600 €, § 25 DiGAV)',
      amount: '2000€',
    },
    {
      name: 'Gebühren pro Änderungsanzeige (1.500 € ...4.900 €, § 26 DiGAV)',
      amount: '2500€',
    },
    { name: 'Sonstige Gebühren im Kontext einer DiGA', amount: '3000€' },
  ],
  marketAccess: {
    sections: [
      {
        name: 'Plattform',
        options: ['iOS', 'Android', 'Web Applikation'],
      },
      {
        name: 'Zuzahlung',
        inputFieled: { placeholder: '... €', input: '' },
      },
      {
        name: 'Zusatzgeräte',
        inputFieled: { placeholder: '...', input: '' },
      },
      {
        name: 'ICD-10-Code',
        inputFieled: { placeholder: '...', input: '' },
      },
      {
        name: 'Sprachen',
        options: ['deutsch', 'englisch'],
        inputFieled: { placeholder: 'Andere Sprache', input: '' },
      },
      {
        name: 'erste Verschreibung durch',
        inputFieled: { placeholder: '...', input: '' },
      },
    ],
    options: ['nein', 'ja, folgendes:'],
  },
  jaNeinOptions: ['ja', 'nein'],
};
