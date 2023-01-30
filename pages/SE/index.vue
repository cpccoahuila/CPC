<template>
<v-container>

    <v-row>
        <v-col>
            <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2" :icon="page.icon" prominent>

                <div align="center" class="mb-5 text-xl-h1 text-md-h3 ">{{page.title}}</div>

            </v-alert>

            <v-card class="mt-10 pa-5" color="article">
                <v-row class="mt-5" v-for=" e in page.presentacion">
                    <v-col aling="center" justify="center">
                        <v-card-title class="justify-center">
                            <div class=" text-xl-h3 text-md-h4"> {{e.titulo}}</div>
                        </v-card-title>

                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col cols="12" md="9" sm="12">

                        <p align="center" class="text-justify">
                            {{ e.texto }}
                        </p>

                    </v-col>

                </v-row>

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
                color: 'pink',
                title: 'Secretaría Ejecutiva',
                icon: 'mdi-cogs',
                presentacion: [{
                        titulo: 'Funciones',
                        texto: 'La Secretaría Ejecutiva tiene por objeto fungir como órgano de apoyo técnico del Comité Coordinador del Sistema Estatal, a efecto de proveerle la asistencia técnica, así como los insumos necesarios para el desempeño de sus atribuciones.'
                    },
                    {
                        titulo: 'Misión',
                        texto: 'Somos un organismo descentralizado de apoyo técnico al Comité Coordinador del Sistema Anticorrupción de Coahuila, que provee insumos necesarios para el diseño, ejecución y evaluación de políticas públicas en materia de prevención, reducción y combate a la corrupción, faltas administrativas y control de recursos públicos, a fin de dar respuestas efectivas a las exigencias de la sociedad coahuilense.'
                    },
                    {
                        titulo: 'Visión',
                        texto: 'Seremos un organismo ejemplo a nivel nacional en el diseño, implementación y evaluación de políticas públicas para la prevención, combate, reducción y erradicación de la corrupción, faltas administrativas y control de recursos públicos, generando un alto grado de confianza ciudadana, con un trabajo imparcial, profesional y efectivo.'
                    }

                ]

            }
        }

    }
}
</script>

    
<style lang="scss" scoped>

    </style>
