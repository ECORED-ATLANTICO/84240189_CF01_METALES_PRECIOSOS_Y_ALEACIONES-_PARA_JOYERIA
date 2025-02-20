<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Reconocimientos y aleaciones en los metales preciosos',
      titulo: 'Reconocimientos y aleaciones en los metales preciosos',
      introduccion:
        'Preguntas de opción múltiple: lea los siguientes enunciados y seleccione la respuesta que considere correcta.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de los siguientes es un metal comúnmente utilizado en joyería?',
          imagen: require('@/assets/actividad/img-1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Plástico', esCorrecta: false },
            { id: 'b', texto: 'Oro', esCorrecta: true },
            { id: 'c', texto: 'Vidrio', esCorrecta: false },
            { id: 'd', texto: 'Cerámica', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué característica define a los metales de transición?',
          imagen: require('@/assets/actividad/img-2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Son todos no metálicos', esCorrecta: false },
            {
              id: 'b',
              texto:
                'Tienen propiedades intermedias entre metales y no metales',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo son líquidos a temperatura ambiente',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Son todos reactivos con agua',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál es una propiedad común de los metales?',
          imagen: require('@/assets/actividad/img-3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Son quebradizos', esCorrecta: false },
            { id: 'b', texto: 'Conducen electricidad', esCorrecta: true },
            { id: 'c', texto: 'Son transparentes', esCorrecta: false },
            { id: 'd', texto: 'No son maleables', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué metal es conocido por su alta resistencia a la corrosión y se utiliza frecuentemente en joyería?',
          imagen: require('@/assets/actividad/img-4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Platino', esCorrecta: true },
            { id: 'b', texto: 'Aluminio', esCorrecta: false },
            { id: 'c', texto: 'Cobre', esCorrecta: false },
            { id: 'd', texto: 'Hierro', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes metales es un ejemplo de metal de transición?',
          imagen: require('@/assets/actividad/img-1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Carbono', esCorrecta: false },
            { id: 'b', texto: 'Cobre', esCorrecta: true },
            { id: 'c', texto: 'Azufre', esCorrecta: false },
            { id: 'd', texto: 'Oxígeno', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de joya se caracteriza por su diseño elaborado y el uso de gemas preciosas?',
          imagen: require('@/assets/actividad/img-2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Joyería tradicional', esCorrecta: false },
            { id: 'b', texto: 'Joyería de fantasía', esCorrecta: false },
            { id: 'c', texto: 'Joyería de diseño', esCorrecta: true },
            { id: 'd', texto: 'Joyería de uso diario', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de las siguientes propiedades es importante para un joyero al elegir metales?',
          imagen: require('@/assets/actividad/img-3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Dureza y maleabilidad', esCorrecta: true },
            { id: 'b', texto: 'Color y tamaño', esCorrecta: false },
            { id: 'c', texto: 'Forma y peso', esCorrecta: false },
            { id: 'd', texto: 'Precio y disponibilidad', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué tipo de joyería se destaca por su uso de técnicas artesanales tradicionales?',
          imagen: require('@/assets/actividad/img-4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Joyería contemporánea', esCorrecta: false },
            { id: 'b', texto: 'Joyería tradicional', esCorrecta: true },
            { id: 'c', texto: 'Joyería de diseño', esCorrecta: false },
            { id: 'd', texto: 'Joyería industrial', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué metal es ampliamente utilizado para la fabricación de joyas debido a su maleabilidad y ductilidad?',
          imagen: require('@/assets/actividad/img-1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Plata', esCorrecta: true },
            { id: 'b', texto: 'Hierro', esCorrecta: false },
            { id: 'c', texto: 'Zinc', esCorrecta: false },
            { id: 'd', texto: 'Mercurio', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es una de las principales características que los joyeros buscan en los metales?',
          imagen: require('@/assets/actividad/img-2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Brillo y estética', esCorrecta: true },
            { id: 'b', texto: 'Peso ligero', esCorrecta: false },
            { id: 'c', texto: 'Coste bajo', esCorrecta: false },
            { id: 'd', texto: 'Dureza extrema', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
