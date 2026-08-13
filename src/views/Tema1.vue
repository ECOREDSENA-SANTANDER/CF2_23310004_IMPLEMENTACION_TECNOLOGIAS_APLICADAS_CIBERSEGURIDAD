<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos del #[em hacking] ético
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
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
      .col-lg-5.mb-lg-0.mb-4.d-none.d-lg-block
        img(src='@/assets/curso/tema1/2.png')
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/tema1/3.svg')
          .col-lg-10
            p.mb-0 El alcance define qué recursos pueden evaluarse, durante qué periodo, desde qué ubicaciones y mediante cuáles técnicas. También determina exclusiones. Una institución puede autorizar el análisis de su portal web y su servidor de pruebas, pero excluir el sistema académico de producción por el riesgo de interrupción. Otra organización puede permitir la revisión de configuraciones y vulnerabilidades, pero prohibir cualquier intento de obtener o copiar información personal.
        p.mb-0 Por tanto, el resultado de una prueba no se mide por la cantidad de sistemas comprometidos. Una evaluación de calidad produce evidencia útil, reproducible y proporcional. El evaluador debe detenerse cuando alcanza el objetivo definido o cuando la continuidad del servicio se encuentra en riesgo. Esta forma de actuación convierte el #[em hacking] ético en un instrumento de aseguramiento y no en una demostración improvisada de capacidad técnica.
    
    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Principios éticos y condiciones de autorización

    p.mb-4(data-aos="fade-right") Las pruebas de seguridad deben desarrollarse bajo principios #[b éticos, legales y técnicos] que garanticen una evaluación responsable de los sistemas tecnológicos. Antes de iniciar cualquier actividad, es necesario contar con una #[b autorización formal y verificable], en la cual se establezca el alcance de la prueba, los sistemas involucrados, las técnicas permitidas, los responsables y las condiciones de ejecución.

    p.mb-4(data-aos="fade-right") Durante el proceso de evaluación se deben aplicar principios fundamentales como:
    
    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg1.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/4.svg')
          h4.mb-4.text-center Necesidad
          p.mb-0.text-center Realizar únicamente las acciones indispensables para cumplir el objetivo de la prueba, evitando la manipulación o extracción innecesaria de información. 
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg1.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/5.svg')
          h4.mb-4.text-center Confidencialidad
          p.mb-0.text-center Proteger los datos, evidencias e informes obtenidos durante la evaluación, garantizando que solo sean consultados por personal autorizado. 
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg1.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/6.svg')
          h4.mb-4.text-center Trazabilidad
          p.mb-0.text-center Registrar las actividades realizadas, incluyendo fechas, herramientas utilizadas, sistemas evaluados y resultados obtenidos, permitiendo verificar el desarrollo de la prueba. 
    
    p.mb-5(data-aos="fade-right") La aplicación de estos principios permite que el #[b #[em hacking] ético] sea una práctica controlada y responsable, orientada a la identificación de vulnerabilidades y al fortalecimiento de la seguridad de las organizaciones. En ambientes educativos, las pruebas deben realizarse en #[b laboratorios controlados o entornos autorizados,] promoviendo el aprendizaje técnico bajo criterios de respeto, seguridad y protección de la información.

    .tit.mb-5(data-aos="fade-left")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Técnicas y enfoques de evaluación
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema1/7.png')
      .col-lg-9
        .bg2.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-5.col-md-8.col-12.mb-0(data-aos="fade-right")
              img(src='@/assets/curso/tema1/8.svg')
            .col-lg-7(data-aos="fade-left")
              .p-4
                p.mb-0 Las técnicas de hacking ético permiten evaluar la seguridad de los sistemas mediante procesos controlados como la revisión documental, reconocimiento, enumeración, análisis de vulnerabilidades, comprobación manual, explotación controlada y validación de configuraciones. Estas actividades ayudan a identificar posibles debilidades y verificar la efectividad de los controles implementados.
        p.mb-4 La revisión documental permite comparar políticas y configuraciones establecidas con la realidad del sistema. Por su parte, el reconocimiento y la enumeración recopilan información sobre servicios, tecnologías y recursos disponibles dentro del alcance autorizado. El análisis de vulnerabilidades combina herramientas automáticas y validaciones manuales para identificar riesgos, mientras que la explotación controlada permite comprobar una vulnerabilidad sin afectar la operación del sistema.
        p.mb-0 Estas técnicas deben aplicarse bajo criterios éticos, autorizados y responsables, evitando daños, alteraciones de información o accesos no permitidos, con el propósito de fortalecer la seguridad de las organizaciones.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema1/9.svg')
        .row.justify-content-center.g-0
          .col-lg-12
            .tarjeta.color-secundario.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.p-lg-5.h-100
                TarjetaAudio.color-acento-botones.mb-0(
                texto="Pódcast: Tipos de servicio: caja negra, caja blanca, caja gris y combinados"
                :audio="require_src('@/assets/actividad/audio/end-game-success.mp3')"
            ).mb-0
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

    .cajon.color-primario.p-4.mb-5(data-aos="fade-left")
      p.mb-0 Los servicios #[b combinados] utilizan varios enfoques en etapas distintas. Una evaluación puede comenzar como caja negra para analizar la exposición externa y continuar como caja blanca para revisar la causa de los hallazgos. Esta combinación mejora la relación entre realismo, profundidad, tiempo y cobertura.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 1.
          | Comparación de técnicas y enfoques de evaluación de seguridad
        .row
          .col-lg-9
            .tabla-a.tabla-peq.tabla1
              table
                thead
                  tr
                    th Enfoque
                    th Información inicial
                    th Ventaja principal
                    th Limitación principal
                    th Aplicación frecuente
                tbody
                  tr
                    td Caja negra
                    td.text-center Mínima
                    td Simula exposición externa.
                    td Menor cobertura interna.
                    td Perímetro y servicios públicos.
                  tr
                    td Caja blanca
                    td.text-center Amplia
                    td Mayor profundidad técnica.
                    td Menor similitud con un ataque externo.
                    td Configuración, código y arquitectura.
                  tr
                    td Caja gris
                    td.text-center Parcial
                    td Equilibrio entre realismo y cobertura.
                    td Depende de la calidad del acceso entregado.
                    td Roles, aplicaciones y redes internas.
                  tr
                    td Combinado
                    td.text-center Variable
                    td Integra perspectivas complementarias.
                    td Requiere mayor planeación.
                    td Evaluaciones integrales.
          .col-lg-3.d-none.d-lg-block
            img(src="@/assets/curso/tema1/10.png")


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
