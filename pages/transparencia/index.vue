<template>
<v-container>

    <v-row>
        <v-col>
            <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2" :icon="page.icon" prominent>

                <div align="center" class="mb-5 text-xl-h1 text-md-h3 ">{{page.title}}</div>

            </v-alert>

            <!--  Inicio de ART 18 y Art 20 -->


            <!--  Inicio de ART 21 -->

            <v-card class="mt-3 pa-4">
                <v-row justify='center'>
                    <v-col aling="center" justify="center" cols="10">
                        <v-card-title class="justify-center" align="center">
                            <div class=" text-xl-h2 text-md-h4 mt-8 ">Información Pública</div>
                        </v-card-title>
                       

                        <v-divider></v-divider>
                    </v-col>
                    <v-col cols="10" class="mt-8">
                        <v-row>
                            <v-col cols="12" md="4" v-for="(fraccion, i) in fracciones" :key="i">
                                <v-list color="bluegreyt">

                                    <v-list-item class="justify-center" align="center" :to="'/transparencia/'+fraccion.to" router exact>
                                        <v-row>
                                            <v-col cols="12">
                             
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

            fracciones: [
                {
                    titulo: 'Actas',
                    to: 'CPC-1',
                    icon: 'mdi-file-document-outline'
                },
             
                {
                    titulo: 'Acuerdos',
                    to: 'CPC-2',
                    icon: 'mdi-handshake-outline'
                },
                {
                    titulo: 'Calendario de sesiones',
                    to: 'CPC-3',
                    icon: ' mdi-calendar-month-outline'
                },
                {
                    titulo: 'Contratos de prestación de servicios',
                    to: 'CPC-4',
                    icon: 'mdi-file-sign'
                },
                {
                    titulo: 'Convenios de colaboración',
                    to: 'CPC-5',
                    icon: 'mdi-account-multiple-plus-outline'
                },
                {
                    titulo: 'Declaraciones Patrimoniales',
                    to: 'CPC-6',
                    icon: ' mdi-account-search'
                },
                {
                    titulo: 'Informes',
                    to: 'CPC-7',
                    icon: 'mdi-file-chart-outline'
                },
                {
                    titulo: 'Marco Legal',
                    to: 'CPC-8',
                    icon: 'mdi-scale-balance'
                },
                // {
                //     titulo: 'Servicios y trámites',
                //     to: '21-12',
                //     icon: 'mdi-face-agent'
                // },
                // {
                //     titulo: 'Presupuesto asignado',
                //     to: '21-20',
                //     icon: 'mdi-cash-check'
                // },
                {
                    titulo: 'Planes',
                    to: 'CPC-9',
                    icon: 'mdi-chart-donut-variant'
                },
                {
                    titulo: 'Programas',
                    to: 'CPC-10',
                    icon: 'mdi-notebook-outline'
                },
                // {
                //     titulo: 'Informes financieros y cuenta pública',
                //     to: '21-25',
                //     icon: 'mdi-finance'
                // },
               
                {
                    titulo: 'Viáticos',
                    to: 'CPC-11',
                    icon: 'mdi-plane-car'
                },

                // {
                //     titulo: 'Entrega de recursos públicos',
                //     to: '21-38',
                //     icon: 'mdi-handshake-outline'
                // },
                // {
                //     titulo: 'Viáticos',
                //     to: 'CPC-12',
                //     icon: ' mdi-office-building-cog-outline'
                // },
                
            ],
        }

    }
}
</script>

<style lang="scss" scoped>

</style>
