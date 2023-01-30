<template>
<div>
    <v-card color="accent" class="mt-10">
        <v-col cols="12">

            <v-carousel height="">
                <v-carousel-item v-for="(item,i) in items" :key="i" dark>
                    <v-img :src="item.src"></v-img>
                </v-carousel-item>
            </v-carousel>
        </v-col>

        <v-divider></v-divider>
    </v-card>

 
</div>
</template>

<script>
export default {
    data() {
        return {
            items: [

                {
                    src: 'https://www.seacoahuila.org.mx/theme/images/baner-peac2.jpg',
                },
                {
                    src: 'https://www.seacoahuila.org.mx/theme/images/banner-oficina-verde.jpg',
                },

            ],
        }
    },
}
</script>
