<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Metodología para la ejecución de pruebas de seguridad
    
    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema3/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 Una #[b metodología de pruebas de seguridad] permite organizar el proceso de evaluación, definir actividades, evitar omisiones y garantizar la trazabilidad de los resultados. La metodología seleccionada debe adaptarse al tipo de recurso evaluado, el objetivo de la prueba, el nivel de acceso disponible y la evidencia requerida.
            br 
            br 
            p.mb-0 Por ejemplo, una evaluación de aplicaciones web debe considerar aspectos como autenticación, autorización, gestión de sesiones, validación de entradas, lógica de negocio y configuraciones de seguridad. Por otra parte, una evaluación de infraestructura de red debe incluir inventario de activos, servicios disponibles, segmentación, accesos remotos y monitoreo.

    p.mb-4(data-aos="fade-right") Entre los principales marcos de referencia utilizados se encuentran:

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="<em>OWASP WSTG (Open Worldwide Application Security Project Web Security Testing Guide)</em>")
            .col-lg-12
              p.mb-0 Guía orientada a la evaluación de seguridad en aplicaciones y servicios web. Permite realizar pruebas sobre autenticación, autorización, gestión de sesiones, validación de entradas, criptografía y configuraciones de seguridad. 
          .row.align-items-center(titulo="<em>MITRE ATT&CK (Adversarial Tactics, Techniques, and Common Knowledge)</em>")
            .col-lg-12
              p.mb-0 Marco de conocimiento que organiza las tácticas y técnicas utilizadas por los atacantes, permitiendo relacionar las pruebas de seguridad con comportamientos reales y fortalecer los mecanismos de defensa. 
          .row.align-items-center(titulo="<em>NIST SP 800-53A (National Institute of Standards and Technology Special Publication 800-53A)</em>")
            .col-lg-12
              p.mb-0 Documento de referencia para la evaluación de controles de seguridad mediante actividades como revisión documental, entrevistas y pruebas técnicas. 
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/2.png')

    p.mb-5(data-aos="fade-right") La selección de la metodología debe considerar factores como la #[b criticidad del sistema, nivel de exposición, cambios recientes, incidentes previos y requisitos de cumplimiento,] evitando aplicar pruebas innecesarias que puedan afectar la operación de la organización

    .tit.mb-5(data-aos="fade-left")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Autorización, alcance y reglas de compromiso

    p.mb-0(data-aos="fade-right") Antes de realizar una prueba de seguridad es necesario establecer las #[b reglas de compromiso,] las cuales definen las condiciones bajo las que se desarrollará la evaluación.
    
    p.mb-lg-5.mb-4(data-aos="fade-left") Estas reglas deben incluir:
    
    .row.fondo1.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-right")
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
          .col-lg-4.im1.d-none.d-lg-block
            img(src='@/assets/curso/tema3/3.png')
          .col-lg-8
            SlyderF(columnas="col-md-6 col-xl-4")
              .tarjeta.tarjeta--slyder.b2.p-lg-3.p-4
                .row.justify-content-center.align-items-center.mb-4.mt-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/tema3/4.svg')
                h4.text-center.mb-4 Objetivo y alcance
                p.mb-0.text-center Sistemas, aplicaciones o dispositivos que serán evaluados. 
              .tarjeta.tarjeta--slyder.b2.p-lg-3.p-4
                .row.justify-content-center.align-items-center.mb-4.mt-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/tema3/5.svg')
                h4.text-center.mb-4 Exclusiones
                p.mb-0.text-center Recursos que no hacen parte de la prueba. 
              .tarjeta.tarjeta--slyder.b2.p-lg-3.p-4
                .row.justify-content-center.align-items-center.mb-4.mt-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/tema3/6.svg')
                h4.text-center.mb-4 Fechas y horarios
                p.mb-0.text-center Periodos autorizados para la ejecución. 
              .tarjeta.tarjeta--slyder.b2.p-lg-3.p-4
                .row.justify-content-center.align-items-center.mb-4.mt-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/tema3/7.svg')
                h4.text-center.mb-4 Técnicas permitidas
                p.mb-0.text-center Métodos y herramientas aprobadas. 
              .tarjeta.tarjeta--slyder.b2.p-lg-3.p-4
                .row.justify-content-center.align-items-center.mb-4.mt-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/tema3/8.svg')
                h4.text-center.mb-4 Tratamiento de información
                p.mb-0.text-center Manejo seguro de datos, registros y evidencias. 
              .tarjeta.tarjeta--slyder.b2.p-lg-3.p-4
                .row.justify-content-center.align-items-center.mb-4.mt-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/tema3/9.svg')
                h4.text-center.mb-4 Criterios de detención
                p.mb-0.text-center Condiciones para suspender la actividad. 
              .tarjeta.tarjeta--slyder.b2.p-lg-3.p-4
                .row.justify-content-center.align-items-center.mb-4.mt-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/tema3/10.svg')
                h4.text-center.mb-4 Contactos de emergencia y reporte
                p.mb-0.text-center Responsables de comunicación ante eventos inesperados. 

    p.mb-5(data-aos="fade-right") La definición clara de estas condiciones permite que las pruebas se realicen de manera #[b ética, controlada y responsable,] protegiendo tanto a la organización como al evaluador.

    .tit.mb-5(data-aos="fade-left")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Definición de los tipos de prueba

    p.mb-4(data-aos="fade-right") Las pruebas de seguridad se seleccionan según el objetivo de la evaluación y los riesgos que se desean analizar. 

    p.mb-4(data-aos="fade-left") Entre las principales se encuentran:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .tarjetaf.p-lg-5.p-4.mb-0
          SlyderA(tipo="b")(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6
                    h4.mb-4 Pruebas de vulnerabilidades
                    p.mb-5 Identifican fallas conocidas, configuraciones débiles o componentes inseguros. 
                    h4.mb-4 Pruebas de penetración #[em (Penetration Testing)]
                    p.mb-lg-0.mb-4 Buscan comprobar, mediante técnicas controladas, si una vulnerabilidad puede ser aprovechada por un atacante. 
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema3/11.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6
                    h4.mb-4 Revisión de configuración
                    p.mb-4 Compara los parámetros actuales de un sistema con buenas prácticas o líneas base de seguridad. 
                    h4.mb-4 Pruebas de segmentación
                    p.mb-lg-0.mb-4 Verifican que la comunicación entre redes o zonas cumpla con las reglas establecidas. 
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema3/12.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6
                    h4.mb-4 Pruebas de autenticación
                    p.mb-4 Evalúan mecanismos de ingreso como contraseñas, bloqueo de cuentas, autenticación multifactor #[em (Multi-Factor Authentication, MFA)] y recuperación de acceso. 
                    h4.mb-4 Pruebas de autorización
                    p.mb-lg-0.mb-4 Comprueban que cada usuario tenga únicamente los permisos asignados según su rol. 
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema3/13.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6
                    h4.mb-4 Pruebas de recuperación
                    p.mb-lg-0.mb-4 Validan la capacidad de restaurar información y servicios después de una falla o incidente. 
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema3/14.png")

    .cajon.color-primario.p-4.mb-5(data-aos="fade-left")
      p.mb-0 Cada prueba debe formularse mediante una pregunta verificable, por ejemplo: #[b ¿un usuario puede acceder únicamente a los recursos autorizados?] Esto facilita la selección de herramientas, procedimientos y evidencias necesarias.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Selección de herramientas tecnológicas

    p.mb-4(data-aos="fade-left") Las herramientas de seguridad deben seleccionarse de acuerdo con las necesidades de la evaluación, considerando criterios como #[b funcionalidad, compatibilidad, precisión, seguridad y capacidad de generar evidencias.]

    p.mb-3(data-aos="fade-right") Algunas categorías de herramientas son:

    .row.justify-content-center.mb-lg-5.mb-md-5(data-aos="fade-left")
      .col-md-6.col-lg.mb-lg-0.mb-md-4.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/15.svg')
          .tarjeta.color-b
            .p-4
              h4.text-center.mt-3 Herramientas de descubrimiento y análisis de red
              p.mb-0.text-center Permiten identificar equipos, servicios y puertos disponibles. 
      .col-md-6.col-lg.mb-lg-0.mb-md-4.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/16.svg')
          .tarjeta.color-b
            .p-4
              h4.text-center.mt-3 Herramientas de análisis de vulnerabilidades
              p.mb-0.text-center Detectan posibles fallas conocidas en sistemas y aplicaciones. 
      .col-md-6.col-lg.mb-lg-0.mb-md-0.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/17.svg')
          .tarjeta.color-b
            .p-4
              h4.text-center.mt-3 Herramientas de pruebas web
              p.mb-0.text-center Evalúan aspectos como autenticación, sesiones y validación de datos. 

    .row.justify-content-center.mb-lg-5.mb-4.mb-md-5(data-aos="fade-right")
      .col-md-6.col-lg-6.mb-lg-0.mb-md-0.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/18.svg')
          .tarjeta.color-b
            .p-4
              h4.text-center.mt-3 Herramientas de análisis de tráfico
              p.mb-0.text-center Permiten revisar la comunicación entre dispositivos. 
      .col-md-6.col-lg-6.mb-lg-0.mb-md-0.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/19.svg')
          .tarjeta.color-b
            .p-4
              h4.text-center.mt-3 Herramientas de revisión de configuración
              p.mb-4.text-center Identifican parámetros inseguros o configuraciones inadecuadas. 

    .cajon.color-primario.p-4.mb-5(data-aos="fade-left")
      p.mb-0 Entre las herramientas utilizadas en evaluaciones autorizadas se encuentran #[em #[b Nmap (Network Mapper)]], para el descubrimiento de servicios; #[em #[b OWASP ZAP (Zed Attack Proxy)]] y #[em #[b Burp Suite]], para pruebas de aplicaciones web; #[em #[b Wireshark,]] para análisis de tráfico; y #[em #[b Lynis,]] para revisión de configuraciones de sistemas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 1.
          | Categorías de herramientas para pruebas autorizadas de seguridad
        img(src='@/assets/curso/tema3/20.svg' alt='Texto alternativo: Mapa de herramientas organizado en cinco fases de una evaluación de seguridad: reconocimiento, análisis, validación, evidencia y reporte. Cada fase incluye su objetivo y ejemplos de herramientas tecnológicas aplicables, con una nota final sobre su selección según el alcance, el sistema, las políticas y la autorización.')

    .cajon.color-acento-botones.p-4.mb-5(data-aos="fade-left")
      p.mb-0.text-center #[b Nota:] La selección de herramientas debe ajustarse al alcance, tipo de sistema, políticas de la organización y autorización otorgada.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Ejecución controlada de pruebas de intrusión

    .bg4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-4.img-t.d-none.d-lg-block(src='@/assets/curso/tema3/21.svg')
            p.mb-4.text-white La ejecución de una prueba de intrusión debe realizarse de manera #[b planificada, autorizada y controlada,] iniciando con la verificación del alcance, disponibilidad de respaldos y canales de comunicación definidos. Es importante mantener registros de tiempo y actividades para relacionar las acciones realizadas con los eventos registrados en los sistemas.
            p.mb-0.text-white El proceso inicia con actividades de reconocimiento y enumeración, aplicando técnicas progresivas según el impacto y las condiciones del entorno. Los resultados obtenidos mediante herramientas automáticas deben ser validados manualmente para confirmar la existencia de vulnerabilidades y evitar falsos positivos.
        .col-lg-5.col-md-8.col-12.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema3/22.png')

    p.mb-5(data-aos="fade-right") Cuando una explotación está autorizada, debe realizarse mediante métodos #[b seguros y poco invasivos], utilizando únicamente la evidencia necesaria para demostrar la vulnerabilidad, sin afectar la operación ni acceder a información sensible. Al finalizar, se deben eliminar archivos de prueba, cerrar sesiones temporales y restaurar cualquier cambio realizado.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Recolección, protección y análisis de evidencias

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.mb-lg-0.mb-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/23.png')
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/tema3/24.svg')
          .col-lg-10
            p.mb-0 La evidencia permite demostrar los hallazgos encontrados y facilitar su análisis posterior. Puede incluir registros, capturas de pantalla, configuraciones, respuestas del sistema, comandos ejecutados y resultados obtenidos.
        p.mb-0 Cada evidencia debe estar organizada con información como #[b identificador, recurso evaluado, fecha y responsable,] garantizando su protección mediante mecanismos seguros de almacenamiento. Además, debe evitar la exposición de datos sensibles como contraseñas, tokens o información personal.
    
    p.mb-5(data-aos="fade-left") El análisis debe diferenciar entre la #[b evidencia obtenida,] la interpretación del riesgo y las recomendaciones de mejora. También es importante documentar las pruebas realizadas sin hallazgos, ya que permiten demostrar la cobertura de la evaluación.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Elaboración del informe técnico y gerencial

    .row.justify-content-center.align-items-center.mb-lg-5.mb-5.mb-md-4
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema3/25.png')
      .col-lg-9
        .bg2.mb-5
          .row.justify-content-center.align-items-center
            .col-lg-5.col-md-8.col-12.mb-0(data-aos="fade-right")
              img(src='@/assets/curso/tema3/26.svg')
            .col-lg-7(data-aos="fade-left")
              .p-4
                img.d-none.d-lg-block.mb-4.img-t(src='@/assets/curso/tema3/27.svg')
                p.mb-0 El informe de seguridad permite comunicar los resultados de la evaluación y orientar la toma de decisiones. El #[b informe técnico] debe incluir el alcance, metodología, herramientas utilizadas, hallazgos, evidencias, impacto y recomendaciones de solución.
        p.mb-4 Por su parte, el #[b informe gerencial] presenta una visión general de los riesgos identificados, explicando su impacto en los procesos de la organización y las acciones prioritarias para su tratamiento.
        p.mb-0 Cada hallazgo debe contener información como:
    
    .row.fondo3.p-5.fon.mb-0(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.col-md-8
            .bg5.p-lg-5.p-4
              img.img-a.img-t.mb-4(src='@/assets/curso/tema3/28.svg')
              ul.lista-ul.mb-0.text-white
                li.d-flex.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Identificador y título del hallazgo.
                li.d-flex.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Recurso afectado. 
                li.d-flex.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Descripción de la vulnerabilidad. 
                li.d-flex.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Evidencia encontrada. 
                li.d-flex.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Impacto técnico y organizacional.
                li.d-flex.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Nivel de riesgo. 
                li.d-flex.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Recomendaciones de solución. 
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/tema3/29.png')

    p.mb-0(data-aos="fade-right") Finalmente, se debe realizar una #[b nueva prueba] para verificar que las acciones implementadas solucionaron efectivamente las vulnerabilidades identificadas y garantizar la mejora continua de la seguridad tecnológica.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
