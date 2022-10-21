<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color:#FFF") 5
      h1 La narración
    p.mb-5 Desde niños, la cercanía con la narración es reconocida gracias a que en las familias se han pasado de generación en generación recursos que son parte de nuestra cultura, como:
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/img1.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              p.text-center #[b Fábulas]
      .col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/img2.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              p.text-center #[b Cuentos]
      .col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/img3.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              p.text-center #[b Adivinanzas]
      .col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/img4.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              p.text-center #[b Hechos increíbles]
      .col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/img5.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              p.text-center #[b Leyendas extraordinarias]
    .row.align-items-center.justify-content-center
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        p A pesar de creer que estas son cosas de la infancia, a los adultos les gusta escuchar este tipo de relatos fantásticos, de aventura y sucesos que hacen parte de la imaginación de otros y que, para la estructuración de las experiencias en el turismo, son de utilidad.
        p El esquema de una narración ayuda al guía a determinar guiones base de los recorridos o las actividades experienciales.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5/img6.svg', style="width: 450px").m-auto
    .row.bg-color12
      .col-12.p-5
        p.text-center.mb-5 Son 5 los aspectos para tener en cuenta en una narración:
        .row.justify-content-center.mb-5(data-aos="fade-right")
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 4]. #[i Aspectos para tener en cuenta en la narración]
          .col-lg-8
            figure
              img(src='@/assets/curso/tema5/img8.svg')
        .row.bg-color13(data-aos="fade-down")
          .col-12.p-5
            .row.justify-content-center
              .col-lg-5.mb-4.mb-lg-0
                p El narrador es la persona que cuenta la historia (casi siempre en tercera persona), sabe lo que hacen los personajes, qué piensan, dónde se encuentran, cuándo suceden los hechos y todos los detalles alrededor de ellos, lo que sugiere que esta persona los vivió, los construyó y hasta puede ser parte de la historia.  Entre mejor conozca la historia, es más fácil crear y recrear las situaciones y adornarla con detalles como condiciones atmosféricas, color de cabello de un personaje, descripción de paisajes y otros aspectos.
                p Entre las modalidades de la narración se encuentran:
                .row
                  .col-lg-auto
                    ul.lista-ul
                      li 
                        i.fas.fa-location-arrow(style="color: #FF6D4B")
                        | La leyenda.
                      li 
                        i.fas.fa-location-arrow(style="color: #FF6D4B")
                        | El cuento.
                      li 
                        i.fas.fa-location-arrow(style="color: #FF6D4B")
                        | La fábula.
                      li 
                        i.fas.fa-location-arrow(style="color: #FF6D4B")
                        | La crónica.
                      li 
                        i.fas.fa-location-arrow(style="color: #FF6D4B")
                        | La biografía.
                      li 
                        i.fas.fa-location-arrow(style="color: #FF6D4B")
                        | Las anécdotas.
                  .col-lg-auto
                    ul.lista-ul
                      li 
                        i.fas.fa-location-arrow(style="color: #FF6D4B")
                        | Los chistes.
                      li 
                        i.fas.fa-location-arrow(style="color: #FF6D4B")
                        | La historieta.
                      li 
                        i.fas.fa-location-arrow(style="color: #FF6D4B")
                        | Las adivinanzas.
                      li 
                        i.fas.fa-location-arrow(style="color: #FF6D4B")
                        | El relato.
                      li 
                        i.fas.fa-location-arrow(style="color: #FF6D4B")
                        | La narración de más de dos estilos.
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema5/img10.svg', style="width: 450px").m-auto
    .cajon.color-secundario.p-4.mb-5(data-aos="fade-left")
      .row.align-items-center
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema5/img11.svg', style="width: 70px").m-auto
        .col-lg-10
          p.mb-0 #[b El guía de turismo, por su trabajo, utiliza hechos verdaderos para hacer narraciones de estilo histórico, lo que no necesariamente evita incluir aspectos fantásticos e imaginarios, pues estas características se adecuan a la narración literaria.]
    p(data-aos="fade-right") Las regiones colombianas cuentan con un sinnúmero de recursos para narrar, en cada etapa histórica han quedado suficientes sucesos que merecen ser contados y recreados como parte del saber cultural y es importante hacerlos parte del patrimonio colombiano.
</template>

<script>
export default {
  name: 'Tema5',
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
