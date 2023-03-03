

<template>
    <v-container class="min-height-vh">

        <v-row>
            <v-col>
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-xl-h1 text-md-h3 ">{{ page.title }}</div>

                </v-alert>

                <v-card class="mt-3 pa-10" color="article">
                    <v-col cols="12" align="center" justify="center">
                        <h1 style="color: #4c2882">Sesiones CPC</h1>
                        <p></p>
                        <div class="embed-responsive embed-responsive-16by9" >
                            <iframe width="900" height="550"
                                src="https://www.youtube.com/embed/videoseries?list=PLDdlhleuW9zck5BEwLLfTx4YIoD1SaWkN"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>

                    </v-col>

                    <v-col aling="center" justify="center">


                    </v-col>

                </v-card>

                <v-card class="mt-3 pa-10" color="article">
                    <v-col cols="12" align="center" justify="center">
            <h1 style="color: #4c2882;">Transmisión en vivo</h1>
            <p></p>
            <div class="embed-responsive embed-responsive-16by9">
                <iframe width="900" height="550" src="https://www.youtube.com/embed/live_stream?channel=UCgzKc9c1F9ntPAi34XNfy4A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
 


        </v-col>

</v-card>

            </v-col>
        </v-row>
    </v-container>
</template>
    
<script>
export default {
    name: 'Sesiones',
    data() {
        return {
            page: {
                color: 'green lighten-2',
                title: 'Sesiones',
                icon: 'mdi-comma-circle-outline'
            }
        }

    },
    mounted() {

    },
}
</script>
    
<style lang="scss" scoped>
.min-height-vh {
    min-height: 70vh;
}</style>
    