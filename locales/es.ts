export const es = {
  header: {
    navItems: [
      { name: "Inicio", href: "#hero" },
      { name: "Desafíos", href: "#problem-solution" },
      { name: "Soluciones", href: "#services" },
      { name: "Proceso", href: "#process" },
      { name: "Por Qué Nosotros", href: "#why-neurovia" },
      { name: "Nosotros", href: "#about-us" },
      { name: "Contacto", href: "#contact" },
    ],
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  hero: {
    title:
      'Transforme Su Negocio con <span style="color: #FFC857; text-shadow: 0 0 20px #FFC85780">Automatización Inteligente</span>',
    subtitle: "Simplificamos lo complejo, protegemos lo esencial y aceleramos lo importante.",
    ctaPrimary: "Agende una Consulta Gratuita",
    ctaSecondary: "Explore Nuestras Soluciones",
  },
  problemSolution: {
    title: 'Deje de <span style="color: #FFC857">Luchar</span>, Empiece a <span style="color: #FFC857">Escalar</span>',
    subtitle:
      "Las empresas de hoy enfrentan desafíos complejos. Ofrecemos soluciones inteligentes para transformarlos en oportunidades.",
    problems: [
      {
        id: 1,
        title: "Ineficiencias Operativas",
        description:
          "Los procesos manuales y sistemas desconectados ralentizan, aumentan costos y limitan la escalabilidad.",
      },
      {
        id: 2,
        title: "Oportunidades de Crecimiento Perdidas",
        description:
          "La falta de información basada en datos y una gestión de prospectos ineficiente dificultan la captura de nuevos mercados.",
      },
      {
        id: 3,
        title: "Experiencia del Cliente Deficiente",
        description:
          "Tiempos de respuesta lentos y un servicio inconsistente pueden generar insatisfacción y pérdida de clientes.",
      },
    ],
    closingStatement:
      'En Neurovia Labs, no solo identificamos problemas; <br class="sm:hidden"/> <span class="font-semibold" style="color: #FFC857"> diseñamos soluciones inteligentes y automatizadas</span> que entregan resultados tangibles y valor duradero.',
  },
  services: {
    title: 'Nuestras <span style="color: #FFC857">Soluciones Clave</span>',
    subtitle:
      "Ofrecemos un conjunto de servicios diseñados para abordar sus desafíos más urgentes y desbloquear nuevos niveles de rendimiento.",
    serviceItems: [
      {
        iconSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 44 l-8 8 m8-8 l-8-8 m8 8 H28" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M26 24 a 6 6 0 1 0 12 0 a 6 6 0 1 0 -12 0z m 18 14 a 6 6 0 1 0 12 0 a 6 6 0 1 0 -12 0 z" stroke="currentColor" stroke-width="2.5" opacity="0.6"/></svg>`,
        title: "Optimización y Automatización de Procesos",
        description:
          "Rediseñamos sus flujos de trabajo con automatización inteligente para reducir costos, eliminar cuellos de botella y maximizar la eficiencia.",
      },
      {
        iconSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 16 l-8 8 8 8 m16 8 l8-8 -8-8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M30 18 l-4 28" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/></svg>`,
        title: "Desarrollo de Software Escalable",
        description:
          "Creamos soluciones de software robustas y de alto rendimiento, diseñadas para resolver sus desafíos de negocio más complejos.",
      },
      {
        iconSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 4 L 8 16 V 32 C 8 45.25 32 58 32 58 C 32 58 56 45.25 56 32 V 16 L 32 4 Z" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M26 30 l6 6 10-10" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        title: "Estrategias de Ciberseguridad",
        description:
          "Protegemos sus activos digitales con evaluaciones de vulnerabilidad, y la implementación de controles de seguridad de vanguardia.",
      },
      {
        iconSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 12 V 52 M12 32 H 52" stroke="currentColor" stroke-width="2" opacity="0.4"/><circle cx="32" cy="32" r="24" stroke="currentColor" stroke-width="2.5"/><path d="M44 20 L 20 44" stroke="currentColor" stroke-width="1.5"/></svg>`,
        title: "Liderazgo y Estrategia Tecnológica",
        description:
          "Alineamos la tecnología con sus objetivos de negocio, liderando proyectos de transformación digital desde la concepción hasta la ejecución.",
      },
      {
        iconSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 48 V 28 m 12 20 V 20 m 12 28 V 36 m 12 12 V 12" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="52" cy="12" r="4" fill="currentColor"/><path d="M12 12 h 44" stroke="currentColor" stroke-width="2" opacity="0.5"/></svg>`,
        title: "Análisis de Datos e Inteligencia de Negocios",
        description:
          "Transformamos sus datos en una ventaja competitiva, implementando dashboards y modelos analíticos para una toma de decisiones informada.",
      },
      {
        iconSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 20 l-8 8 8 8 m 24 -16 l8 8 -8 8 M32 12 V 52" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/><circle cx="32" cy="32" r="6" fill="currentColor"/></svg>`,
        title: "Transformación Digital Integral",
        description:
          "Le guiamos en un viaje de transformación completo, integrando personas, procesos y tecnología para un negocio ágil y preparado para el futuro.",
      },
    ],
  },
  process: {
    title: 'Nuestro Camino Probado hacia el <span style="color: #FFC857">Éxito</span>',
    subtitle:
      "Seguimos una metodología estructurada y ágil para asegurar resultados impactantes y un viaje de transformación fluido.",
    steps: [
      {
        id: 1,
        title: "Descubrimiento y Estrategia Inicial",
        description:
          "Establecemos métricas base, mejoramos la visibilidad de sus activos actuales e identificamos áreas clave para reducir la carga operativa, formando una base sólida para la transformación.",
      },
      {
        id: 2,
        title: "Diseño de Soluciones y Plan de Automatización",
        description:
          "Enfocándonos en el ROI, diseñamos soluciones de automatización específicas y optimizamos los flujos de trabajo operativos, incluyendo la captura automatizada de prospectos y mejoras iniciales de procesos.",
      },
      {
        id: 3,
        title: "Desarrollo y Lanzamiento de Activos Clave",
        description:
          "Construimos e implementamos activos digitales críticos, como nuevos sitios web o integraciones de sistemas centrales, e implementamos herramientas iniciales de IA como asistentes virtuales, optimizando continuamente según el rendimiento.",
      },
      {
        id: 4,
        title: "Integración Completa del Ecosistema",
        description:
          "Automatizamos el seguimiento de prospectos, proporcionamos visibilidad completa de su embudo de ventas y expandimos las capacidades de IA en todo su ecosistema digital para crear una operación inteligentemente integrada.",
      },
      {
        id: 5,
        title: "Optimización Continua y Crecimiento",
        description:
          "Operamos y mantenemos su ecosistema digital integrado, fomentando un ciclo de mejora continua basado en datos en tiempo real para maximizar los resultados comerciales e impulsar el crecimiento.",
      },
    ],
  },
  whyNeurovia: {
    title: '¿Por Qué Elegir <span style="color: #FFC857">Neurovia Labs?</span>',
    subtitle:
      "No somos solo proveedores de tecnología; somos sus arquitectos dedicados de innovación, comprometidos a elevar su negocio a nuevas alturas.",
    usps: [
      {
        iconSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="20" r="5" stroke="currentColor" stroke-width="2"/><path d="M12 42 V 38 A 6 6 0 0 1 18 32 H 26 A 6 6 0 0 1 32 38 V 42" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="42" cy="20" r="5" stroke="currentColor" stroke-width="2"/><path d="M32 42 V 38 A 6 6 0 0 1 38 32 H 46 A 6 6 0 0 1 52 38 V 42" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M22 42 H 42" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        title: "Equipo Experto y Experiencia Comprobada",
        description:
          "Nuestro equipo está compuesto por profesionales experimentados con profunda especialización en IA, automatización y estrategia digital, respaldados por un portafolio de transformaciones exitosas.",
      },
      {
        iconSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 52 L 28 36 L 40 44 L 52 32" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linejoin="round" stroke-linecap="round"/><circle cx="32" cy="32" r="24" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3"/><circle cx="52" cy="32" r="4" fill="currentColor"/></svg>`,
        title: "Enfoque Orientado a Resultados",
        description:
          "Estamos enfocados en entregar un ROI medible. Nuestras soluciones están diseñadas para proporcionar resultados comerciales tangibles y crecimiento sostenible.",
      },
      {
        iconSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 12 L 38 12 M 32 18 L 32 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M20 20 H 44 V 44 H 20 Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round" stroke-linecap="round" opacity="0.4"/><path d="M32 26 a 6 6 0 0 1 6 6 v 14 h -12 v -14 a 6 6 0 0 1 6 -6 z" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M32 50 V 58" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        title: "Soluciones a Medida",
        description:
          "No hay una talla única para todos. Desarrollamos estrategias personalizadas e implementamos tecnologías configuradas específicamente para sus necesidades y objetivos únicos.",
      },
      {
        iconSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 40 L 26 32 L 12 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M52 40 L 38 32 L 52 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M28 42 L 36 42" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M28 22 L 36 22" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>`,
        title: "Asociación Centrada en el Cliente",
        description:
          "Creemos en relaciones colaborativas, comunicación transparente y trabajar de cerca con usted como una extensión de su equipo.",
      },
      {
        iconSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16 H 52 V 48 H 12 Z" stroke="currentColor" stroke-width="2" fill="none"/><path d="M18 16 V 10 H 46 V 16" stroke="currentColor" stroke-width="2" fill="none" opacity="0.5"/><path d="M18 48 V 54 H 46 V 48" stroke="currentColor" stroke-width="2" fill="none" opacity="0.5"/><path d="M24 24 h 16 v 16 h -16 z" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linejoin="round" stroke-linecap="round"/></svg>`,
        title: "Tecnología Preparada para el Futuro",
        description:
          "Utilizando herramientas de vanguardia y metodologías ágiles, construimos soluciones robustas que se adaptan a las demandas cambiantes del mercado y aseguran el éxito a largo plazo.",
      },
      {
        iconSvg: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 22 L 42 42 M 22 42 L 42 22" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M32 4 L 8 16 V 32 C 8 45.25 32 58 32 58 C 32 58 56 45.25 56 32 V 16 L 32 4 Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"/></svg>`,
        title: "Consultoría y Desarrollo a Medida",
        description:
          "Desde la asesoría estratégica hasta el desarrollo de software de IA personalizado, creamos soluciones que abordan sus desafíos únicos.",
      },
    ],
  },
  aboutUs: {
    title: 'Los Arquitectos de su <span style="color: #FFC857">Futuro Digital</span>',
    mission:
      "Nuestra misión es democratizar el acceso a la inteligencia artificial de vanguardia, permitiendo a empresas de todos los tamaños competir y prosperar en la era digital. Combinamos innovación estratégica con ejecución técnica impecable para convertir desafíos complejos en ventajas competitivas duraderas.",
    teamTitle: "Conozca a Nuestro Equipo Fundador",
    team: [
      {
        name: "Luis Corrales",
        role: "Optimización Operativa y de Producto",
        image: "/assets/team/luis-carlos-corrales.jpg",
        bio: "Experto en optimización de operaciones y productos en el sector de tecnología para la salud. Lideró la implementación de sistemas críticos y la modernización de historiales clínicos electrónicos, impactando a cientos de miles de pacientes.",
      },
      {
        name: "Gustavo Méndez",
        role: "Ciberseguridad y Estrategia de Nube",
        image: "/assets/team/gustavo-mendez.jpg",
        bio: "Especialista en ciberseguridad con experiencia gerencial en Microsoft. Ha liderado equipos de seguridad y construido Centros de Operaciones de Seguridad (SOC), garantizando la protección de infraestructura crítica a nivel global.",
      },
      {
        name: "José Álvarez",
        role: "Desarrollo Escalable y Arquitectura",
        image: "/assets/team/jose-andres-alvarez.jpg",
        bio: "CTO con más de 12 años de experiencia construyendo soluciones de software robustas para un mercado global. Su maestría del INCAE y pericia técnica le permiten diseñar arquitecturas de alto rendimiento que impulsan el crecimiento.",
      },
      {
        name: "Hernán Álvarez",
        role: "Liderazgo de Ingeniería de Software",
        image: "/assets/team/hernan-alvarez.jpg",
        bio: "Líder de ingeniería con más de 15 años de experiencia gestionando equipos en empresas de renombre en EE. UU. como Realtor.com, Twitter y Equifax. Visión estratégica y ejecución probada en proyectos de gran escala.",
      },
    ],
  },
  cta: {
    title: '¿Listo para <span style="color: #FFC857">Revolucionar</span> su Negocio?',
    subtitle:
      "Deje que Neurovia Labs le guíe en su viaje de transformación digital. Contáctenos para un diagnóstico gratuito de ineficiencias con IA y descubra el potencial de su negocio.",
    emailAddress: "contacto@neurovialabs.com",
    buttonAriaLabel: "Enviar un correo a Neurovia Labs",
    buttonText: "Contáctenos por Correo",
    subject: "Consulta desde NeuroviaLabs.com",
  },
  footer: {
    navItems: [
      { name: "Inicio", href: "#hero" },
      { name: "Soluciones", href: "#services" },
      { name: "Nosotros", href: "#about-us" },
      { name: "Contacto", href: "#contact" },
    ],
    tagline: "Automatización Inteligente. Transformación Digital. Resultados Reales.",
    copyright: "Neurovia Labs. Todos los Derechos Reservados.",
  },
}
