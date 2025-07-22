import React, { useState } from 'react';
import './App.css'

/**
 * @typedef {Object} Translation
 * @property {string} heroTitle
 * @property {string} heroSubtitle
 * @property {string} join
 * @property {string} surrender
 * @property {string} featuresTitle
 * @property {string} brain
 * @property {string} brainDesc
 * @property {string} rays
 * @property {string} raysDesc
 * @property {string} mind
 * @property {string} mindDesc
 * @property {string} testZone
 * @property {string} dropdownShow
 * @property {string} dropdownHide
 * @property {string} martian
 * @property {string} venusian
 * @property {string} earthling
 * @property {string} textShow
 * @property {string} textHide
 * @property {string} line1
 * @property {string} line2
 * @property {string} line3
 * @property {string} click
 * @property {string} times
 * @property {string} martianRed
 * @property {string} martianGreen
 * @property {string} footer
 * @property {string} lang
 */

/** @type {{ EN: Translation, RU: Translation }} */
const translations = {
  EN: {
    heroTitle: 'MARS ATTACKS!',
    heroSubtitle: 'THE INVASION HAS BEGUN • RESISTANCE IS FUTILE • WELCOME YOUR NEW OVERLORDS',
    join: 'JOIN THE INVASION',
    surrender: 'SURRENDER NOW',
    featuresTitle: 'ALIEN TECHNOLOGY',
    brain: 'BRAIN EXTRACTION',
    brainDesc: 'Advanced Martian technology for efficient human brain harvesting and analysis.',
    rays: 'DEATH RAYS',
    raysDesc: 'State-of-the-art disintegration weapons that reduce humans to colorful skeletons.',
    mind: 'MIND CONTROL',
    mindDesc: 'Hypnotic Martian powers to bend human will and establish our galactic empire.',
    testZone: 'INTERACTIVE TEST ZONE',
    dropdownShow: 'Show Drop-down',
    dropdownHide: 'Hide Drop-down',
    martian: 'Martian',
    venusian: 'Venusian',
    earthling: 'Earthling',
    textShow: 'Show Text Lines',
    textHide: 'Hide Text Lines',
    line1: '• The Martians are coming!',
    line2: '• Hide your cows!',
    line3: '• Prepare the death rays!',
    click: 'Clicked',
    times: 'times',
    martianRed: 'Martian Red',
    martianGreen: 'Martian Green',
    footer: 'ACK ACK ACK! • MARS EMPIRE © 2024 • ALL HUMANS RESERVED FOR EXPERIMENTATION',
    lang: 'RU'
  },
  RU: {
    heroTitle: 'НАПАДЕНИЕ МАРСА!',
    heroSubtitle: 'НАЧАЛОСЬ ВТОРЖЕНИЕ • СОПРОТИВЛЕНИЕ БЕСПОЛЕЗНО • ПРИВЕТСТВУЙТЕ НОВЫХ ПОВЕЛИТЕЛЕЙ',
    join: 'ПРИСОЕДИНИТЬСЯ К ВТОРЖЕНИЮ',
    surrender: 'СДАТЬСЯ СЕЙЧАС',
    featuresTitle: 'ИННОВАЦИИ ИНОПЛАНЕТЯН',
    brain: 'ИЗВЛЕЧЕНИЕ МОЗГА',
    brainDesc: 'Передовые марсианские технологии для эффективного сбора и анализа человеческих мозгов.',
    rays: 'ЛУЧИ СМЕРТИ',
    raysDesc: 'Современное оружие дезинтеграции, превращающее людей в цветные скелеты.',
    mind: 'КОНТРОЛЬ РАЗУМА',
    mindDesc: 'Гипнотические силы марсиан для подчинения человеческой воли и создания галактической империи.',
    testZone: 'ИНТЕРАКТИВНАЯ ЗОНА ТЕСТА',
    dropdownShow: 'Показать выпадающий список',
    dropdownHide: 'Скрыть выпадающий список',
    martian: 'Марсианин',
    venusian: 'Венерианец',
    earthling: 'Землянин',
    textShow: 'Показать строки текста',
    textHide: 'Скрыть строки текста',
    line1: '• Марсиане идут!',
    line2: '• Прячьте коров!',
    line3: '• Готовьте лучи смерти!',
    click: 'Кликов',
    times: '',
    martianRed: 'Марсианский Красный',
    martianGreen: 'Марсианский Зелёный',
    footer: 'АК АК АК! • ИМПЕРИЯ МАРСА © 2024 • ВСЕ ЛЮДИ ЗАРЕЗЕРВИРОВАНЫ ДЛЯ ЭКСПЕРИМЕНТОВ',
    lang: 'EN'
  }
};

function App() {
  const [lang, setLang] = useState('EN');
  /** @type {Translation} */
  const t = translations[lang];
  return (
    <div className="mars-landing">
      <button className="lang-switch-btn" onClick={() => setLang(l => l === 'EN' ? 'RU' : 'EN')}>
        {t.lang}
      </button>
      {/* Hero Section */}
      <section className="hero">
        <div className="alien-overlay"></div>
        <div className="hero-content">
          <div className="ufo">🛸</div>
          <h1 className="hero-title">{t.heroTitle}</h1>
          <p className="hero-subtitle">
            {t.heroSubtitle}
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">{t.join}</button>
            <button className="btn btn-secondary">{t.surrender}</button>
          </div>
        </div>
        <div className="mars-bg"></div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">{t.featuresTitle}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👽</div>
              <h3>{t.brain}</h3>
              <p>{t.brainDesc}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛸</div>
              <h3>{t.rays}</h3>
              <p>{t.raysDesc}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔴</div>
              <h3>{t.mind}</h3>
              <p>{t.mindDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Test Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">{t.testZone}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', marginTop: '2rem' }}>
            {/* Dropdown simulation */}
            <DropdownSimulator t={t} />
            {/* Text lines toggle */}
            <TextLinesToggle t={t} />
            {/* Click counter */}
            <ClickCounter t={t} />
            {/* Color toggle button */}
            <ColorToggleButton t={t} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  )
}

export default App

// DropdownSimulator: shows/hides a dropdown list
/** @param {{ t: Translation }} props */
function DropdownSimulator({ t }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button className="btn btn-primary" onClick={() => setShow(s => !s)}>
        {show ? t.dropdownHide : t.dropdownShow}
      </button>
      {show && (
        <select style={{ marginLeft: '1rem', padding: '0.5rem', fontSize: '1rem' }}>
          <option>{t.martian}</option>
          <option>{t.venusian}</option>
          <option>{t.earthling}</option>
        </select>
      )}
    </div>
  );
}

// TextLinesToggle: shows/hides several text lines
/** @param {{ t: Translation }} props */
function TextLinesToggle({ t }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button className="btn btn-secondary" onClick={() => setShow(s => !s)}>
        {show ? t.textHide : t.textShow}
      </button>
      {show && (
        <div style={{ marginTop: '0.5rem', color: '#ffff00', textAlign: 'left' }}>
          <div>{t.line1}</div>
          <div>{t.line2}</div>
          <div>{t.line3}</div>
        </div>
      )}
    </div>
  );
}

// ClickCounter: button that counts clicks
/** @param {{ t: Translation }} props */
function ClickCounter({ t }) {
  const [count, setCount] = useState(0);
  return (
    <button className="btn btn-primary" onClick={() => setCount(c => c + 1)}>
      {t.click} {count} {t.times}
    </button>
  );
}

// ColorToggleButton: toggles color on click
/** @param {{ t: Translation }} props */
function ColorToggleButton({ t }) {
  const [on, setOn] = useState(false);
  return (
    <button
      className={on ? 'btn btn-secondary' : 'btn btn-primary'}
      onClick={() => setOn(o => !o)}
    >
      {on ? t.martianGreen : t.martianRed}
    </button>
  );
}
