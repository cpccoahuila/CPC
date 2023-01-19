<template>
 <v-card color="accent" class="mt-10">
<v-col cols="12" >

<v-carousel
height="600px"> 
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      
      dark
      
    >
 
  </v-carousel-item>
  </v-carousel></v-col>
 
  

<v-divider></v-divider>
   </v-card>
  </template>



<script>
  export default {
    data () {
      return {
        items: [

        
          {
            src: 'https://www.seacoahuila.org.mx/theme/images/baner-peac2.jpg',
          },
          {
            src: 'https://www.seacoahuila.org.mx/theme/images/banner-oficina-verde.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>