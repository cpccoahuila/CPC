

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
                        <div class="embed-responsive embed-responsive-16by9">
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
                            <iframe width="900" height="550"
                                src="https://www.youtube.com/embed/live_stream?channel=UCgzKc9c1F9ntPAi34XNfy4A"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>



                    </v-col>

                </v-card>

                <v-card class="mt-10 pa-4" color="article">
                    <v-row v-for="(e, index) in sesiones" :key="index">
                        <v-col aling="center" justify="center" cols="12">
                            <v-card-title class="justify-center">
                                <div class=" text-xl-h3 text-md-h4"> {{ e.year }}</div>
                            </v-card-title>
                            <v-divider></v-divider>
                        </v-col>
                        
                        <v-row justify="center">
                          
                              
                             
                                    
                                      <v-col cols="12" lg="4" md="3" sm="4" xs="12" v-for="(sesion, index) in e.data" :key="index" align="center">
                                        <v-list-item-group class="text-h6">
                                            
                                            <v-col cols="12">
                                                <span>
                                                    <v-btn :href="sesion.link" icon class="ma-3"> <v-icon x-large
                                                   color="red">mdi-youtube</v-icon></v-btn>
                                                   <v-btn :href="sesion.ordenDelDia" icon> <v-icon
                                                       x-large>mdi-clipboard-list-outline</v-icon> </v-btn>
                                                </span>
                                         
                                                       <v-list-item-subtitle> {{ sesion.nombre }}</v-list-item-subtitle>
                                                      
                                               </v-col>
                                             
                                 
                                             
                                                   </v-list-item-group>
                                      </v-col>
                                     


                        </v-row>
                        
                    </v-row>
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
            },
            
    sesiones: [
                {
                    year: 'Sesiones Ordinarias 2023',
                    data: [
                    {
                            link: 'https://youtu.be/CdMmALt4MME?si=hqC4KR5iVw1xRVVx',
                            nombre: 'Sesión Ordinaria - 26 de septiembre',
                            ordenDelDia: '/sesiones'
                        },
                        {
                            link: 'https://youtu.be/jgdSGqJqey0?si=rZZzhTRYQOHezs8p',
                            nombre: 'Sesión Ordinaria - 3 de agosto',
                            ordenDelDia: '/sesiones'
                        },
                        {
                            link: 'https://youtu.be/EwUuIDY5_Cs?si=SaQWtXAz62rB0lIH',
                            nombre: 'Sesión Ordinaria - 6 de julio',
                            ordenDelDia: '/sesiones'
                        },
                        {
                            link: 'https://youtu.be/YaTs934W_gw?si=OLeD6D-EbJc7nhXq',
                            nombre: 'Sesión Ordinaria - 1 de junio',
                            ordenDelDia: '/#'
                        },
                        {
                            link: 'https://youtu.be/eiaG7j_uSN4?si=9gJllRKiQT-pSCVv',
                            nombre: 'Sesión Ordinaria - 4 de mayo',
                            ordenDelDia: '/sesiones'
                        },
                        {
                            link: 'https://youtu.be/F6EfYhca5Co?si=a48xnUdb0XxUG4w1',
                            nombre: 'Sesión Ordinaria - 10 de abril',
                            ordenDelDia: '/sesiones'
                        },
                        {
                            link: 'https://youtu.be/yE9u2PyFDwk?si=eMFiXFlym4mQ-wee',
                            nombre: 'Sesión Ordinaria - 2 de marzo',
                            ordenDelDia: '/sesiones'
                        },
                        {
                            link: 'https://youtu.be/Rl71o5oqCEA?si=nSgkjlHX-VuuG99A',
                            nombre: 'Sesión Ordinaria - 2 de febrero',
                            ordenDelDia: '/sesiones'
                        },
                        {
                            link: 'https://youtu.be/SUQOq-7UNr4?si=5wnvZGdMRnOscqLZ',
                            nombre: 'Sesión Ordinaria - 6 de enero',
                            ordenDelDia: '/sesiones'
                        },
                    ]


                },

                {
                    year: 'Sesiones Ordinarias 2022',
                    data: [
                        {
                            link: 'https://youtu.be/VtpFldjLkrU?si=Xp3Mzk4K4GyV80sM',
                            nombre: 'Sesión Ordinaria - 1 de diciembre',
                            ordenDelDia: '/sesiones'
                        },
                        {
                            link: 'https://www.youtube.com/live/XVsj8IqyEMs?si=t9JkoiBeNpWxcJCJ',
                            nombre: 'Sesión Ordinaria - 3 de noviembre',
                            ordenDelDia: '/sesiones'
                        },
                        {
                            link: 'https://www.youtube.com/live/XVsj8IqyEMs?si=t9JkoiBeNpWxcJCJ',
                            nombre: 'Sesión Ordinaria - 24 de octubre',
                            ordenDelDia: '/sesiones'
                        },
                        {
                            link: 'https://www.youtube.com/live/VA4SUoXuWL0?si=fXn5CXbpf1Vz2arj',
                            nombre: 'Sesión Ordinaria - 23 de septiembre',
                            ordenDelDia: 'https://drive.google.com/file/d/1FcmZt2jbZlIjHig3GS4g62lRqqx8B3O2/view?usp=sharing'
                        },
                        {
                            link: 'https://www.youtube.com/live/9ljCoEhYHD4?si=ZzCBR_EKnOxRwJwR',
                            nombre: 'Sesión Ordinaria - 30 de agosto',
                            ordenDelDia: 'https://drive.google.com/file/d/1idxNCcAWCenzl2R12xI3QBj72L9vCGxM/view?usp=sharing'
                        },
                        {
                            link: 'https://fb.watch/nqBAShzAGN/',
                            nombre: 'Sesión Ordinaria - 08 de agosto',
                            ordenDelDia: 'https://drive.google.com/file/d/1la5TtnBB12joY8ZZ0yhu8Dp5ABGTRbsX/view?usp=sharing'
                        },
                        {
                            link: 'https://youtu.be/k0m_-FQkl1A',
                            nombre: 'Sesión Ordinaria - 08 de julio',
                            ordenDelDia: 'https://drive.google.com/file/d/190nxoDaeBeu9lmWT38pzsqBUd71UQB4f/view?usp=sharing'
                        },
                        {
                            link: 'https://youtu.be/1Cx1aU5zdLY',
                            nombre: 'Sesión Ordinaria - 28 de junio',
                            ordenDelDia: 'https://drive.google.com/file/d/1YSMRt_kOhykXqSSNfUnHjlzcZvfvCgQo/view?usp=sharing'
                        },
                        {
                            link: 'https://youtu.be/WKWHlAbsRDw',
                            nombre: 'Sesión Ordinaria - 10 de junio',
                            ordenDelDia: 'https://drive.google.com/file/d/1fMJqdVW8g14Fi5WbTKgEWqFXopgzqVhQ/view?usp=sharing'
                        },
                        {
                            link: 'https://youtu.be/D71d_B0dtAQ',
                            nombre: 'Sesión Ordinaria - 27 de mayo',
                            ordenDelDia: 'https://drive.google.com/file/d/1G2wsM0a6wEHzSZrCa9sxgEOq5oDObLDl/view?usp=sharing'
                        },
                        {
                            link: 'https://youtu.be/G4boBKOKT7M',
                            nombre: 'Sesión Ordinaria - 13 de mayo',
                            ordenDelDia: 'https://drive.google.com/file/d/1dl5fPS3d6Ru4AyW_LY5KsMvI0UgUi07L/view?usp=sharing'
                        },
                        {
                            link: 'https://youtu.be/w0H6ev1Ew9Q',
                            nombre: 'Sesión Ordinaria - 22 de abril',
                            ordenDelDia: 'https://drive.google.com/file/d/1r4s8dsBW21XW3vZZjv1thlhArf9A0t38/view?usp=sharing'
                        },
                        {
                            link: 'https://youtu.be/uK4PguVEADk',
                            nombre: 'Sesión Ordinaria - 8 de abril',
                            ordenDelDia: 'https://drive.google.com/file/d/1Bh6Pmrhlfz6OC6jYPJS5g2CZccZXqRAU/view?usp=sharing'
                        },
                        {
                            link: 'https://youtu.be/PQ9XjTuBJYo',
                            nombre: 'Sesión Ordinaria - 25 de marzo',
                            ordenDelDia: 'https://drive.google.com/file/d/1NACD1ZXKbXw2odt-_uPmTIrDeeBrfJZy/view?usp=sharing'
                        },
                        {
                            link: 'https://youtu.be/ybSxO3RaE90',
                            nombre: 'Sesión Ordinaria - 11 de marzo',
                            ordenDelDia: 'https://drive.google.com/file/d/1A8ZK_JPs33wknrX_lyuMLAMjSxLxiYK1/view?usp=sharing'
                        },
                        {
                            link: 'https://youtu.be/dv6wZmi550E',
                            nombre: 'Sesión Ordinaria - 25 de febrero',
                            ordenDelDia: 'https://drive.google.com/file/d/11D7DoJ994IIEmO81bqm7SNtvAjLGOJ_K/view?usp=sharing'
                        },
                        {
                            link: 'https://youtu.be/U645wRXFLQ4',
                            nombre: 'Sesión Ordinaria - 11 de febrero',
                            ordenDelDia: 'https://drive.google.com/file/d/1VMJrg1iok_JlvFbfkCzuo-GIS0TqQTX7/view?usp=sharing'
                        },
                        {
                            link: 'https://youtu.be/Bv-j2QaQfpY',
                            nombre: 'Sesión Ordinaria - 28 de enero',
                            ordenDelDia: 'https://drive.google.com/file/d/12XBTAsdt42GFHiZ67Jx3a4IlArso1K-E/view?usp=sharing'
                        },
                        {
                            link: 'https://fb.watch/aOIFBr8sCH/',
                            nombre: 'Sesión Ordinaria - 14 de enero',
                            ordenDelDia: 'https://drive.google.com/file/d/1haHN6sMUJra3vx9r3Y552nfy1vyezH0e/view?usp=sharing'
                        },
    
                    ]


                },

                {
                    year: 'Sesiones Ordinarias 2021',
                    data: [
                        {
                            link: 'https://youtu.be/ViCBDKiO1GI',
                            nombre: 'Sesión Ordiaria - 10 de diciembre',
                            ordenDelDia: 'https://drive.google.com/file/d/1ZyL4AhvMQ77cdTvBuOCu4ZYJ0661OKAC/view?usp=sharing'
                        },
                        {
                            link: 'https://youtu.be/91DswnykLWs',
                            nombre: 'Sesión Ordinaria - 26 de noviembre',
                            ordenDelDia: 'https://drive.google.com/file/d/1jcEXasoWZdfyBptsr936p-i-Hv2T8xFx/view?usp=sharing'
                        },
                        {
                            link: 'https://youtu.be/C7YfF2pXhXU',
                            nombre: 'Sesión Ordinaria - 12 de noviembre',
                            ordenDelDia: 'https://drive.google.com/file/d/1KjNzhJpEcTl7kfZ6jwsxtAIRtrPh0kfL/view?usp=sharing'
                        },
                        {
                            link: 'https://youtu.be/QpS-WlwH6-A',
                            nombre: 'Sesión Ordinaria - 29 de octubre',
                            ordenDelDia: 'https://drive.google.com/file/d/10EIkxnmKo_x4Rcjqh1_IaDZRYxXdMUgv/view?usp=sharing'
                        },
                        {
                            link: 'https://youtu.be/WoZAkF_Rrtk',
                            nombre: 'Sesión Ordinaria - 15 de octubre',
                            ordenDelDia: '/sesiones'
                        },
                        {
                            link: 'https://fb.watch/8w7erX9_rZ',
                            nombre: 'Sesión Ordinaria - 5 de octubre',
                            ordenDelDia: '/sesiones'
                        },
                    ]
                },

                {
                    year: 'Sesiones Extraordinarias 2023',
                    data: [
                        {
                            link: 'https://youtu.be/diTV9DHn-NI?si=RgiFpGnqHrffIKo1',
                            nombre: 'Sesión Ordiaria - 10 de diciembre',
                            ordenDelDia: '/sesiones'
                        },
                       
                    ]
                },


                {
                    year: 'Sesiones Extraordinarias 2022',
                    data: [
                    {
                            link: 'https://youtu.be/VyxVsk1ONps?si=Qsd5QfV-Ga-4IiMj',
                            nombre: 'Sesión Extraordinaria - 5 de diciembre',
                            ordenDelDia: '/sesiones'
                        },
                        {
                            link: 'https://youtu.be/RliW79qO7DU?si=IIkDaaiRDWjdkHUN',
                            nombre: 'Sesión Extraordinaria - 8 de noviembre',
                            ordenDelDia: '/sesiones'
                        },
                        {
                            link: 'https://youtu.be/EokMSuUpvBE?si=tzepxVPJYG944kH1',
                            nombre: 'Sesión Extraordinaria - 4  de noviembre',
                            ordenDelDia: '/sesiones'
                        },
                        {
                            link: 'https://youtu.be/ZNgQ_RYCnj8?si=3CEYkfeoRTGQnBZQ',
                            nombre: 'Sesión Extraordinaria - 28  de octubre',
                            ordenDelDia: '/sesiones'
                        },
                        {
                            link: 'https://www.youtube.com/live/CH2v_2IzNEc?si=G2sBZyreEWbuJEYi',
                            nombre: 'Sesión Extraordinaria - 24  de octubre',
                            ordenDelDia: '/sesiones'
                        },
                        {
                            link: 'https://youtu.be/gYne5VMBxJQ?si=IrN8l5MZycb8FpcX',
                            nombre: 'Sesión Extraordinaria - 1 de octubre',
                            ordenDelDia: '/sesiones'
                        },
                    ]


                },
            ],
        }

    },
    mounted() {

    },

}
</script>
    
<style lang="scss" scoped>.min-height-vh {
    min-height: 70vh;
}</style>
    