<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos del #[em hacking] ético
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema1/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 El #[em hacking] ético es una práctica profesional de evaluación de seguridad mediante la cual una persona autorizada utiliza técnicas semejantes a las que podría emplear un atacante, pero con objetivos legítimos, límites establecidos y mecanismos de protección. Su propósito consiste en identificar debilidades, comprobar si pueden ser aprovechadas, estimar sus consecuencias y formular recomendaciones que permitan reducir el riesgo. 
            br
            br
            p.mb-0 La diferencia principal entre una prueba ética y una actividad maliciosa no se encuentra únicamente en la herramienta utilizada. Una misma aplicación puede servir para inventariar servicios, comprobar configuraciones o apoyar un ataque no autorizado. La diferencia se establece por la autorización, la finalidad, el alcance, la protección de la información y la responsabilidad frente a los resultados. Sin estos elementos, una actividad aparentemente técnica puede vulnerar la privacidad, afectar la disponibilidad o generar consecuencias jurídicas.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.mb-lg-0.mb-4
        img(src='@/assets/curso/tema1/2.png', alt='')
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/tema1/3.svg', alt='')
          .col-lg-10
            p.mb-0 El alcance define qué recursos pueden evaluarse, durante qué periodo, desde qué ubicaciones y mediante cuáles técnicas. También determina exclusiones. Una institución puede autorizar el análisis de su portal web y su servidor de pruebas, pero excluir el sistema académico de producción por el riesgo de interrupción. Otra organización puede permitir la revisión de configuraciones y vulnerabilidades, pero prohibir cualquier intento de obtener o copiar información personal.
        p.mb-0 Por tanto, el resultado de una prueba no se mide por la cantidad de sistemas comprometidos. Una evaluación de calidad produce evidencia útil, reproducible y proporcional. El evaluador debe detenerse cuando alcanza el objetivo definido o cuando la continuidad del servicio se encuentra en riesgo. Esta forma de actuación convierte el #[em hacking] ético en un instrumento de aseguramiento y no en una demostración improvisada de capacidad técnica.
    
    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Principios éticos y condiciones de autorización

    p.mb-4 Las pruebas de seguridad deben desarrollarse bajo principios éticos, legales y técnicos que garanticen una evaluación responsable de los sistemas tecnológicos. Antes de iniciar cualquier actividad, es necesario contar con una autorización formal y verificable, en la cual se establezca el alcance de la prueba, los sistemas involucrados, las técnicas permitidas, los responsables y las condiciones de ejecución.

    p.mb-5 Durante el proceso de evaluación se deben aplicar principios fundamentales como:

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
