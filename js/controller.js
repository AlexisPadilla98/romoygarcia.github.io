/* ============================================================
   CONTROLADOR (controller.js)
   Toma los datos del Modelo (data.js) y los inyecta en la Vista
   (index.html). No contiene datos propios ni define estilos:
   únicamente orquesta la información hacia el DOM.
   ============================================================ */

const SiteController = (function (model) {

  function digits(phone) {
    return phone.replace(/\D/g, "");
  }

  function renderIdentity() {
    document.title = model.firm.fullName + " — " + model.firm.tagline;

    document.querySelectorAll("[data-bind='logo']").forEach(el => {
      el.src = model.firm.logo;
      el.alt = model.firm.fullName;
    });

    document.querySelectorAll("[data-bind='firmName']").forEach(el => {
      el.textContent = model.firm.name;
    });

    document.querySelectorAll("[data-bind='tagline']").forEach(el => {
      el.textContent = model.firm.tagline;
    });

    const hero = document.querySelector("[data-bind='heroImage']");
    if (hero) hero.style.backgroundImage =
      `linear-gradient(180deg, rgba(17,23,30,0.55) 0%, rgba(17,23,30,0.72) 60%, rgba(17,23,30,0.92) 100%), url('${model.firm.heroImage}')`;

    const year = document.querySelector("[data-bind='year']");
    if (year) year.textContent = new Date().getFullYear();

    const copyHolder = document.querySelector("[data-bind='copyrightHolder']");
    if (copyHolder) copyHolder.textContent = model.firm.copyrightHolder;

    const legal = document.querySelector("[data-bind='legalNotice']");
    if (legal) legal.textContent = model.legalNotice;
  }

  function renderNav() {
    const navContainers = document.querySelectorAll("[data-bind='nav']");
    navContainers.forEach(container => {
      container.innerHTML = model.nav.map(item =>
        `<a href="${item.href}" class="nav-link">${item.label}</a>`
      ).join("");
    });
  }

  function renderPrimaryPhones() {
    const container = document.querySelector("[data-bind='callButtons']");
    if (!container) return;
    container.innerHTML = model.attorneys.map(a => `
      <a class="btn-call" href="tel:${digits(a.phone)}">
        <span class="btn-call-label">Llamar a ${a.name.replace('Lic. ', '')}</span>
        <span class="btn-call-number">${a.phoneDisplay}</span>
      </a>
    `).join("");
  }

  function renderAttorneys() {
    const container = document.querySelector("[data-bind='attorneys']");
    if (!container) return;
    container.innerHTML = model.attorneys.map(a => `
      <article class="attorney-card">
        <p class="attorney-role">${a.role}</p>
        <h3 class="attorney-name">${a.name}</h3>
        <p class="attorney-focus">${a.focus}</p>
        <p class="attorney-bio">${a.bio}</p>
        <a class="attorney-phone" href="tel:${digits(a.phone)}">${a.phoneDisplay}</a>
      </article>
    `).join("");
  }

  function renderPracticeAreas() {
    const container = document.querySelector("[data-bind='practiceAreas']");
    if (!container) return;
    container.innerHTML = model.practiceAreas.map(area => `
      <div class="area-card">
        <h3 class="area-title">${area.title}</h3>
        <p class="area-description">${area.description}</p>
      </div>
    `).join("");
  }

  function renderCredentials() {
    const container = document.querySelector("[data-bind='credentials']");
    if (!container) return;
    container.innerHTML = model.credentials.map(c => `
      <figure class="credential-card">
        <div class="credential-frame">
          <img src="${c.image}" alt="Cédula profesional de ${c.attorneyName}"
               onerror="this.closest('.credential-frame').classList.add('credential-frame--empty'); this.remove();">
          <span class="credential-placeholder-text">Imagen de cédula pendiente</span>
        </div>
        <figcaption>
          <strong>${c.attorneyName}</strong>
          <span>Cédula Profesional No. ${c.number}</span>
        </figcaption>
      </figure>
    `).join("");
  }

  function renderContact() {
    const address = document.querySelector("[data-bind='address']");
    if (address) {
      address.innerHTML = model.contact.addressLines.join("<br>");
    }

    const email = document.querySelector("[data-bind='email']");
    if (email) {
      email.textContent = model.contact.email;
      email.href = `mailto:${model.contact.email}`;
    }

    const hours = document.querySelector("[data-bind='officeHours']");
    if (hours) hours.textContent = model.contact.officeHours;

    const phones = document.querySelector("[data-bind='contactPhones']");
    if (phones) {
      phones.innerHTML = model.attorneys.map(a => `
        <li>
          <span class="contact-phone-name">${a.name.replace('Lic. ', '')}</span>
          <a href="tel:${digits(a.phone)}">${a.phoneDisplay}</a>
        </li>
      `).join("");
    }

    const social = document.querySelector("[data-bind='social']");
    if (social) {
      const s = model.contact.social;
      social.innerHTML = `
        <a href="${s.facebook}" aria-label="Facebook">Facebook</a>
        <a href="${s.instagram}" aria-label="Instagram">Instagram</a>
        <a href="${s.linkedin}" aria-label="LinkedIn">LinkedIn</a>
      `;
    }
  }

  function bindContactForm() {
    const form = document.querySelector("[data-bind='contactForm']");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const status = form.querySelector(".form-status");
      if (status) {
        status.textContent = "Gracias. Su mensaje ha sido preparado; en breve nos pondremos en contacto.";
        status.classList.add("form-status--visible");
      }
      form.reset();
    });
  }

  function bindHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle("site-header--solid", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function bindMobileNav() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".site-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("site-nav--open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("site-nav--open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function init() {
    renderIdentity();
    renderNav();
    renderPrimaryPhones();
    renderAttorneys();
    renderPracticeAreas();
    renderCredentials();
    renderContact();
    bindContactForm();
    bindHeaderScroll();
    bindMobileNav();
  }

  return { init };

})(SiteData);

document.addEventListener("DOMContentLoaded", SiteController.init);
