<template>
<div>
 

    <v-container class="min-height-vh ">
        
        <Carrusel />
      

        
    </v-container>
</div>
</template>

<script>

import Carrusel from '@/components/Carousel'


import lineUp from '@/components/LineUp'
export default {
    name: 'IndexPage',
    components: {
        Carrusel,
    
     
 
    },



}
</script>

<style lang="scss" >
.min-height-vh {
  min-height: 70vh;
}
</style>
