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

                        <div v-for=" e in comunicados">
                            <h1>{{ e.titulo }}</h1>
                            <h4>{{ e.texto }}</h4>
                            <a v-if="e.documento" :href="require('@/static/comunicados' + e.documento)">{{ e.link }}</a>
                            <a v-if="e.to" :href="e.to">{{ e.link }}</a>


                        </div>


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
    name: 'Comunicados',
    data() {
        return {

            page: {
                color: 'amber darken-1',
                title: 'Comunicados',
                icon: 'mdi-comma-circle-outline'
            },

            comunicados: [

                {
                    titulo: "Boletín CPC 09",
                    texto: "Boletín CPC/09/2023-24",
                    link: "Ver comunicado",
                    documento: "/Boletín 09 CPC 2023 2024.pdf"
                },
                {
                    titulo: "Boletín CPC 08",
                    texto: "Boletín CPC/08/2023-24",
                    link: "Ver comunicado",
                    documento: "/Boletín 08 CPC 2023 2024.pdf"
                },
                {
                    titulo: "Boletín CPC 07",
                    texto: "Boletín CPC/07/2023-24",
                    link: "Ver comunicado",
                    documento: "/Boletín 07 CPC 2023 2024.pdf"
                },
                {
                    titulo: "Boletín CPC 06",
                    texto: "Boletín CPC/06/2023-24",
                    link: "Ver comunicado",
                    documento: "/Boletín 06 CPC 2023 2024.pdf"
                },
                {
                    titulo: "Capacitación a municipios sobre la Política Estatal Anticorrupción",
                    texto: "Capacitación a Municipios sobre la PEAC",
                    link: "Ver comunicado",
                    to: "comunicados/capacitaciones"
                },
                {
                    titulo: "Boletín CPC 05",
                    texto: "Boletín CPC/05/2023-24",
                    link: "Ver comunicado",
                    documento: "/Boletín 05 CPC 2023 2024.pdf"
                },
                {
                    titulo: "Boletín CPC 04",
                    texto: "Boletín CPC/04/2023-24",
                    link: "Ver comunicado",
                    documento: "/Boletín 04 CPC 2023 2024.pdf"
                },
                {
                    titulo: "Boletín CPC 03",
                    texto: "Boletín CPC/03/2023-24",
                    link: "Ver comunicado",
                    documento: "/Boletín 03 CPC 2023 2024.pdf"
                },
                {
                    titulo: "Boletín CPC 02",
                    texto: "Boletín CPC/02/2023-24",
                    link: "Ver comunicado",
                    documento: "/Boletín 02 CPC 2023-2024.pdf"
                },
                {
                    titulo: "Boletín CPC 01",
                    texto: "Boletín CPC/01/2023-24",
                    link: "Ver comunicado",
                    documento: "/Boletín CPC012023-24.pdf"
                },
                {
                    titulo: "Comunicado",
                    texto: "Posicionamiento de la Red de Comités de Participación respecto a la iniciativa que pretende eliminar a la Secretaría Ejecutiva del Sistema Nacional Anticorrupción",
                    link: "Ver comunicado",
                    documento: "/Comunicado CPC.pdf"
                },

            ]
        }

    },
    mounted() {

    },
}
</script>

<style lang="scss" scoped>
.min-height-vh {
    min-height: 70vh;
}
</style>