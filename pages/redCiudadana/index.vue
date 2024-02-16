<template>
    <v-container>

        <v-row justify="center">
            <v-col cols="12">
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-h4 text-xl-h1 text-md-h3 ">{{ page.title }}</div>

                </v-alert>

                <v-img src="https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/sRDd8z9PspdESwXQfrq7%2Fc032mwMamBjZ8fjAPZUp%2F3.png?alt=media&token=1ee10911-3342-4ff7-9586-4869b3c258b0"></v-img>

                <v-card class="mt-10 pa-5" color="article">
                    <v-row class="mt-5" v-for="(e, index) in page.presentacion" :key="index">
                        <v-col align="center" justify="center">
                            <v-card-title align-self="center" class="justify-center">
                                <div class=" text-xl-h3 text-md-h4"> {{ e.titulo }}</div>
                            </v-card-title>

                        </v-col>
                        
                        <v-divider vertical></v-divider>
                        <v-col cols="12" md="9" sm="12" align-self="center">

                            <p align="center" class="text-justify">
                                {{ e.texto }}
                            </p>
                            <p align="center" class="text-h5">
                                {{ e.texto2 }}
                            </p>

                        </v-col>

                    </v-row>

                </v-card>


            </v-col>


            <v-col cols="12">
                <v-card color="cpc">

                    <v-card-title class=" justify-center">
                        <div class=" text-xl-h3 text-md-h4 mt-5">
                            <v-icon large>mdi-webhook</v-icon>Redes Ciudadanas
                        </div>
                    </v-card-title>
                    <v-divider></v-divider>

                    <v-card-text align="center">

                        <p class="text-h5">Cronograma 2022</p>
                        <p>Ya contamos con un primer programa de trabajo enfocado en la formación y formalización de la Red
                            de Participación Ciudadana. Abarca el segundo semestre de este año 2022 y pronto formaremos una
                            agenda anticorrupción que nos permita incidir con fuerza en la agenda pública.</p>
                        <v-btn elevation="3" color="" :href="require('@/static/cpc/' + cronograma)"> cronograma </v-btn>
                        <p class="text-h5 mt-5">Convocatoria</p>
                        <p>El impulso es mayor, únete al esfuerzo por un Coahuila más transparente y libre de corrupción</p>
                        <v-btn elevation="3" color="" :href="require('@/static/cpc/' + convocatoria)"> Convocatoria</v-btn>
                        <p class="text-h5 mt-5">Lineamientos</p>
                        <p>En fecha 22 de Abril de 2022 en sesión ordinaria y mediante el acuerdo 38/2021-2022 se aprobaron
                            por el CPC
                            los primeros lineamientos de la Red de participación ciudadana, basando su creación
                            principalmente en las Líneas
                            Estratégicas establecidas por el primer grupo de integrantes de la red.</p>

                        <p>Asimismo, se formó una Comisión de Normativa que se enfocará en hacer propuestas de adiciones,
                            actualizaciones y
                            modificaciones a los lineamientos en la medida en que la red avance en su proceso de formación
                        </p>
                        <v-btn elevation="3" color="" :href="require('@/static/cpc/' + lineamientos)"> Lineamientos</v-btn>


                    </v-card-text>

                    <v-card-text align="center" class="pa-6">

                        <p class="text-h5">Formulario de registro para Redes de Organizaciones de Sociedad Civil</p>

                        <p class="text-justify">La Red de Participación Ciudadana Anticorrupción (RPC) está integrada por
                            organismos, instituciones, colegios, grupos ciudadanos e individuos interesados en consolidar la
                            participación ciudadana en el combate a la corrupción mediante el uso de herramientas y
                            metodologías adecuadas. Su principal finalidad es la de transversalizar e implementar la
                            política estatal anticorrupción, enfocándose en mecanismos de capacitación, la escucha activa y
                            el impulso de iniciativas nacidas de la sociedad civil organizada en favor de la lucha
                            anticorrupción.

                        </p>
                        <p>Si te interesa colaborar con CPC activamente en los proyectos estratégicos y/o formar parte de la
                            RPC (Red de Participación Ciudadana) te invitamos a llenar este formato y en breve un consejero
                            se comunicará contigo.

                        </p>
                        <v-btn block elevation="3" :color="page.color" dark href="https://forms.gle/bSVMAxGydghpYWUx5">
                            Registrese Aquí </v-btn>
                    </v-card-text>
                    <v-divider class="ma-8"></v-divider>


                </v-card>
            </v-col>

            <v-col cols="12">
                <v-card color="cpc">

                    <v-card-title class="justify-center">
                        <div class=" text-xl-h3 text-md-h4 mt-5">
                            <v-icon large>mdi-webhook</v-icon>Integrantes
                        </div>
                    </v-card-title>
                    <v-divider></v-divider>

                    <v-card-text>

                        <p class="text-h5 justify-center" align="center">Integrantes de la Red de Participación Ciudadana
                        </p>

                        <v-timeline v-for="(i, index) in integrantesRed" :key="index">
                            <v-timeline-item small right color="pink">{{ i }}</v-timeline-item>

                        </v-timeline>

                       

                    </v-card-text>
                    <v-card-text align-self="center">

                    </v-card-text>

                </v-card>
            </v-col>
            <v-divider class="ma-8"></v-divider>
            <v-col cols="12" class="mt-5">

                <v-card-text align="center">
                    <p class="text-h4 mb-10">ANTEPROYECTO:</p>
                    <a :href="require('@/static/cpc/' + anteproyecto)">
                        <v-img max-width="1200" :src="require('@/static/img/plan.jpg')"></v-img>
                    </a>
                </v-card-text>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Red Ciudadana',
    data() {
        return {
            page: {
                color: 'pink',
                title: 'Red ciudadana',
                icon: 'mdi-webhook',

                presentacion: [{
                    titulo: 'Objetivo',
                    texto: 'De conformidad con la Ley del Sistema Anticorrupción de Coahuila, una de las principales atribuciones del CPC es la formación e impulso de la Red de Participación Ciudadana del Estado. En seguimiento a dicho mandato, en el mes abril de 2021, se presentó en el seno de dicho órgano colegiado un * ANTEPROYECTO encaminado a iniciar los esfuerzos de la formación de la Red.'
                },
                {
                    titulo: '',
                    texto: 'Con la intención de establecer claramente el “por qué”, “para qué” y “cómo” de la Red de Participación Ciudadana, durante los meses de mayo a agosto de 2021 se convocó a un conjunto de asociaciones, universidades, colegios y cámaras a realizar ejercicios participativos que permitieran formar en conjunto las primeras * LÍNEAS ESTRATÉGICAS de la Red.'
                },
                {
                    titulo: 'Misión',
                    texto: 'Ser un instrumento de participación que facilite involucrar a la ciudadanía en los asuntos de interés público, al impulsar proyectos que permitan reforzar las acciones de combate y prevención de la corrupción'
                },
                {
                    titulo: 'Visión',
                    texto: 'Ser una red ciudadana reconocida por su capacidad para incidir en las decisiones sobre asuntos públicos conservando su carácter ciudadano, apartidista y libre de intereses ajenos a su propósito'
                },
                {
                    titulo: '',
                    texto2: 'Esta es tu red: Ciudadana y Ciudadano Coahuilense, bienvenida, bienvenido.'
                },



                ]
            },
            anteproyecto: 'lineas-estrategicas.pdf',
            cronograma: 'cronograma-2022.pdf',
            convocatoria: 'convocatoria-2022.pdf',
            lineamientos: 'lineamientos.pdf',
            integrantesRed: [
                'ANADE LAGUNA',
                'AIDH',
                'Asociación Cívica de la Laguna',
                'CANACINTRA',
                'CANACO SALTILLO',
                'CANACO Monclova',
                'CANACO Francisco I.Madero',
                'Centro de Estudios Superiores en Gestión Pública',
                'CCI LAGUNA',
                'Colegio de Contadores Públicos de Saltillo',
                'COPARMEX COMISIÓN DE DEMOCRACIA',
                'COPARMEX MUJERES',
                'Fundación Merced',
                'INCIDE FEMME',
                'Instituto Mexicano de Ejecutivos de Finanzas',
                'JÓVENES LÍDERES DE LA LAGUNA',
                'KAENA MUJERES CON VALOR',
                'KYBERNUS COAHUILA',
                'Nuevas Opciones de Vida A.C.',
                'UANE',
                'Universidad Carolina',
                'Universidad Iberoamericana',
                'UVM',
                
            ]

        }

    }
}
</script>

<style lang="scss" scoped></style>
