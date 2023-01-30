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
                        <v-col cols="12" md="4" xs="12" v-for=" e in botones">
                            <v-card color="bluegreyt" href="#">

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
                    <p>Es un sistema que establece el mecanismo para que todas las dependencias y entidades de la Administración Pública, identifiquen y clasifiquen el nivel de responsabilidad de los servidores públicos que participan en los procedimientos de contratación. El objetivo es incrementar la eficiencia de los procesos y procedimientos del sistema para que las instituciones puedan llevar a cabo el desarrollo implementado, en tiempo y forma.</p>

                </v-card-text>
                <v-divider class="ma-8"></v-divider>
                <v-card-text align="center" class="pa-6">

                    <p class="text-h5">Formato de pre-inscripción para incorporar el sistema dirigido las entidades públicas del Estado</p>

                    <p class="text-justify">
                        Con la finalidad de establecer un canal directo es necesaria la integración de el sistema con cada una de las instituciónes de Coahuila. Las instituciónes por medio de un servidor públicos
                        en cualquera sus áreas involucradas, como titulares de área, directivos, administrativos, recursos humanos, cabildos podrán acceder y llevar a cabo
                        el registro y seguimiento para incorporas a la instutución en dichos procesos. </p>
                    <p>Para instituciónes públicas del estado de Coahuila interesadas en incorporar el sistema estatal de servidores públicos en procesos de contratación le invitamos a llenar este formato de pre-registro.

                    </p>
                    <v-btn elevation="3" :color="page.color" dark href="#"> Regístro de instituciónes públicas</v-btn>
                </v-card-text>

            </v-card>

            <v-card class="mt-3 mb-3" cr="peac">
                <v-col aling="center" justify="center">
                    <v-row justify="center" align="center" class="mt-5">

                        <v-col cols="12" align="center">

                        </v-col>
                        <v-col cols="12" lg="8" sm="12" v-for="e in btnitem">

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

                                                <v-img slot-scope="{ hover }" v-if="hover" :src="require('@/static/img/botonera/'+ e.src2)">
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

            <v-card class="mt-10 pa-10" color="sei">

                <v-card-title class="justify-center">
                    <div class=" text-xl-h2 text-md-h4"> Dátos </div>
                    <v-spacer></v-spacer>
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" single-line hide-details></v-text-field>
                </v-card-title>
                <v-divider></v-divider>
                <v-card>
                    <v-data-table :headers="headers" :items="servidores" :search="search" :loading='loading'>

                    </v-data-table>
                </v-card>

            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'sei',
    data() {
        return {
            page: {
                color: 'pink darken-3',
                title: 'Servidores en Contrataciones',
                sub: 'Sistema de los servidores públicos que intervengan en procedimientos de contrataciones públicas',
                icon: 'mdi-account-tie-outline'
            },
            botones: [{
                    titulo: 'Bases Plataforma Nacional Digital',
                    icon: 'estandar de datos.png',
                    doc: ''
                },
                {
                    titulo: 'Diccionario de datos',
                    icon: 'datos abiertos.png',
                    doc: ''
                },

            ],
            btnitem: [{
                    title: 'Servidores Públicos en Contrataciónes:',
                    desc: 'Se basa en los servidores públicos que llevan una responsabilidad con los ciudadanos ya que intervienen en procedimientos como: -Contrataciones públicas -Tramite, atención y resolución de contratos. -Concesiones, licencias, permisos o autorizaciones.',
                    desc2: 'Las contrataciones públicas son uno de los pilares de un buen gobierno. Estos procesos permiten que las instituciones adquieran bienes y servicios en beneficio de las personas. Es necesario conocer quiénes son los servidores públicos responsables de llevar correctamente los procesos del gobierno.',
                    src1: 'sistema1.jpg',
                    src2: 'sistema1.jpg',
                    link: '/peac'
                },

            ],
            servidores: [],
            headers: [{
                    text: 'Nombre',
                    value: 'nombre',
                    sortable: true,
                    align: 'start',
                },
                {
                    text: 'Dependencia',
                    value: 'dependencia',
                },
                {
                    text: 'Puesto',
                    value: 'puesto',
                },
                {
                    text: 'Ramo',
                    value: 'ramo',
                },
                {
                    text: 'Responsabilidad',
                    value: 'responsabilidad',
                },
                {
                    text: 'Tipo de contrataciónes',
                    value: 'tipo',
                },
                {
                    text: 'Ejercicio Fiscal',
                    value: 'ejercicio',
                },

            ],
            search: '',
            loading: true,
        }

    },
    created: function () {

        this.$axios.$post('https://pdncoah-6npsxhllvq-wl.a.run.app/Home/GetTabla?NombreTabla=Servidores&FechaIni=2021-01-01&FechaFin=2023-01-10')
            .then((result) => {

                this.servidores = result
                this.loading = false
            }).catch((err) => {

            });
    }

}
</script>

<style lang="scss" scoped>

        </style>
