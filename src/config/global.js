export default {
  global: {
    componenteFormativo: 'Diseño de la experiencia turística',
    descripcionCurso:
      'La experiencia turística complementa y agrega valor al producto turístico de una región o destino. El guía de turistas puede diseñar una experiencia aplicada a un recorrido o un plan interpretativo. Su diseño requiere tener en cuenta diferentes aspectos que, ordenados e implementados, generarán mayor satisfacción en los visitantes de un destino.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Experiencia turística',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas de animación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Actividades experienciales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Rutas turísticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tipos de rutas',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Estructura de una ruta turística',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Rutas culturales y naturales',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'La narración',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'FONTUR Colombia. (2019). <em>El ABC del turismo. Cuaderno de trabajo</em>. Ministerio de Comercio, Industria y Turismo. ',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura [UNESCO]. (2018). <em>La UNESCO y los Objetivos de Desarrollo Sostenible</em>. ',
      link: 'https://es.unesco.org/sdgs',
    },
    {
      referencia:
        'Pukara; Corfo; Gobierno de Chile; Cámara de Comercio, Industrias, Servicios y Turismo de Iquique; Transforma Turismo. (2015). <em>Manual de diseño de experiencias turísticas para el programa estratégico regional de turismo “Descubre Tamarugal”</em>.  ',
      link:
        'https://www.researchgate.net/publication/335975544_Manual_de_diseno_de_experiencias_turisticas',
    },
    {
      referencia:
        'Rodríguez-Zulaica. (2016). <em>¿Cómo diseñar una experiencia turística?</em> Editorial UOC. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/58591?page=41',
    },
    {
      referencia:
        'Servicio Nacional de Turismo [SERNATUR]. (2015). <em>Manual paso a paso para el diseño de productos turísticos integrados</em>. Gobierno de Chile. ',
    },
    {
      referencia:
        'Servicio Nacional de Turismo [SERNATUR]. (2017). <em>Manual de diseño Experiencias turísticas</em>. Gobierno de Chile. ',
      link:
        'https://www.sernatur.cl/wp-content/uploads/2018/11/MDD-Manual-de-Experiencias-Turi%CC%81sticas-1.pdf',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA], Grupo de Investigación del Centro de Comercio y Servicios [GRICS], SENNOVA. (2017). <em>Caja de herramientas experienciales del turismo de naturaleza</em>. ',
      link:
        'https://bauldelturismo.com/wp-content/uploads/2019/04/Caja-de-herramientas-del-turismo-de-naturaleza-2016.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Atractivo turístico',
      significado:
        'Factores físicos y culturales que reúnen las condiciones para ser integrados de inmediato a los productos turísticos.',
    },
    {
      termino: 'Inventario turístico',
      significado:
        'Es el proceso por el cual se registran ordenadamente los factores físicos y culturales de un conjunto de atractivos turísticos.',
    },
    {
      termino: 'Planificación',
      significado:
        'Acción o resultado de planificar. Plan general científicamente organizado y frecuentemente de gran amplitud, para obtener un objetivo determinado.',
    },
    {
      termino: 'Recurso turístico',
      significado:
        'Factores físicos y culturales potencialmente aprovechables por el turismo.',
    },
    {
      termino: 'Temática',
      significado:
        'Que está centrado o dedicado a un conjunto de actividades en torno a una idea en común.',
    },
    {
      termino: 'Viaje',
      significado:
        'El término “viaje” designa todo desplazamiento de una persona a un lugar fuera de su lugar de residencia habitual, desde el momento de su salida hasta su regreso. Por lo tanto, se refiere a un viaje de ida y vuelta. Los viajes que realizan los visitantes son viajes turísticos.',
    },
  ],
  complementario: [
    {
      tema: 'Experiencia turística',
      referencia:
        'Rodríguez-Zulaica. (2016). <em>¿Cómo diseñar una experiencia turística?</em> Editorial UOC.',
      tipo: 'Web',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/58591?page=41',
    },
    {
      tema: 'Actividades experienciales',
      referencia:
        'Antoñanzas, E. (s. f.). <em>¿Qué es Turismo Experiencial?</em> Turismo Experiencial. ',
      tipo: 'Web',
      link: 'https://www.destinosexperienciales.com/turismo-experiencial/',
    },
    {
      tema: 'Rutas turísticas',
      referencia:
        'Larrea, E. (2020). <em>¿Qué son las rutas turísticas?</em> Entorno Turístico. ',
      tipo: 'Web',
      link: 'https://www.entornoturistico.com/que-son-las-rutas-turisticas/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable equipo desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Garcés Gil',
        cargo: 'Instructor',
        centro: 'Centro de Comercio y Servicios - Regional Caldas',
      },
      {
        nombre: 'Sandra Villamizar Rivera',
        cargo: 'Profesional de diseño y desarrollo instruccional',
        centro: 'CNHTA - Regional Distrito Capital',
      },
      {
        nombre: 'Gustavo Santis Mancipe',
        cargo: 'Profesional diseño y desarrollo instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Metodóloga para la formación virtual',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Edison Eduardo Mantilla Cuadros',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de contenidos',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Fernando Amortegui Garcia',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jhon Fredy Rodriguez Castiblanco',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
