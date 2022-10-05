<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color:#FFF")
          i.fas.fa-info
      h1 Introducción
    p.mb-5 Parte del desarrollo de la actividad turística se basa en la oferta de productos y servicios que de manera organizada estén disponibles para que los turistas puedan disfrutar de ellos; en este sentido, los destinos deben desarrollar productos turísticos innovadores y competitivos, que le generen ventajas comparativas sobre otros de condiciones similares, de acuerdo con su vocación y tipologías de turismo identificadas y desarrolladas.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/gdoaM7qG80s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
