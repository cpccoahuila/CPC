

<template>
    <v-container class="min-height-vh">

        <v-row>
            <v-col>
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-xl-h1 text-md-h3 ">{{ page.title }}</div>

                </v-alert>

                <v-card class="mt-3 pa-10" color="article">
                    <v-col aling="center" justify="center">
                            <h1>Proceso de Selección de la Terna para Candidatas a Titular de la Secretaría Técnica 2022</h1>

                        <h3>Documentación</h3>

                        <v-list-item>
                            <a :href="require('@/static/cpc/' + metodologia)">
                                <p>Metodología 2022</p>
                            </a>
                        </v-list-item>
                        <v-list-item>
                            <a :href="require('@/static/cpc/' + convocatoria)">
                                <p>Convocatoria 2022</p>
                            </a>
                        </v-list-item>

                        <h3>Formatos descargables</h3>

                        <v-list-item>
                            <a :href="require('@/static/cpc/' + acreditacion)">
                                <p>Formato para acreditar experiencia</p>
                            </a>
                        </v-list-item>
                        <v-list-item>
                            <a :href="require('@/static/cpc/' + declaracion)">
                                <p>Declaración de Intereses para Funcionarios y Personas de Interés Público</p>
                            </a>
                        </v-list-item>
                        <h3>Candidatas que acreditaron la fase de valoración documental dentro del proceso de selección de
                            la titular de la Secretaría Técnica</h3>
                        <v-list dense color='article'>
                            <v-list-item>
                                <p>1. Larissa Estefanía Esparza Fuentes</p>

                            </v-list-item>
                            <v-list-item>
                                <p>2. Elidé Alejandrina Acosta Reyes</p>
                            </v-list-item>
                            <v-list-item>
                                <p>3. Amparo Ruiz Montes</p>
                            </v-list-item>
                        </v-list>
                        <p align="justify">De acuerdo con la Convocatoria y la Metodología para la selección de la terna de
                            las candidatas para ocupar el cargo de Secretaria Técnica del Sistema Anticorrupción del Estado
                            de Coahuila nos permitimos hacer de su conocimiento que las aspirantes seleccionadas a
                            entrevista son las que se mencionan a continuación, quienes deberán presentarse el 1 de
                            diciembre de este año, en las instalaciones de la Secretaría Ejecutiva del Sistema
                            Anticorrupción del Estado de Coahuila de Zaragoza, ubicadas en Blvd. Luis Donaldo Colosio, No.
                            703, piso 3, Fraccionamiento Valle Real, C.P. 25015 Saltillo, Coahuila, en la hora que se
                            señala:</p>

                        <br>
                        <center>
                            <img src="@/static/cpc/calificaciones.png">
                        </center>

                        <br>

                        <v-list dense color='article'>
                            <v-list-item>
                                <p>JPV. Jafia Pacheco Valtierra</p>

                            </v-list-item>
                            <v-list-item>
                                <p>MFCA. Miguel Francisco Crespo Alvarado</p>
                            </v-list-item>
                            <v-list-item>
                                <p>YGMM. Yolanda Guadalupe Montes Martínez</p>
                            </v-list-item>
                            <v-list-item>
                                <p>JCGE. Juan Carlos Guzmán Escobedo</p>
                            </v-list-item>
                            <v-list-item>
                                <p>KSF. Karla Samperio Flores”</p>
                            </v-list-item>
                        </v-list>



                    </v-col>

                    <v-col aling="center" justify="center">


                    </v-col>

                </v-card>




            </v-col>
        </v-row>
    </v-container>
</template>
    
<script>
export default {
    name: 'Convocatorias',
    data() {
        return {
            page: {
                color: 'blue-grey',
                title: 'Convocatorias',
                icon: 'mdi-comma-circle-outline'
            },
            metodologia: 'comision-proyecto-metodologia.pdf',
            convocatoria: 'convocatoria-2022.pdf',
            acreditacion: 'formato-para-acreditacion-experiencia.docx',
            declaracion: 'declaracion-de-intereses-funcionarios-y-personas-de-interes-publico.xlsx'


        }

    },
    mounted() {

    },
}
</script>
    
<style lang="scss" scoped>.min-height-vh {
    min-height: 70vh;
}</style>
    