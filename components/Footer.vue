<template>
<v-footer dark  padless >
    <v-card flat tile class=" text-center" width="100%" color="blue-grey darken-3">
        <v-card-text>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                <v-icon size="24px">
                    {{ icon }}
                </v-icon>
            </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
           
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong> Secretaría Ejecutiva del Sistema Anticorrupción del Estado de Coahuila de Zaragoza </strong>
        </v-card-text>
    </v-card>
</v-footer>
</template>

<script>
export default {
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
        ],
    }),
}
</script>
