<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Pruebas de seguridad y protección de infraestructuras tecnológicas',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los fundamentos del hacking ético, los tipos de evaluación, la clasificación de ataques, la metodología de pruebas de seguridad, el manejo de evidencias, la elaboración de informes, la implementación y verificación de controles, las conexiones VPN, la contingencia y la recuperación ante desastres.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué caracteriza principalmente al <em>hacking</em> ético?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La ejecución de ataques sin límites para demostrar habilidades técnicas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La evaluación autorizada de sistemas para identificar debilidades y reducir riesgos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La instalación de herramientas sin analizar el contexto de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La divulgación pública de las vulnerabilidades encontradas durante una prueba.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio del concepto de hacking ético como evaluación autorizada, controlada y orientada a reducir riesgos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el concepto, propósito y alcance del hacking ético.',
        },
        {
          id: 2,
          texto:
            '¿Qué condición debe cumplirse antes de iniciar una prueba de seguridad?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Contar con autorización expresa y definir el alcance, las restricciones y los responsables.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Desactivar los registros para evitar que la actividad sea detectada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Evaluar cualquier sistema accesible, aunque pertenezca a un tercero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ejecutar primero la explotación y solicitar autorización posteriormente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las condiciones de autorización, alcance y responsabilidad requeridas antes de una evaluación.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los principios éticos y las condiciones de autorización.',
        },
        {
          id: 3,
          texto: '¿Qué caracteriza una prueba de caja negra?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El evaluador recibe el código fuente y todas las credenciales administrativas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La organización entrega información completa sobre la arquitectura interna.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El evaluador recibe información mínima y analiza el objetivo desde una perspectiva externa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La prueba se limita exclusivamente a revisar documentos y políticas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el enfoque de caja negra y de su utilidad para valorar la exposición externa.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las pruebas de caja negra, blanca, gris y combinadas.',
        },
        {
          id: 4,
          texto: '¿Qué ventaja principal ofrece una prueba de caja blanca?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evita revisar configuraciones y controles internos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permite una evaluación profunda mediante documentación, credenciales, configuraciones o código.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Garantiza que no sea necesaria la autorización de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reduce la evaluación a los servicios visibles desde internet.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el enfoque de caja blanca y de su capacidad para ampliar la profundidad y cobertura técnica.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las características y aplicaciones de la caja blanca.',
        },
        {
          id: 5,
          texto: '¿Qué combina una prueba de caja gris?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La ausencia total de información con acceso administrativo completo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La revisión física de equipos con la eliminación de registros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La explotación sin restricciones con la publicación de resultados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Información y accesos parciales con una perspectiva de evaluación realista.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la caja gris como enfoque equilibrado entre realismo, información disponible y cobertura.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los tipos de servicio de hacking ético.',
        },
        {
          id: 6,
          texto: '¿Qué representa el vector dentro de un ataque informático?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La consecuencia final que afecta los activos de la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La ruta o medio utilizado para alcanzar y comprometer el objetivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La política empleada para aprobar un cambio de configuración.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El informe elaborado después de corregir una vulnerabilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los elementos de un ataque y del vector como ruta utilizada para alcanzar el objetivo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con amenaza, vulnerabilidad, vector, técnica e impacto.',
        },
        {
          id: 7,
          texto: '¿Qué describe el movimiento lateral dentro de un ataque?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El traslado de un equipo físico entre dos dependencias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La creación programada de una copia de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El desplazamiento desde un recurso comprometido hacia otros sistemas de la red.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La actualización autorizada de una aplicación institucional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la clasificación de ataques y del movimiento lateral entre recursos tecnológicos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las tácticas y técnicas de los ataques informáticos.',
        },
        {
          id: 8,
          texto:
            '¿Por qué la metodología de <em>hacking</em> ético debe ajustarse al contexto?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque las pruebas deben corresponder al recurso, el objetivo, el riesgo y la evidencia esperada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Porque todas las organizaciones deben ejecutar exactamente las mismas pruebas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque la metodología elimina la necesidad de establecer un alcance.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque solo deben evaluarse las herramientas y no los procesos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la selección metodológica según el contexto, la criticidad y el propósito de la evaluación.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la selección de metodologías para pruebas de seguridad.',
        },
        {
          id: 9,
          texto:
            '¿Qué deben definir las reglas de compromiso de una prueba de seguridad?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el nombre de la herramienta y el evaluador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo las vulnerabilidades que se espera encontrar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La eliminación de todas las restricciones durante la evaluación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Objetivo, alcance, exclusiones, fechas, técnicas, criterios de detención y contactos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los elementos que deben contener las reglas de compromiso de una evaluación.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con autorización, alcance y reglas de compromiso.',
        },
        {
          id: 10,
          texto:
            '¿Qué tipo de prueba verifica que las comunicaciones entre zonas cumplan las reglas establecidas?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Prueba de recuperación de cuentas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Prueba de segmentación de red.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Prueba de diseño gráfico de la aplicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Prueba de inventario documental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las pruebas de segmentación y de su función para comprobar comunicaciones autorizadas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la definición de los tipos de prueba.',
        },
        {
          id: 11,
          texto:
            '¿Qué criterios deben considerarse al seleccionar una herramienta de seguridad?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente su popularidad y apariencia visual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo la cantidad de resultados que pueda generar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Función, compatibilidad, precisión, seguridad, soporte y capacidad de producir evidencia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La posibilidad de utilizarla sobre sistemas sin autorización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los criterios técnicos para seleccionar herramientas de evaluación de seguridad.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la selección responsable de herramientas tecnológicas.',
        },
        {
          id: 12,
          texto:
            '¿Por qué debe validarse un hallazgo generado automáticamente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque puede contener falsos positivos y debe contrastarse con la configuración y el contexto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Porque las herramientas siempre eliminan la evidencia después del análisis.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque ningún resultado automatizado puede formar parte de un informe.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque la validación consiste en publicar inmediatamente el hallazgo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la validación de hallazgos y de la interpretación crítica de resultados automatizados.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el análisis y la validación de vulnerabilidades.',
        },
        {
          id: 13,
          texto:
            '¿Cómo debe gestionarse la evidencia obtenida durante una prueba?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Debe compartirse públicamente para facilitar su consulta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Debe conservarse sin identificar la fecha, el recurso ni el responsable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Debe incluir contraseñas y datos personales visibles en todas las capturas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Debe identificarse, protegerse, almacenarse de forma segura y limitar su acceso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la recolección, protección, organización y trazabilidad de las evidencias.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la protección y el análisis de evidencias.',
        },
        {
          id: 14,
          texto:
            '¿Qué diferencia existe entre el informe técnico y el informe gerencial?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El técnico elimina las evidencias y el gerencial presenta comandos detallados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El técnico permite reproducir hallazgos; el gerencial comunica riesgos, prioridades y recursos requeridos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Ambos deben contener únicamente el nombre de las herramientas utilizadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El gerencial reemplaza la necesidad de documentar recomendaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los propósitos y públicos de los informes técnico y gerencial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la documentación y comunicación de resultados.',
        },
        {
          id: 15,
          texto:
            '¿Qué principio debe orientar la configuración de reglas en un <em>firewall</em>?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permitir todo el tráfico y revisar únicamente cuando ocurra un incidente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Asignar la misma regla a todas las zonas sin analizar sus funciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desactivar los registros para mejorar el rendimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Denegar por defecto y permitir únicamente las comunicaciones necesarias y autorizadas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los principios de mínimo privilegio y denegación por defecto en firewalls.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la implementación y configuración de controles de red.',
        },
        {
          id: 16,
          texto:
            '¿Qué propósito cumple la separación de funciones en la implementación de seguridad?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evitar que una sola persona solicite, apruebe, implemente y valide un cambio crítico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Permitir que todos los usuarios utilicen cuentas administrativas compartidas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar la participación de los propietarios de los procesos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Concentrar todas las decisiones en el proveedor tecnológico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los roles, responsabilidades y controles asociados con la separación de funciones.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los roles y responsabilidades de seguridad.',
        },
        {
          id: 17,
          texto:
            '¿Qué diferencia existe entre un control preventivo y uno detectivo?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El preventivo documenta incidentes y el detectivo elimina todos los riesgos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El preventivo reduce la probabilidad de un evento; el detectivo identifica eventos o anomalías.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ambos se aplican únicamente después de un desastre.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El detectivo reemplaza los mecanismos de recuperación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la clasificación y finalidad de los controles preventivos y detectivos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los tipos y propósitos de los controles de seguridad.',
        },
        {
          id: 18,
          texto:
            '¿Qué característica debe tener una conexión segura mediante VPN?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Otorgar acceso total a la red a cualquier usuario conectado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Utilizar únicamente una contraseña compartida entre todos los usuarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cifrar la comunicación, aplicar autenticación fuerte y limitar el acceso a los recursos necesarios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Deshabilitar el registro de conexiones para evitar el consumo de almacenamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los criterios de protección, autenticación y segmentación aplicables a una VPN.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con conexiones seguras y mecanismos de acceso remoto.',
        },
        {
          id: 19,
          texto:
            '¿Qué diferencia existe entre el objetivo de tiempo y el objetivo de punto de recuperación?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El primero define el tiempo máximo para restablecer; el segundo, la pérdida máxima tolerable de datos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El primero mide la cantidad de usuarios y el segundo el número de servidores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ambos indican únicamente la capacidad de almacenamiento disponible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El primero elimina las copias y el segundo desactiva los servicios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los objetivos de recuperación utilizados en los planes de continuidad y desastres.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con contingencia, recuperación y restauración de servicios.',
        },
        {
          id: 20,
          texto:
            '¿Cómo debe comprobarse el funcionamiento de un control de seguridad?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Verificando únicamente que la instalación haya finalizado sin mensajes de error.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Probando casos autorizados y no autorizados, revisando registros y documentando los resultados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Desactivando el control antes de realizar cualquier validación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Confiando solo en la configuración predeterminada del fabricante.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la comprobación funcional, la revisión de registros y la documentación del despliegue.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el despliegue, verificación y documentación de controles.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre hacking ético, tipos de evaluación, ataques informáticos, metodologías y herramientas de prueba, evidencias, informes, controles de seguridad, VPN, contingencia, recuperación y verificación de configuraciones.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
