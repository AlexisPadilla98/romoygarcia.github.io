/* ============================================================
   MAIN.JS
   ============================================================ */

const SiteData = {

  firm: {
    name: "Romo | García",
    fullName: "Romo | García Abogados",
    tagline: "Donde la estrategia se convierte en resultado.",
    logo: "img/logo1.png",
    heroImage: "img/despacho-hero.jpg",
    copyrightHolder: "Romo | García Abogados"
  },

  attorneys: [
    {
      id: "garcia",
      name: "Lic. Rodolfo García",
      role: "Socio Fundador",
      focus: "Litigio civil y mercantil, controversias bancarias y de seguros",
      photo: "img/rodolfo.jpg",
      phone: "523326273002",
      phoneDisplay: "33 2627 3002",
      waLink: "https://wa.me/523326273002?text=Hola%20Lic.%20Rodolfo%20Romo,%20me%20gustar%C3%ADa%20solicitar%20una%20consulta.",
      bio: "Encabeza los asuntos corporativos y bancarios del despacho, con una práctica orientada a resolver controversias complejas mediante estrategias litigiosas sólidas y bien fundamentadas."
    },
    {
      id: "romo",
      name: "Lic. Mariela Romo",
      role: "Socia Fundadora",
      focus: "Derecho familiar, amparo y asuntos regulatorios",
      photo: "img/mariela.jpg",
      phone: "523322065922",
      phoneDisplay: "33 2206 5922",
      waLink: "https://wa.me/523322065922?text=Hola%20Lic.%20Mariela%20Garc%C3%ADa,%20me%20gustar%C3%ADa%20solicitar%20una%20consulta.",
      bio: "Dirige la práctica familiar y constitucional del despacho, acompañando a cada cliente con una estrategia clara y un trato cercano en los momentos que más lo requieren."
    }
  ],

  credentials: [
    {
      id: "cedula-garcia",
      attorneyName: "Lic. Rodolfo García",
      number: "[14748038]",
      image: "img/cedula-garcia.jpg"
    },
    {
      id: "cedula-romo",
      attorneyName: "Lic. Mariela Romo",
      number: "[14156989]",
      image: "img/cedula-romo.jpg"
    }
  ],

  practiceAreas: [
    {
      id: "civil",
      title: "Litigio Civil",
      description: "Representación estratégica en controversias civiles, desde su planteamiento hasta su resolución definitiva."
    },
    {
      id: "mercantil",
      title: "Litigio Mercantil",
      description: "Defensa de intereses comerciales y corporativos en juicios y procedimientos mercantiles de toda índole."
    },
    {
      id: "familiar",
      title: "Derecho Familiar",
      description: "Acompañamiento legal en asuntos familiares, siempre con sensibilidad hacia las personas involucradas."
    },
    {
      id: "corporativo",
      title: "Asuntos Corporativos",
      description: "Asesoría y litigio en materia societaria, gobierno corporativo y disputas entre accionistas."
    },
    {
      id: "bancario",
      title: "Controversias Bancarias y de Seguros",
      description: "Defensa especializada frente a instituciones financieras y aseguradoras en conflictos de alta complejidad técnica."
    },
    {
      id: "constitucional",
      title: "Derecho Constitucional y Amparo",
      description: "Protección de derechos fundamentales mediante juicios de amparo directo e indirecto."
    },
    {
      id: "regulatorio",
      title: "Asuntos Regulatorios en Salud",
      description: "Acompañamiento legal ante autoridades sanitarias y cumplimiento normativo del sector salud."
    },
    {
      id: "energia",
      title: "Asuntos Regulatorios en Energía",
      description: "Asesoría en materia de regulación energética y representación ante las autoridades del sector."
    }
  ],

  contact: {
    addressLines: [
      "Av. [Nombre de la Avenida] #000",
      "Col. [Colonia], [Ciudad], [Estado]",
      "C.P. [00000]"
    ],
    email: "contacto@romogarcia.com",
    officeHours: "Lunes a viernes, 9:00 – 18:00 h",
    social: {
      facebook: "https://www.facebook.com/profile.php?id=61594247797904",
      instagram: "https://www.instagram.com/abogadosromogarcia?stkn=MzE5YzUxYXBwcW5i&utm_source=qr",
      linkedin: "#"
    }
  },

  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Áreas de Práctica", href: "#areas" },
    { label: "Cédulas", href: "#cedulas" },
    { label: "Contacto", href: "#contacto" }
  ],

  legalNotice: "El contenido de este sitio tiene fines informativos y no constituye asesoría legal. La relación abogado-cliente se establece únicamente mediante un acuerdo formal de representación."
};

const SiteController = (function (model) {

  function bindScrollHeader() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  function initials(name) {
    return name.replace("Lic. ", "").split(" ").map(w => w[0]).join("").slice(0, 2);
  }

  function renderIdentity() {
    document.title = model.firm.fullName + " — " + model.firm.tagline;

    document.querySelectorAll("[data-bind='logo']").forEach(el => {
      el.src = model.firm.logo;
      el.alt = model.firm.fullName;
    });

    document.querySelectorAll("[data-bind='tagline']").forEach(el => {
      el.textContent = model.firm.tagline;
    });

    const hero = document.querySelector("[data-bind='heroImage']");

    if (hero) hero.style.backgroundImage =
    `linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.55) 100%), url('${model.firm.heroImage}')`;

    const year = document.querySelector("[data-bind='year']");
    if (year) year.textContent = new Date().getFullYear();

    const copyHolder = document.querySelector("[data-bind='copyrightHolder']");
    if (copyHolder) copyHolder.textContent = model.firm.copyrightHolder;

    const legal = document.querySelector("[data-bind='legalNotice']");
    if (legal) legal.textContent = model.legalNotice;
  }

  function renderNav() {
    document.querySelectorAll("[data-bind='nav']").forEach(container => {
      container.innerHTML = model.nav.map(item =>
        `<a href="${item.href}" class="nav-link">${item.label}</a>`
      ).join("");
    });
  }

  function renderPrimaryPhones() {
    const container = document.querySelector("[data-bind='callButtons']");
    if (!container) return;
    container.innerHTML = model.attorneys.map(a => `
      <a class="btn-call" href="${a.waLink}" target="_blank" rel="noopener noreferrer">
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
        <div class="attorney-photo">
          <img src="${a.photo}" alt="${a.name}"
               onerror="this.closest('.attorney-photo').classList.add('attorney-photo--empty'); this.remove();">
          <span class="attorney-initials">${initials(a.name)}</span>
        </div>
        <div class="attorney-info">
          <p class="attorney-role">${a.role}</p>
          <h3 class="attorney-name">${a.name}</h3>
          <p class="attorney-focus">${a.focus}</p>
          <p class="attorney-bio">${a.bio}</p>
          <a class="attorney-phone" href="${a.waLink}" target="_blank" rel="noopener noreferrer">Tel: ${a.phoneDisplay}</a>
        </div>
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
    if (address) address.innerHTML = model.contact.addressLines.join("<br>");

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
        <div class="contact-phone-item">
          <span class="contact-phone-name">${a.name.replace('Lic. ', '')}</span>
          <a class="contact-phone-num" href="${a.waLink}" target="_blank" rel="noopener noreferrer">${a.phoneDisplay}</a>
        </div>
      `).join("");
    }

    const social = document.querySelector("[data-bind='social']");
    if (social) {
      const s = model.contact.social;
      social.innerHTML = `
        <a href="${s.facebook}" target="_blank">Facebook</a>
        <a href="${s.instagram}" target="_blank">Instagram</a>
        <a href="${s.linkedin}" target="_blank">LinkedIn</a>
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
      }
      form.reset();
    });
  }

  function bindMobileNav() {
    const toggleBtn = document.getElementById("navToggle");
    const navMenu = document.getElementById("siteNav");
    const overlay = document.getElementById("navOverlay");

    if (!toggleBtn || !navMenu) return;

    function openMenu() {
      toggleBtn.classList.add("open");
      navMenu.classList.add("active");
      if (overlay) overlay.classList.add("active");
      toggleBtn.setAttribute("aria-expanded", "true");
      document.body.classList.add("nav-open");
    }

    function closeMenu() {
      toggleBtn.classList.remove("open");
      navMenu.classList.remove("active");
      if (overlay) overlay.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }

    // Abrir/cerrar menú al tocar las rayitas
    toggleBtn.addEventListener("click", () => {
      const isOpen = navMenu.classList.contains("active");
      isOpen ? closeMenu() : openMenu();
    });

    // Cerrar el menú al dar clic en cualquiera de las opciones
    navMenu.addEventListener("click", (e) => {
      if (e.target.classList.contains("nav-link")) closeMenu();
    });

    // Cerrar al tocar el fondo oscuro
    if (overlay) overlay.addEventListener("click", closeMenu);

    // Cerrar con la tecla Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    // Si la pantalla crece a tamaño de escritorio, asegurarse de cerrar el menú
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) closeMenu();
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
    bindScrollHeader();
    bindMobileNav();
  }

  return { init };

})(SiteData);

document.addEventListener("DOMContentLoaded", SiteController.init);
