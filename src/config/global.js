export default {
  global: {
    Name: 'Reconocimientos y aleaciones en los metales preciosos',
    Description:
      'El programa "Reconocimientos y aleaciones en metales preciosos" capacita a los participantes en la identificación, análisis y elaboración de aleaciones para joyería. Combina teoría y práctica, desarrollando competencias en el manejo de materiales y asegurando calidad según estándares internacionales. Su enfoque es mejorar las habilidades técnicas de operarios y aprendices, impulsando su desempeño y proyección profesional en el sector.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Los metales',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Los metales de transición',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Contextualización hacia las propiedades de los metales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Datos sobre los metales importantes para el joyero',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Tipos de joyas',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/84240189 _CF001_DU.pdf',
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
  complementario: [
    {
      tema:
        'Documento sectorial, metales y piedras preciosas, joyería y bisutería.',
      referencia:
        'ProColombia. (2024). Cadena productiva de la industria de la joyería.',
      tipo: 'PDF',
      descarga: '/downloads/joyeriaybisuteria_26feb.pdf',
    },
    {
      tema: 'Documento cadena productiva de la joyería.',
      referencia:
        'Artesanías de Colombia. (2007). Cadena productiva de la joyería. ',
      tipo: 'PDF',
      descarga: '/downloads/estudio_joyeriacol.pdf',
    },
    {
      tema: 'Metales preciosos y aleaciones para joyería.',
      referencia: 'Ecosistema recursos SENA.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=echh5DT0IzA',
    },
  ],
  glosario: [
    {
      termino: 'Baños Galvánicos',
      significado:
        'los procesos de recubrimientos electrolíticos o químicos consisten en depositar por vía electroquímica finas capas de metal sobre la superficie de una pieza sumergida en una solución de iones metálicos o electrolito.',
    },
    {
      termino: 'Estado amorfo',
      significado:
        'las partículas componentes del sólido se agrupan al azar. Su disposición atómica no sigue ningún patrón definido',
    },
    {
      termino: 'Estructura cristalina',
      significado:
        'la estructura física de los sólidos es consecuencia de la disposición de los átomos, moléculas o iones en el espacio, así como de las fuerzas de interconexión de las partículas, en función de esa disposición.',
    },
    {
      termino: 'Estado cristalino',
      significado:
        'los átomos (moléculas o iones) que componen el sólido se disponen según un orden regular. Las partículas se sitúan ocupando los nudos o puntos singulares de una red espacial geométrica tridimensional. Los metales, las aleaciones y determinados materiales cerámicos tienen estructuras cristalinas.',
    },
    {
      termino: 'Fíbula',
      significado:
        'se denomina todo tipo de piezas metálicas utilizadas en la antigüedad para unir o sujetar alguna de las prendas que componían el vestido.',
    },
    {
      termino: 'Liga',
      significado:
        'la parte de metal que se añade al metal fino se llama “liga”.',
    },
    {
      termino: 'Lingote',
      significado:
        'trozo o barra de metal bruto fundido, en especial de hierro o de un metal noble, como el oro, la plata o el platino.',
    },
    {
      termino: 'Número de oxidación',
      significado:
        'los números de oxidación representan la carga aparente que tiene un átomo cuando se combina con otros para formar una molécula.',
    },
    {
      termino: 'Temple',
      significado:
        'punto de dureza o elasticidad que se da a un metal, cristal, etc., templándolos o enfriándolos bruscamente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aimme, L.G. (2010). Los metales tóxicos en joyería y bisutería. España.',
    },
    {
      referencia: 'Alsina, B (1989). Los metales en la joyería moderna.',
    },
    {
      referencia:
        'Alvarado, R. (2011). Manual de buenas prácticas de joyerías. Bolivia, Editorial Nitrance publicidad.',
    },
    {
      referencia: 'Codina, C. (2000). La Joyería. Barcelona: Parramon.',
    },
    {
      referencia:
        'López, Aniceto. (2007). Metales preciosos: el oro. Córdoba: Real Academia de Córdoba.',
    },
    {
      referencia:
        'Real Decreto 197-1988 Legislación española. LeyDerecho.org Recuperado el 12, 2016. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Leonor Bolívar Castaño',
          cargo: 'Experto temático',
          centro:
            'Centro de Gestión Administrativa y Fortalecimiento Empresarial - Regional Boyacá',
        },
        {
          nombre: 'Ricardo palacio Peña',
          cargo: 'Asesora pedagógica',
          centro: 'Centro Comercio y Servicio - Regional Tolima',
        },
        {
          nombre: 'Fabian Cuartas Donado',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Hernando Junior Strusberg Pérez',
          cargo: 'Diseño <em>web</em>',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Jorge Leonardo Camacho Pardo',
          cargo: 'Desarrollor <em> full stack</em>',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales ',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador y vinculador de recursos digitales',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga -  Regional Atlántico',
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
