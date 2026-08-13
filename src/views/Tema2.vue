<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ataques informáticos
    
    .bg3.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-4.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/1.svg')
            p.mb-4 Un ataque informático es una acción deliberada orientada a comprometer un sistema, acceder a información, alterar operaciones, evadir controles o afectar la disponibilidad. Puede estar dirigido contra una red, un dispositivo, una aplicación, una cuenta, un proveedor o una persona.
            p.mb-0 Para comprender un ataque deben diferenciarse varios elementos. La amenaza corresponde al actor, evento o circunstancia con capacidad de causar daño. La vulnerabilidad es la debilidad que puede ser aprovechada. El vector es la ruta utilizada para alcanzar el objetivo. La técnica describe la forma de actuar. El impacto representa la consecuencia sobre los activos y procesos.
        .col-lg-5.col-md-8.col-12.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema2/2.png')

    p.mb-4(data-aos="fade-right") Considérese un portal web que utiliza una contraseña administrativa débil. El actor malicioso representa la amenaza; la contraseña débil es la vulnerabilidad; la página de inicio de sesión constituye el vector; los intentos automatizados son la técnica; y la modificación del contenido institucional corresponde al impacto.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6
        img(src='@/assets/curso/tema2/3.png')
        .bg4.p-4
          p.mb-0.mb-lg-1.text-white La evaluación de seguridad debe reconstruir esta relación. Un listado de vulnerabilidades sin contexto no muestra qué amenaza podría aprovecharlas ni qué proceso resultaría afectado. Del mismo modo, una lista de ataques posibles sin análisis de la infraestructura puede producir recomendaciones genéricas.
      .col-lg-6.d-none.d-lg-block
        img(src='@/assets/curso/tema2/4.svg')

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Clasificación según el objetivo y la técnica

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.mb-lg-0.mb-4.d-none.d-lg-block
        img(src='@/assets/curso/tema2/6.png')
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/tema2/5.svg')
          .col-lg-10
            p.mb-0 Los ataques informáticos pueden clasificarse de acuerdo con el #[b objetivo que persigue un adversario] dentro de un entorno tecnológico. Esta clasificación permite comprender el comportamiento de las amenazas y seleccionar pruebas de seguridad orientadas a identificar y reducir riesgos
        p.mb-0 El marco #[b MITRE ATT&CK] organiza estos comportamientos en #[b tácticas y técnicas.] Las tácticas representan la finalidad del atacante, mientras que las técnicas describen los métodos utilizados para alcanzar dichos objetivos. Este enfoque facilita la relación entre las actividades de evaluación, los registros de seguridad y los controles implementados en una organización.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b1.p-lg-5.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema2/7.svg')
            h4.text-center.mb-4.text-white Reconocimiento
            p.mb-0.text-center.text-white Recopilación de información sobre la organización, sus sistemas, servicios y tecnologías disponibles. 
          .tarjeta.tarjeta--slyder.b1.p-lg-5.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema2/8.svg')
            h4.text-center.mb-4.text-white Acceso inicial
            p.mb-0.text-center.text-white Búsqueda de mecanismos para ingresar al entorno, como servicios expuestos, credenciales comprometidas o interacción con usuarios. 
          .tarjeta.tarjeta--slyder.b1.p-lg-5.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema2/9.svg')
            h4.text-center.mb-4.text-white Ejecución
            p.mb-0.text-center.text-white Puesta en funcionamiento de comandos, aplicaciones o código no autorizado. 
          .tarjeta.tarjeta--slyder.b1.p-lg-5.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema2/10.svg')
            h4.text-center.mb-4.text-white Persistencia
            p.mb-0.text-center.text-white Implementación de mecanismos que permitan mantener el acceso al sistema durante un periodo prolongado. 
          .tarjeta.tarjeta--slyder.b1.p-lg-5.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema2/11.svg')
            h4.text-center.mb-4.text-white Escalamiento de privilegios
            p.mb-0.text-center.text-white Obtención de permisos superiores para ampliar las capacidades dentro del entorno comprometido. 
          .tarjeta.tarjeta--slyder.b1.p-lg-5.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema2/12.svg')
            h4.text-center.mb-4.text-white Acceso a credenciales
            p.mb-0.text-center.text-white Recopilación de contraseñas, #[em tokens], llaves u otros elementos de autenticación. 
          .tarjeta.tarjeta--slyder.b1.p-lg-5.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema2/13.svg')
            h4.text-center.mb-4.text-white Descubrimiento
            p.mb-0.text-center.text-white Identificación de equipos, usuarios, servicios y relaciones dentro de la infraestructura. 
          .tarjeta.tarjeta--slyder.b1.p-lg-5.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema2/14.svg')
            h4.text-center.mb-4.text-white Movimiento lateral
            p.mb-0.text-center.text-white Desplazamiento entre diferentes sistemas o recursos después de obtener acceso. 
          .tarjeta.tarjeta--slyder.b1.p-lg-5.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema2/15.svg')
            h4.text-center.mb-4.text-white Recolección
            p.mb-0.text-center.text-white Búsqueda y recopilación de información de interés dentro del entorno. 
          .tarjeta.tarjeta--slyder.b1.p-lg-5.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema2/16.svg')
            h4.text-center.mb-4.text-white Exfiltración
            p.mb-0.text-center.text-white Transferencia de información hacia ubicaciones externas no autorizadas. 
          .tarjeta.tarjeta--slyder.b1.p-lg-5.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema2/17.svg')
            h4.text-center.mb-4.text-white Impacto
            p.mb-0.text-center.text-white Acciones que afectan la disponibilidad, integridad o funcionamiento de los sistemas, como alteración, cifrado o destrucción de información. 

    .cajon.color-primario.p-4.mb-5(data-aos="fade-left")
      p.mb-0 Esta clasificación es una herramienta fundamental para el #[b #[em hacking] ético,] ya que permite definir pruebas de seguridad según las necesidades de la organización. Por ejemplo, una evaluación de accesos remotos puede enfocarse en autenticación y movimiento lateral, mientras que la revisión de una aplicación web puede priorizar controles de autorización, validación de datos y gestión de sesiones.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Relación entre ataques, vulnerabilidades y controles
    
    p.mb-4(data-aos="fade-left") Un control efectivo debe responder a un escenario de ataque concreto. La autenticación multifactor reduce el riesgo de que una contraseña robada permita el acceso. La segmentación limita el movimiento lateral. El monitoreo detecta patrones anómalos. Las copias de seguridad apoyan la recuperación después de un evento destructivo.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 2.
          | Relación entre escenarios de ataque, vulnerabilidades y controles de seguridad
        .row
          .col-lg-9
            .tabla-a.tabla-peq.tabla2
              table
                thead
                  tr
                    th Escenario
                    th Vulnerabilidad
                    th Control preventivo
                    th Control detectivo
                    th Capacidad de recuperación
                tbody
                  tr
                    td Acceso remoto no autorizado
                    td Contraseña débil.
                    td #[em MFA] y restricción de origen.
                    td Alertas de inicio de sesión.
                    td Revocación de sesiones.
                  tr
                    td Movimiento lateral
                    td Red plana.
                    td Segmentación y ACL.
                    td Monitoreo de tráfico interno.
                    td Aislamiento de segmentos.
                  tr
                    td Ataque a portal web
                    td Configuración insegura.
                    td Endurecimiento y WAF.
                    td Registros y alertas.
                    td Restauración de aplicación.
                  tr
                    td #[em Ransomware]
                    td Equipos sin parches.
                    td Actualización y protección de #[em endpoints].
                    td Detección de comportamiento.
                    td Copias aisladas y probadas.
                  tr
                    td Abuso de privilegios
                    td Permisos excesivos.
                    td Mínimo privilegio.
                    td Auditoría de acciones.
                    td Suspensión y revisión de cuentas.
          .col-lg-3.d-none.d-lg-block
            img(src="@/assets/curso/tema2/18.png")

    p.mb-0(data-aos="fade-left") La pregunta no debe ser únicamente “¿qué herramienta bloquea este ataque?”, sino “¿qué conjunto de controles reduce la probabilidad, permite detectarlo y facilita recuperar el servicio?”. Esta perspectiva conduce hacia la defensa en profundidad.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
