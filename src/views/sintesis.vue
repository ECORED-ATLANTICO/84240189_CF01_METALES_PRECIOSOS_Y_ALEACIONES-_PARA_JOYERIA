<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El programa "Reconocimientos y aleaciones en los metales preciosos" está diseñado para capacitar a operarios y aprendices en la identificación, análisis y manipulación de metales preciosos, como oro y plata. A lo largo de la formación, los participantes aprenderán a crear aleaciones específicas que cumplen con los estándares internacionales de calidad para la elaboración de joyería.
    p El curso combina teoría y práctica, permitiendo a los estudiantes desarrollar habilidades técnicas esenciales en la producción de piezas de joyería. Además, se enfoca en el uso de herramientas y técnicas adecuadas para garantizar la durabilidad y el valor estético de las aleaciones.
    p.mb-5 El programa busca no solo mejorar las competencias técnicas de los participantes, sino también prepararlos para enfrentar desafíos en el sector, potenciando así su proyección laboral y contribuyendo al crecimiento del sector de la joyería.

   

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
