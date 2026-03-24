/**
 * WebCalc – Website Price Calculator
 * File: js/main.js
 * 
 * 📝 PERSONALIZATION GUIDE:
 * 1. CHANGE PRICES: Edit the 'PRICING' object values below.
 * 2. CHANGE TEXT: Edit the 'TRANSLATIONS' object below.
 */

'use strict';

/* ============================================================
   1. TRANSLATIONS (Dutch & English)
   ─────────────────────────────────────────────────────────────
   Central place for all UI text. No Arabic included.
============================================================ */
const TRANSLATIONS = {
  nl: {
    // Header
    header_title: 'Website Prijs Calculator',
    
    // Hero
    hero_title: 'Bereken de geschatte prijs van jouw website',
    hero_text: 'Kies het type website, het aantal pagina’s en extra functies om een snelle prijsindicatie en geschatte oplevertijd te ontvangen.',
    
    // Steps
    step_type: 'Type website',
    step_pages: 'Aantal pagina’s',
    step_features: 'Extra functies',
    
    // Type Content
    type_business: 'Zakelijke Website',
    type_portfolio: 'Portfolio Website',
    type_landing: 'Landing Pagina',
    type_informational: 'Informatieve Website',
    type_ecommerce: 'Kleine Webshop',
    
    // Prices & Extras
    type_business_price: '€250',
    type_portfolio_price: '€180',
    type_landing_price: '€120',
    type_informational_price: '€200',
    type_ecommerce_price: '€450',
    pages_1_extra: 'Inbegrepen',
    pages_3_extra: '+€80',
    pages_5_extra: '+€150',
    pages_7_extra: '+€250',
    feat_contact_price: '+€40',
    feat_whatsapp_price: '+€20',
    feat_gallery_price: '+€35',
    feat_multilang_price: '+€120',
    feat_booking_price: '+€150',
    feat_seo_price: '+€60',
    feat_design_price: '+€180',
    feat_blog_price: '+€100',

    // Page Content
    pages_1: '1 pagina',
    pages_3: '3 pagina’s',
    pages_5: '5 pagina’s',
    pages_7: '7+ pagina’s',

    // Features
    feat_contact: 'Contactformulier',
    feat_whatsapp: 'WhatsApp Integratie',
    feat_gallery: 'Galerij Sectie',
    feat_multilang: 'Meertalige Ondersteuning',
    feat_booking: 'Boekingsformulier',
    feat_seo: 'Basis SEO Setup',
    feat_design: 'Maatwerk Ontwerp',
    feat_blog: 'Blog Sectie',

    // Buttons & Labels
    calculate_btn: 'Bereken prijs',
    reset_btn: 'Reset',
    validation_message: 'Selecteer alstublieft een websitetype en pagina\'s.',

    // Results
    result_title: 'Jouw schatting',
    result_price: 'Geschatte prijs',
    result_delivery: 'Geschatte oplevertijd',
    result_options: 'Geselecteerde opties',
    empty_state: 'Maak je keuzes en klik op “Bereken prijs” om een schatting te zien.',
    disclaimer: 'Dit is een geschatte prijs ter demonstratie. De uiteindelijke prijs kan variëren afhankelijk van de omvang en vereisten van het project.',
    cta_text: 'Interesse in een website? Neem contact op voor een offerte op maat.',
    
    // Units
    day: 'dag',
    days: 'dagen',
    week: 'week',
    weeks: 'weken',
    included: 'Inbegrepen',
    result_total_label: 'Totaal prijs'
  },
  en: {
    // Header
    header_title: 'Website Price Calculator',
    
    // Hero
    hero_title: 'Calculate the estimated price of your website',
    hero_text: 'Choose the website type, number of pages, and extra features to receive a quick price estimate and delivery time.',
    
    // Steps
    step_type: 'Website type',
    step_pages: 'Number of pages',
    step_features: 'Extra features',
    
    // Type Content
    type_business: 'Business Website',
    type_portfolio: 'Portfolio Website',
    type_landing: 'Landing Page',
    type_informational: 'Informational Website',
    type_ecommerce: 'Small E-commerce Website',
    
    // Prices & Extras
    type_business_price: '€250',
    type_portfolio_price: '€180',
    type_landing_price: '€120',
    type_informational_price: '€200',
    type_ecommerce_price: '€450',
    pages_1_extra: 'Included',
    pages_3_extra: '+€80',
    pages_5_extra: '+€150',
    pages_7_extra: '+€250',
    feat_contact_price: '+€40',
    feat_whatsapp_price: '+€20',
    feat_gallery_price: '+€35',
    feat_multilang_price: '+€120',
    feat_booking_price: '+€150',
    feat_seo_price: '+€60',
    feat_design_price: '+€180',
    feat_blog_price: '+€100',

    // Page Content
    pages_1: '1 page',
    pages_3: '3 pages',
    pages_5: '5 pages',
    pages_7: '7+ pages',

    // Features
    feat_contact: 'Contact Form',
    feat_whatsapp: 'WhatsApp Integration',
    feat_gallery: 'Gallery Section',
    feat_multilang: 'Multi-language Support',
    feat_booking: 'Booking Form',
    feat_seo: 'Basic SEO Setup',
    feat_design: 'Custom Design',
    feat_blog: 'Blog Section',

    // Buttons & Labels
    calculate_btn: 'Calculate Price',
    reset_btn: 'Reset',
    validation_message: 'Please select a website type and pages.',

    // Results
    result_title: 'Your estimate',
    result_price: 'Estimated Price',
    result_delivery: 'Estimated Delivery Time',
    result_options: 'Selected Options',
    empty_state: 'Make your selections and click “Calculate Price” to see your estimate.',
    disclaimer: 'This is an estimated price for demonstration purposes. Final pricing may vary depending on project scope and requirements.',
    cta_text: 'Interested in a website? Get in touch for a custom quote.',

    // Units
    day: 'day',
    days: 'days',
    week: 'week',
    weeks: 'weeks',
    included: 'Included',
    result_total_label: 'Total Price'
  }
};

/* ============================================================
   2. PRICING CONFIGURATION
   ─────────────────────────────────────────────────────────────
============================================================ */
const PRICING = {
  types: {
    business:      { label: { nl: 'Zakelijke Website', en: 'Business Website' },       base: 250, days: 4 },
    portfolio:     { label: { nl: 'Portfolio Website', en: 'Portfolio Website' },      base: 180, days: 3 },
    landing:       { label: { nl: 'Landing Pagina',    en: 'Landing Page' },           base: 120, days: 2 },
    informational: { label: { nl: 'Informatieve Website', en: 'Informational Website' }, base: 200, days: 3 },
    ecommerce:     { label: { nl: 'Kleine Webshop',    en: 'Small E-commerce' },       base: 450, days: 7 },
  },
  pages: {
    1: { label: { nl: '1 pagina',    en: '1 page' },    extra: 0,   days: 0 },
    3: { label: { nl: '3 pagina’s',  en: '3 pages' },   extra: 80,  days: 1 },
    5: { label: { nl: '5 pagina’s',  en: '5 pages' },   extra: 150, days: 2 },
    7: { label: { nl: '7+ pagina’s', en: '7+ pages' },  extra: 250, days: 3 },
  },
  features: {
    contact:   { label: { nl: 'Contactformulier',    en: 'Contact Form' },          extra: 40,  days: 1 },
    whatsapp:  { label: { nl: 'WhatsApp Integratie', en: 'WhatsApp Integration' },  extra: 20,  days: 0 },
    gallery:   { label: { nl: 'Galerij Sectie',      en: 'Gallery Section' },       extra: 35,  days: 1 },
    multilang: { label: { nl: 'Meertalige Support',  en: 'Multi-language Support' },extra: 120, days: 2 },
    booking:   { label: { nl: 'Boekingsformulier',   en: 'Booking Form' },          extra: 150, days: 2 },
    seo:       { label: { nl: 'Basis SEO Opzet',     en: 'Basic SEO Setup' },       extra: 60,  days: 1 },
    design:    { label: { nl: 'Maatwerk Ontwerp',    en: 'Custom Design' },         extra: 180, days: 2 },
    blog:      { label: { nl: 'Blog Sectie',         en: 'Blog Section' },          extra: 100, days: 2 },
  },
};


/* ============================================================
   3. APP STATE
============================================================ */
const state = {
  currentLang:      'nl',   // Default: Dutch
  selectedType:     null,
  selectedPages:    null,
  selectedFeatures: [],
};


/* ============================================================
   4. DOM ELEMENT CACHE
============================================================ */
const dom = {
  // --- Language Toggle ---
  langButtons:    document.querySelectorAll('.lang-btn'),

  // --- Input Elements ---
  typeCards:      document.querySelectorAll('.type-card'),
  pageCards:      document.querySelectorAll('.page-card'),
  featureInputs:  document.querySelectorAll('.feature-card input[type="checkbox"]'),

  // --- Buttons & Messages ---
  btnCalculate:   document.getElementById('btn-calculate'),
  validationMsg:  document.getElementById('calc-validation'), // Corrected ID
  btnReset:       document.getElementById('btn-reset'),

  // --- UI Indicators ---
  progressSteps:      document.querySelectorAll('.progress-step'),
  progressConnectors: document.querySelectorAll('.progress-connector'),

  // --- Result Display ---
  resultSection:  document.getElementById('result-section'),
  resultPrice:    document.getElementById('result-price'),
  resultTime:     document.getElementById('result-time'),
  summaryList:    document.getElementById('summary-list'),
};


/* ============================================================
   5. MULTI-LANGUAGE SYSTEM
   ─────────────────────────────────────────────────────────────
============================================================ */

/**
 * Switch the app language.
 * @param {string} lang 'nl' or 'en'
 */
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  state.currentLang = lang;

  // Update button active states
  dom.langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  applyTranslations();

  // If results are already visible, recalculate labels to update summary
  if (!dom.resultSection.classList.contains('hidden')) {
    showResult();
  }
}

/**
 * Apply translations to all marked elements.
 */
function applyTranslations() {
  const t = TRANSLATIONS[state.currentLang];
  
  // Update elements with data-t attribute
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.dataset.t;
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Update dynamic placeholders or attributes
  document.querySelectorAll('[data-t-aria]').forEach(el => {
    const key = el.dataset.tAria;
    if (t[key]) el.setAttribute('aria-label', t[key]);
  });
}

/**
 * Get a specific translation string.
 */
function getT(key) {
  return TRANSLATIONS[state.currentLang][key] || key;
}


/* ============================================================
   6. UTILITY FUNCTIONS
============================================================ */

function formatPrice(amount) {
  return '€' + amount.toLocaleString('nl-NL');
}

function formatDays(days) {
  const t = TRANSLATIONS[state.currentLang];
  if (days < 7) {
    return days + ' ' + (days === 1 ? t.day : t.days);
  }
  const weeks = Math.floor(days / 7);
  const remainder = days % 7;
  let result = weeks + ' ' + (weeks === 1 ? t.week : t.weeks);
  if (remainder > 0) {
    result += ' + ' + remainder + ' ' + (remainder === 1 ? t.day : t.days);
  }
  return result;
}

function scrollTo(el) {
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


/* ============================================================
   7. SELECTION HANDLERS
============================================================ */

function handleTypeSelect(e) {
  const card = e.currentTarget;
  const type = card.dataset.type;

  state.selectedType = type;

  dom.typeCards.forEach(c => {
    c.classList.toggle('selected', c === card);
    c.setAttribute('aria-pressed', c === card ? 'true' : 'false');
  });

  hideValidationMsg();
  updateProgressBar();
  
  if (!state.selectedPages) {
    setTimeout(() => scrollTo(document.getElementById('step-pages')), 300);
  }
}

function handlePagesSelect(e) {
  const card = e.currentTarget;
  const pages = card.dataset.pages;

  state.selectedPages = pages;

  dom.pageCards.forEach(c => {
    c.classList.toggle('selected', c === card);
    c.setAttribute('aria-pressed', c === card ? 'true' : 'false');
  });

  hideValidationMsg();
  updateProgressBar();

  if (state.selectedType) {
    setTimeout(() => scrollTo(document.getElementById('step-features')), 300);
  }
}

function handleFeatureToggle(e) {
  const input = e.target;
  const feature = input.dataset.feature || input.value;

  if (input.checked) {
    state.selectedFeatures.push(feature);
  } else {
    state.selectedFeatures = state.selectedFeatures.filter(f => f !== feature);
  }
}


/* ============================================================
   8. PROGRESS BAR
============================================================ */

function updateProgressBar() {
  const steps = dom.progressSteps;
  const connectors = dom.progressConnectors;

  if (state.selectedType) {
    steps[0].classList.add('done');
    steps[0].classList.remove('active');
    connectors[0]?.classList.add('active');
    steps[1].classList.add('active');
  }

  if (state.selectedPages) {
    steps[1].classList.add('done');
    steps[1].classList.remove('active');
    connectors[1]?.classList.add('active');
    steps[2].classList.add('active');
  }
}


/* ============================================================
   9. VALIDATION
============================================================ */

function showValidationMsg() {
  if (!dom.validationMsg) return;
  dom.validationMsg.classList.remove('hidden');
  // Update text
  const textSpan = dom.validationMsg.querySelector('span');
  if (textSpan) textSpan.innerHTML = getT('validation_message');
}

function hideValidationMsg() {
  if (dom.validationMsg) dom.validationMsg.classList.add('hidden');
}

function validate() {
  if (!state.selectedType || !state.selectedPages) {
    showValidationMsg();
    if (!state.selectedType) {
      scrollTo(document.getElementById('step-type'));
    } else if (!state.selectedPages) {
      scrollTo(document.getElementById('step-pages'));
    }
    return false;
  }
  return true;
}


/* ============================================================
   10. PRICE CALCULATION
============================================================ */

function calculate() {
  const typeData = PRICING.types[state.selectedType];
  let totalPrice = typeData.base;
  let totalDays  = typeData.days;

  const pagesData = PRICING.pages[state.selectedPages];
  totalPrice += pagesData.extra;
  totalDays  += pagesData.days;

  state.selectedFeatures.forEach(featureKey => {
    const featureData = PRICING.features[featureKey];
    if (featureData) {
      totalPrice += featureData.extra;
      totalDays  += featureData.days;
    }
  });

  return { totalPrice, totalDays };
}


/* ============================================================
   11. RESULT RENDERING
============================================================ */

function showResult() {
  const { totalPrice, totalDays } = calculate();

  dom.resultPrice.textContent = formatPrice(totalPrice);
  dom.resultTime.textContent  = formatDays(totalDays);

  const summaryHTML = buildSummaryHTML(totalPrice);
  dom.summaryList.innerHTML = summaryHTML;

  dom.resultSection.classList.remove('hidden');
  setTimeout(() => scrollTo(dom.resultSection), 100);
}

function buildSummaryHTML(totalPrice) {
  const l = state.currentLang;
  let html = '';

  const typeData = PRICING.types[state.selectedType];
  html += buildSummaryItemHTML(typeData.label[l], formatPrice(typeData.base));

  const pagesData = PRICING.pages[state.selectedPages];
  html += buildSummaryItemHTML(
    pagesData.label[l],
    pagesData.extra > 0 ? '+' + formatPrice(pagesData.extra) : getT('included')
  );

  if (state.selectedFeatures.length > 0) {
    state.selectedFeatures.forEach(featureKey => {
      const feat = PRICING.features[featureKey];
      if (feat) {
        html += buildSummaryItemHTML(feat.label[l], '+' + formatPrice(feat.extra));
      }
    });
  }

  html += `
    <li class="summary-total">
      <span class="summary-total-label">${getT('result_total_label')}</span>
      <span class="summary-total-price">${formatPrice(totalPrice)}</span>
    </li>
  `;

  return html;
}

function buildSummaryItemHTML(label, priceStr) {
  return `
    <li class="summary-item">
      <span class="summary-item-label">${label}</span>
      <span class="summary-item-price">${priceStr}</span>
    </li>
  `;
}


/* ============================================================
   12. RESET & EVENT LISTENERS
============================================================ */

function resetCalculator() {
  state.selectedType     = null;
  state.selectedPages    = null;
  state.selectedFeatures = [];

  dom.typeCards.forEach(c => {
    c.classList.remove('selected');
    c.setAttribute('aria-pressed', 'false');
  });

  dom.pageCards.forEach(c => {
    c.classList.remove('selected');
    c.setAttribute('aria-pressed', 'false');
  });

  dom.featureInputs.forEach(input => {
    input.checked = false;
  });

  dom.resultSection.classList.add('hidden');
  dom.summaryList.innerHTML = '';

  dom.progressSteps.forEach((step, i) => {
    step.classList.remove('done', 'active');
    if (i === 0) step.classList.add('active');
  });
  dom.progressConnectors.forEach(c => c.classList.remove('active'));

  hideValidationMsg();
  scrollTo(document.getElementById('step-type'));
}

// Wire up events
dom.typeCards.forEach(card => card.addEventListener('click', handleTypeSelect));
dom.pageCards.forEach(card => card.addEventListener('click', handlePagesSelect));
dom.featureInputs.forEach(input => input.addEventListener('change', handleFeatureToggle));

dom.btnCalculate.addEventListener('click', () => {
  if (validate()) showResult();
});

dom.btnReset.addEventListener('click', resetCalculator);

dom.langButtons.forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// Keyboard support
[...dom.typeCards, ...dom.pageCards].forEach(card => {
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.click();
    }
  });
});


/* ============================================================
   13. INITIALIZATION
============================================================ */

(function init() {
  // Initialize with Dutch
  setLanguage('nl');

  // Animation stagger
  document.querySelectorAll('.calc-step').forEach((step, i) => {
    step.style.animationDelay = `${i * 0.1}s`;
  });
})();
