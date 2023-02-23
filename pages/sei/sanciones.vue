<template>
<v-container>

    <v-row>
        <v-col>
            <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2" :icon="page.icon" prominent>

                <div align="center" class="mb-5 text-xl-h1 text-md-h3 ">{{page.title}}</div>
                <div align="center" class="text-body-1">{{ page.sub }}</div>

            </v-alert>

            <v-card class="mt-3 ">

                <v-col align="center" justify="center">
                    <v-row>
                        <v-col cols="12" md="4" xs="12" v-for="(e,i) in botones" :key="i">
                            <v-card color="bluegreyt" :href="e.href">

                                <v-card-actions class="justify-center">
                                    <v-avatar size="35" tile>

                                        <img :src="require('@/pages/sei/icons/' + e.icon)" alt="alt">
                                    </v-avatar> {{ e.titulo }}
                                </v-card-actions>

                            </v-card>
                        </v-col>

                    </v-row>

                </v-col>

            </v-card>

            <v-card color="peac" class="pa-5 mt-12">

                <v-card-title class=" justify-center">
                    <div class=" text-xl-h4 text-md-h5 mt-5">
                        <v-avatar size="40" tile>

                            <img :src="require('@/pages/sei/icons/logo_SEI.png')" alt="alt">
                        </v-avatar>

                        Sistema Estatal de servidores públicos en contrataciónes
                    </div>
                </v-card-title>
                <v-divider></v-divider>

                <v-card-text align="center" class="pa-12">

                    <p class="text-h5">Que es?</p>
                   <p>Sistema que permitirá la publicación de los datos sobre las sanciones impuestas a los 
funcionarios públicos y particulares, en relación con los procedimientos legales establecidos 
para emitir sanciones y faltas. Con el fin de hacer públicos los antecedentes de sancionados 
en donde se involucran contratantes privados, los funcionarios públicos y los órganos 
internos de control entre otras autoridades sancionadoras.</p>
                </v-card-text>
                <v-divider class="ma-8"></v-divider>
                <v-card-text align="center" class="pa-6">

                    <p class="text-h5">Formato de pre-inscripción para incorporar el sistema dirigido las entidades públicas del Estado</p>

                    <p class="text-justify">
                        Con la finalidad de establecer un canal directo es necesaria la integración de el sistema con cada una de las instituciónes de Coahuila. Las instituciónes por medio de sus servidores públicos
                        en cualquera sus áreas involucradas, como titulares de área, directivos, administrativos, recursos humanos, cabildos podrán acceder y llevar a cabo
                        el registro y seguimiento para incorporas a la instutución en dichos procesos. </p>
                    <p>Para instituciónes públicas del estado de Coahuila interesadas en incorporar el sistema estatal de sancionados le invitamos a llenar este formato de pre-registro.

                    </p>
                    <v-btn elevation="3" :color="page.color" dark href="#"> Regístro de instituciónes públicas</v-btn>
                </v-card-text>

            </v-card>

            <v-card class="mt-10 pa-10" color="sei">

                <v-card-title class="justify-center">
                    <div class=" text-xl-h2 text-md-h4"> Dátos </div>
                </v-card-title>
                <v-divider></v-divider>

            </v-card>

            <v-card class="mt-3 mb-3" color="peac">
                <v-col aling="center" justify="center">
                    <v-row justify="center" align="center" class="mt-5">

                        <v-col cols="12" align="center">

                        </v-col>
                        <v-col cols="12" lg="8" sm="12" v-for="(e,i) in btnitem" :key="i">

                            <v-card class="pa-2 mb-10 mx-auto text-justify" tile color="article">
                                <v-row align="center">
                                    <v-col cols="12" lg="6" sm="12" class="pa-8" align="center" justify="center">

                                        <h3> {{e.title}}</h3>
                                        <v-card-subtitle class="text-justify">
                                            {{e.desc}}
                                        </v-card-subtitle>
                                        <v-card-subtitle class="text-justify">
                                            {{e.desc2}}
                                        </v-card-subtitle>
                                    </v-col>

                                    <v-col cols="12" lg="6" sm="12">
                                        <nuxt-link :to="e.link">

                                            <v-hover>

                                                <v-img slot-scope="{ hover }" v-if="hover" :src="require('@/static/img/botonera/'+ e.src1)">
                                                </v-img>
                                                <v-img v-else :src="require('@/static/img/botonera/'+ e.src1)">
                                                </v-img>

                                            </v-hover>
                                        </nuxt-link>
                                    </v-col>

                                </v-row>
                            </v-card>

                        </v-col>

                    </v-row>
                </v-col>

            </v-card>

        </v-col>
    </v-row>
</v-container>
</template>

    
<script>
export default {
    name: 'sanciones',
    data() {
        return {
            page: {
                color: 'blue darken-3',
                title: 'Sancionados',
                sub: 'Servidores públicos y particulares sancionados',
                icon: 'mdi-scale-balance'
            },
            botones: [{
                    titulo: 'Bases Plataforma Nacional Digital',
                    icon: 'estandar de datos.png',
                    href: ''
                },
                {
                    titulo: 'Diccionario de datos',
                    icon: 'datos abiertos.png',
                    href: ''
                },
                {
                    titulo: 'Log-In-Instituciones',
                    icon: 'folder-account-outline.png',
                    href: '/admin/'
                },


            ],
            btnitem: [{
                    title: 'Sistema Estatal de servidores públicos y particulares sancionados',
                    desc: 'En la actualidad, la información de los servidores públicos y particulares sancionados de los diferentes niveles de gobierno se encuentra contenida en diversos formatos, bases de datos y sistemas de información; cada uno de ellos con particularidades tecnológicas y reglas de negocio distintas, dificultando la integración y la interoperabilidad de los datos. El Estándar para la Interoperabilidad de Datos de Servidores Públicos y Particulares Sancionados surge a partir de la necesidad de distribuir, comparar y analizar la información de una manera uniforme e interoperable.',
                    desc2: 'Por ello el sistema establece una herramienta que permitirá la consulta de información de las diferentes instituciones de los tres niveles de gobierno.',
                    src1: 'sistema1.jpg',
                    src2: 'sistema2.jpg',
                    link: '#'
                },

            ],

        }

    }
}
</script>

    
<style lang="scss" scoped>

        </style>
