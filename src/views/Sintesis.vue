<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 Las pruebas de seguridad permiten comprender cómo las vulnerabilidades, las configuraciones y los controles se comportan frente a escenarios reales o simulados de ataque. Su valor depende de una metodología, autorización, alcance, evidencia y comunicación responsable. El #[em hacking] ético no consiste en ejecutar herramientas de manera indiscriminada, sino en desarrollar una evaluación controlada que permita identificar debilidades, valorar su impacto y formular recomendaciones vinculadas con los procesos y activos de la organización.
    p.mb-5 La implementación de seguridad transforma los resultados de la evaluación en controles verificables. #[em Firewalls, VPN, MFA,] segmentación, endurecimiento, monitoreo, parches y recuperación deben integrarse con políticas, responsables, procedimientos e indicadores. La protección sostenible surge del ciclo de diagnosticar, configurar, probar, documentar y mejorar. De este modo, el aprendiz desarrolla la capacidad de valorar recursos tecnológicos y desplegar.

    .row.justify-content-center.mb-5
      .col-lg-8
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.cen
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
