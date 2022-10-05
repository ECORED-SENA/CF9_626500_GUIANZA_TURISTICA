<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color:#FFF") 1
      h1 Experiencia turística
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Existen diferentes definiciones para la palabra experiencia, para enmarcarla en el campo del turismo, es necesario comprender cómo esta se puede convertir en una ventaja competitiva para un destino y cómo va en busca de satisfacer las necesidades del turista y mejorar las condiciones de la comunidad local en un gana-gana permitido por esta actividad.
    p.mb-5 Para comprender la importancia de la experiencia, se presenta la siguiente definición que la relaciona con el turismo:
    .cajon.color-secundario.p-4.mb-5
      .row.align-items-center
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img1.svg', style="width: 80px").m-auto
        .col-lg-10
          p.mb-0 “La Real Academia Española define vivencia como el hecho de experimentar algo. La vivencia, por tanto, es la causa que permite al usuario participar activa y personalmente en los servicios que compra y consume. Llevado al terreno turístico, la vivencia es el componente que ofrece al turista la posibilidad de interactuar con el destino”. (Rodríguez-Zulaica, 2016).
    p.mb-5 Tomando como base la definición, ¿cómo diseñar una experiencia turística? Se puede comprender mejor la diferencia entre el producto y la experiencia turística, además, entender que definitivamente son un complemento, como se muestra a continuación:
    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img2.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              h4.text-center.mb-4 Producto turístico
              p.text-center Permite ver y conocer el destino, organizando una serie de elementos para que el turista los pueda consumir o disfrutar.
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img3.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              h4.text-center.mb-4 Experiencia turística
              p.text-center Permite interactuar con el destino diseñando experiencia, teniendo en cuenta las emociones, las sensaciones, los sentidos, generando conexión con el mismo.
    .row.bg-color1
      .col-12.p-5
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            p En cuanto al contexto, la experiencia turística se puede diseñar desde los componentes más sencillos de la cadena de prestación de servicios turísticos, es decir, en el diseño de una experiencia se pueden y se deben involucrar las comunidades con sus actividades cotidianas, lo que le agregará valor a la experiencia, además de traer beneficios enmarcados en la sostenibilidad del destino y de las localidades, permitiendo así la participación y la inclusión de actores que de otra forma no se verían involucrados en la actividad.
            p Un producto turístico ofrece una variedad de actividades, por ello, las comunidades locales deben identificar lo más auténtico que tengan, lo que representa para ellos un valor significativo y diferenciador, ya sea en el entorno natural o cultural, ya que una fuerte tendencia que motiva un desplazamiento por motivos de turismo es visitar sitios que permitan tener contacto con lo auténtico y posibilitar una vivencia o experiencia memorable.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema1/img4.svg', style="width: 450px").m-auto
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b Para que una experiencia sea memorable, se debe tener en cuenta, entre otros elementos], permitir que el turista tenga un contacto auténtico con la comunidad receptora, facilitando el diálogo y el encuentro a través de actividades que conecten los sentidos, las emociones, la forma de ver la vida, la espiritualidad y el diario vivir que permite interpretar y realizar un intercambio social y cultural entre visitante y local.
    p.text-center.mb-5 Otros elementos que se deben tener en cuenta son:
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 1]. #[i Elementos para una experiencia memorable]
        figure
          img(src='@/assets/curso/tema1/img6.svg')
    p.mb-5 Se debe destacar la importancia que tienen elementos como el servicio, que además de ser de alta calidad, si tiene presencia de los habitantes locales con su tradicional forma de ser, cobra más relevancia; esto debe ir acompañado de historias que generen emociones y sensaciones y que presenten un hilo conductor con los demás aspectos de la localidad y el destino.
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema1/img7.svg')
      .col
        h4.mb-0 Ventajas de diseñar una experiencia
    p.mb-5 Algunas de las ventajas que conlleva el diseño de una experiencia turística, de acuerdo con el “manual de diseño de experiencias turísticas” (SERNATUR, 2017), son:
    .tarjeta.tarjeta--verde.p-4.p-xl-5.mb-5
      SlyderA(tipo="b")
        .row
          .col-xl-4.mb-4.mb-mb-0
            p Representa una oportunidad de valor que puede desarrollarse en casi cualquier localidad identificando los rasgos auténticos y de identidad.
          .col-xl-8
            figure
              img(src='@/assets/curso/tema1/img3.png')
        .row
          .col-xl-4.mb-4.mb-mb-0
            p Se puede aplicar a un alojamiento, restaurante, un escenario natural o cultural, entre otros.
          .col-xl-8
            figure
              img(src='@/assets/curso/tema1/img4.png')
        .row
          .col-xl-4.mb-4.mb-mb-0
            p Es respuesta a la demanda del mercado nacional e internacional que genera nuevos ingresos.
          .col-xl-8
            figure
              img(src='@/assets/curso/tema1/img5.png')
        .row
          .col-xl-4.mb-4.mb-mb-0
            p Representa una oportunidad para ser innovadores, creativos y verdaderamente sensibles a las razones por las que la gente viaja.
          .col-xl-8
            figure
              img(src='@/assets/curso/tema1/img6.png')
        .row
          .col-xl-4.mb-4.mb-mb-0
            p No necesariamente representa una gran inversión, porque las experiencias no necesariamente implican cambios o mejoras en infraestructuras.
          .col-xl-8
            figure
              img(src='@/assets/curso/tema1/img7.png')
        .row
          .col-xl-4.mb-4.mb-mb-0
            p Permite promover y proteger los recursos patrimoniales de la localidad.
          .col-xl-8
            figure
              img(src='@/assets/curso/tema1/img8.png')
        .row
          .col-xl-4.mb-4.mb-mb-0
            p Permite ampliar la red de proveedores y socios y trabajar con nuevas personas que tal vez nunca se hayan dado cuenta de que tienen algo maravilloso para compartir con los viajeros.
          .col-xl-8
            figure
              img(src='@/assets/curso/tema1/img9.png')
        .row
          .col-xl-4.mb-4.mb-mb-0
            p Favorece la decisión de ser #[b “más fuertes juntos”] al trabajar con socios comunitarios y otros negocios para crear una experiencia de producto y destino más holística, particularmente en las comunidades rurales.
          .col-xl-8
            figure
              img(src='@/assets/curso/tema1/img10.png')
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema1/img7.svg')
      .col
        h4.mb-0 Diseño de experiencias turísticas
    .row.bg-color2
      .col-12.p-5
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-4.mb-lg-0
            p Las experiencias turísticas se pueden diseñar en múltiples escenarios, los cuales pueden ser:
            ul.lista-ul
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Sitios naturales, como un área protegida.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Lugares históricos, como un museo o un conjunto patrimonial cultural.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Un cultivo o una faena de ganadería para actividades de tipo agropecuario.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Sitios para una labor específica, como la elaboración de artesanías, una manifestación musical, literaria, de teatro o danza.
            p Los sitios o actividades en los que se puede diseñar e implementar una experiencia turística son amplios, lo indispensable es comprender que es necesario tener en cuenta los pasos que permitan diseñar de manera organizada los momentos, para finalmente implementarla.
            p Existen diferentes modelos para diseñar una experiencia turística. Modelos desarrollados en Perú, Chile y Colombia, como la “Caja de herramientas de turismo experiencial”, desarrollado por el SENA, en el año 2017, servirán como referentes para establecer algunos pasos y fases para el diseño de la experiencia.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img11.png')
    p.text-center.mb-5 A continuación, se presenta el diseño de fases para una experiencia turística:
    .row.mb-5
      .col-auto.bg-color3
        h3.mb-0 Diseño de experiencias turísticas
    p.mb-5 En el presente recurso, se abordarán los elementos necesarios para diseñar las fases de una experiencia turística.
    p.text-center.mb-5 El diseño de una experiencia se puede desarrollar en tres fases:
    .row.justify-content-center.mb-5
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img10.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              p.text-center #[b 1. Planeación]
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img11.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              p.text-center #[b 2. Ejecución]
      .col-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img12.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              p.text-center #[b 3. Evaluación]
    .row.bg-color4
      .col-12.p-5
        .row.align-items-center.mb-4
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img7.svg')
          .col
            h4.mb-0 Planeación
        p En esta fase, están incluidos elementos que permiten identificar las fortalezas que tiene la experiencia que se va a desarrollar, incluye todos aquellos elementos de alistamiento de la actividad; es muy importante, ya que en ella se planifica la actividad antes de su ejecución.
        p.mb-5 Desarrollar cada uno de estos pasos en la fase de planeación permitirá hacer el alistamiento para la poder ejecutar una experiencia turística; se recomienda verificar a través de una lista de chequeo el seguimiento y cumplimiento de los pasos.
        .row.mb-5
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img12.png', style="width: 450px").m-auto
          .col-lg-8
            p.mb-4 #[b.txt-color1 Perfil del Viajero]
            p Al igual que investigar el perfil del turista, conocer el comportamiento del mercado con sus tendencias también aporta elementos importantes a la hora de diseñar una experiencia. Los tiempos actuales han cambiado la forma de viajar, eventos como las pandemias mundiales han cambiado la forma y las tendencias a la hora de hacer turismo. 
            p Se estima que los viajeros en los próximos años visitarán destinos más cerca de su sitio de residencia y tendrán preferencia por los sitios naturales y los entornos rurales que no presenten altas concentraciones de personas, además que garanticen el cumplimiento de normas de bioseguridad.
        hr.mb-5
        .row.mb-5
          .col-lg-8.mb-4.mb-lg-0
            p.mb-4 #[b.txt-color1 Entornos exclusivos]
            p En este paso se deben identificar los recursos y atractivos tanto naturales como culturales que sean auténticos, es decir, que no se hayan escenificado para el turista y que se den incluso cuando no hay turistas (una fiesta patronal, un domingo de mercado) y que puedan generar una identidad con ventajas comparativas en el destino. Los recursos y atractivos en entornos exclusivos se deben inventariar y categorizar.
            p Se debe tener en cuenta que los atractivos son el eje del desplazamiento turístico.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img13.png', style="width: 450px").m-auto
        hr.mb-5
        .row.mb-4
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img14.png', style="width: 450px").m-auto
          .col-lg-8
            p.mb-4 #[b.txt-color1 Tendencias del mercado]
            p Al igual que investigar el perfil del turista, conocer el comportamiento del mercado con sus tendencias también aporta elementos importantes a la hora de diseñar una experiencia. Los tiempos actuales han cambiado la forma de viajar, eventos como las pandemias mundiales han cambiado la forma y las tendencias a la hora de hacer turismo.
            p Se estima que los viajeros en los próximos años visitarán destinos más cerca de su sitio de residencia y tendrán preferencia por los sitios naturales y los entornos rurales que no presenten altas concentraciones de personas, además, que garanticen el cumplimiento de normas de bioseguridad.
        .row.mb-4
          .col-12
            p También es importante entender que los viajes experienciales vienen marcando una importante demanda a nivel mundial, ejemplo de ello se refleja en dos párrafos donde se marca una fuerte tendencia hacia este tipo de viajes.
          .col-lg-6.mb-4.mb-lg-0
            .bloque-texto-d.color-secundario.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                p #[b “Es posible que la tendencia más recurrente y significativa en el mundo actual sea la demanda de ‘viajes experienciales’, específicamente orientados a transmitir la idea de un turismo más inmersivo, local, auténtico, aventurero y/o activo”.]
                i.fas.fa-quote-right
              .bloque-texto-d__autor 
                p.mb-0 - Peak Adventure Travel Group y Skift Team (2014, p. 7)
          .col-lg-6
            .bloque-texto-d.color-secundario.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                p #[b Hoy, en Europa, se observa un creciente movimiento hacia una economía de la experiencia, en la cual los consumidores buscan productos y servicios cada vez más únicos y exclusivos. Este movimiento es particularmente notorio en turismo, mercado en el que, cada vez más, los viajeros europeos buscan experiencias únicas y exclusivas que generen recuerdos duraderos.]
                i.fas.fa-quote-right
              .bloque-texto-d__autor 
                p.mb-0 - Centre for the Promotion of Imports (2015, p. 2)
        p.mb-5 Claramente, las experiencias turísticas llegan a agregar valor a los productos y los destinos, y no importa qué tipología de turismo se desarrolle, incluir experiencias se hará necesario a la hora de diferenciarse de la competencia.
        hr.mb-5
        .row.mb-5
          .col-lg-8.mb-4.mb-lg-0
            p.mb-4 #[b.txt-color1 Intercambio de experiencias]
            p Tan importante como conocer las tendencias del mercado es conocer otras experiencias turísticas, tanto las que está desarrollando la “competencia” como las similares que se den en otros lugares, incluso remotos. Si es posible vivir alguna de esas experiencias, mucho mejor, pues esto podrá aportar elementos y dar buenas ideas para el futuro diseño. Otra forma es consultar por Internet; existe mucha información acerca de experiencias turísticas en todo el mundo que seguro aportará a la que se quiera diseñar.
            p También es importante tener en cuenta que, cuando se tenga la experiencia diseñada, se debe dar a conocer, para que también entre en el abanico de posibilidades que tiene el turista y, por qué no, para que sea referente para otras experiencias.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img15.png', style="width: 450px").m-auto
        hr.mb-5
        .row.mb-5
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img16.png', style="width: 450px").m-auto
          .col-lg-8
            p.mb-4 #[b.txt-color1 Criterios de sostenibilidad]
            p La sostenibilidad es una necesidad imperiosa en cualquier actividad que desarrolle el ser humano, y la actividad del turismo no es ajena a esta realidad.
            p Al diseñar la experiencia turística, se debe plantear muy bien la contribución al desarrollo de los Objetivos de Desarrollo Sostenible, asimismo, se debe entender que el turismo es una actividad social y económica y que la experiencia debe ser sostenible, no solo de manera ambiental, cultural y social, sino también económica, aportando a los ingresos y diversificación de las actividades locales.
        hr.mb-5
        p.mb-4 #[b.txt-color1 Objetivos de Desarrollo Sostenible]
        p.mb-5 De acuerdo con la política de Turismo Sostenible de Colombia 2020, los principales objetivos en los que puede contribuir el desarrollo del turismo son los N° 6, 7, 8, 11, 12, 13, 14, 15 y 17.
        .row.justify-content-center.mb-5
          .col-lg-10.bg-white.p-5.mb-4
            figure
              img(src='@/assets/curso/tema1/img17.png')
          .col-lg-10.bg-white.p-4
            p.mb-0 Fuente: UNESCO.
        hr.mb-5
        .row.mb-4
          .col-lg-8.mb-4.mb-lg-0
            p.mb-4 #[b.txt-color1 Personal calificado]
            p Tal vez uno de los puntos relevantes de una experiencia turística es contar con personal capacitado y calificado en diferentes situaciones, de acuerdo con cómo se vaya presentando la experiencia. Las actitudes sumadas a las aptitudes garantizarán el éxito de una experiencia turística.
            p Si hay algún actor importante en este sentido es el guía de turismo, en él, en gran parte, cae el peso de la responsabilidad de que una experiencia turística logre el objetivo con el que fue diseñada. 
            p En este sentido, el Manual de Diseño de Experiencias Turísticas desarrollado por el Servicio Nacional de Turismo de Chile dedica un apartado destacando la importancia de los guías de turismo:
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img18.png', style="width: 450px").m-auto
        .row.justify-content-center.mb-4
          .col-lg-10
            .bloque-texto-d.color-secundario.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                p “En una experiencia turística, los guías son los mediadores más relevantes, ya que tienen que ejercer roles de liderazgo, animación, información e interpretación, entre otros, además de encargarse de presentar la narrativa. Por esta razón, deben ser profesionales capacitados. De todos sus posibles roles o capacidades, tres son los más importantes: la capacidad de intermediación, la de ofrecer seguridad y la de transmitir la narrativa de la experiencia.
                  br
                  br
                  | Por otra parte, para que un turista pueda vivir plenamente la experiencia turística, es preciso que valide al guía como tal, estableciéndose entre ambos un vínculo de confianza. Para que ello ocurra, este debe proporcionar información, seguridad y confort al visitante, evitándole posibles problemas o riesgos. Por último, el guía debe ser capaz de transmitir al turista —de manera atractiva y envolvente— la narrativa de la experiencia, mediante el uso de habilidades comunicativas que mantengan el interés del visitante.
                  br
                  br
                  | Estas capacidades, más otras como la empatía y el profesionalismo, resultan deseables en todos los mediadores, ya que son fundamentales para ofrecer una experiencia coherente y de calidad. Por esta razón, una empresa turística que quiera desarrollar una buena experiencia no puede descuidar a sus mediadores; todo lo contrario: debe procurar involucrarlos activamente en el cumplimiento de los objetivos de la empresa y de la experiencia, lo que les permitirá transmitir la narrativa de mejor manera”.
                i.fas.fa-quote-right
              .bloque-texto-d__autor 
                p.mb-0.d-flex.justify-content-end #[b - Nota. Tomado de SERNATUR (2017)]
        .row.align-items-center.mb-5
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img14.svg')
          .col-lg-6
            p Hay que destacar la importancia que tiene el guía de turismo en los destinos, compromete a estos prestadores de servicios a estar altamente capacitados y en constante formación, la cual no termina una vez obtenida su tarjeta profesional, su formación debe darse a lo largo del ejercicio de su actividad y acorde con su vocación y campo de acción, demostrado está que la responsabilidad que tiene frente a los turistas y el mismo destino turístico es inmensa y así mismo debe ser su compromiso.
            p También se debe tener en cuenta que hay otros actores que forman parte de la cadena de la prestación de servicio y de la experiencia diseñada, todos, de igual manera, deben estar capacitados para poder brindar el mejor servicio y estar alineados e identificados con la experiencia que se está ofreciendo.
        hr.mb-5
        .row.mb-4
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img19.png', style="width: 450px").m-auto
          .col-lg-8
            p.mb-4 #[b.txt-color1 Seguridad]
            p Como se interpreta, la experiencia turística involucra al turista, lo hace partícipe de las actividades; en este sentido, el turismo de aventura, en escenarios naturales y a veces agrestes, motivará a los turistas a participar de manera activa en lo que se le proponga. Es importante entonces identificar el grado de riesgo y dificultad que tenga cada una de las actividades propuestas en una experiencia, con el fin de minimizar los riesgos a través de elementos como planes de contingencia, inclusión y uso de equipos certificados, y la implementación de normas técnicas sectoriales de acuerdo con las actividades a desarrollar; no se puede olvidar que cualquier incidente o accidente que se presente en un turista puede ser responsabilidad de quien diseña la experiencia al omitir cualquier acción que permita minimizar los riesgos.
        hr.mb-5
        .row.mb-5
          .col-lg-8.mb-4.mb-lg-0
            p.mb-4 #[b.txt-color1 Protocolos de servicios]
            p Entendidos como el paso a paso en la ejecución de las funciones que deba cumplir una persona que preste un servicio, en este caso, turístico; la experiencia turística también debe contar con protocolos de servicios establecidos para sus diferentes momentos, esto de alguna forma permite estandarizar la prestación del servicio en beneficio del turista.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img20.png', style="width: 450px").m-auto
        hr.mb-5
        .row.mb-4
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img21.png', style="width: 450px").m-auto
          .col-lg-8
            p.mb-4 #[b.txt-color1 Información precisa]
            p Otro factor fundamental para el diseño de la experiencia es contar con la mayor cantidad de información de acuerdo con la experiencia que se va a diseñar, datos históricos, culturales, de flora y fauna van a alimentar el hilo conductor de las historias que se quieren contar y las sensaciones que se quieren transmitir, se debe tener en cuenta que dentro de las experiencias los relatos juegan un papel relevante. La información debe venir de diferentes fuentes de información, y en este caso, las fuentes primarias, como los habitantes de la misma región, ayudarán mucho para lograr este objetivo. La información recolectada y sistematizada ayudará no solo al diseño de la experiencia, sino que se puede usar en planes de interpretación o en técnicas como el storytelling que ayuda a la promoción y posicionamiento de los destinos.
        hr.mb-5
        .row.mb-5
          .col-lg-8.mb-4.mb-lg-0
            p.mb-4 #[b.txt-color1 Redes sociales]
            p No se puede desconocer que como hay tendencias para viajar, también es una realidad de cómo las personas buscan información y compran los servicios y las experiencias turísticas; se debe pensar seriamente en cómo se va a promocionar la experiencia que se diseñe y esto tiene que ver con factores como la identificación de los segmentos de mercado a los cuales va dirigida la experiencia. Hoy, manejar la promoción por medio de las redes es indispensable para la visibilización de los destinos, se debe entender que redes como Facebook, Instagram, aplicaciones como WhatsApp, un blog o una página web tienen cada una sus particularidades, formas de ser consultadas y diferentes públicos, por esta razón, es necesario contar con el conocimiento o tener a alguien capacitado que lo pueda hacer de forma profesional para obtener mejores resultados a la hora de comercializar la experiencia.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img22.png', style="width: 450px").m-auto
        hr.mb-5
        .row.mb-4
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img23.png', style="width: 450px").m-auto
          .col-lg-8
            p.mb-4 #[b.txt-color1 Precio]
            p Tal vez uno de los elementos más complejos cuando se diseña la experiencia es el de poner un precio final a la misma, se debe tener en cuenta que todo lo que se “incluya” en una experiencia se debe costear, porque al final la experiencia puede ser la suma de varios servicios. El precio debe ser equilibrado de acuerdo con lo diseñado y los servicios que intervienen, además de los criterios de calidad que intervienen en la experiencia.
            p Debe haber un equilibrio entre calidad - experiencia diseñada - precio. Se deben, además, tener en cuenta costos fijos, comisiones y margen de utilidad. Definir el precio es indispensable a la hora de querer comercializar la experiencia diseñada.
        p.mb-5 Desarrollar cada uno de estos pasos en la fase de planeación permitirá hacer el alistamiento para poder ejecutar una experiencia turística, se recomienda verificar a través de una lista de chequeo el seguimiento y cumplimiento de los pasos.
        .row.align-items-center.mb-4
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img7.svg')
          .col
            h4.mb-0 Ejecución
        p.mb-5 Una vez se han tenido en cuenta algunos elementos para la planificación y puesta en marcha del diseño de la experiencia, se deben establecer los pasos que se tendrán en cuenta para la ejecución de esta, aunque se denomina ejecución, todavía se está en la estructuración y validación de la experiencia antes de ser puesta en el mercado para su comercialización.
        .row.mb-4
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img24.png', style="width: 450px").m-auto
          .col-lg-8
            p.mb-4 #[b.txt-color1 Experiencia y conocimiento del mercado]
            p Como se destacó en la fase anterior (planeación), a la hora de pensar en la ejecución de la experiencia no solo es importante conocer a fondo las características del mercado o segmento al que se está dirigiendo la oferta, sino que es necesario contar con la experiencia para el manejo de las actividades planteadas, para ello, se puede recurrir a personas y servicios que estén consolidados o capacitar y formar muy bien a las que van a intervenir en la ejecución de la experiencia.
        hr.mb-5
        .row.mb-4
          .col-lg-8.mb-4.mb-lg-0
            p.mb-4 #[b.txt-color1 Involucrar a los locales]
            p Si una experiencia pretende ser auténtica y original, se debe tener en cuenta que parte de los actores principales son las personas de la localidad donde se desarrolle la misma. El aporte que pueden ofrecer las personas que realmente están inmersas y sienten los valores culturales de su localidad dará un valor agregado a la experiencia.
            p Se debe tener mucha precaución al momento de diseñar la experiencia, sobre todo en algunos escenarios donde las comunidades y los ecosistemas pueden ser frágiles y vulnerables; siempre se debe contar con la autorización de las personas que habitan los sitios donde se puede diseñar la experiencia, entendiendo que si se va a obtener provecho de la actividad, deben verse beneficiadas las personas que habitan el sitio y causar el menor impacto, tanto en el componente cultural como en el ambiental.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img25.png', style="width: 450px").m-auto
        p.mb-5 Todo esto también fortalece el turismo sostenible y debe hacerse visible al turista, ya que lo agradecerá y comprenderá mejor el sitio que visita con sus particularidades.
        hr.mb-5
        .row.mb-5
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img26.png', style="width: 450px").m-auto
          .col-lg-8
            p.mb-4 #[b.txt-color1 Gastronomía local]
            p Si una experiencia debe ser auténtica, un elemento que merece un paso aparte es el incluir la gastronomía local dentro de las experiencias; la comida es un factor de identidad y un gran motivador de los viajes, e incluirlo le dará un toque diferencial a la actividad; se debe tener en cuenta que, al incluir la gastronomía local, por más tradicional que sea, debe cumplir también con las buenas prácticas de manipulación de alimentos; el que sea tradicional y auténtica no implica que se ponga en riesgo la seguridad de los turistas.
            p Si una experiencia debe ser auténtica, un elemento que merece un paso aparte es el incluir la gastronomía local dentro de las experiencias; la comida es un factor de identidad y un gran motivador de los viajes, e incluirlo le dará un toque diferencial a la actividad; se debe tener en cuenta que, al incluir la gastronomía local, por más tradicional que sea, debe cumplir también con las buenas prácticas de manipulación de alimentos; el que sea tradicional y auténtica no implica que se ponga en riesgo la seguridad de los turistas.
        hr.mb-5
        .row.mb-4
          .col-lg-8.mb-4.mb-lg-0
            p.mb-4 #[b.txt-color1 Momentos sensoriales]
            p Estimular los sentidos a través de diferentes actividades a lo largo de una experiencia puede ser parte del factor fundamental del éxito de esta, se debe estar atento a la hora del diseño de cómo se pueden ir involucrando los sentidos para complementar la actividad y la historia que se está contando.
            p Por ejemplo, al realizar recorridos por un sendero en un bosque, donde se invite a los participantes a cerrar sus ojos y activar su olfato y oídos, palpar las diferentes texturas de las plantas con las manos o los pies y, por qué no, probar hojas o frutos que allí se encuentren (lógicamente, cerciorándose de que no le harán daño al turista) harán que el turista esté más atento y viva de manera directa la experiencia, entendiendo mejor la intención del recorrido.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img27.png', style="width: 450px").m-auto
        .cajon.color-secundario.p-4.mb-5
          .row.align-items-center
            .col-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img15.svg', style="width: 70px").m-auto
            .col-lg-10
              p.mb-0 En fin, para involucrar los sentidos hace falta imaginación, ya que las posibilidades son infinitas de acuerdo con las características de los escenarios en que se quiera aplicar.
        hr.mb-5
        .row.mb-4
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img28.png', style="width: 450px").m-auto
          .col-lg-8
            p.mb-4 #[b.txt-color1 Motivación al turista]
            p Cada vez son más las experiencias que los turistas pueden encontrar en el mercado enmarcadas en los diferentes tipos de turismo que tengan como vocación los destinos. Los turistas obedecen a diferentes motivaciones que los impulsan a decidir hacer un desplazamiento para vivir una experiencia y esto tiene que ver también con las emociones y las sensaciones que el destino use para atraerlo.
            p Los turistas que consumen las experiencias turísticas van a preferir sitios naturales o culturales poco explorados, participar en las actividades e involucrarse con los locales, siempre están en busca de aprender algo nuevo y les encantan los retos, ya sean físicos o mentales.
        p.mb-5 Los destinos, hoy en día, trabajan en entender y estudiar el perfil del turista, comprendiendo sus motivaciones y lanzando las campañas de promoción de destino e incluso de promoción de país; para Colombia, se han creado campañas promocionales tan exitosas como “Colombia es pasión”, “Colombia, el riesgo es que te quieras quedar”, “Colombia realismo mágico”, o la actual para Colombia, “Para todo lo que quieras vivir, la respuesta es Colombia”, que han apelado a las emociones y sensaciones para atraer visitantes. El reto a la hora de diseñar una experiencia se debe basar también en las motivaciones y expectativas del visitante y enmarcarlo en lo que el destino quiere posicionar como marca, esto le dará mayor identidad y será una buena herramienta a la hora de promocionar la experiencia.
        hr.mb-5
        .row.mb-4
          .col-lg-8.mb-4.mb-lg-0
            p.mb-4 #[b.txt-color1 Participación del turista]
            p El turista es uno de los protagonistas en el diseño de la experiencia, pues alrededor de él y con los entornos exclusivos, tanto naturales como culturales que tenga la localidad, se diseña la misma.
            p En este sentido y como se ha venido definiendo, una de las claves de una buena experiencia es la participación del turista en las actividades que se proponen, teniendo en cuenta que dicha participación es la que permite al turista llevarse una vivencia significativa, apreciar y valorar más los recursos y atractivos con los que está teniendo contacto, aprender sobre la cultura y la naturaleza del lugar y disfrutar de la actividad.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img25.png', style="width: 450px").m-auto
        p Es importante entonces tener claro cuál será el nivel de participación que va a tener el turista a lo largo de la experiencia, esto teniendo en cuenta el haber estudiado su perfil e identificado sus motivaciones, se puede entonces definir el rol del turista en la actividad, establecer una participación pasiva o activa, o el nivel de inmersión del turista en la actividad.
        p Un punto destacado y que tiene que ver con toda la experiencia es, sin duda, poder hacer actividades que le dejen conocimiento, sensaciones y emociones al turista, realizar actividades experienciales de manera estructurada pone en el centro de la experiencia al turista; se debe tener en cuenta que la participación de él en las actividades posibilita un abanico de oportunidades para que las experiencias sean más significativas. 
        p.mb-5 Si estas actividades donde se involucre al turista tienen en cuenta sus motivaciones, se deben estructurar desde los siguientes aspectos:
        .tarjeta.tarjeta--verde.p-4.p-xl-5.mb-4
          SlyderA(tipo="b")
            .row
              .col-xl-4.mb-4.mb-mb-0
                h4 ¿Qué queremos que el turista sepa?
                p Se deben definir los aspectos relevantes que se quiere que el turista sepa a partir de las temáticas específicas que van a nutrir la experiencia.
                p La experiencia debe estimular un aprendizaje y la parte cognitiva para que tome mayor significado.
                p Vale recordar que los nuevos aprendizajes forman parte de la motivación de los turistas que buscan experiencias, estos aprendizajes se pueden reforzar con el desarrollo de guiones turísticos y planes interpretativos que se involucran en el diseño de la experiencia.
              .col-xl-8
                figure
                  img(src='@/assets/curso/tema1/img29.png')
            .row
              .col-xl-4.mb-4.mb-mb-0
                h4 ¿Qué queremos que el turista sienta?
                p Las emociones forman parte integral de una actividad experiencial, diseñarla a partir de lo que se quiere generar en el turista es posible. Las actividades experienciales deben tocar la fibra del turista, deben moverlo emocionalmente, este factor les encanta a las personas que buscan experiencias. Sentimientos de admiración hacia una labor, de recordación o evocación de tiempos pasados, adrenalina o incluso temor o tristeza forman parte de esos sentimientos y emociones que se pueden generar a partir de una actividad experiencial bien diseñada. Este aspecto se complementa con lo que se trabaja en los guiones o la información al turista.
              .col-xl-8
                figure
                  img(src='@/assets/curso/tema1/img30.png')
            .row
              .col-xl-4.mb-4.mb-mb-0
                h4 ¿Qué queremos que el turista haga?
                p De la misma forma, se pueden diseñar experiencias para la acción, es decir, una actividad experiencial bien estructurada, con un mensaje fuerte y el manejo de emociones podrá llevar al turista a realizar acciones inmediatas o posteriores, desde diferentes puntos de vista; por ejemplo, en una actividad de ecoturismo, se puede generar conciencia por el cuidado del medio ambiente, si el mensaje y la experiencia fueron significativos, la recordación en el turista lo llevará a tomar acciones en su cotidianidad para el cuidado del mismo.
              .col-xl-8
                figure
                  img(src='@/assets/curso/tema1/img31.png')
        .cajon.color-secundario.p-4.mb-4
          .row.align-items-center
            .col-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img16.svg', style="width: 70px").m-auto
            .col-lg-10
              p.mb-0 Al responder a estas preguntas, se genera la posibilidad de realizar una actividad experiencial acertada y estructurada, incluso desde actividades como la prestación de un servicio de guianza profesional, al tener en cuenta estos aspectos se puede establecer mejor un recorrido e incluso ajustar los guiones y planes para ofrecer una mejor experiencia.
        p.mb-5 El diseño de la actividad experiencial, al dar respuesta a las preguntas, mezcla los aspectos que se vienen mencionando, pues forman parte integral de la misma y deben ir en concordancia con las motivaciones y la identidad que el mismo destino quiere promocionar, sin olvidar que cada actividad debe considerarse única, diferenciadora, innovadora y competitiva.
        hr.mb-5
        .row.mb-4
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img32.png', style="width: 450px").m-auto
          .col-lg-8
            p.mb-4 #[b.txt-color1 Recordatorios locales]
            p El recordatorio o souvenir debe convertirse en un elemento integral de la misma experiencia turística, debe darle valor a la misma, debe ser auténtico, debe ser personalizado y, lo más importante, debe generar recordación y un vínculo emocional con el destino. El recordatorio puede ir desde una artesanía que el mismo turista elaboró en un taller hasta la siembra de un árbol, el cual llevará el nombre del turista que lo sembró; estos son apenas dos ejemplos de lo que puede ser el recordatorio, pero, de acuerdo con la identidad y diseño de la experiencia, se pueden tener múltiples opciones. 
            p Tener en cuenta que:  no se debe tomar como un elemento aislado u obvio dentro del diseño de una experiencia turística.
        p.mb-5 Tener en cuenta los pasos para preparar la ejecución de la experiencia determinará en gran medida el éxito de esta, entre más información y más detalle se ponga en esta fase, se tendrán mejores elementos a la hora de diseñar las actividades.  Una vez se haya realizado la verificación de esta fase, se deben establecer los últimos pasos, que corresponden a la fase de evaluación.
        hr.mb-5
        .row.align-items-center.mb-4
          .col-auto.pe-0
            figure
              img(src='@/assets/curso/tema1/img7.svg')
          .col
            h4.mb-0 Ejecución
        p Como toda actividad, la evaluación que se haga de la misma cobra importancia en la medida que permite realizar seguimiento y establecer acciones en caso de encontrar hallazgos que permitan mejorar la experiencia diseñada.
        p.mb-5 Esquema de diseño de experiencias turísticas, fase de evaluación.
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Medir la satisfacción")
            .col-lg-8.mb-4.mb-lg-0
              p Se deben diseñar estrategias que permitan medir el grado de satisfacción que tenga el turista frente a la experiencia que se diseñó. Este elemento tiene un gran valor, pues la información que se pueda obtener del turista frente al cumplimiento de expectativas, percepciones y satisfacción con la experiencia debe permitir mejorar o fortalecer aquellos aspectos que se identifiquen como débiles o fuertes en la misma. 
              p Diseñar las herramientas con las que se mide la satisfacción requiere un trabajo juicioso y detallado, se deben establecer los medios a través de los cuales se puede recoger la información, los momentos para aplicarlos y la intención que se tenga con cada uno de ellos, y lo más importante es realizar un análisis de la información obtenida, ya que con seguridad aportará muchos elementos de valor que vayan en busca de hacer la experiencia cada vez más memorable.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/img33.png', style="width: 450px").m-auto
          .row(titulo="Seguimiento por redes")
            .col-lg-8.mb-4.mb-lg-0
              p En la fase de planeación, se debieron establecer las redes sociales o herramientas por medio de las cuales se va a promocionar la experiencia turística. Si bien es importante haberlas definido, de la misma forma, es muy importante hacer el seguimiento permanente a lo que pasa en ellas; la actualización permanente, el monitoreo, la respuesta a comentarios o preguntas forman parte del seguimiento que se debe hacer, asimismo, por medio de las redes, también es posible medir la satisfacción del turista frente a la experiencia. 
              p El manejo de las redes es un tema que no se debe dejar pasar por alto, si las personas que diseñan la experiencia no tienen el conocimiento del manejo de estas, existen empresas y personas especializadas a las cuales se puede recurrir para realizar esta labor.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/img34.png', style="width: 450px").m-auto
          .row(titulo="Registro continuo de la actividad")
            .col-lg-8.mb-4.mb-lg-0
              p Por último y no menos importante, es sistematizar a manera de registro todo lo que pase alrededor de la experiencia que se diseñó, desde hacer las verificaciones en cada una de las fases por medio de listas de chequeo hasta los datos que arrojan las mediciones de satisfacción de los turistas, estos registros permitirán tomar decisiones, hacer ajustes o fortalecer elementos que se encuentran dentro de la experiencia, con el fin de mejorar los beneficios para quien la disfruta y para quienes están prestando el servicio y haciendo que sea posible.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/img35.png', style="width: 450px").m-auto
  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
