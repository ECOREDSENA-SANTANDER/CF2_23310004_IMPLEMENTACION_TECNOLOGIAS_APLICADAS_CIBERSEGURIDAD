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

    p.mb-5(data-aos="fade-right") Los estándares #[b #[em ISO/IEC 27001:2022 (International Organization for Standardization / International Electrotechnical Commission) e ISO/IEC 27002:2022 ]]proporcionan lineamientos para la gestión y aplicación de controles de seguridad, destacando la importancia de relacionarlos con los riesgos y el contexto de la organización.


    .tit.mb-5(data-aos="fade-left")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Roles y responsabilidades

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6.mb-lg-0.mb-4
        img(src='@/assets/curso/tema4/2.png')
        .bg4.p-4
          p.mb-0.mb-lg-1.text-white La implementación de controles de seguridad requiere la participación coordinada de diferentes actores dentro de la organización. Los propietarios de procesos definen necesidades, los equipos técnicos realizan configuraciones, el área de seguridad verifica los controles, la dirección asigna recursos y los usuarios cumplen las políticas establecidas.
      .col-lg-6
        .bg6.p-4.mb-0
          img.img-t.mb-4.mt-lg-4(src='@/assets/curso/tema4/3.svg')
          p.mb-4 La separación de funciones evita errores o modificaciones no autorizadas. Para facilitar esta gestión se utiliza la matriz #[em #[b RACI (Responsible, Accountable, Consulted, Informed)]], que permite identificar responsables, aprobadores, consultados e informados en cada actividad.
          p.mb-0.mb-lg-3 También es importante establecer responsabilidades con proveedores externos, definiendo accesos autorizados, mecanismos de autenticación, horarios de operación, registros de actividad y procedimientos de finalización del servicio.

    p.mb-5(data-aos="fade-left") Los controles de seguridad pueden clasificarse en:

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Selección de controles de seguridad

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg1.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema4/4.svg')
          h4.mb-4.text-center Controles tecnológicos
          p.mb-0.text-center Herramientas y configuraciones como #[em firewalls,] sistemas de monitoreo o mecanismos de cifrado. 
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg1.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema4/5.svg')
          h4.mb-4.text-center Controles administrativos
          p.mb-0.text-center Políticas, procedimientos, capacitación y gestión de accesos.  
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg1.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema4/6.svg')
          h4.mb-4.text-center Controles físicos
          p.mb-0.text-center Medidas de protección sobre instalaciones y equipos. 
    
    p.mb-4(data-aos="fade-right") La selección de controles debe considerar factores como #[b riesgo, costo, compatibilidad, capacidad operativa y facilidad de administración.]

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.mb-lg-0.mb-4.d-none.d-lg-block
        img(src='@/assets/curso/tema4/7.png')
      .col-lg-7
        .row.justify-content-center.mb-3
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/tema4/8.svg')
          .col-lg-10
            p.mb-0 El estándar #[em #[b NIST SP 800-53 Rev. 5 (National Institute of Standards and Technology Special Publication 800-53 Revision 5)]] proporciona un catálogo de controles relacionados con acceso, auditoría, configuración, continuidad, respuesta a incidentes y protección de sistemas.
        p.mb-0 Asimismo, los #[em #[b CIS Controls v8.1 (Center for Internet Security Controls)]] ofrecen medidas priorizadas para fortalecer la seguridad mediante prácticas como inventario de activos, gestión de vulnerabilidades, protección de redes, monitoreo y recuperación.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Indicadores y criterios de verificación

    p.mb-4(data-aos="fade-left") Los indicadores permiten medir si los controles implementados funcionan correctamente y contribuyen a reducir los riesgos identificados. Estos deben ser específicos, medibles y relacionados con los objetivos de seguridad.

    p.mb-5.mb-lg-4.mb-md-4(data-aos="fade-right") Algunos ejemplos son:

    .row.fondo3.p-5.fon.mb-0(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.col-md-8
            .bg5.p-lg-5.p-4
              img.img-a.img-t.mb-4(src='@/assets/curso/tema4/10.svg')
              ul.lista-ul.mb-0.text-white
                li.d-flex.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Porcentaje de sistemas con configuraciones aprobadas. 
                li.d-flex.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Cantidad de cuentas privilegiadas protegidas con autenticación multifactor #[em (Multi-Factor Authentication, MFA). ]
                li.d-flex.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Tiempo promedio de corrección de vulnerabilidades. 
                li.d-flex.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Cobertura de registros y monitoreo. 
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/tema4/9.png')

    p.mb-5(data-aos="fade-left") La interpretación de estos indicadores debe realizarse considerando el contexto, ya que un aumento en alertas puede representar una mejor capacidad de detección y no necesariamente una falla del sistema.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Validación y mejora de los controles

    .bg4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-4.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/11.svg')
            p.mb-3.text-white La validación permite comprobar que los controles implementados funcionan de acuerdo con los objetivos establecidos. Para ello pueden utilizarse técnicas como revisión documental, entrevistas, observación y pruebas técnicas.
            p.mb-0.text-white La mejora continua utiliza los resultados de evaluaciones, incidentes e indicadores para ajustar los controles de seguridad. Una configuración efectiva puede requerir cambios debido a nuevas amenazas, modificaciones tecnológicas o cambios en los procesos organizacionales.
        .col-lg-5.col-md-8.col-12.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema4/12.png')

    p.mb-0(data-aos="fade-right") La evaluación periódica permite verificar que las medidas implementadas reducen los riesgos, mantienen la protección de la información y garantizan la continuidad de los servicios tecnológicos.


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
