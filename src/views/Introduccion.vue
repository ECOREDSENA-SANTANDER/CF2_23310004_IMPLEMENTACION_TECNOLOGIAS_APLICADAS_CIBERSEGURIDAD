<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-0
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/intro/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 El componente formativo Pruebas de seguridad y protección de infraestructuras tecnológicas fortalece las capacidades del aprendiz para evaluar vulnerabilidades, aplicar metodologías de #[em hacking] ético y desplegar configuraciones seguras en #[em hardware] y #[em software]. A través del análisis de infraestructuras, la selección de herramientas, la implementación de controles y la documentación de resultados, el aprendiz desarrollará habilidades para proteger la información, fortalecer la seguridad digital y garantizar la continuidad de los servicios tecnológicos en las organizaciones.


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
