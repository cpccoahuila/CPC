<template>
<div>
    <Carrusel />
    <v-container>
        <Organismos />
        <Data />
    </v-container>
</div>
</template>

<script>
import Carrusel from '@/components/Carousel'
import Organismos from '@/components/Organismos'
import Data from '@/components/Datos'
export default {
    name: 'IndexPage',
    components: {
        Carrusel,
        Organismos,
        Data
    }
}
</script>
