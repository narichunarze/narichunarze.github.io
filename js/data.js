// Contenido del portafolio (ES/EN). Edita este archivo para cambiar textos, proyectos o experiencia.

/* ================= i18n ================= */
export const I18N = {
  es: {
    nav_profile: 'Sobre mí', nav_projects: 'Proyectos', nav_exp: 'Experiencia', nav_stack: 'Stack', nav_contact: 'Contacto', menu: 'menú',
    hero_label: 'ai developer · santa cruz de la sierra, bo',
    hero_langs: 'idiomas de trabajo · <b>español · inglés · alemán</b>',
    hero_tag: 'Sistemas que se ejecutan solos.',
    hero_sub: 'IA aplicada, datos y automatización de punta a punta: desde el CSV sucio hasta el dashboard que el directorio sí lee.',
    cta_projects: 'Ver proyectos',
    profile_title: 'Sobre mí',
    profile_text: 'Traduzco problemas de negocio en sistemas que funcionan. Levanto requerimientos con los equipos, limpio y modelo los datos, entreno o integro el modelo adecuado y entrego dashboards que usan tanto <em>operaciones</em> como <em>directorio</em>. Experiencia en IA aplicada, BI y automatización en equipos remotos e internacionales.',
    orgs_label: 'Organizaciones',
    impact_title: 'Impacto medible.',
    impact_note: 'Cifras de proyectos reales. Las marcadas como objetivo son metas de diseño del sistema, no resultados ya medidos.',
    projects_title: 'Proyectos.',
    projects_note: 'Seis sistemas, de automatización con LLMs a análisis de datos públicos. Abre cada uno para ver el problema, la solución y los resultados.',
    all: 'todos', count: n => `${n} de ${PROJECTS.length}`,
    exp_title: 'Experiencia.',
    exp_note: 'Cuatro organizaciones, de telecomunicaciones a un organismo internacional, y experiencias de liderazgo fuera del trabajo.',
    lead_title: 'Liderazgo y reconocimientos',
    stack_title: 'Stack y formación.',
    stack_note: 'Cada tecnología conectada con los proyectos y trabajos donde la usé. Pasa el mouse o toca un nodo; los proyectos se abren con un clic.',
    full_list: 'Ver lista completa de habilidades',
    g_ai: 'IA y ML', g_data: 'Datos y BI', g_auto: 'Automatización y procesos', g_hub: 'Proyecto / trabajo',
    g_hint: 'Selecciona un nodo para ver sus conexiones.', g_techs: 'tecnologías', g_hubs: 'proyectos y trabajos', g_links: 'conexiones',
    g_used: n => `Usada en ${n} ${n === 1 ? 'lugar' : 'lugares'}`, g_uses: n => `${n} tecnologías`, g_case: 'Proyecto', g_exp: 'Experiencia',
    g_open_case: 'Ver caso →', g_open_exp: 'Ver experiencia →',
    demo_badge: '▶ demo en vivo', live_tag: 'EN VIVO', live_text: 'Pruébalo: pega un texto y detecta datos sensibles al instante.', live_cta: 'Probar demo →', demo_float: '▶ demo interactiva · clic para probar', demo_title: 'Pruébalo aquí', demo_note: 'Pega cualquier texto y escanéalo. Esta demo corre en tu navegador con reglas (regex + validación Luhn para tarjetas): nada se envía a ningún servidor. El proyecto original suma spaCy NER para detectar también nombres y organizaciones.',
    demo_input: 'Texto a analizar', demo_scan: 'Escanear', demo_scanning: 'Escaneando…', demo_redact: 'Ver texto redactado', demo_result: 'Resultado',
    demo_found: n => `${n} ${n === 1 ? 'hallazgo' : 'hallazgos'}`, demo_luhn: n => `${n} número(s) descartado(s): no pasan la validación Luhn.`, demo_names: 'Nota: “Juan Pérez” no se marca; detectar nombres requiere el modelo NER del proyecto completo.',
    risk: 'Nivel de riesgo', risk_levels: ['Bajo', 'Medio', 'Alto', 'Crítico'],
    cat_cred: 'Credencial', cat_card: 'Tarjeta', cat_ci: 'Documento (CI)', cat_email: 'Email', cat_phone: 'Teléfono',
    demo_sample: 'Hola equipo, les paso los datos del cliente para el alta:\nNombre: Juan Pérez — CI 4839201 SC\nCorreo: juan.perez@ejemplo.com · Cel: +591 71234567\nTarjeta de pago: 4111 1111 1111 1111 (vence 08/28)\nOtra tarjeta a revisar: 4111 1111 1111 1112\nAcceso al sistema: usuario jperez / password: Verano#2026\nAPI del ERP: api_key=sk_test_51HxQ2eZvKYlo2C0FAKEKEY9zX',
    contact_title: '¿Tienes un proceso que debería correr solo?',
    copy: 'copiar', copied: 'copiado ✓', copy_fail: 'selecciona y copia',
    footer_made: 'un solo archivo · html · tailwind · javascript',
    case_back: '← Proyectos', case_problem: 'Problema', case_solution: 'Solución', case_results: 'Métricas y resultado', case_stack: 'Stack y enlaces',
    case_private: 'Código privado del cliente', case_repo: 'Ver repositorio en GitHub', case_prev: '← Anterior', case_next: 'Siguiente →',
    media_pending: '▶ video próximamente', note_fictitious: 'Grabación del sistema real con datos ficticios.', note_mockup: 'Mockup basado en la presentación del proyecto.', target: 'objetivo', see_case: 'Ver caso →', role: 'Rol',
  },
  en: {
    nav_profile: 'About', nav_projects: 'Projects', nav_exp: 'Experience', nav_stack: 'Stack', nav_contact: 'Contact', menu: 'menu',
    hero_label: 'ai developer · santa cruz de la sierra, bo',
    hero_langs: 'working languages · <b>spanish · english · german</b>',
    hero_tag: 'Systems that run themselves.',
    hero_sub: 'Applied AI, data and automation end to end: from the dirty CSV to the dashboard the board actually reads.',
    cta_projects: 'View projects',
    profile_title: 'About',
    profile_text: 'I translate business problems into systems that work. I gather requirements with the teams, clean and model the data, train or integrate the right model, and ship dashboards used by both <em>operations</em> and the <em>board</em>. Experience in applied AI, BI and automation across remote, international teams.',
    orgs_label: 'Organizations',
    impact_title: 'Measured impact.',
    impact_note: 'Figures from real projects. Those marked as target are system design goals, not results already measured.',
    projects_title: 'Projects.',
    projects_note: 'Six systems, from LLM automation to public data analysis. Open each one to see the problem, the solution and the results.',
    all: 'all', count: n => `${n} of ${PROJECTS.length}`,
    exp_title: 'Experience.',
    exp_note: 'Four organizations, from telecom to an international organization, plus leadership beyond work.',
    lead_title: 'Leadership & recognition',
    stack_title: 'Stack & education.',
    stack_note: 'Every technology connected to the projects and jobs where I used it. Hover or tap a node; projects open on click.',
    full_list: 'See the full skills list',
    g_ai: 'AI & ML', g_data: 'Data & BI', g_auto: 'Automation & process', g_hub: 'Project / job',
    g_hint: 'Select a node to see its connections.', g_techs: 'technologies', g_hubs: 'projects & jobs', g_links: 'connections',
    g_used: n => `Used in ${n} ${n === 1 ? 'place' : 'places'}`, g_uses: n => `${n} technologies`, g_case: 'Project', g_exp: 'Experience',
    g_open_case: 'View case →', g_open_exp: 'View experience →',
    demo_badge: '▶ live demo', live_tag: 'LIVE', live_text: 'Try it: paste any text and flag sensitive data instantly.', live_cta: 'Try the demo →', demo_float: '▶ interactive demo · click to try', demo_title: 'Try it here', demo_note: 'Paste any text and scan it. This demo runs in your browser with rules (regex + Luhn validation for cards): nothing is sent to any server. The original project adds spaCy NER to also detect names and organizations.',
    demo_input: 'Text to analyze', demo_scan: 'Scan', demo_scanning: 'Scanning…', demo_redact: 'Show redacted text', demo_result: 'Result',
    demo_found: n => `${n} ${n === 1 ? 'finding' : 'findings'}`, demo_luhn: n => `${n} number(s) discarded: they fail Luhn validation.`, demo_names: 'Note: “John Smith” is not flagged; detecting names requires the full project’s NER model.',
    risk: 'Risk level', risk_levels: ['Low', 'Medium', 'High', 'Critical'],
    cat_cred: 'Credential', cat_card: 'Card', cat_ci: 'ID document (CI)', cat_email: 'Email', cat_phone: 'Phone',
    demo_sample: 'Hi team, here are the client details for onboarding:\nName: John Smith — CI 4839201 SC\nEmail: john.smith@example.com · Mobile: +591 71234567\nPayment card: 4111 1111 1111 1111 (exp 08/28)\nAnother card to check: 4111 1111 1111 1112\nSystem access: user jsmith / password: Summer#2026\nERP API: api_key=sk_test_51HxQ2eZvKYlo2C0FAKEKEY9zX',
    contact_title: 'Got a process that should run itself?',
    copy: 'copy', copied: 'copied ✓', copy_fail: 'select & copy',
    footer_made: 'one file · html · tailwind · javascript',
    case_back: '← Projects', case_problem: 'Problem', case_solution: 'Solution', case_results: 'Metrics & results', case_stack: 'Stack & links',
    case_private: 'Private client code', case_repo: 'View repository on GitHub', case_prev: '← Previous', case_next: 'Next →',
    media_pending: '▶ video coming soon', note_fictitious: 'Recording of the real system using fictitious data.', note_mockup: 'Mockup based on the project presentation.', target: 'target', see_case: 'View case →', role: 'Role',
  }
};
/* ================= data (fuente: CV) ================= */
export const FACTS = [
  [{ es: 'Base', en: 'Based in' }, { es: 'Santa Cruz de la Sierra, Bolivia · UTC-4', en: 'Santa Cruz de la Sierra, Bolivia · UTC-4' }],
  [{ es: 'Formación', en: 'Education' }, { es: 'Ing. en Sistemas Computacionales · UPB, 2026', en: 'Computational Systems Engineering · UPB, 2026' }],
  [{ es: 'Idiomas de trabajo', en: 'Working languages' }, { es: 'Español · Inglés · Alemán', en: 'Spanish · English · German' }],
];

export const IMPACT = [
  { n: '−75%', l: { es: 'Tiempo de procesamiento de facturas: de 8 h a 2 h por cliente a la semana.', en: 'Invoice processing time: from 8 h to 2 h per client per week.' }, org: 'Moreno Baldivieso', target: true, slug: 'invoice-automation-ai' },
  { n: '21K+', l: { es: 'Filas de datos oficiales del INE analizadas en 5 datasets.', en: 'Rows of official INE data analyzed across 5 datasets.' }, org: { es: 'Proyecto propio', en: 'Personal project' }, slug: 'bolivia-education-analysis' },
  { n: { es: '3 días', en: '3 days' }, l: { es: 'De un CSV crudo a una plataforma de HR analytics con dashboards para dos audiencias.', en: 'From a raw CSV to an HR analytics platform with dashboards for two audiences.' }, org: 'Moreno Baldivieso', slug: 'hr-analytics-platform' },
];

export const TAGS = [
  ['all', null], ['ai', { es: 'ia', en: 'ai' }], ['nlp', 'nlp'], ['ml', 'ml'], ['data', { es: 'datos', en: 'data' }], ['automation', { es: 'automatización', en: 'automation' }], ['security', { es: 'seguridad', en: 'security' }],
];
export const TAG_LABEL = Object.fromEntries(TAGS.filter(x => x[1]).map(([k, v]) => [k, v]));

/* media: para agregar un video luego → media: { type: 'video', src: 'media/invoice.mp4' } */
export const PROJECTS = [
  { slug: 'ai-data-risk-scanner', title: 'AI Data Risk Scanner', org: { es: 'Proyecto propio', en: 'Personal project' }, hue: -20, tags: ['ai', 'nlp', 'security'], media: null, demo: true, link: 'https://github.com/narichunarze/AI-Data-Risk-Scanner',
    role: { es: 'Proyecto propio', en: 'Personal project' },
    problem: { es: 'Datos personales, información financiera y credenciales terminan escondidos en texto no estructurado, donde nadie los busca hasta que se filtran.', en: 'Personal data, financial information and credentials end up hidden in unstructured text, where nobody looks until they leak.' },
    solution: { es: 'Sistema NLP que combina reglas (Regex) y machine learning (spaCy NER) para detectar PII, datos financieros y credenciales.', en: 'NLP system combining rules (Regex) and machine learning (spaCy NER) to detect PII, financial data and credentials.' },
    metrics: [
      { v: '3', l: { es: 'tipos de riesgo: PII, financieros y credenciales', en: 'risk types: PII, financial data and credentials' } },
      { v: { es: 'Híbrido', en: 'Hybrid' }, l: { es: 'reglas (Regex) + ML (spaCy NER)', en: 'rules (Regex) + ML (spaCy NER)' } },
    ],
    stack: ['Python', 'spaCy', 'NER', 'Regex', 'NLP'] },
  { slug: 'invoice-automation-ai', title: 'Invoice Automation AI', org: 'Moreno Baldivieso', hue: 0, tags: ['ai', 'automation'], media: { type: 'video', src: 'media/invoice-automation-ai.mp4', poster: 'media/invoice-automation-ai.jpg', note: 'fictitious' },
    role: { es: 'AI Developer · jul – ago 2026', en: 'AI Developer · Jul – Aug 2026' },
    problem: { es: 'Procesar las facturas de 21 clientes tomaba unas 8 horas por cliente a la semana: descargar datos del SIAT, extraer información de PDF y CSV y preparar a mano las plantillas para Odoo.', en: 'Processing invoices for 21 clients took about 8 hours per client per week: pulling data from SIAT, extracting information from PDFs and CSVs, and preparing Odoo templates by hand.' },
    solution: { es: 'Un sistema que combina Claude AI con reglas de negocio. Obtiene los datos del SIAT de forma automática con Python, cron y web scraping, extrae PDF/CSV, prepara las plantillas de Odoo y deriva a revisión humana solo las predicciones de baja confianza.', en: 'A system that combines Claude AI with business rules. It retrieves SIAT data automatically with Python, cron and web scraping, extracts PDF/CSV, prepares Odoo templates and routes only low-confidence predictions to human review.' },
    metrics: [
      { v: '−75%', l: { es: 'tiempo de procesamiento (8 h → 2 h por cliente/semana)', en: 'processing time (8 h → 2 h per client/week)' }, target: true },
      { v: '~95%', l: { es: 'precisión en la extracción y clasificación', en: 'extraction and classification accuracy' }, target: true },
      { v: '21', l: { es: 'clientes · ~90–120 facturas', en: 'clients · ~90–120 invoices' } },
    ],
    stack: ['Python', 'Claude AI', 'cron', 'Web scraping', 'Odoo', 'Human-in-the-loop'] },
  { slug: 'review-sentiment-mbert', title: 'Review Sentiment mBERT', org: 'LoopStyle', hue: 40, tags: ['ai', 'nlp', 'ml'], media: { type: 'image', src: 'media/review-sentiment-mbert.jpg' },
    role: { es: 'AI Developer · oct 2025 – jun 2026', en: 'AI Developer · Oct 2025 – Jun 2026' },
    problem: { es: 'Las reseñas de clientes y productos llegaban como texto libre: imposibles de leer una por una y difíciles de clasificar con precisión usando modelos genéricos.', en: 'Customer and product reviews arrived as free text: impossible to read one by one and hard to classify accurately with generic models.' },
    solution: { es: 'Pipeline NLP de punta a punta para análisis de sentimiento, con fine-tuning de modelos BERT multilingües para mejorar la precisión de clasificación.', en: 'End-to-end NLP pipeline for sentiment analysis, fine-tuning multilingual BERT models to improve classification accuracy.' },
    metrics: [
      { v: 'mBERT', l: { es: 'BERT multilingüe con fine-tuning', en: 'fine-tuned multilingual BERT' } },
      { v: 'E2E', l: { es: 'pipeline completo: texto crudo → sentimiento', en: 'full pipeline: raw text → sentiment' } },
    ],
    stack: ['Python', 'BERT', 'Multilingual BERT', 'NLP', 'Sentiment Analysis'] },
  { slug: 'demand-forecast-prophet', title: 'Demand Forecast', org: 'LoopStyle', hue: -40, tags: ['ml', 'data'], media: { type: 'image', src: 'media/demand-forecast-prophet.jpg' },
    role: { es: 'AI Developer · oct 2025 – jun 2026', en: 'AI Developer · Oct 2025 – Jun 2026' },
    problem: { es: 'Sin proyecciones de demanda, el inventario se gestionaba de forma reactiva: el agotamiento de stock se notaba cuando ya había ocurrido.', en: 'Without demand projections, inventory was managed reactively: stock-outs were noticed after they happened.' },
    solution: { es: 'Modelos de series de tiempo con Prophet para predecir tendencias de demanda y agotamiento de stock, como base para una gestión de inventario proactiva.', en: 'Prophet time-series models to predict demand trends and stock depletion, as the basis for proactive inventory management.' },
    metrics: [
      { v: 'Prophet', l: { es: 'modelo de series de tiempo', en: 'time-series model' } },
      { v: '2', l: { es: 'señales: tendencia de demanda y agotamiento de stock', en: 'signals: demand trend and stock depletion' } },
    ],
    stack: ['Python', 'Prophet', 'Predictive Analytics', 'Time series'] },
  { slug: 'hr-analytics-platform', title: 'HR Analytics Platform', org: 'Moreno Baldivieso', hue: 80, tags: ['data'], media: { type: 'video', src: 'media/hr-analytics-platform.mp4', poster: 'media/hr-analytics-platform.jpg', note: 'fictitious' },
    role: { es: 'Prueba técnica · 2026', en: 'Technical test · 2026' },
    problem: { es: 'Convertir un CSV crudo de recursos humanos en información útil para dos audiencias con necesidades distintas, en solo 3 días.', en: 'Turn a raw HR CSV into useful information for two audiences with different needs, in just 3 days.' },
    solution: { es: 'Plataforma de analítica en Python (Streamlit, Dash y Flask) con dashboards y KPIs separados: una vista operativa para RR.HH. y una vista ejecutiva para el Directorio.', en: 'Python analytics platform (Streamlit, Dash and Flask) with separate dashboards and KPIs: an operational view for HR and an executive view for the Board.' },
    metrics: [
      { v: { es: '3 días', en: '3 days' }, l: { es: 'de CSV crudo a plataforma entregada', en: 'from raw CSV to delivered platform' } },
      { v: '2', l: { es: 'audiencias: RR.HH. y Directorio', en: 'audiences: HR and the Board' } },
    ],
    stack: ['Python', 'pandas', 'Streamlit', 'Dash', 'Flask', 'KPI Development'] },
  { slug: 'bolivia-education-analysis', title: 'Bolivia Education Analysis', org: { es: 'Proyecto propio', en: 'Personal project' }, hue: 20, tags: ['data'], media: null, link: 'https://github.com/narichunarze/bolivia-education-analysis',
    role: { es: 'Proyecto propio', en: 'Personal project' },
    problem: { es: '¿Qué tan grande es la diferencia en abandono escolar entre la educación pública y la privada en Bolivia, y se mantiene en el tiempo?', en: 'How large is the school dropout gap between public and private education in Bolivia, and does it persist over time?' },
    solution: { es: 'Pipeline de datos sobre 5 datasets oficiales del INE (21,000+ filas) que compara 9 departamentos entre 2011 y 2024 e identifica una brecha estructural.', en: 'Data pipeline over 5 official INE datasets (21,000+ rows) comparing 9 departments from 2011 to 2024 and identifying a structural gap.' },
    metrics: [
      { v: '~2x', l: { es: 'brecha de abandono: pública vs. privada', en: 'dropout gap: public vs. private' } },
      { v: '21K+', l: { es: 'filas de 5 datasets del INE', en: 'rows from 5 INE datasets' } },
      { v: '9', l: { es: 'departamentos · 2011–2024', en: 'departments · 2011–2024' } },
    ],
    stack: ['Python', 'pandas', 'ETL', 'EDA', 'Data Visualization'] },
];

export const EXPERIENCE = [
  { date: { es: 'jul – ago 2026', en: 'Jul – Aug 2026' }, org: 'Moreno Baldivieso', role: 'AI Developer', loc: { es: 'Santa Cruz de la Sierra', en: 'Santa Cruz de la Sierra' },
    bullets: [
      { es: 'Construí un sistema de automatización de facturas con Claude AI y reglas de negocio, con objetivo de −75% en tiempo de procesamiento (8 h → 2 h por cliente/semana) y ~95% de precisión sobre ~90–120 facturas de 21 clientes.', en: 'Built an AI invoice automation system with Claude AI and business rules, targeting a 75% cut in processing time (8 h → 2 h per client/week) and ~95% accuracy across ~90–120 invoices for 21 clients.' },
      { es: 'Automaticé la obtención de datos del SIAT, la extracción de PDF/CSV y la preparación de plantillas de Odoo con Python, cron y web scraping, con revisión humana para predicciones de baja confianza.', en: 'Automated SIAT data retrieval, PDF/CSV extraction and Odoo template preparation with Python, cron and web scraping, with human-in-the-loop review for low-confidence predictions.' },
      { es: 'Construí una plataforma de HR analytics desde un CSV crudo, con dashboards y KPIs separados para RR.HH. y el Directorio, en una prueba técnica de 3 días.', en: 'Built an HR analytics platform from a raw CSV, with separate dashboards and KPIs for HR and the Board, within a 3-day technical test.' },
    ], cases: ['invoice-automation-ai', 'hr-analytics-platform'] },
  { date: { es: 'oct 2025 – jun 2026', en: 'Oct 2025 – Jun 2026' }, org: 'LoopStyle', role: 'AI Developer', loc: { es: 'Santa Cruz de la Sierra', en: 'Santa Cruz de la Sierra' },
    bullets: [
      { es: 'Diseñé y construí un pipeline NLP de punta a punta para análisis de sentimiento en reseñas, con fine-tuning de modelos BERT multilingües.', en: 'Designed and built an end-to-end NLP pipeline for review sentiment analysis, fine-tuning multilingual BERT models.' },
      { es: 'Desarrollé modelos de forecasting con Prophet para predecir tendencias de demanda y agotamiento de stock.', en: 'Developed Prophet forecasting models to predict demand trends and stock depletion.' },
    ], cases: ['review-sentiment-mbert', 'demand-forecast-prophet'] },
  { date: { es: 'may – sep 2025', en: 'May – Sep 2025' }, org: 'Telecel S.A. (Tigo)', role: { es: 'Pasante, Fraude e Investigaciones', en: 'Intern, Fraud & Investigations' }, loc: { es: 'Santa Cruz de la Sierra', en: 'Santa Cruz de la Sierra' },
    bullets: [
      { es: 'Lideré la intranet de Compliance y Fraude en SharePoint, de requerimientos a capacitación: +40% en eficiencia de búsqueda de información y 100% de adherencia a políticas.', en: 'Led a Compliance & Fraud intranet on SharePoint from requirements to user training: +40% information retrieval efficiency and 100% policy adherence.' },
      { es: 'Automaticé flujos regulatorios con Power Automate y Python, reduciendo 95% las tareas manuales y mejorando la trazabilidad de notificaciones y capacitaciones.', en: 'Automated regulatory workflows with Power Automate and Python, cutting manual tasks by 95% and improving traceability of notifications and training.' },
    ], cases: [] },
  { date: { es: 'ene – abr 2025', en: 'Jan – Apr 2025' }, org: { es: 'Organización de los Estados Americanos', en: 'Organization of American States' }, role: { es: 'Pasante, Departamento de Servicios Generales', en: 'Department of General Services Intern' }, loc: { es: 'Remoto · Washington DC', en: 'Remote · Washington DC' },
    bullets: [
      { es: 'Automaticé 5+ flujos de trabajo con Power Automate.', en: 'Automated 5+ workflows with Power Automate.' },
      { es: 'Rediseñé sitios de SharePoint y construí dashboards de Power BI para KPIs operativos de equipos internacionales.', en: 'Redesigned SharePoint sites and built Power BI dashboards for operational KPIs across international teams.' },
    ], cases: [] },
];

export const STACK = [
  { k: 'ai_ml', title: { es: 'IA y Machine Learning', en: 'AI & Machine Learning' }, items: ['Generative AI', 'Agentic AI', 'LLMs', 'RAG', 'Prompt Engineering', 'NLP', 'BERT / mBERT', 'Sentiment Analysis', 'SVM', 'Logistic Regression', 'Naive Bayes', 'Neural Networks', 'Prophet', 'Predictive Analytics', 'Human-in-the-loop'] },
  { k: 'data_bi', title: { es: 'Datos y BI', en: 'Data & BI' }, items: ['Python', 'pandas', 'SQL', 'Power BI', 'Statistical Analysis', 'Data Visualization', 'KPI Development', 'Data Cleaning & ETL', 'EDA'] },
  { k: 'automation', title: { es: 'Automatización e ingeniería', en: 'Automation & engineering' }, items: ['Power Automate', 'Web Scraping', 'Cron', 'Docker / Compose', 'REST APIs', 'React', 'Node.js', 'TypeScript', 'Odoo', 'Git / GitHub', 'Linux'] },
  { k: 'product', title: { es: 'Producto y procesos', en: 'Product & process' }, items: ['Requirements Gathering', 'Stakeholder Reporting', 'ITIL', 'Process Optimization', 'Project Management', 'Cross-functional Collaboration'] },
];

export const LEADERSHIP = [
  { kicker: { es: 'Programa internacional · 2024', en: 'International program · 2024' }, mark: { es: '1.º', en: '1st' }, title: 'Huawei Seeds for the Future',
    role: { es: 'Team Leader · Ganadores a nivel nacional', en: 'Team Leader · National winners' },
    desc: { es: 'Representé a Bolivia en el programa internacional de tecnología y liderazgo de Huawei como Team Leader. Nuestro equipo ganó a nivel nacional.', en: 'Represented Bolivia in Huawei’s international technology and leadership program as Team Leader. Our team won at the national level.' } },
  { kicker: { es: 'Hackatón · 2023', en: 'Hackathon · 2023' }, mark: { es: '2.º', en: '2nd' }, title: 'NASA Space Apps Challenge',
    role: { es: 'Segundo lugar · Santa Cruz 2023', en: 'Second place · Santa Cruz 2023' },
    desc: { es: 'Solución tecnológica a un problema del mundo real, desarrollada en el hackatón internacional de la NASA y reconocida con el segundo lugar en la sede Santa Cruz.', en: 'A technology solution to a real-world problem, built at NASA’s international hackathon and awarded second place in Santa Cruz.' } },
];
export const EDU = [
  { label: { es: 'Título', en: 'Degree' }, title: { es: 'Ingeniería en Sistemas Computacionales', en: 'Computational Systems Engineering' }, sub: { es: 'Universidad Privada Boliviana (UPB) · 2022–2026 · Egresada en junio de 2026', en: 'Universidad Privada Boliviana (UPB) · 2022–2026 · Program completed June 2026' } },
];

