<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Implementación del sistema de seguridad digital
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema4/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 La #[b implementación de un sistema de seguridad digital] permite transformar los riesgos identificados y las necesidades de protección en #[b controles operativos]. Este proceso comprende etapas como diagnóstico, diseño, preparación, despliegue, validación, operación y mejora continua.
            br
            br
            p.mb-0 Durante el diagnóstico se identifican los #[b activos, riesgos y brechas de seguridad.] Posteriormente, se diseñan los controles y se establecen responsables, procedimientos, respaldos y criterios de validación. Finalmente, se implementan las configuraciones, se verifica su funcionamiento y se realizan ajustes para mantener la efectividad de las medidas de protección.

    p.mb-5 Los estándares #[b #[em ISO/IEC 27001:2022 (International Organization for Standardization / International Electrotechnical Commission) e ISO/IEC 27002:2022 ]]proporcionan lineamientos para la gestión y aplicación de controles de seguridad, destacando la importancia de relacionarlos con los riesgos y el contexto de la organización.

    











            

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

