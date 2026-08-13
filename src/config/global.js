export default {
  global: {
    Name: 'Pruebas de seguridad y protección de infraestructuras tecnológicas',
    Description:
      'El componente Pruebas de seguridad y protección de infraestructuras tecnológicas desarrolla capacidades para evaluar vulnerabilidades mediante metodologías y herramientas de <em>hacking</em> ético, así como para implementar y comprobar controles de seguridad en <em>hardware</em> y <em>software</em>. Promueve la ejecución responsable de pruebas autorizadas, la toma de decisiones técnicas, la protección de los activos tecnológicos y la documentación de resultados orientados a fortalecer la seguridad y continuidad de la infraestructura organizacional.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      /*{
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },*/
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos del <em>hacking</em> ético',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ataques informáticos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Metodología para la ejecución de pruebas de seguridad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Implementación del sistema de seguridad digital',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Metodología para la ejecución de pruebas de seguridad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Activo tecnológico',
      significado:
        'recurso de hardware, software, red, aplicación o servicio que soporta información y procesos organizacionales.',
    },
    {
      termino: 'Alcance',
      significado:
        'conjunto de sistemas, técnicas, periodos y condiciones autorizados para una evaluación.',
    },
    {
      termino: 'Ataque informático',
      significado:
        'acción deliberada destinada a comprometer información, servicios, dispositivos o controles.',
    },
    {
      termino: 'Caja blanca',
      significado:
        'enfoque en el que el evaluador recibe información amplia, configuraciones, código o credenciales.',
    },
    {
      termino: 'Caja gris',
      significado: 'evaluación realizada con conocimiento y acceso parciales.',
    },
    {
      termino: 'Caja negra',
      significado:
        'evaluación ejecutada con información mínima sobre el objetivo.',
    },
    {
      termino: 'Control detectivo',
      significado:
        'mecanismo orientado a identificar eventos, anomalías, ataques o incumplimientos.',
    },
    {
      termino: 'Control preventivo',
      significado:
        'medida destinada a impedir o reducir la probabilidad de un evento de seguridad.',
    },
    {
      termino: 'Defensa en profundidad',
      significado:
        'estrategia que combina varias capas de protección sobre personas, procesos, redes, sistemas, aplicaciones y datos.',
    },
    {
      termino: 'Evidencia',
      significado:
        'información verificable que demuestra una condición, resultado o hallazgo de seguridad.',
    },
    {
      termino: 'Firewall',
      significado:
        'dispositivo o software que controla comunicaciones entre redes o zonas mediante reglas.',
    },
    {
      termino: '<em>Hacking</em> ético',
      significado:
        'evaluación autorizada que utiliza técnicas de seguridad ofensiva para identificar y valorar debilidades.',
    },
    {
      termino: 'Hallazgo',
      significado:
        'condición observada durante una evaluación que puede representar vulnerabilidad, incumplimiento o posibilidad de mejora.',
    },
    {
      termino: 'IDS',
      significado:
        'sistema de detección de intrusiones que analiza tráfico o eventos y genera alertas.',
    },
    {
      termino: '<em>MFA</em>',
      significado:
        'autenticación multifactor que utiliza dos o más factores independientes para comprobar una identidad.',
    },
    {
      termino: 'Prueba de intrusión',
      significado:
        'evaluación controlada que intenta comprobar si una vulnerabilidad puede utilizarse para alcanzar un objetivo autorizado.',
    },
    {
      termino: 'Regla de compromiso',
      significado:
        'condición acordada que define cómo, cuándo y sobre qué recursos se ejecutará una prueba.',
    },
    {
      termino: 'Retest',
      significado:
        'nueva evaluación realizada para comprobar que un hallazgo fue corregido eficazmente.',
    },
    {
      termino: 'Segmentación',
      significado:
        'división de una red en zonas controladas para limitar comunicaciones y movimiento lateral.',
    },
  ],
  referencias: [
    {
      referencia:
        'Center for Internet Security. (2024). CIS Critical Security Controls version 8.1.',
      link: '',
    },
    {
      referencia:
        'Cybersecurity and Infrastructure Security Agency. (2023a). Guide to securing remote access software.',
      link: '',
    },
    {
      referencia:
        'Cybersecurity and Infrastructure Security Agency. (2023b). StopRansomware guide.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2022a). ISO/IEC 27001:2022. Information security, cybersecurity and privacy protection—Information security management systems—Requirements.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2022b). ISO/IEC 27002:2022. Information security, cybersecurity and privacy protection—Information security controls.',
      link: '',
    },
    {
      referencia:
        'MITRE Corporation. (2026). MITRE ATT&CK: Enterprise tactics, techniques and mitigations.',
      link: '',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2020). Security and privacy controls for information systems and organizations (Special Publication 800-53, Revision 5).',
      link: '',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2022a). Guide to enterprise patch management planning: Preventive maintenance for technology (Special Publication 800-40, Revision 4).',
      link: '',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2022b). Assessing security and privacy controls in information systems and organizations (Special Publication 800-53A, Revision 5).',
      link: '',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2024). The NIST Cybersecurity Framework (CSF) 2.0.',
      link: '',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2025). Incident response recommendations and considerations for cybersecurity risk management: A CSF 2.0 community profile (Special Publication 800-61, Revision 3).',
      link: '',
    },
    {
      referencia:
        'Open Worldwide Application Security Project. (2024). OWASP web security testing guide (Version 4.2).',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Bonza Reyes',
          cargo: 'Experto Temático',
          centro: 'Centro Agroturístico – Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico – Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth González Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
