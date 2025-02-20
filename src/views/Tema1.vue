<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Los metales 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.col-md-8
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/img-1.png')  
      .col-lg-8
       p Se llaman metales preciosos a los que se encuentran en estado libre en la naturaleza. Por ejemplo, el oro es bastante frecuente encontrarlo en forma de pepitas en los depósitos aluviales originados por la disgregación de las rocas donde se encuentra incluido. En joyería, los metales preciosos suelen ser el oro (Au), la plata (Ag), el paladio (Pd), el platino (Pt) y el rodio (Rh). Una de las características de una joya es su durabilidad y por eso se usan los materiales más nobles. 
       .cajon.color-primario.p-4.mb-4.fnd-1
        p.mb-0.text-white Se utilizan aleaciones (combinación de dos a más metales) porque los metales nobles no presentan todas las cualidades mecánicas para la orfebrería, la joyería o la bisutería.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para dar dureza o maleabilidad al metal, hay que conocer el comportamiento de su estructura interna cuando es sometido a distintos cambios de temperatura y presión. A temperatura ambiente, el metal está formado por una serie de estructuras regulares dispuestas en un orden, los llamados cristales. La estructura del metal puede compararse con un panal de abejas, formado a partir de hexágonos de cera superpuestos para formar una estructura mayor.

    .row.align-items-center(data-aos="zoom-in")
      .col-auto.mb-3
        h3.mb-0.fnd-2-1.fnd-2 Definición de metal noble y metal precioso
    p Los metales nobles son un grupo de metales caracterizados por ser inertes químicamente, es decir, que no reaccionan químicamente (o reaccionan muy poco) con otros compuestos químicos. Esta propiedad se traduce en una escasa reactividad, o lo que es lo mismo, son poco susceptibles de corroerse y oxidarse, lo que les proporciona apariencia de inalterabilidad, razón por la cual se les denomina con el apelativo de nobles.
    p Los metales más conocidos, mencionados y utilizados son:


    .tarjeta.tarjeta--azul.p-5.mb-5.fnd-3(data-aos="fade-left")
      SlyderA(tipo="b")
        .row.p-xl-5.justify-content-center.align-items-center
          .col-xl-3.col-lg-4.col-md-8
            figure.mb-4
              img(src='@/assets/curso/temas/tema1/img-3.png')
          .col-xl-9.col-lg-11.mb-4.mb-md-0
            h5 Oro
            p El oro se encuentra en estado nativo en yacimientos minerales de muy diversas clases, en aluviones, en arenas, fluviales, etc. En granos o pepitas, que en algunos casos son de gran tamaño, otras en agujas, pajuelas o polvo.
            .row.mb-4.justify-content-center.pe-lg-5.pe-md-0
              .col-md-6.text-center
                p.mb-0 Símbolo Químico ...............Au                               
                p.mb-0 Número atómico ................79
                p.mb-0 Valencia .............................1,3        
                p.mb-0 Estado de oxidación ..........+1
                p.mb-0 Electronegatividad ............2,4
              .col-md-6.text-center
                p.mb-0 Masa atómica (g/mol) ...196,967                
                p.mb-0 Densidad (g/ml) ....................19,3
                p.mb-0 Punto de ebullición (ºC) ......2970
                p.mb-0 Punto de fusión (ºC) ............1063
            p En la actualidad, la mayor parte del oro es extraído de minerales que lo contienen en proporción ínfima; también, se lo extrae de otros metales al refinarlos, como por ejemplo el cobre. El oro ha sido el primer metal conocido por el ser humano, que en los tiempos prehistóricos sirvió para confeccionar adornos personales.

        .row.p-xl-5.justify-content-center.align-items-center
          .col-xl-3.col-lg-4.col-md-8
            figure.mb-4
              img(src='@/assets/curso/temas/tema1/img-6.png')
          .col-xl-9.col-lg-11.mb-4.mb-md-0
            h5 Platino
            .row.justify-content-center
              .col-lg-7
                p Es un metal muy dúctil, maleable, muy tenaz cuando esta puro, de color gris blanquecino con poco brillo metálico, pero lo adquiere intenso poco a poco que se frote.
                p Tanto el platino como los metales de su mena se encuentran en aluviones en completa es descomposición, procedentes de las rocas de peridoto más o menos transformadas en serpentinas, como también con el oro en filones de cuarzo aurífero, y algunas veces en estado nativo, en forma de granos y pepitas, con otros metales de la misma familia, o iridio, osmio, paladio, rutenio y rodio.
              .col-lg-5.col-md-6
                p.mb-0 Símbolo Químico ............................ Pt
                p.mb-0 Número atómico .............................78            
                p.mb-0 Valencia ..........................................2,4
                p.mb-0 Estado de oxidación .......................+2
                p.mb-0 Masa atómica (g/mol) ............195,09
                p.mb-0 Densidad (g/ml) ...........................21,4
                p.mb-0 Punto de ebullición (ºC) .............4530
                p.mb-0 Punto de fusión (ºC) ...................1769

        .row.p-xl-5.justify-content-center.align-items-center
          .col-xl-3.col-lg-4.col-md-8
            figure.mb-4
              img(src='@/assets/curso/temas/tema1/img-5.png')
          .col-xl-9.col-lg-11.mb-4.mb-md-0
            h5 Paladio
            p Es un metal de transición del grupo de platino Es un metal de transición del grupo del platino, blando, dúctil, maleable y poco abundante. Se parece químicamente al platino y se extrae de algunas minas de cobre y níquel. Se encuentra libre en arenas y gravas que pueden contener por encima del 1.4 % de paladio. En estado combinado acompaña a minerales como el níquel, cobre y zinc que se extrae como subproducto.
        .row.p-xl-5.justify-content-center.align-items-center
          .col-xl-3.col-lg-4.col-md-8.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img-8.png')
          .col-xl-9.col-lg-11.mb-4.mb-md-0
            h5 Rodio
            p Es un metal de color blanco, duro, pero considerablemente menos dúctil que el platino, pero más que otros metales que pertenecen al grupo 9 de la tabla periódica. Es un metal de transición, muy reflectante, resistente a la corrosión y muy duradero, no se encuentra en abundancia en la naturaleza, pero es posible encontrarlo en su estado natural en minas de platino, y en la arena de ríos ubicadas en los montes Urales, en América del Sur y Norteamérica. 
            p El rodio no se disuelve en ácidos, aunque si se encuentra finamente dividido, puede disolverse en agua regia y en ácido sulfúrico concentrado caliente.

        .row.p-xl-5.justify-content-center.align-items-center
          .col-xl-3.col-lg-4.col-md-8
            figure.mb-4
              img(src='@/assets/curso/temas/tema1/img-4.png')
          .col-xl-9.col-lg-12.mb-4.mb-md-0
            h5 El Cobre
            p Es uno de los metales de transición e importante metal no ferroso. Su utilidad se debe a la combinación de sus propiedades químicas, físicas y mecánicas, así como a sus propiedades eléctricas y su abundancia. El cobre fue uno de los primeros metales usados por los humanos.

            p La mayor parte del cobre del mundo se obtiene de los sulfuros minerales como la calcocita, covelita, calcopirita, bornita y enargita. Los minerales oxidados son la cuprita, tenorita, malaquita, azurita, crisocola y brocantita. El cobre natural, antes abundante en Estados Unidos, se extrae ahora sólo en Michigan. El grado del mineral empleado en la producción de cobre ha ido disminuyendo regularmente, conforme se han agotado los minerales más ricos y ha crecido la demanda de cobre. Hay grandes cantidades de cobre en la Tierra para uso futuro si se utilizan los minerales de los grados más bajos, y no hay probabilidad de que se agoten durante un largo periodo.
            .row
              .col-md-6.text-center
                p.mb-0 Símbolo Químico ...........................Cu
                p.mb-0 Número atómico ........................... 29
                p.mb-0 Valencia......................................... 1,2
                p.mb-0 Estado de oxidación ......................+2
              .col-md-6.text-center
                p.mb-0 Masa atómica (g/mol) .............. 63,54
                p.mb-0 Densidad (g/ml) ........................... 8,96
                p.mb-0 Punto de ebullición (ºC) ............. 2595
                p.mb-0 Punto de fusión (ºC) ................... 1083

    p Actualmente, en el mercado comercial encontramos otros metales que son binarios (combinación de 2 metales) algunos mencionados son los siguientes:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      TabsA.color-acento-botones.mb-5
        .tarjeta.fnd-4.p-4(titulo="Tumbaga")
          .row.justify-content-center.align-items-center
            .col-xl-6
              p La tumbaga es una aleación amarillo-rojiza de 8 % de Cu y de 15 % de Zn. Su punto de fusión es de 990 °C, y su peso específico es de 8,7. Debido a su maleabilidad y color dorado, la tumbaga se ha llegado a usar profusamente en la industria de las alhajas de fantasía, imitaciones de oro. Dentro de la artesanía artística nos brinda un buen material para fabricar objetos de mayor tamaño y trabajo sencillos con esmalte.

            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/img-9.png')
        .tarjeta.fnd-4.p-4(titulo="Latón")
          .row.justify-content-center.align-items-center
            .col-xl-6
              p El latón es una aleación amarilla o amarilla verdosa, compuesta por cobre y Zinc. Desde tiempos antiguos se ha utilizado para fabricar objetos de adornos utilitarios. Dentro de la orfebrería se puede realizar con latón: candelabros, lamparillas de pared, cortapapeles, cuencos, bandejas. La aleación más maleable es el latón laminado 67 Cu y 33 Zn.
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/img-10.png')
        .tarjeta.fnd-4.p-4(titulo="Alpaca")
          .row.justify-content-center.align-items-center
            .col-xl-6
              p La alpaca es el nombre común para aleaciones constituidas por Cu, Ni, Zn y no debe ser confundida con la plata. Su nombre nació en épocas antiguas, cuando se planteaban objetos en bronce. El mismo método se usa actualmente para la alpaca. (Todos los objetos de alpaca que se venden son plateados). Argentan, alpaca, packfung, son algunos de los nombres de las aleaciones de la alpaca existentes en el mercado, de color blanco. Debido a su contenido de níquel. La alpaca es dura para trabajar, pero permite ser moldeada en frío y en caliente. Se recose a 600-700°. Su punto de fusión es de 990° y su peso específico es 8,7.
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/img-11.png')



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
