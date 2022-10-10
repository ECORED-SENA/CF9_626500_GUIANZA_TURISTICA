<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color:#FFF") 3
      h1 Actividades experienciales
    p.mb-5 La animación se estructura con base en técnicas y métodos propios de la recreación y está relacionada con dinámicas de grupo que se aplican perfectamente en los contextos turísticos de:
    .row.justify-content-center.mb-5
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img1.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              p.text-center #[b Satisfacción]
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img2.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              p.text-center #[b Significado]
    p.mb-5 Esto es una revolución, porque el cliente está dispuesto a pagar por un intangible: la transformación y significado que obtiene de aquello que hace cuando viaja. Desde la teoría del cerebro, se explica toda acción experiencial desde los términos señalados:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Satisfacción")
        .col-lg-8.mb-4.mb-lg-0
          p La #[b satisfacción] es un estado del cerebro provocado por una mayor o menor optimización de la retroalimentación cerebral, donde diferentes regiones compensan su potencial energético, dando la sensación de plenitud y armonía.
          p La práctica de turismo experiencial genera #[b satisfacción] o #[b experiencia positiva], el cerebro genera dopamina, un neurotransmisor que activa los circuitos de recompensa, provocando satisfacción y que el cliente quiera repetir esa conexión neuronal (sinapsis) para volver a generar dopamina.
          p Esto se usa en #[i neuromarketing] para atraer al cliente.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema3/img1.png', style="width: 450px").m-auto
      .row(titulo="Significado")
        .col-lg-8.mb-4.mb-lg-0
          p El #[b significado] es la valoración de algo, se considera uno de los vectores de motivación humana relevante.
          p El significado para el turista se obtiene en el viaje a través de las vivencias, entre otras razones, porque abre la puerta al conocimiento de uno mismo y del otro, lo que permite crecer como individuo. 
          p El significado también se relaciona con las #[b emociones] y con el interés de ofrecer en el mercado la #[b “experiencia única”], basada en dos preceptos:  alejarse de lo cotidiano y crear recuerdos memorables; “se pretende que el participante piense que difícilmente podrá repetir exactamente esa misma experiencia y que ha sido privilegiado de una manera especial”.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema3/img2.png', style="width: 450px").m-auto
    p.text-center.mb-5 Y para diseñar actividades de experiencia en el turismo, se aconseja tener en cuenta sus características:
    .row.mb-5
      .col-lg-9.mb-4.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones.p-4(titulo="Sentidos")
            h4 Sentidos
            p Se integran todos los sentidos.
          .tarjeta.color-acento-botones.p-4(titulo="Dimensiones humanas")
            h4 Dimensiones humanas
            p Se integran todas las dimensiones humanas: física, intelectual, espiritual, emocional, social.
          .tarjeta.color-acento-botones.p-4(titulo="Bienes y servicios")
            h4 Bienes y servicios
            p Integración de bienes y servicios tradicionales con otros innovadores y de calidad.
          .tarjeta.color-acento-botones.p-4(titulo="Historias")
            h4 Historias
            p Integrar en historias un conjunto de ideas, con significado, sucesivas y coherentes.
          .tarjeta.color-acento-botones.p-4(titulo="Interacciones")
            h4 Interacciones
            p Permitir interacciones del turista,  involucrándolo  en su propia experiencia.
      .col-lg-3
        figure
          img(src='@/assets/curso/tema3/img3.svg', style="width: 350px").m-auto
    p.text-center.mb-5 Los estudiosos recomiendan tener en cuenta los siguientes momentos para generar experiencias positivas en los viajeros:
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 2]. #[i Momentos para generar experiencias positivas]
        figure
          img(src='@/assets/curso/tema3/img5.svg')
    p.mb-5 Finamente, al diseñar actividades de experiencia para viajeros, SERNATUR (2017) define los siguientes pasos en el proceso:
    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/img6.svg' alt='AvatarTop')
        .tarjeta.color-primario2
          .text-white.p-4
            p.text-center #[b Identificar público objetivo]
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/img7.svg' alt='AvatarTop')
        .tarjeta.color-primario2
          .text-white.p-4
            p.text-center #[b Reconocer el escenario natural o cultural]
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/img8.svg' alt='AvatarTop')
        .tarjeta.color-primario2
          .text-white.p-4
            p.text-center #[b Hacer inteligencia de mercado: ¿Qué ofrece la competencia?]
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/img9.svg' alt='AvatarTop')
        .tarjeta.color-primario2
          .text-white.p-4
            p.text-center #[b Determinar plan para el desarrollo de la experiencia]
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/img10.svg' alt='AvatarTop')
        .tarjeta.color-primario2
          .text-white.p-4
            p.text-center #[b Definir acciones y roles.  Incluir momentos de significado y guion]
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/img11.svg' alt='AvatarTop')
        .tarjeta.color-primario2
          .text-white.p-4
            p.text-center #[b Proponer  lugar, narración y recursos necesarios]
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/img12.svg' alt='AvatarTop')
        .tarjeta.color-primario2
          .text-white.p-4
            p.text-center #[b Ejecución del plan]
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/img13.svg' alt='AvatarTop')
        .tarjeta.color-primario2
          .text-white.p-4
            p.text-center #[b Desarrollar la difusión y promoción de la propuesta]
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/img14.svg' alt='AvatarTop')
        .tarjeta.color-primario2
          .text-white.p-4
            p.text-center #[b Verificar el cumplimiento y hacer plan de mejoras]

</template>

<script>
export default {
  name: 'Tema3',
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
