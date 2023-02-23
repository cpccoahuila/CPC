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
                                <v-chip label outlined color="info" max-width="100%" href="https://goo.gl/forms/v9fUknvCjxNUqNzA2">Quejas y sugerencias</v-chip>
                            </v-chip-group>

                        </v-card-actions>

                    </v-col>
                    <v-col cols="12" md="6" sm="12">

                        <!-- <h4 align="center">NOTA:</h4>
                        <p align="center" class="text-justify">Puede usar el Formulario de quejas y sugerencias, enviar un mensaje vía correo electrónico a quejas.y.sugerencias@seacoahuila.org.mx, o llamar al teléfono (844) 688 2178 L-J 8:30 a 15:00 horas, V 8:30 a 14:30 horas.</p> -->

                    </v-col>

                    <v-col aling="center" justify="center" cols="12">

                        <v-card-title class="justify-center">
                            <div class=" text-xl-h2 text-md-h4"> Art. 20</div>
                        </v-card-title>
                        <v-card-actions class="justify-center" align="center">Calendario de información pública de oficio

                        </v-card-actions>
                        <v-card-actions class="justify-center">
                            <v-chip-group column>
                                <v-chip v-for="(e,i) in art20" :key="i" label outlined color="info" max-width="100%" :href="require('@/pages/transparencia/art20/' + e.src)" download>{{ e.año }}</v-chip>
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
                            <div class=" text-xl-h2 text-md-h4 mt-8 ">Art. 21 Información Pública de Oficio</div>
                        </v-card-title>
                        <v-card-text class="pa-3 text-md-h6" align="center"> De la "Ley de Acceso a la Información Pública para el Estado de
                            Coahuila de Zaragoza" Art. 21 y "Ley General de Transparencia y Acceso
                            a la Información pública" (Art. 70).</v-card-text>

                        <v-divider></v-divider>
                    </v-col>
                    <v-col cols="10" class="mt-8">
                        <v-row>
                            <v-col cols="12" md="4" v-for="(fraccion, i) in fracciones" :key="i">
                                <v-list color="bluegreyt">

                                    <v-list-item class="justify-center" align="center" :to="'transparencia/art21fracc'+fraccion.to" router exact>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-btn icon class="text-h4">{{i +1}}</v-btn>
                                                <v-icon large>{{fraccion.icon}}</v-icon>
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
                    <v-col align="center" justify="center" cols="4">

                        <v-card-title class="justify-center">
                            <div class=" text-xl-h2 text-md-h4"> Art. 22 </div>
                        </v-card-title>
                        </v-col><v-divider vertical></v-divider><v-col>
                        <v-row >
                            <v-col cols="12" md="4">
                                <v-list color="bluegreyt">

                                    <v-list-item  to="#" router exact>
                                        <v-row >

                                           <v-icon large>mdi-cash</v-icon> <v-col> Gastos de publicidad</v-col>
                                        </v-row>

                                    </v-list-item>

                                </v-list>
                            </v-col>
                        </v-row>
                    </v-col>
                        
                    </v-row>
              
                    
                    <v-row justify="center" align="center">
                    <v-col align="center" justify="center" cols="4">
                       
                        <v-card-title class="justify-center">
                            <div class=" text-xl-h2 text-md-h4"> Art. 25</div>
                        </v-card-title>
                    </v-col> <v-divider vertical></v-divider><v-col>
                        <v-row align="center">
                            <v-col cols="12" md="">
                                <v-list color="bluegreyt" two-line>

                                    <v-list-item  to="#" router exact>
                                        <v-row>

                                           <v-icon large >mdi-border-color</v-icon> <v-col > Los reglamentos de las leyes expedidos en ejercicio de sus atribuciones.</v-col>
                                        </v-row>

                                    </v-list-item>
                                    <v-list-item  to="#" router exact>
                                        <v-row >

                                            <v-icon large > mdi-file-link-outline</v-icon><v-col >Las iniciativas de leyes o decretos y demás disposiciones generales o particulares en materia administrativa.</v-col>
                                        </v-row>

                                    </v-list-item>
                                    <v-list-item to="#" router exact>
                                        <v-row >
                                           <v-icon large >mdi-cog-counterclockwise</v-icon> <v-col > Los convenios de coordinación con la Federación, Estados y Municipios y de concertación con los sectores social y privado, señalando el objeto, las partes y tiempo de duración.</v-col>

                                        </v-row>

                                    </v-list-item>

                                </v-list>
                            </v-col>
                        </v-row>
                    </v-col>
                    </v-row><v-row>
                    <v-col align="center" justify="center" cols="4">

                        <v-card-title class="justify-center">
                            <div class=" text-xl-h2 text-md-h4"> Art. 70 </div>
                        </v-card-title>
                        </v-col> <v-divider vertical></v-divider><v-col>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-list color="bluegreyt">

                                    <v-list-item  to="#" router exact>
                                        <v-row >

                                            <v-icon large >mdi-table-cog</v-icon> <v-col > Tabla de aplicabilidad</v-col>

                                        </v-row>

                                    </v-list-item>

                                    <v-list-item  to="#" router exact>
                                        <v-row >

                                            <v-icon large >mdi-table-cog</v-icon> <v-col > Tabla de Acttualización y Conservación</v-col>
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
                    src: 'calendario-ipo-sea-coahuila-2023.pdf',

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
                    icon: 'mdi-sitemap'
                },
                {
                    titulo: 'Marco normativo',
                    to: '/',
                    icon: 'mdi-scale-balance'
                },
                {
                    titulo: 'Directorio de los servidores públicos',
                    to: '/',
                    icon: 'mdi-card-account-details-outline'
                },
                {
                    titulo: 'Nombramientos, comisiones y licencias',
                    to: '/',
                    icon: 'mdi-folder-account-outline'
                },
                {
                    titulo: 'Remuneración mensual',
                    to: '/',
                    icon: 'mdi-account-credit-card'
                },
                {
                    titulo: 'Declaración Patrimonial',
                    to: '/',
                    icon: ' mdi-account-search'
                },
                {
                    titulo: 'Viáticos y gastos de representación',
                    to: '/',
                    icon: 'mdi-plane-car'
                },
                {
                    titulo: 'Perfil de puestos y currículum',
                    to: '/',
                    icon: 'mdi-badge-account-outline'
                },
                {
                    titulo: 'Convenios de colaboración',
                    to: '/',
                    icon: ' mdi-file-sign'
                },
                {
                    titulo: 'Condiciones generales de trabajo',
                    to: '/',
                    icon: 'mdi-briefcase-outline'
                },
                {
                    titulo: 'Planes, programas o proyectos',
                    to: '/',
                    icon: 'mdi-chart-donut-variant'
                },
                {
                    titulo: 'Servicios y trámites',
                    to: '/',
                    icon: 'mdi-face-agent'
                },
                {
                    titulo: 'Mecanismos de solicitudes, opiniones, quejas',
                    to: '/',
                    icon: 'mdi-account-tie-voice-outline'
                },
                {
                    titulo: 'Mecanismos de participación ciudadana',
                    to: '/',
                    icon: 'mdi-account-group-outline'
                },
                {
                    titulo: 'Estímulos, apoyos y requisitos',
                    to: '/',
                    icon: 'mdi-smoke-detector-outline'
                },
                {
                    titulo: 'Beneficiarios de subsidios, estímulos y apoyos',
                    to: '/',
                    icon: 'mdi-smoke-detector-outline'
                },
                {
                    titulo: 'Beneficiarios de programas sociales',
                    to: '/',
                    icon: 'mdi-home-group'
                },
                {
                    titulo: 'Personas que utilizan recursos públicos',
                    to: '/',
                    icon: 'mdi-account-cash'
                },
                {
                    titulo: 'Instituciones de beneficencia',
                    to: '/',
                    icon: 'mdi-bank-outline'
                },
                {
                    titulo: 'Presupuesto asignado',
                    to: '/',
                    icon: 'mdi-cash-check'
                },
                {
                    titulo: 'Calendario de reuniones públicas',
                    to: '/',
                    icon: 'mdi-laptop-account'
                },
                {
                    titulo: 'Unidad de transparencia y comité de transparencia',
                    to: '/',
                    icon: 'mdi-card-search-outline'
                },
                {
                    titulo: 'Catálogos documentales de archivos',
                    to: '/',
                    icon: 'mdi-archive'
                },
                {
                    titulo: 'Solicitudes y respuestas',
                    to: '/',
                    icon: 'mdi-folder-information-outline'
                },
                {
                    titulo: 'Informes financieros y cuenta pública',
                    to: '/',
                    icon: 'mdi-finance'
                },
                {
                    titulo: 'Deuda pública',
                    to: '/',
                    icon: 'mdi-chart-sankey'
                },
                {
                    titulo: 'Auditorías',
                    to: '/',
                    icon: 'mdi-folder-eye-outline'
                },
                {
                    titulo: 'Proveedores y contratistas',
                    to: '/',
                    icon: 'mdi-account-tie-woman'
                },
                {
                    titulo: 'Inspectores o visitadores',
                    to: '/',
                    icon: 'mdi-account-tie-outline'
                },
                {
                    titulo: 'Procedimientos de adjudicación directa, invitación restringida y licitación',
                    to: '/',
                    icon: 'mdi-folder-key-outline'
                },
                {
                    titulo: 'Agenda de eventos culturales o deportivos',
                    to: '/',
                    icon: 'mdi-view-agenda-outline'
                },
                {
                    titulo: 'Actas de entrega-recepción',
                    to: '/',
                    icon: 'mdi-file-document-outline'
                },

                {
                    titulo: 'Georreferenciación de obras públicas',
                    to: '/',
                    icon: 'mdi-map-marker-question'
                },
                {
                    titulo: 'Expedientes reservados',
                    to: '/',
                    icon: 'mdi-archive-alert-outline'
                },
                {
                    titulo: 'Guía de archivos',
                    to: '/',
                    icon: 'mdi-archive-outline'
                },
                {
                    titulo: 'Concesiones, permisos y autorizaciones',
                    to: '/',
                    icon: 'mdi-account-clock-outline'
                },
                {
                    titulo: 'Concesiones de transporte público',
                    to: '/',
                    icon: 'mdi-bus'
                },
                {
                    titulo: 'Entrega de recursos públicos',
                    to: '/',
                    icon: 'mdi-handshake-outline'
                },
                {
                    titulo: 'Sistemas pensionarios',
                    to: '/',
                    icon: 'mdi-folder-file-outline'
                },
                {
                    titulo: 'Informe de actividades',
                    to: '/',
                    icon: ' mdi-office-building-cog-outline'
                },
                {
                    titulo: 'Ingresos',
                    to: '/',
                    icon: 'mdi-account-cash-outline'
                },
                {
                    titulo: 'Información desclasificada',
                    to: '/',
                    icon: 'mdi-text-box-outline'
                },
                {
                    titulo: 'Preguntas frecuentes',
                    to: '/',
                    icon: 'mdi-chat-question-outline'
                },
                {
                    titulo: 'Catálogo de información adicional',
                    to: '/',
                    icon: 'mdi-information-outline'
                },
                {
                    titulo: 'Acciones realizadas por contingencias',
                    to: '/',
                    icon: 'mdi-weather-pouring'
                },
                {
                    titulo: 'Aportaciones nacionales o internacionales, para emergencia o desastre',
                    to: '/',
                    icon: 'mdi-hand-coin-outline'
                },
                {
                    titulo: 'Servidores públicos con sanciones definitivas',
                    to: '/',
                    icon: 'mdi-account-multiple-remove'
                },
                {
                    titulo: 'Información catastral',
                    to: '/',
                    icon: 'mdi-domain'
                },
                {
                    titulo: 'Listado del parque vehicular',
                    to: '/',
                    icon: 'mdi-car-hatchback'
                },
                {
                    titulo: 'Proceso catastral de valuación',
                    to: '/',
                    icon: 'mdi-office-building'
                },
                {
                    titulo: 'Mecanismos y resultados de evaluación',
                    to: '/',
                    icon: 'mdi-home-analytics'
                },
                {
                    titulo: 'Resultados de evaluación',
                    to: '/',
                    icon: 'mdi-table-large'
                },
                {
                    titulo: 'Otra información',
                    to: '/',
                    icon: 'mdi-information-variant'
                }
            ],
        }

    }
}
</script>

<style lang="scss" scoped>

</style>
