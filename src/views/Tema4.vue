<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color:#FFF") 4
      h1 Rutas turísticas
    .row.bg-color7.mb-5(data-aos="fade-right")
      .col-12.p-5
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            p Las rutas turísticas son una de las formas de unir diferentes atractivos turísticos de manera:
            ul.lista-ul
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Organizada.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Estandarizada.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Integradora.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Innovadora.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Con beneficios para el turista y los destinos.
            p Diversos autores han definido la ruta turística con varios puntos en común; se presentan algunas referencias para comprender mejor el concepto de la ruta tomadas de Larrea (2019).
          .col-lg-6
            figure
              img(src='@/assets/curso/tema4/img2.svg', style="width: 550px").m-auto
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10.position-relative
        .avatar
          figure
            img(src="@/assets/curso/tema4/img3.svg", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema4/img11.svg", alt="alt").img100
            .col
              h5 Mamani (2016):
              p Se conoce como ruta turística al camino o recorrido que se destaca por sus atractivos para el desarrollo del turismo. Estas rutas pueden sobresalir por sus características naturales o por permitir el acceso a un patrimonio cultural o histórico de importancia.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema4/img12.svg", alt="alt").img100
            .col
              h5 Molina (2013):
              p La ruta turística es una propuesta estandarizada de lugares y actividades a realizar en una zona bajo régimen, tiempos y duración de visitas flexibles. Son una modalidad de los productos turísticos, que, basada en un itinerario previo, facilita la orientación del pasajero en el destino.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema4/img13.svg", alt="alt").img100
            .col
              h5 Ministerio de Comercio, Industria y Turismo de Colombia (2018):
              p Itinerario que articula varios atractivos turísticos, se caracteriza por iniciar en un punto determinado y llegar a otro punto diferente de partida.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema4/img14.svg", alt="alt").img100
            .col
              h5 Cruz (2014):
              p Se definen como rutas o caminos trazados para que turistas o viajeros puedan conocer y visitar diferentes atractivos turísticos. Existen dos tipos de rutas turísticas: circulares y lineales. Las primeras, tienen un punto de partida y tienen atractivos naturales, como paisajes, haciendo paradas en puntos de interés. Las segundas se puede decir que van, como lo indica su nombre, en línea, y los destinos turísticos se encuentran ligados entre sí por medio de características en común.
    p.mb-5 De acuerdo con las definiciones presentadas por los autores, la ruta turística cobra importancia dentro del producto turístico de un destino, permite conectar atractivos y recursos de tipo natural y cultural, y a la vez involucra las experiencias que se desarrollen en cada uno de esos mismos escenarios.
    .row.align-items-center.mb-4
      .col-auto.pe-0
        figure
          img(src='@/assets/curso/tema1/img7.svg')
      .col-auto
        h4.mb-0.txt-color1 Ventajas de una ruta turística
    p.mb-5 Presentar los atributos de un destino turístico de forma organizada por medio de rutas, sin duda, ofrece una serie de ventajas tanto a los destinos como a los viajeros que pretenden visitarlo. Algunas de las ventajas que puede tener una ruta turística son:
    SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="fade-up")
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema4/img1.png' alt='AvatarTop' style="width: 350px").m-auto
        p Fortalecer la identidad de los atributos del destino, fomentando la protección y valoración del patrimonio natural y cultural.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema4/img2.png' alt='AvatarTop' style="width: 350px").m-auto
        p Distribuir los tiempos y movimientos en el destino bajando la presión en las temporadas de más demanda de turistas.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema4/img3.png' alt='AvatarTop' style="width: 350px").m-auto
        p Agregar valor a los productos turísticos existentes a través de la innovación.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema4/img4.png' alt='AvatarTop' style="width: 350px").m-auto
        p Generar mayor permanencia y gasto en el destino turístico.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema4/img5.png' alt='AvatarTop' style="width: 350px").m-auto
        p Fortalecer el encadenamiento de actores públicos y privados en función del desarrollo turístico del destino.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema4/img6.png' alt='AvatarTop' style="width: 350px").m-auto
        p Brindar más elementos que permitan al turista tomar decisiones para disfrutar el destino.
    Separador
    #t_4_1
    .titulo-segundo.color-primario
      h2 4.1 Tipos de rutas
    p.mb-5 Es muy frecuente y repetitivo que cuando una persona busca información para realizar un viaje se le presenten como resultado diferentes rutas en el destino; además de permitir organizar el itinerario de viaje, da al turista la posibilidad de personalizar el viaje de acuerdo con sus preferencias. Es importante entonces aclarar algunos conceptos referentes a los tipos de rutas:
    .tarjeta.tarjeta--verde.p-4.p-xl-5.mb-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .row
          .col-xl-4.mb-4.mb-mb-0
            h4 Rutas temáticas
            p Son recorridos generalmente de carácter histórico, cultural, social o natural, que conectan puntos relacionados con un tema en particular, conectan también prestadores de servicios y están dirigidas a segmentos generales o específicos de turistas de acuerdo con su interés. Las rutas pueden ir desde temas generales, como:
            ul.lista-ul
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Rutas gastronómicas.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Rutas literarias o específicas, de acuerdo con un tema o actividad, como:
              li.pb-0
                ul
                  li
                    i
                    | • Ruta del vino, en países como Chile, Argentina y España.
                  li
                    i
                    | • Ruta de Macondo, basada en la obra del Nobel de literatura Gabriel García Márquez, en Colombia.
                  li
                    i
                    | • Ruta del tequila, en México.
                  li
                    i
                    | • Ruta del Camino Inca, en Perú.
                  li
                    i
                    | • Ruta del Café, en Colombia.
          .col-xl-8
            figure
              img(src='@/assets/curso/tema4/img7.png')
        .row
          .col-xl-4.mb-4.mb-mb-0
            h4 Rutas guiadas y autoguiadas
            p Como forma de disfrutar una ruta temática de cualquier tipo, estas pueden darse así: 
            p #[b Guiada]: intermedia un guía de turismo que ayuda al cumplimiento del itinerario, la prestación y coordinación de servicios de	 apoyo (alojamiento, alimentación, transporte, entradas) y la interpretación del patrimonio y de los elementos representativos de la ruta a través del conocimiento y experticia que tiene de la misma. El guía de turistas tiene protagonismo relevante, ya que por medio de su narrativa y conocimiento podrá generar satisfacción y disfrute por parte de los turistas.
          .col-xl-8
            figure
              img(src='@/assets/curso/tema4/img8.png')
        .row
          .col-xl-4.mb-4.mb-mb-0
            h4 Rutas guiadas y autoguiadas
            p #[b Autoguiada]: el turista realiza el recorrido de manera autónoma; para la interpretación, debe estar apoyado en diferentes medios, señalética, mapas, folletos, audios, información en la ruta, uso de GPS y todos los elementos que le debe proveer la ruta para que pueda disfrutarla sin inconvenientes. 
            p Tanto las rutas guiadas como autoguiadas requieren planificación y diseño, y se convierten en factor relevante de conexión entre la ruta con sus atributos, el destino y el turista.
          .col-xl-8
            figure
              img(src='@/assets/curso/tema4/img9.png')
        .row
          .col-xl-4.mb-4.mb-mb-0
            h4 Rutas en función del transporte
            p Las rutas deben definir en su diseño el tipo de transporte que se usa para acceder a los diferentes componentes de esta, en este sentido, hay rutas en diferentes medios de transporte, como:
            ul.lista-ul
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Caminando.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Bicicleta.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Moto.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Acuáticas.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Aéreas.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Tren.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Combinadas. Estas pueden usar diferentes medios de transporte.
          .col-xl-8
            figure
              img(src='@/assets/curso/tema4/img10.png')
        .row
          .col-xl-4.mb-4.mb-mb-0
            h4 Rutas en función del transporte
            ul.lista-ul
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Desplazamiento con animales: Muy común usar caballos o, en algunos casos, camellos o trineos jalados por perros; en todos los casos, se deben tener en cuenta las normas que protejan a los animales contra el maltrato y el abuso y las que técnicamente normalizan y regulan el uso de estos.
            p Cada uno de los medios de transporte que se utilice para recorrer las rutas dependerá de las características de estas y del nivel de experiencia que se quiere lograr en cada una de ellas.
          .col-xl-8
            figure
              img(src='@/assets/curso/tema4/img11.png')
    p.text-center.mb-5 Cada ruta contará con los siguientes tres elementos esenciales:
    .row.justify-content-center(data-aos="fade-down")
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/tema4/img13.png' alt='AvatarTop' style="width: 350px").m-auto
          p.text-center #[b Tipo de ruta]
          ul
            li
            | • Ruta temática
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/tema4/img14.png' alt='AvatarTop' style="width: 350px").m-auto
          p.text-center #[b Forma de recorrerla]
          ul
            li
            | • Ruta guiada
            li
            | • Ruta autoguiada
      .col-lg-3
        .tarjeta.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/tema4/img15.png' alt='AvatarTop' style="width: 350px").m-auto
          p.text-center #[b Medios de transporte para recorrerla.]
    Separador
    #t_4_2
    .titulo-segundo.color-primario
      h2 4.2 Estructura de una ruta turística
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La ruta turística es una de las formas de volver tangibles los productos turísticos y va más allá de unir atractivos turísticos. La ruta tiene componentes que también deben ser organizados en función de diferentes elementos, teniendo en cuenta las tendencias del mercado, el perfil del turista, la identidad del destino, los prestadores de servicios turísticos y los servicios de apoyo que encadenados conforman y dan sentido a la ruta para ser implementada.
    p.mb-5 Poner todos estos elementos de forma organizada en función del turismo da alternativas al turista para poder vivir un destino de acuerdo con sus gustos y expectativas. La ruta ayuda a visibilizar los destinos y, de acuerdo con cómo se estructure, podrá poner un mismo destino al alcance de diferentes perfiles de turistas, no solo en cuanto a sus expectativas, sino a sus posibilidades económicas, por ejemplo.
    .row.mb-5(data-aos="fade-up")
      .col-12.p-4.bg-color8
        .row.align-items-center
          .col-lg-1.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/img4.svg', style="width: 70px").m-auto
          .col-lg-11
            p.mb-0 Es importante tener en cuenta que, si bien las rutas turísticas son una forma de unir atractivos en un destino, estas comienzan a dar mayor relevancia a las experiencias que se dan dentro de ellas, siendo hoy en día las rutas temáticas una forma de disfrutar destinos; las experiencias también deben diseñarse pensando en formar parte de una o varias rutas.
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 3]. #[i Estructura de una ruta turística]
        figure
          img(src='@/assets/curso/tema4/img5.svg')
    Separador
    #t_4_3
    .titulo-segundo.color-primario
      h2 4.3 Rutas culturales y naturales
    p.mb-5(data-aos="fade-right") Colombia es un país pluricultural y megadiverso, estos dos elementos hacen que el potencial en turismo cultural y de naturaleza sea inmenso. En los últimos años, el país ha venido trabajando en consolidar diferentes destinos a través de productos turísticos, con el fin de posicionar el turismo como alternativa de crecimiento, desarrollo y diversificación de las actividades económicas.
    .row.bg-color9.mb-5(data-aos="fade-left")
      .col-12.p-5
        .row.align-items-center.justify-content-center.py-5
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/img7.svg', style="width: 550px").m-auto
          .col-lg-5
            p Las rutas turísticas han jugado un papel importante para ofrecer alternativas donde se pueden disfrutar los destinos de forma organizada, por ello, las regiones han trabajado en diseñar rutas que, por medio de la articulación e integración de prestadores de servicios, puedan acceder a destinos que:
            ul.lista-ul
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Den Identidad.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Den Autenticidad.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Unan experiencias.
    .row.bg-color10.mb-5(data-aos="fade-right")
      .col-12.p-5
        .row.align-items-center.justify-content-center
          .col-lg-5.mb-4.mb-lg-0
            p En Colombia, entidades como FONTUR, el Viceministerio de Turismo o el Sistema de Parques Nacionales Naturales cada día trabajan por el posicionamiento de destinos a través de rutas, algunas se ellas son:
            ul.lista-ul
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Los tesoros de Colombia (rutas de los pueblos de la Red de Patrimonio de Colombia).
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | La expedición botánica.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | La puerta de oro.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | La herencia Muisca.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Paisajeando.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Universo WAYUU.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Paisaje cultural cafetero.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema4/img9.svg', style="width: 650px").m-auto
    p.mb-5 Para mayor información, se anima al aprendiz a consultar información complementaria en sitios como:
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.bg-color11.p-4
        .row.align-items-center
          .col-lg-1.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/img10.svg', style="width: 80px").m-auto
          .col-lg.mb-3.mb-lg-0
            .row.align-items-center.mb-3
              .col-lg-6
                p.mb-0 Colombia #[i travel]
              .col-lg
                a.boton.color-acento-botones.me-3(href="https://colombia.travel/es" target="_blank")
                  span Descargar
                  i.fas.fa-link
            .row.align-items-center
              .col-lg-6
                p.mb-0 Rutas del paisaje cultural cafetero
              .col-lg
                a.boton.color-acento-botones.me-3(href="https://rutasdelpaisajeculturalcafetero.com/" target="_blank")
                  span Descargar
                  i.fas.fa-link
          .col-lg
            .row.align-items-center.mb-3
              .col-lg-6
                p.mb-0 Parques nacionales
              .col-lg
                a.boton.color-acento-botones.me-3(href="https://www.parquesnacionales.gov.co/portal/es/" target="_blank")
                  span Descargar
                  i.fas.fa-link
            .row.align-items-center
              .col-lg-6
                p.mb-0 Ministerio de comercio industria y turismo
              .col-lg
                a.boton.color-acento-botones.me-3(href="https://www.mincit.gov.co/" target="_blank")
                  span Descargar
                  i.fas.fa-link
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-8.p-4.bg-color8
        .row.align-items-center
          .col-lg-1.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/img4.svg', style="width: 70px").m-auto
          .col-lg-11
            p.mb-0 Lo importante a tener en cuenta es que la ruta, cualquiera que sea, esté diseñada, estructurada y lista para ser puesta en el mercado.

</template>

<script>
export default {
  name: 'Tema4',
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
