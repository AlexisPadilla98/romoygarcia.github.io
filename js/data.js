/* ============================================================
   MODELO (data.js)
   "Base de datos" del sitio: toda la información del despacho
   vive aquí, separada de la lógica (controller.js) y de la
   presentación (index.html / style.css).
   ============================================================ */

const SiteData = {

  firm: {
    name: "Romo | García",
    fullName: "Romo | García Abogados",
    tagline: "Donde la estrategia se convierte en resultado.",
    logo: "assets/images/logo1.png",
    heroImage: "assets/images/despacho-hero.jpg",
    foundedNote: "Litigio civil, mercantil y familiar",
    copyrightHolder: "Romo | García Abogados"
  },

  attorneys: [
    {
      id: "garcia",
      name: "Lic. Rodolfo Antonio García Nuño",
      role: "Socio Fundador",
      focus: "Litigio civil y mercantil, controversias bancarias y de seguros",
      phone: "3326273002",
      phoneDisplay: "33 2627 3002",
      bio: "Encabeza los asuntos corporativos y bancarios del despacho, con una práctica orientada a resolver controversias complejas mediante estrategias litigiosas sólidas y bien fundamentadas."
    },
    {
      id: "romo",
      name: "Lic. Mariela Alejandra Romo Aguayo",
      role: "Socia Fundadora",
      focus: "Derecho familiar, amparo y asuntos regulatorios",
      phone: "3322065922",
      phoneDisplay: "33 2206 5922",
      bio: "Dirige la práctica familiar y constitucional del despacho, acompañando a cada cliente con una estrategia clara y un trato cercano en los momentos que más lo requieren."
    }
  ],

  credentials: [
    {
      id: "cedula-romo",
      attorneyName: "Lic. Mariela Alejandra Romo Aguayo",
      number: "14156989",
      image: "assets/images/cedula-romo.jpg"
    },
    {
      id: "cedula-garcia",
      attorneyName: "Lic. Rodolfo Antonio García Nuño",
      number: "14748038",
      image: "assets/images/cedula-garcia.jpg"
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
      "Guadalajara, Jalisco, México"
    ],
    email: "contacto@romogarcia.com",
    mapEmbedNote: "Mapa próximamente disponible",
    officeHours: "Lunes a viernes, 9:00 – 18:00 h",
    social: {
      facebook: "#",
      instagram: "#",
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