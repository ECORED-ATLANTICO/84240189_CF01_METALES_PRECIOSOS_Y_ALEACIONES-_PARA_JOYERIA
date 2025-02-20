<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Contextualización hacia las propiedades de los metales

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-8
        .cajon.color-primario.p-4.mb-4.fnd-1-
          p Los metales preciosos, salvo casos muy especiales, se trabajan siempre aleados con otros metales, nobles o no, para conferirles las propiedades químicas o mecánicas necesarias. Por otra parte, a pesar de la técnica actual, no es posible obtener ningún metal totalmente puro. Todos los metales, que normalmente se aceptan como puros, contienen una cierta cantidad de impurezas. Estas impurezas son, a veces de unas pocas partes por millón, pero son suficientes para influir en algunas de las propiedades del metal que las contiene.
      .col-lg-4.col-md-8
        figure.mb-4
          img(src='@/assets/curso/temas/tema3/img-1.png') 

    .tarjeta.tarjeta--azul.p-5.mb-5.fnd-3(data-aos="fade-left")
      SlyderA(tipo="b")
        .row.pd-5.justify-content-center.align-items-center
          .col-xl-4.col-lg-4.col-md-8
            figure.mb-4
              img(src='@/assets/curso/temas/tema3/img-2.png')
          .col-xl-8
            h2 El título 
            p Para valorar la pureza relativa de un metal o para indicar en qué proporciones se encuentran aleadas, se utiliza el título. Actualmente, para todos los metales en general, el título se da siempre en milésimas, pero, excepcionalmente, para el oro también se da en quilates.
        .row.pd-5.justify-content-center.align-items-center
          .col-xl-4.col-lg-4.col-md-8
            figure.mb-4
              img(src='@/assets/curso/temas/tema3/img-3.png')
          .col-xl-8
            h2 Las milésimas	
            p Un metal hipotéticamente puro sería de 1000 milésimas. Es decir, que de las mil partes que forman el todo, todas corresponderían al metal en cuestión y ninguna a otro cuerpo extraño o a impurezas. Cuando se refiere a título, la milésima es una unidad de calidad. De una manera muy tosca, y generalizando quizás demasiado, se podría decir que los títulos superiores a 995 milésimas corresponden a metales considerados comercialmente puros y los inferiores a 995 ya son prácticamente aleaciones.
            p Considerando una aleación formada por: 750 gramos de oro y 250 gramos de plata, tendríamos una aleación de oro de 750 milésimas.
        .row.pd-5.justify-content-center.align-items-center
          .col-xl-4.col-lg-4.col-md-8
            figure.mb-4
              img(src='@/assets/curso/temas/tema3/img-4.png')
          .col-xl-8.mb-4.mb-md-0
            h2 Los quilates 
            p Otra forma de denominar el título de una aleación de oro es por quilates. El kiltate es 1/24 y su aplicación en el título es mucho menos precisa que las milésimas. Por este motivo, los quilates se utilizan solo para las aleaciones y no sirven para determinar impurezas. 
        .row.pd-5.justify-content-center.align-items-center
          .col-xl-4.col-lg-4.col-md-8
            figure.mb-4
              img(src='@/assets/curso/temas/tema3/img-5.png')
          .col-xl-8
            h2 Determinación del título o ley en milésimas	
            p Vamos a suponer que tenemos un lingote, de una aleación de oro, con un peso total de 825 g y sabemos que, de esta cantidad, 700 g corresponden al oro puro que contiene. Con estos datos ya estamos en condiciones de poder determinar el título del lingote y para ello aplicaremos la siguiente fórmula. 
            .row.justify-content-center.align-items-center
              .col-auto.mb-3
                h3.mb-0.fnd-9 TÍTULO = (Peso del metal puro)/(Peso total del lingotes)
            .row.justify-content-center.align-items-center
              .col-auto.mb-3
                h3.mb-0.fnd-9 TÍTULO = 700/825 = 0,848

            p O sea, 848 milésimas
            p En este caso se trataría de una aleación de oro de 848 partes de este metal y 152, las que faltan para llegar a 1000, de otro metal.
        .row.pd-5.justify-content-center.align-items-center
          .col-xl-4.col-lg-4.col-md-8
            figure.mb-4
              img(src='@/assets/curso/temas/tema3/img-6.png')
          .col-xl-8
            h2 Conversión de milésimas a quilates 
            p Como se indicó anteriormente, 1 quilate corresponde a 1/24. Vamos a averiguar cuántas milésimas equivale a 1 quilate. Lo haremos de la forma siguiente: 
            .row.justify-content-center.align-items-center
              .col-auto.mb-3
                h3.mb-0.fnd-9 1 quilate = 1000/24 = 41,666 milésimas
            p Por lo tanto, si queremos convertir las milésimas en quilates, nos bastará con dividir el número de milésimas por 41,666 y el resultado serán los quilates.
            .row.justify-content-center.align-items-center
              .col-auto.mb-3
                h3.mb-0.fnd-9 Quilate = 848/41,666 = 20,35 
        .row.pd-5.justify-content-center.align-items-center
          .col-xl-4.col-lg-4.col-md-8
            figure.mb-4
              img(src='@/assets/curso/temas/tema3/img-7.png')
          .col-xl-8
            h2 Conversión de quilates a milésimas	
            p Para transformar los quilates en milésimas tendremos que multiplicar el número de quilates por 41,666. 
            .row.justify-content-center.align-items-center
              .col-auto.mb-3
                h3.mb-0.fnd-9 Quilate = 20,35 X 41,66 =848

    .row.align-items-center(data-aos="zoom-in")
      .col-auto.mb-4
        h3.mb-0.fnd-2-1.fnd-2 Cálculo de la cantidad de fino que contiene 7 un lingote conociendo su título y el peso total

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8
        .titulo-sexto.c-r
          h5 Figura 3. 
          span Tabla quilates.
        figure
          img(src='@/assets/curso/temas/tema3/img-8-.png', alt='Se describe con un ejemplo de lingotes de oro, la cantidad del fino y se formula para saber la cantidad en gramos.')  
          figcaption Fuente: Sena (2024). 
    .row.align-items-center(data-aos="zoom-in")
      .col-auto.mb-3
        h3.mb-0.fnd-2-1.fnd-2 Cálculo del peso que hay que tomar de lingote de título conocido para que corresponda a una cantidad de fino determinada

    p.mb-4 Disponemos de un lingote de una aleación de oro de 584 milésimas y precisamos tomar una cantidad de aleación que contenga 50 g de oro fino.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        .titulo-sexto.c-r
          h5 Figura 4. 
          span Tabla quilates.
        figure
          img(src='@/assets/curso/temas/tema3/img-9-.png', alt='Se muestra un ejemplo para saber la cantidad de aleación que contenga 50 grs de oro fino.')  
          figcaption Fuente: Sena (2024).

</template>

<script>
export default {
  name: 'Tema3',
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
