(() => {
  const GOLD = "#C5A566";

  function injectStyles() {
    if (document.getElementById("jc-tools-styles")) return;

    const style = document.createElement("style");
    style.id = "jc-tools-styles";
    style.textContent = `
      #herramientas {
        background: #ffffff;
        border-top: 1px solid #e5e5e5;
        color: #1a1a1a;
        padding: 100px 0;
      }

      .jc-tools-wrap {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 24px;
      }

      .jc-tools-kicker {
        color: ${GOLD};
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        margin: 0 0 24px;
      }

      .jc-tools-title {
        max-width: 860px;
        margin: 0;
        font-size: clamp(2.35rem, 5vw, 4.6rem);
        line-height: 0.95;
        font-weight: 900;
        letter-spacing: -0.035em;
      }

      .jc-tools-title__accent {
        color: ${GOLD};
      }

      .jc-tools-intro {
        max-width: 720px;
        margin: 28px 0 72px;
        color: #4a4a4a;
        font-size: clamp(1.05rem, 2vw, 1.35rem);
        line-height: 1.65;
      }

      .jc-tools-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1px;
        background: #e5e5e5;
        border: 1px solid #e5e5e5;
      }

      .jc-tool-card {
        min-height: 360px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background: #ffffff;
        color: #1a1a1a;
        padding: 40px;
        text-decoration: none;
        transition: background-color 240ms ease, color 240ms ease, transform 240ms ease;
      }

      a.jc-tool-card:hover {
        background: #1a1a1a;
        color: #ffffff;
        transform: translateY(-4px);
      }

      .jc-tool-icon {
        color: ${GOLD};
        font-family: "Material Symbols Outlined";
        font-size: 44px;
        line-height: 1;
        margin-bottom: 32px;
      }

      .jc-tool-card h3 {
        margin: 0 0 18px;
        font-size: 26px;
        line-height: 1.08;
        font-weight: 900;
        letter-spacing: -0.02em;
      }

      .jc-tool-card p {
        margin: 0 0 36px;
        color: #4a4a4a;
        font-size: 16px;
        line-height: 1.65;
        transition: color 240ms ease;
      }

      a.jc-tool-card:hover p {
        color: rgba(255, 255, 255, 0.76);
      }

      .jc-tool-action {
        margin-top: auto;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: inherit;
        font-size: 12px;
        font-weight: 900;
        letter-spacing: 0.18em;
        text-transform: uppercase;
      }

      .jc-tool-card[aria-disabled="true"] .jc-tool-action {
        color: #9a9a9a;
      }

      @media (max-width: 900px) {
        #herramientas { padding: 80px 0; }
        .jc-tools-grid { grid-template-columns: 1fr; }
        .jc-tool-card { min-height: auto; padding: 32px; }
      }
    `;
    document.head.appendChild(style);
  }

  function replaceFirstText(node, text) {
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
    const firstText = walker.nextNode();
    if (firstText) firstText.nodeValue = text;
  }

  function ensureToolsNav() {
    document.querySelectorAll('header a[href="/#faq"]').forEach((faqLink) => {
      const parent = faqLink.parentElement;
      if (!parent || parent.querySelector('a[href="/#herramientas"]')) return;

      const link = faqLink.cloneNode(true);
      link.setAttribute("href", "/#herramientas");
      replaceFirstText(link, "Herramientas");
      faqLink.insertAdjacentElement("afterend", link);
    });
  }

  function ensureToolsSection() {
    if (document.getElementById("herramientas")) return;

    const faq = document.getElementById("faq");
    if (!faq || !faq.parentElement) return;

    const section = document.createElement("section");
    section.id = "herramientas";
    section.innerHTML = `
      <div class="jc-tools-wrap">
        <p class="jc-tools-kicker">Herramientas</p>
        <h2 class="jc-tools-title">Calculadoras para <span class="jc-tools-title__accent">decidir con números</span>, no por intuición</h2>
        <p class="jc-tools-intro">Recursos prácticos para medir ahorro, vulnerabilidad financiera y escenarios hipotecarios antes de tomar decisiones importantes.</p>
        <div class="jc-tools-grid">
          <a class="jc-tool-card" href="/herramientas/ahorro-potencial/">
            <span class="jc-tool-icon" aria-hidden="true">savings</span>
            <h3>Calculadora de ahorro potencial</h3>
            <p>Calcula cuánto dinero se escapa en pequeños gastos recurrentes y visualiza tu ahorro anual recuperable.</p>
            <span class="jc-tool-action">Abrir calculadora <span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span></span>
          </a>
          <article class="jc-tool-card" aria-disabled="true">
            <span class="jc-tool-icon" aria-hidden="true">health_and_safety</span>
            <h3>Test de vulnerabilidad financiera</h3>
            <p>Detecta puntos débiles en ingresos, protección y planificación para saber dónde conviene actuar primero.</p>
            <span class="jc-tool-action">Próximamente</span>
          </article>
          <article class="jc-tool-card" aria-disabled="true">
            <span class="jc-tool-icon" aria-hidden="true">real_estate_agent</span>
            <h3>Calculadora hipotecaria</h3>
            <p>Estima cuota, intereses y escenarios de financiación para valorar una hipoteca con más criterio.</p>
            <span class="jc-tool-action">Próximamente</span>
          </article>
        </div>
      </div>
    `;

    faq.insertAdjacentElement("afterend", section);
  }

  function enhanceHome() {
    if (window.location.pathname !== "/") return;
    injectStyles();
    ensureToolsNav();
    ensureToolsSection();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", enhanceHome, { once: true });
  } else {
    enhanceHome();
  }

  const observer = new MutationObserver(() => enhanceHome());
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
