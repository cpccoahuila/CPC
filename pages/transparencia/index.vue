<template>
<v-container>

    <v-row>
        <v-col>
            <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2" :icon="page.icon" prominent>

                <div align="center" class="mb-5 text-xl-h1 text-md-h3 ">{{page.title}}</div>

            </v-alert>

<!--  Inicio de ART 18 y Art 20 -->


            <v-card class="mt-3 pa-4" color="article">
                <v-row justify="center" align="center">
                    <v-col align="center" justify="center" cols="12">

                        <v-card-title class="justify-center">
                            <div class=" text-xl-h2 text-md-h4"> Art. 18</div>
                        </v-card-title>
                        <v-card-actions class="justify-center">
                            <v-chip-group column>
                                <v-chip label outlined color="info" max-width="100%" href="https://www.plataformadetransparencia.org.mx/">Plataforma Nacional de Transparencia</v-chip>
                                <v-chip label outlined color="info" max-width="100%" href="http://189.254.130.35/infocoahuila/">InfoCoahuila</v-chip>
                                <v-chip label outlined color="info" max-width="100%" href="https://goo.gl/forms/v9fUknvCjxNUqNzA2">Quejas y sugerencias</v-chip>
                            </v-chip-group>

                        </v-card-actions>

                    </v-col>
                    <v-col cols="12" md="6" sm="12">

                        <h4 align="center">NOTA:</h4>
                        <p align="center" class="text-justify">Puede usar el Formulario de quejas y sugerencias, enviar un mensaje vía correo electrónico a quejas.y.sugerencias@seacoahuila.org.mx, o llamar al teléfono (844) 688 2178 L-J 8:30 a 15:00 horas, V 8:30 a 14:30 horas.</p>

                    </v-col>

                    <v-col aling="center" justify="center" cols="12">

                        <v-card-title class="justify-center">
                            <div class=" text-xl-h2 text-md-h4"> Art. 20</div>
                        </v-card-title>
                        <v-card-actions class="justify-center" align="center">Calendario de información pública de oficio

                        </v-card-actions>
                        <v-card-actions class="justify-center">
                            <v-chip-group column>
                                <v-chip v-for=" e in art20" label outlined color="info" max-width="100%" :href="require('@/pages/transparencia/art20/' + e.src)" download>{{ e.año }}</v-chip>
                            </v-chip-group>
                        </v-card-actions>

                    </v-col>
                </v-row>

            </v-card>


<!--  Inicio de ART 21 -->


            <v-card class="mt-3 pa-4">
                <v-row justify='center'>
                    <v-col aling="center" justify="center" cols="10">
                        <v-card-title class="justify-center" align="center">
                            <div class=" text-xl-h2 text-md-h4 mt-8">Art. 21 Información Pública de Oficio</div>
                        </v-card-title>
                        <v-card-text class="pa-3 text-md-h6" align="center"> De la "Ley de Acceso a la Información Pública para el Estado de
                            Coahuila de Zaragoza" Art. 21 y "Ley General de Transparencia y Acceso
                            a la Información pública" (Art. 70).</v-card-text>
                    </v-col>
                    <v-col cols="10">
                        <v-row>
                            <v-col cols="12" md="4" v-for="(fraccion, i) in fracciones" :key="i">
                                <v-list color="bluegreyt">

                                    <v-list-item class="justify-center" align="center" :to="'transparencia/art21fracc'+fraccion.to" router exact>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-btn icon class="text-h4">{{i +1}}</v-btn>
                                            </v-col>
                                            <v-col cols="12"> {{ fraccion.titulo  }}</v-col>
                                        </v-row>

                                    </v-list-item>

                                </v-list>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card>

            <v-card class="mt-8" color="article">
                <v-row justify="center" align="center">
                    <v-col align="center" justify="center" cols="12">

                        <v-card-title class="justify-center">
                            <div class=" text-xl-h2 text-md-h4"> Art. 22 </div>
                        </v-card-title>

                        <v-row justify="center" align="center">
                            <v-col cols="12" md="4">
                                <v-list color="bluegreyt">

                                    <v-list-item class="justify-center" align="center" to="#" router exact>
                                        <v-row align="center" justify="center">

                                            <v-col cols="12" align="center" justify="center"> Gastos de publicidad</v-col>
                                        </v-row>

                                    </v-list-item>

                                </v-list>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col align="center" justify="center" cols="12">
                        <v-divider></v-divider>
                        <v-card-title class="justify-center">
                            <div class=" text-xl-h2 text-md-h4"> Art. 25</div>
                        </v-card-title>

                        <v-row justify="center" align="center">
                            <v-col cols="12" md="6">
                                <v-list color="bluegreyt" three-line>

                                    <v-list-item class="justify-center" align="center" to="#" router exact>
                                        <v-row align="center" justify="center">

                                            <v-col align="center" justify="center"> Los reglamentos de las leyes expedidos en ejercicio de sus atribuciones.</v-col>
                                        </v-row>

                                    </v-list-item>
                                    <v-list-item class="justify-center" align="center" to="#" router exact>
                                        <v-row align="center" justify="center">

                                            <v-col align="center" justify="center">Las iniciativas de leyes o decretos y demás disposiciones generales o particulares en materia administrativa.</v-col>
                                        </v-row>

                                    </v-list-item>
                                    <v-list-item class="justify-center" align="center" to="#" router exact>
                                        <v-row align="center" justify="center">
                                            <v-col align="center" justify="center"> Los convenios de coordinación con la Federación, Estados y Municipios y de concertación con los sectores social y privado, señalando el objeto, las partes y tiempo de duración.</v-col>

                                        </v-row>

                                    </v-list-item>

                                </v-list>
                            </v-col>
                        </v-row>
                    </v-col>

                </v-row>

            </v-card>

        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'Transparencia',
    data() {
        return {
            page: {
                color: 'info',
                title: 'Transparencia',
                icon: 'mdi-magnify'
            },

            art20: [{
                    año: '2023',
                    src: 'calendario-ipo-sea-coahuila-2022.pdf',

                },
                {
                    año: '2022',
                    src: 'calendario-ipo-sea-coahuila-2022.pdf',
                },
                {
                    año: '2021',
                    src: 'calendario-ipo-sea-coahuila-2021.pdf',
                },
                {
                    año: '2020',
                    src: 'calendario-ipo-sea-coahuila-2020.pdf',
                },
                {
                    año: '2019',
                    src: 'calendario-ipo-sea-coahuila-2019.pdf',
                },
                {
                    año: '2018',
                    src: 'calendario-ipo-sea-coahuila-2018.pdf',
                },
            ],

            fracciones: [{
                    titulo: 'Estructura Orgánica',
                    to: '1',
                },
                {
                    titulo: 'Marco normativo',
                    to: '/',
                },
                {
                    titulo: 'Directorio de los servidores públicos',
                    to: '/',
                },
                {
                    titulo: 'Nombramientos, comisiones y licencias',
                    to: '/',
                },
                {
                    titulo: 'Remuneración mensual',
                    to: '/',
                },
                {
                    titulo: 'Declaración Patrimonial',
                    to: '/',
                },
                {
                    titulo: 'Viáticos y gastos de representación',
                    to: '/',
                },
                {
                    titulo: 'Perfil de puestos y currículum',
                    to: '/',
                },
                {
                    titulo: 'Convenios de colaboración',
                    to: '/',
                },
                {
                    titulo: 'Condiciones generales de trabajo',
                    to: '/',
                },
                {
                    titulo: 'Planes, programas o proyectos',
                    to: '/',
                },
                {
                    titulo: 'Servicios y trámites',
                    to: '/',
                },
                {
                    titulo: 'Mecanismos de solicitudes, opiniones, quejas',
                    to: '/',
                },
                {
                    titulo: 'Mecanismos de participación ciudadana',
                    to: '/',
                },
                {
                    titulo: 'Estímulos, apoyos y requisitos',
                    to: '/',
                },
                {
                    titulo: 'Beneficiarios de subsidios, estímulos y apoyos',
                    to: '/',
                },
                {
                    titulo: 'Beneficiarios de programas sociales',
                    to: '/',
                },
                {
                    titulo: 'Personas que utilizan recursos públicos',
                    to: '/',
                },
                {
                    titulo: 'Instituciones de beneficencia',
                    to: '/',
                },
                {
                    titulo: 'Presupuesto asignado',
                    to: '/',
                },
                {
                    titulo: 'Calendario de reuniones públicas',
                    to: '/',
                },
                {
                    titulo: 'Unidad de transparencia y comité de transparencia',
                    to: '/',
                },
                {
                    titulo: 'Catálogos documentales de archivos',
                    to: '/',
                },
                {
                    titulo: 'Solicitudes y respuestas',
                    to: '/',
                },
                {
                    titulo: 'Informes financieros y cuenta pública',
                    to: '/',
                },
                {
                    titulo: 'Deuda pública',
                    to: '/',
                },
                {
                    titulo: 'Auditorías',
                    to: '/',
                },
                {
                    titulo: 'Proveedores y contratistas',
                    to: '/',
                },
                {
                    titulo: 'Inspectores o visitadores',
                    to: '/',
                },
                {
                    titulo: 'Procedimientos de adjudicación directa, invitación restringida y licitación',
                    to: '/',
                },
                {
                    titulo: 'Agenda de eventos culturales o deportivos',
                    to: '/',
                },
                {
                    titulo: 'Actas de entrega-recepción',
                    to: '/',
                },
                {
                    titulo: 'Georreferenciación de obras públicas',
                    to: '/',
                },
                {
                    titulo: 'Expedientes reservados',
                    to: '/',
                },
                {
                    titulo: 'Guía de archivos',
                    to: '/',
                },
                {
                    titulo: 'Concesiones, permisos y autorizaciones',
                    to: '/',
                },
                {
                    titulo: 'Concesiones de transporte público',
                    to: '/',
                },
                {
                    titulo: 'Entrega de recursos públicos',
                    to: '/',
                },
                {
                    titulo: 'Sistemas pensionarios',
                    to: '/',
                },
                {
                    titulo: 'Informe de actividades',
                    to: '/',
                },
                {
                    titulo: 'Ingresos',
                    to: '/',
                },
                {
                    titulo: 'Información desclasificada',
                    to: '/',
                },
                {
                    titulo: 'Preguntas frecuentes',
                    to: '/',
                },
                {
                    titulo: 'Catálogo de información adicional',
                    to: '/',
                },
                {
                    titulo: 'Acciones realizadas por contingencias',
                    to: '/',
                },
                {
                    titulo: 'Aportaciones nacionales o internacionales, para emergencia o desastre',
                    to: '/',
                },
                {
                    titulo: 'Servidores públicos con sanciones definitivas',
                    to: '/',
                },
                {
                    titulo: 'Información catastral',
                    to: '/',
                },
                {
                    titulo: 'Listado del parque vehicular',
                    to: '/',
                },
                {
                    titulo: 'Proceso catastral de valuación',
                    to: '/',
                },
                {
                    titulo: 'Mecanismos y resultados de evaluación',
                    to: '/',
                },
                {
                    titulo: 'Otra información',
                    to: '/',
                }
            ],
        }

    }
}
</script>

<style lang="scss" scoped>

</style>
