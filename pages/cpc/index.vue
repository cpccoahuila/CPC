<template>
    <v-container>

        <v-row justify="center">
            <v-col cols="12">
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-xl-h1 text-md-h3 ">{{ page.title }}</div>

                </v-alert>
                <v-divider></v-divider>
                <v-card class="mt-10 pa-8" color="article">

                    <v-row align="center" justify="center" v-for="(e, index) in page.presentacion" :key="index">
                        <v-col align="center" cols="12" justify="center">
                            <v-card-title align-self="center" class="justify-center">
                                <div class=" text-xl-h4 text-md-h3"> {{ e.titulo }}</div>
                            </v-card-title>

                        </v-col>

                        <v-col cols="12" md="8" align="center" justify="center" align-self="center">

                            <p align="center" class="text-justify">
                                {{ e.texto }}
                            </p>
                            <v-divider></v-divider>
                        </v-col>

                    </v-row>

                </v-card>

                <v-card class="mt-10 pa-3">
                    <v-card-title class="justify-center">
                        <div class=" text-xl-h2 text-md-h4"> Miembros que integran el CPC </div>
                    </v-card-title>
                    <v-row>
                        <v-col cols="12" md="4" sm="12" v-for="(i, index) in integrantes" :key="index">
                            <v-card shaped class="mx-auto mt-8 pa-3" color="cc" min-height="300" light>
                                <v-col>
                                    <v-row align="center" class="fill-height">
                                        <v-col align-self="start" class="pa-0" cols="6">
                                            <v-avatar class="profile" size="164">
                                                <v-img :src="require('@/static/img/cpc/' + i.foto)"></v-img>

                                            </v-avatar>

                                        </v-col>
                                        <v-col align-self="start" class="pa-1" cols="6">

                                            <v-img max-width="60%" :src="require('@/static/img/' + i.img)"></v-img>

                                        </v-col>

                                        <v-col class="py-0">
                                            <v-list-item>
                                                <v-list-item-content>
                                                    <v-list-item-title class="text-h6">
                                                        {{ i.nombre }}
                                                    </v-list-item-title>
                                                    <v-list-item-text>{{ i.cargo }}</v-list-item-text>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-col>

                                    </v-row>

                                </v-col>
                                <div class="text-center">
                                    <v-dialog v-model="i.dialog" max-width="450">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn :color="page.color" fab small dark absolute top right v-on="on">
                                                <v-icon>mdi-plus</v-icon>
                                            </v-btn>
                                        </template>

                                        <v-card>
                                            <div>
                                                <v-card-title class="bluegreyt">
                                                    Contacto
                                                </v-card-title>

                                                <v-card-text>
                                                    <v-list>
                                                        <v-list-item dense>
                                                            {{ i.mail }}
                                                        </v-list-item>
                                                    </v-list>

                                                </v-card-text>
                                            </div>

                                            <v-divider></v-divider>

                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn color="primary" text @click="i.dialog = false">
                                                    Cerrar
                                                </v-btn>
                                            </v-card-actions>

                                        </v-card>

                                    </v-dialog>
                                </div>

                            </v-card>

                        </v-col>

                    </v-row>

                </v-card>
            </v-col>
            <v-col>
                <v-card class="mt-10 pa-8" color="article">

                    <v-row align="center" justify="center" v-for="(e, index) in Valores" :key="index">
                        <v-col align="center" cols="12" md="3" justify="center">
                            <v-card-title align-self="center" class="justify-center">
                                <div class=" text-xl-h5 text-md-h6"> {{ e.valor }}</div>
                            </v-card-title>

                        </v-col>
                        <v-divider vertical></v-divider>
                        <v-col cols="12" md="8" align-self="center">

                            <p align-self="center" class="text-justify">
                                {{ e.texto }}
                            </p>
                    
                        </v-col>

                    </v-row>

                </v-card>
            </v-col>


            <v-col cols="12">

                <v-card class="mt-10 pa-4" color="article">
                    <v-row justify="center" align="center">
                        <v-col align="center" justify="center" cols="12">

                            <v-card-title class="justify-center">
                                <div class=" text-xl-h3 text-md-h4"> Planes</div>
                            </v-card-title>
                            <v-card-actions class="justify-center">
                                <v-btn v-for=" (e, i) in planes" :key="i" :href="require('@/static/planes/' + e.src)">{{ e.year
                                }}</v-btn>

                            </v-card-actions>

                        </v-col>

                        <v-col aling="center" justify="center" cols="12">

                            <v-card-title class="justify-center">
                                <div class=" text-xl-h3 text-md-h4"> Informes</div>
                            </v-card-title>

                            <v-card-actions class="justify-center">

                                <v-row justify="center">
                                    <v-btn class="ma-2" v-for="(e, i) in informes" :key="i"
                                        :href="require('@/static/informes/' + e.src)" label color="" max-width="100%">{{ e.year
                                        }}</v-btn>
                                </v-row>
                            </v-card-actions>

                        </v-col>
                    </v-row>

                </v-card>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'CPC',
    data() {
        return {
            page: {
                color: 'purple',
                title: 'Quiénes Somos',
                icon: 'mdi-account-supervisor-circle-outline',
                presentacion: [{
                    titulo: 'Misión',
                    texto: 'Coordinar la participación de la ciudadanía, la academia y el sector privado e impulsar políticas públicas y acciones encaminadas a combatir la corrupción en concordancia con el sistema anticorrupción del estado de Coahuila.'
                },
                {
                    titulo: 'Visión',
                    texto: 'Ser la instancia que refleje la perspectiva ciudadana con respecto al combate a la corrupción garantizando su incidencia en la agenda pública y contribuyendo en la consolidación del sistema anticorrupción del estado de Coahuila.'
                },


                ]
            },

            // Termina page

            informes: [{
                year: '2021-2022',
                src: 'cpc-coahuila-informe-resultados-2021-2022.pdf'
            },
            {
                year: '2020-2021',
                src: 'cpc-coahuila-informe-resultados-2020-2021.pdf'
            },
            {
                year: '2019-2020',
                src: 'cpc-coahuila-informe-resultados-2019-2020.pdf'
            },
            {
                year: '2018-2019',
                src: 'cpc-coahuila-informe-resultados-2018-2019.pdf'
            },

            ],
            planes: [{
                year: 'Plan de Comunicación',
                src: 'plan-de-comunicacion-cpc.pdf'
            },
            {
                year: '2023',
                src: 'programa-anual-cpc-23.pdf'
            },
            {
                year: '2022',
                src: 'programa-anual-cpc-22.pdf'
            },
            {
                year: '2020',
                src: 'plan-de-trabajo-cpc-2020.pdf'
            },
            {
                year: '2019',
                src: 'plan-de-trabajo-cpc-2019.pdf'
            },
            {
                year: '2018',
                src: 'plan-de-trabajo-cpc-2018.pdf'
            },

            ],
            integrantes: [//{
                //nombre: 'Jafia Pacheco Valtierra',
               // cargo: 'Consejera Presidenta del Consejo de Participación Ciudadana.',
               // foto: 'cpc-jpv.jpg',
                //img: 'cc-cpc.png',
                //mail: 'jafia.pacheco@cpccoahuila.org.mx'
           // },
            {
                nombre: 'Miguel Francisco Crespo Alvarado',
                cargo: 'Consejero Presidente del Consejo de Participación Ciudadana.',
                foto: 'cpc-mfca.jpg',
                img: 'cc-cpc.png',
                mail: 'miguel.crespo@cpccoahuila.org.mx'
            },
            {
                nombre: 'Yolanda Guadalupe Montes Martínez',
                cargo: 'Consejera del Consejo de Participación Ciudadana.',
                foto: 'cpc-ygmm.jpg',
                img: 'cc-cpc.png',
                mail: 'yolanda.montes@cpccoahuila.org.mx'
            },
            {
                nombre: 'Juan Carlos Guzmán Escobedo',
                cargo: 'Consejero del Consejo de Participación Ciudadana.',
                foto: 'cpc-jcge.jpg',
                img: 'cc-cpc.png',
                mail: 'carlos.guzman@cpccoahuila.org.mx'
            },
            {
                nombre: 'Karla Samperio Flores',
                cargo: 'Consejera  del Consejo de Participación Ciudadana.',
                foto: 'cpc-ksf.png',
                img: 'cc-cpc.png',
                mail: 'karla.samperio@cpccoahuila.org.mx'
            },

            ],
            Valores: [
                {
                    valor: 'Honestidad:',
                    texto: ' Implica actuar con rectitud y decoro en el desempeño de las facultades que la Ley otorga a quienes integran el CPC, correspondiendo con creces a la confianza otorgada.',
                },
                {
                    valor: 'Congruencia:',
                    texto: ' Conlleva la necesaria alineación de los actos individuales con las aspiraciones del CPC y del Sistema Anticorrupción.',
                },
                {
                    valor: 'Dedicación:',
                    texto: ' Refiere a la firme decisión de poner al servicio del CPC y del Sistema Anticorrupción, las competencias, conocimientos y habilidades de que dispone cada integrante y dedicando su tiempo efectivo a la implementación de acciones destinadas a prevenir actos de corrupción.',
                },
                {
                    valor: 'Compromiso:',
                    texto: ' Señala la férrea voluntad para no escatimar esfuerzos en el cumplimiento de las facultades y atribuciones que por Ley tienen quienes integran el CPC acorde a su conformación como grupo multidisciplinario.',
                },
                {
                    valor: 'Empatía:',
                    texto: ' Indica el esfuerzo indispensable que tienen que realizar quienes integran el CPC para comprender las distintas perspectivas ciudadanas con relación al fenómeno de la corrupción, sus causas, efectos y costos.',
                },
                {
                    valor: 'Responsabilidad:',
                    texto: ' Supone la madurez para reconocer las consecuencias de cada decisión tomada y cada acción realizada, así como también de las omisiones por parte de cada integrante del CPC.',
                },
                {
                    valor: 'Solidaridad:',
                    texto: ' Implica la disposición para colaborar de manera decidida con la labor del resto de los integrantes del CPC, de las entidades que conforman el Sistema Anticorrupción y de la sociedad en su conjunto.',
                },
                {
                    valor: 'Integridad:',
                    texto: ' Apunta a la necesidad de empatar la acción, individual y colectiva, con el discurso, con el fin de elevar la efectividad y la incidencia del CPC y del Sistema Anticorrupción al que pertenecen.',
                },
                {
                    valor: 'Inclusión:',
                    texto: ' Escuchamos todas las voces y respetamos las fortalezas y formas de pensamiento de los distintos grupos sociales y empresariales, así como la diversidad social, cultural y de género.',
                },
                {
                    valor: 'Independencia:',
                    texto: ' Implica la decidida voluntad para no dejarse influir por intereses ajenos a los propósitos del CPC y del Sistema Anticorrupción.',
                },

            ],

        }

    }
}
</script>

<style lang="scss" scoped></style>
