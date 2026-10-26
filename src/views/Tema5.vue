<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Plan de seguridad

    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-5
      .col-lg-12
        .bloque-texto-g.color-secund.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema5/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 El #[b plan de seguridad] permite organizar las acciones necesarias para proteger los activos tecnológicos de una organización. Este debe establecer objetivos, controles, responsables, recursos, cronogramas, indicadores y evidencias, considerando el contexto y los riesgos identificados.
            br 
            br 
            p.mb-0 Un plan efectivo incluye la definición de #[b activos, amenazas prioritarias, controles existentes, acciones de mejora, responsables, fechas de ejecución y criterios de aceptación]. Además, debe contemplar comunicación, capacitación y actualización continua frente a cambios tecnológicos, incidentes o nuevos requerimientos.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Conexiones seguras mediante VPN 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        img(src='@/assets/curso/tema5/2.png')

    p.mb-4(data-aos="fade-left") Una #[b VPN #[em (Virtual Private Network)]] permite crear un canal de comunicación cifrado entre usuarios, sedes o servicios utilizando redes no confiables. Puede implementarse como conexión #[b sitio a sitio] o como acceso remoto.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.mb-lg-0.mb-4.d-none.d-lg-block
        img(src='@/assets/curso/tema5/3.png')
      .col-lg-7
        .row.justify-content-center.mb-3
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/tema5/4.svg')
          .col-lg-10
            p.mb-0 La selección de una VPN debe considerar aspectos como #[b protocolos, cifrado, autenticación, capacidad, compatibilidad, registros y segmentación de accesos.] Es importante que una conexión VPN otorgue únicamente los permisos necesarios según el rol del usuario y no un acceso completo a toda la infraestructura.
        p.mb-0 Las buenas prácticas recomiendan utilizar #[b #[em autenticación multifactor (Multi-Factor Authentication,] MFA),] mantener los dispositivos actualizados, controlar las cuentas y monitorear las conexiones para fortalecer la seguridad del acceso remoto.

    .tit.mb-5(data-aos="fade-left")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Planes de contingencia

    .bg7.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-4.img-t.d-none.d-lg-block(src='@/assets/curso/tema5/5.svg')
            p.mb-4.text-white Los #[b planes de contingencia] establecen las acciones necesarias para mantener o recuperar los servicios ante interrupciones o eventos inesperados. Estos incluyen escenarios como fallas de conectividad, ataques, errores de configuración, daños físicos o indisponibilidad de proveedores.
            p.mb-0.text-white El plan debe definir #[b responsables, canales de comunicación, recursos alternativos y prioridades de recuperación,] teniendo en cuenta que los servicios críticos deben ser atendidos primero. También puede incluir mecanismos de operación temporal mientras se restablecen los sistemas principales.
        .col-lg-5.col-md-8.col-12.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema5/6.png')

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Recuperación ante desastres

    p.mb-4(data-aos="fade-left") La #[b recuperación ante desastres] se enfoca en restaurar sistemas, infraestructura y datos después de un evento crítico. Para ello se establecen objetivos como:

    .row.fondo3.p-5.fon.mb-0(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-stretch.mb-0(data-aos="fade-left")
          .col-lg-4.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
            .bg8.p-lg-5.p-4.h-100
              img.img-t.img-a.mb-4.my-2(src='@/assets/curso/tema5/17.svg')
              h3.mb-4.text-white.text-center RTO #[em (Recovery Time Objective)]
              p.mb-lg-2.mb-0.text-white Tiempo máximo esperado para recuperar un servicio. 
          .col-lg-4.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
            .bg9.p-lg-5.p-4.h-100
              img.img-t.img-a.mb-4.my-4(src='@/assets/curso/tema5/18.svg')
              h3.mb-4.text-white.text-center RPO #[em (Recovery Point Objective)]
              p.mb-lg-2.mb-0.text-white Cantidad máxima de información que puede perderse según la frecuencia de las copias de seguridad. 
    
    p.mb-5 Los respaldos deben estar #[b protegidos, cifrados, separados del entorno principal y verificados mediante pruebas de restauración,] ya que contar con una copia no garantiza que pueda recuperarse correctamente.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Estrategias de protección
    
    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-5
      .col-lg-12
        .bloque-texto-g.color-s.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema5/19.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 La #[b defensa en profundidad] consiste en aplicar múltiples capas de seguridad para proteger personas, procesos, dispositivos, redes, aplicaciones y datos. Su objetivo es evitar que la falla de un único control comprometa completamente un activo.
            br 
            br 
            p.mb-0 Una estrategia de protección puede incluir autenticación, control de acceso, configuración segura, monitoreo, registros, respaldo y mecanismos de respuesta. La efectividad depende de la correcta integración de los controles y de su capacidad para reducir riesgos.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Protección de sistemas e infraestructura
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7
        .row.justify-content-center.mb-3
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/tema5/21.svg')
          .col-lg-10
            p.mb-0 La protección de sistemas requiere implementar medidas como #[b inventario de activos, actualización de #[em software], gestión de parches, segmentación de redes, control de cuentas, cifrado, protección de dispositivos y monitoreo continuo.]
        p.mb-3 El endurecimiento de sistemas consiste en reducir superficies de ataque mediante acciones como eliminar servicios innecesarios, modificar credenciales predeterminadas, limitar permisos y activar registros de seguridad.
        p.mb-0 La protección debe considerar todo el ciclo de vida tecnológico, incluyendo la sustitución o aislamiento de equipos que ya no cuentan con soporte.
      .col-lg-5.mb-lg-0.mb-4.d-none.d-lg-block
        img(src='@/assets/curso/tema5/20.png')

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Políticas, procedimientos y prácticas de seguridad
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema5/22.png')
      .col-lg-9
        .bg2.mb-4.mb-lg-5
          .row.justify-content-center.align-items-center
            .col-lg-5.col-md-8.col-12.mb-0(data-aos="fade-right")
              img(src='@/assets/curso/tema5/23.svg')
            .col-lg-7(data-aos="fade-left")
              .p-4
                p.mb-4 Las #[b políticas de seguridad] establecen las reglas y responsabilidades que deben cumplirse dentro de una organización. Los procedimientos describen cómo ejecutar esas actividades y las prácticas representan su aplicación diaria.
                p.mb-0 Por ejemplo, una política puede exigir autenticación multifactor para cuentas administrativas; el procedimiento define cómo configurarla y administrarla; y la práctica se evidencia mediante su uso y monitoreo.
        p.mb-0 Las políticas deben ser claras, aprobadas, comunicadas y actualizadas. Además, la capacitación debe adaptarse a las funciones y responsabilidades de cada usuario.
    
    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Controles preventivos y detectivos
    
    p.mb-4 Los controles de seguridad permiten reducir riesgos y responder ante eventos. Se clasifican principalmente en:
    
    .row.fondo3.p-5.fon.mb-0(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-stretch.mb-0(data-aos="fade-left")
          .col-lg-4.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
            .bg8.p-lg-5.p-4.h-100
              img.img-t.img-a.mb-4.my-4(src='@/assets/curso/tema5/9.svg')
              h3.mb-4.text-white.text-center Controles preventivos
              p.mb-lg-2.mb-0.text-white Buscan evitar incidentes antes de que ocurran, como #[em firewalls], autenticación multifactor, parches, segmentación y control de privilegios. 
          .col-lg-4.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
            .bg9.p-lg-5.p-4.h-100
              img.img-t.img-a.mb-4.my-0(src='@/assets/curso/tema5/10.svg')
              h3.mb-4.text-white.text-center Controles detectivos
              p.mb-lg-2.mb-0.text-white Permiten identificar eventos o comportamientos anómalos mediante registros, sistemas de detección de intrusiones #[em (Intrusion Detection System,] IDS), monitoreo y análisis de actividad. 

    p.mb-4(data-aos="fade-right") También existen #[b controles correctivos y de recuperación,] orientados a restaurar servicios y reducir el impacto de los incidentes.

    p.mb-5(data-aos="fade-left") El estándar #[b ISO/IEC 27002:2022 #[em (International Organization for Standardization / International Electrotechnical Commission)]] permite clasificar y seleccionar controles según su propósito, facilitando la gestión del riesgo y la protección integral de la información.

    .row.fd5.p-5.fon.mb-5(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-8
            .bg10.p-4.mb-0
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-9
                  .titulo-sexto.mb-4
                    h5 Tabla 3.
                    | Clasificación y propósito de los controles de seguridad
                  .tabla-a.tabla-peq.tabla3
                    table
                      thead
                        tr
                          th Tipo
                          th Propósito
                          th Ejemplos
                      tbody
                        tr
                          td Preventivo
                          td Evitar o reducir la probabilidad.
                          td MFA, #[em firewall], parches, cifrado.
                        tr
                          td Detectivo
                          td Identificar eventos.
                          td IDS, registros, SIEM, alertas.
                        tr
                          td Correctivo
                          td Corregir una condición.
                          td Cambio de configuración, aislamiento.
                        tr
                          td Recuperación
                          td Reestablcer servicios.
                          td Copias, redundancia, plan de recuperación.
                  
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0(data-aos="fade-left")
          .row.justify-content-center.align-items-center(titulo="Despliegue y comprobación de controles")
            .col-lg-6.mb-lg-0.mb-4
              p.mb-0 Proceso orientado a la #[b implementación, configuración y validación de controles de seguridad] en #[em hardware] y #[em software.] Incluye preparación del entorno, aplicación de mecanismos de protección, pruebas autorizadas y documentación de resultados para garantizar la trazabilidad y efectividad de los controles.
            .col-lg-5.col-md-8.col-10
              img(src='@/assets/curso/tema5/11.png')
          .row.justify-content-center.align-items-center(titulo="Preparación del entorno")
            .col-lg-6.mb-lg-0.mb-4
              p.mb-0 Consiste en verificar #[b requerimientos técnicos, compatibilidad, respaldos, responsables y criterios de aceptación] antes de implementar cambios. Incluye revisión de inventario, versiones, dependencias, ventanas de mantenimiento, procedimientos de reversión y preparación de evidencias.
            .col-lg-5.col-md-8.col-10
              img(src='@/assets/curso/tema5/12.png')
          .row.justify-content-center.align-items-center(titulo="Configuración de <em>hardware</em> y <em>software</em>")
            .col-lg-6.mb-lg-0.mb-4
              p.mb-0 Se realiza con base en una #[b línea base de seguridad aprobada,] evitando configuraciones inseguras por defecto. En #[em hardware] puede incluir reglas, interfaces, cifrado y registros; en #[em software,] permisos, servicios, autenticación, actualizaciones y auditoría. Cada cambio debe registrarse con fecha, responsable, justificación y resultado.
            .col-lg-5.col-md-8.col-10
              img(src='@/assets/curso/tema5/13.png')
          .row.justify-content-center.align-items-center(titulo="Ejecución de mecanismos de acceso seguro")
            .col-lg-6.mb-lg-0.mb-4
              p.mb-0 Comprende la implementación de controles como #[b MFA #[em (Multi-Factor Authentication),] VPN #[em (Virtual Private Network),]]certificados digitales y administración basada en roles. Se validan accesos permitidos y restringidos, recuperación de cuentas, bloqueo y revocación de permisos.
            .col-lg-5.col-md-8.col-10
              img(src='@/assets/curso/tema5/14.png')
          .row.justify-content-center.align-items-center(titulo="Comprobación del funcionamiento")
            .col-lg-6.mb-lg-0.mb-4
              p.mb-0 Permite verificar que los controles funcionan correctamente, autorizando actividades permitidas y bloqueando acciones no autorizadas. Incluye pruebas de funcionalidad, seguridad, rendimiento, registros y recuperación. Los resultados deben documentarse y corregirse cuando sea necesario.
            .col-lg-5.col-md-8.col-10
              img(src='@/assets/curso/tema5/15.png')
          .row.justify-content-center.align-items-center(titulo="Documentación del proceso")
            .col-lg-6.mb-lg-0.mb-4
              p.mb-0 Registra toda la información necesaria para mantener y reproducir la implementación. Incluye objetivo, alcance, arquitectura, requisitos, configuraciones, evidencias, pruebas realizadas, resultados y procedimientos de reversión. También permite comunicar a la dirección el riesgo tratado, beneficios e indicadores de seguimiento.
            .col-lg-5.col-md-8.col-10
              img(src='@/assets/curso/tema5/16.png')


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
