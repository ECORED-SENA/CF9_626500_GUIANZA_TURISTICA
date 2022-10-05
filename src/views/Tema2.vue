<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color:#FFF") 2
      h1 Técnicas de animación
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El concepto de animación está íntimamente relacionado con la evolución de la lúdica, una dimensión humana que, como todo, ha ido cambiando y migrando hacia nuevas concepciones.  La animación y la lúdica hacen parte de la biología de los seres humanos, y por qué no afirmarlo, de los seres vivos en general; el jugueteo hace parte de la animación, por esto la recreación lo toma y estructura, para convertirlo en una forma de llevar a las personas a divertirse y aprender a interactuar de manera dinámica; el tiempo libre y el ocio permiten integrar una reflexión que cambia la perspectiva de la animación de superfluo a profundo.
    .row.bg-color5.mb-4
      .col-12.p-5
        .row.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            p #[b Historia de la animación]
            p En el siglo XX por la posguerra había una necesidad sentida y consciente de pasar los traumas de la época con actividades fuera de casa en clubes y espacios llenos de música, juego y baile. Las actividades realizadas por los seres humanos han evolucionado en los últimos siglos como el deporte, la salud y el turismo, este último intervenido por la animación como la conocemos actualmente, las actividades realizadas durante el siglo XX como distracción, pueden parecer muy ligeras, pero la animación no lo es.
            p Es así como, la figura del animador turístico era ya similar a la actual y se les llamaba, organizadores. En un primer momento se ofreció servicios de vacaciones todo incluido en un campus con tiendas de campaña en Alcudia, Mallorca, allí se consolidó este ejercicio profesional, se puede afirmar que, gracias a “todo incluido”, que ofrece algo más que una pulsera para consumir sin límites se tratara realmente de una programación completa de actividades participativas y fuera de lo común.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/img2.svg', style="width: 450px").m-auto
    p Aunque la historia es fundamental en la evolución del concepto de animación, se hace necesario desarrollar una definición consensuada de algunos autores y expertos, para una mejor comprensión, así, se define como: aquellas actividades que tienen por objetivo fundamental “lograr un disfrute y esparcimiento placentero hacia clientes y personas que necesitan ocupar su tiempo de ocio”.
    p.mb-5 La evolución del concepto de animación ha ido integrando tendencias en los últimos años, estas son:
    .tarjeta.tarjeta--verde.p-4.p-xl-5.mb-5
      SlyderA(tipo="b")
        .row
          .col-xl-4.mb-4.mb-mb-0
            h4 De contratación
            p #[b Especializada]: Las nuevas contrataciones a expertos en cada campo, estableciendo una diferencia entre el animador de espectáculos (cantantes, bailarines, actores…) y el de actividades turísticas y recreativas (guías turísticos, monitores deportivos o infantiles, presentadores de actividades).
            p #[b Multifuncional]: Un animador que integre el manejo de un arte o conocimiento especializado en áreas de cultura, recreación, tiempo libre y educación.
            p #[b Involucramiento]: Actividades que permiten integrar a personal ajeno a la animación, pero que complementa un espacio con entretenimiento, por ejemplo, un show de barismo.
          .col-xl-8
            figure
              img(src='@/assets/curso/tema2/img2.png')
        .row
          .col-xl-4.mb-4.mb-mb-0
            h4 Tecnológica
            p Animación con base en inteligencia artificial.
          .col-xl-8
            figure
              img(src='@/assets/curso/tema2/img3.png')
        .row
          .col-xl-4.mb-4.mb-mb-0
            h4 Organizacional
            p Actividades que incluyen animación para pausas activas en el trabajo o actividades indoor y outdoor para desarrollo personal de los empleados.
          .col-xl-8
            figure
              img(src='@/assets/curso/tema2/img4.png')
        .row
          .col-xl-4.mb-4.mb-mb-0
            h4 Socio-comunitaria
            p Actividades de animación para plantear y solucionar situaciones en la comunidad, ya sea de localidad u organizaciones sociales y gubernamentales.
          .col-xl-8
            figure
              img(src='@/assets/curso/tema2/img5.png')
        .row
          .col-xl-4.mb-4.mb-mb-0
            h4 Sostenibilidad
            p Implica la ética empresarial, desestacionalización, respeto hacia la naturaleza y los entornos donde se dan las actividades.
          .col-xl-8
            figure
              img(src='@/assets/curso/tema2/img6.png')
    p.mb-5 El turismo apropia el concepto de animación acuñándolo como el conjunto de técnicas orientadas a motivar, facilitar y promover participación abierta y amplia de los turistas como parte del disfrute, diversión e interacción en época o momentos de vacaciones o tiempo libre, en todos los espacios de aprovechamiento. El rol del profesional que asume este reto es complejo, pues las aptitudes, actitudes, conocimientos, destrezas, habilidades para este tipo de actividades son de alto nivel, algunos de ellos son:
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        ul.lista-ul
          li 
            i.fas.fa-location-arrow(style="color: #FF6D4B")
            | Orientar sin imponer.
          li 
            i.fas.fa-location-arrow(style="color: #FF6D4B")
            | Lenguaje amable pero directivo.
          li 
            i.fas.fa-location-arrow(style="color: #FF6D4B")
            | Viveza intelectual, chispa.
          li 
            i.fas.fa-location-arrow(style="color: #FF6D4B")
            | Creatividad e imaginación.
          li 
            i.fas.fa-location-arrow(style="color: #FF6D4B")
            | Manejo técnico de grupos y de comunicación eficiente.
          li 
            i.fas.fa-location-arrow(style="color: #FF6D4B")
            | Alta resistencia física, psíquica y mental.
          li 
            i.fas.fa-location-arrow(style="color: #FF6D4B")
            | Sentido organizativo.
          li 
            i.fas.fa-location-arrow(style="color: #FF6D4B")
            | Habilidades manuales.
          li 
            i.fas.fa-location-arrow(style="color: #FF6D4B")
            | Autoridad.
          li 
            i.fas.fa-location-arrow(style="color: #FF6D4B")
            | Espontaneidad.
      .col-lg-6
        figure
          img(src='@/assets/curso/tema2/img3.svg', style="width: 550px").m-auto
    .cajon.color-secundario.p-4.mb-5
      .row.align-items-center
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/img4.svg', style="width: 70px").m-auto
        .col-lg-10
          p.mb-0 Es así como la Animación Turística, de acuerdo con la Organización Mundial de Turismo (1985), se define como: #[b “Toda acción realizada en o sobre un grupo, una colectividad o un medio, con la intención de desarrollar la comunicación y garantizar la vida social”].
    p.text-center.mb-5 Esto en funciones se traduce como:
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema2/img7.png' alt='AvatarTop' style="width: 350px").m-auto
        p.text-center Selección de los animadores con perfiles estructurados.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema2/img8.png' alt='AvatarTop' style="width: 350px").m-auto
        p.text-center Adaptación y comunicación, pilares para que el profesional aborde el cambio en condiciones de cualquier tipo.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema2/img9.png' alt='AvatarTop' style="width: 350px").m-auto
        p.text-center Control de los factores que inciden en el éxito.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema2/img10.png' alt='AvatarTop' style="width: 350px").m-auto
        p.text-center Propuesta de plan de mejora continua.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema2/img11.png' alt='AvatarTop' style="width: 350px").m-auto
        p.text-center Evidencias de los logros.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema2/img12.png' alt='AvatarTop' style="width: 350px").m-auto
        p.text-center La necesidad de planificar y programar.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema2/img13.png' alt='AvatarTop' style="width: 350px").m-auto
        p.text-center Organizar el personal, las técnicas, el espacio donde se ejecutarán las acciones.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema2/img14.png' alt='AvatarTop' style="width: 350px").m-auto
        p.text-center Coordinación del programa de animación y las personas a cargo.
    .row.bg-color6.mb-4
      .col-12.p-5
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            p Entre los consejos técnicos a seguir para implementar o adaptar una técnica de animación, se proponen:
            ul.lista-ul
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Los objetivos que se pretenden alcanzar.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | La madurez y entrenamiento del grupo.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | El tamaño del grupo.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | El ambiente físico.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Las características del medio externo.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Las características de los participantes de la actividad.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | La capacitación e idoneidad del animador.
              li 
                i.fas.fa-location-arrow(style="color: #FF6D4B")
                | Mesura en la propuesta.
          .col-lg-8
            figure
              img(src='@/assets/curso/tema2/img6.svg', style="width: 650px").m-auto
    p.mb-5 A continuación, se presenta un ejemplo de técnicas de animación derivadas de la recreación y de la planificación, en el que se establecen la organización y el desarrollo de diferentes estrategias y actividades lúdicas recreativas, presentando la posible estructura de la actividad.  Se pretende, desde la implementación de las técnicas, crear ambientes favorables a los grupos, fomentando relaciones sociales e interacciones culturales y diversión.
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Planteamiento de la actividad")
        .col-lg-8.mb-4.mb-lg-0
          ul.lista-ul
            li 
              i.fas.fa-location-arrow(style="color: #FF6D4B")
              | Historia teatralizada: juego de roles.
            li 
              i.fas.fa-location-arrow(style="color: #FF6D4B")
              | Espacio: abierto o cerrado.
            li 
              i.fas.fa-location-arrow(style="color: #FF6D4B")
              | Grupos objetivos: familia, tercera edad, niños, discapacidad cognitiva, sordos - habla - estudiantes y docentes de colegios o universidad, turistas extranjeros.
            li 
              i.fas.fa-location-arrow(style="color: #FF6D4B")
              | Nombre:  Fiestas de San Pacho.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema2/img15.png', style="width: 450px").m-auto
      .row(titulo="Descripción")
        .col-lg-8.mb-4.mb-lg-0
          ul.lista-ul
            li 
              i.fas.fa-location-arrow(style="color: #FF6D4B")
              | La fiesta de San Pacho-Chocó.
            li 
              i.fas.fa-location-arrow(style="color: #FF6D4B")
              | Se realiza una descripción general de la fiesta del santo, se describen las actividades generales.
            li 
              i.fas.fa-location-arrow(style="color: #FF6D4B")
              | En una bolsa se ponen papeletas con los actores y personajes de la historia.
            li 
              i.fas.fa-location-arrow(style="color: #FF6D4B")
              | Cada participante toma la papeleta, se organizan grupos, de ser necesario.
            li 
              i.fas.fa-location-arrow(style="color: #FF6D4B")
              | Se da tiempo para organizar la actividad.
            li 
              i.fas.fa-location-arrow(style="color: #FF6D4B")
              | Se alista la música y se entrega un guion previo.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema2/img16.png', style="width: 450px").m-auto
      .row(titulo="Materiales")
        .col-lg-8.mb-4.mb-lg-0
          ul.lista-ul
            li 
              i.fas.fa-location-arrow(style="color: #FF6D4B")
              | Videos de instrucción, mapas regionales, entrevistas de personas, fotos, ayuda gráfica.
            li 
              i.fas.fa-location-arrow(style="color: #FF6D4B")
              | Guión previo de alegorías, pasos de danza, tiempos asignados.
            li 
              i.fas.fa-location-arrow(style="color: #FF6D4B")
              | Vestimenta y accesorios organizados en bolsas y por actor.
            li 
              i.fas.fa-location-arrow(style="color: #FF6D4B")
              | Papeles de colores.
            li 
              i.fas.fa-location-arrow(style="color: #FF6D4B")
              | Papeletas.
            li 
              i.fas.fa-location-arrow(style="color: #FF6D4B")
              | Bolsas grandes y pequeñas.
            li 
              i.fas.fa-location-arrow(style="color: #FF6D4B")
              | Dulces o souvenirs para premiación.
            li 
              i.fas.fa-location-arrow(style="color: #FF6D4B")
              | Contar con traductor de lengua de señas en caso de requerirse.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema2/img17.png', style="width: 450px").m-auto
      .row(titulo="Reglas")
        .col-lg-8.mb-4.mb-lg-0
          ul.lista-ul
            li 
              i.fas.fa-location-arrow(style="color: #FF6D4B")
              | Los grupos deben utilizar el tiempo asignado en el alistamiento y preparación de comparsas.
            li 
              i.fas.fa-location-arrow(style="color: #FF6D4B")
              | El grupo ensaya y sigue las instrucciones de la guía.
            li 
              i.fas.fa-location-arrow(style="color: #FF6D4B")
              | El grupo agrega elementos creativos.
            li 
              i.fas.fa-location-arrow(style="color: #FF6D4B")
              | Se respeta la presentación de los grupos y los actores.
            li 
              i.fas.fa-location-arrow(style="color: #FF6D4B")
              | Todos ganan.
        .col-lg-4
          figure
            img(src='@/assets/curso/tema2/img18.png', style="width: 450px").m-auto
    p.mb-5 La animación se estructura con base en técnicas y métodos propios de la recreación y está relacionada con dinámicas de grupo que se aplican perfectamente en los contextos turísticos de:
    .row.justify-content-center
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img7.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              p.text-center #[b Cultura]
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img8.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              p.text-center #[b Patrimonio material e inmaterial]
      .col-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img9.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              p.text-center #[b Ocio o tiempo libre]

</template>

<script>
export default {
  name: 'Tema2',
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
