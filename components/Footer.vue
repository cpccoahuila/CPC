<template>
<v-footer dark padless>
    <v-card flat tile class=" text-center" width="100%" color="#383550">
        <v-card-text>
            <v-btn v-for="(icon,i) in icons" :href="icon.to" :key="i" class="mx-4 white--text" icon>
                <v-icon size="24px">
                    {{ icon.icon }}
                </v-icon>
            </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">

        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong> Consejo de Participación Ciudadana del Sistema Anticorrupción del Estado de Coahuila de Zaragoza. </strong>
        </v-card-text>
    </v-card>
</v-footer>
</template>

<script>
export default {
    data: () => ({
        icons: [{
                icon: 'mdi-facebook',
                to: 'https://www.facebook.com/CPCCoahuila/'
            },
            {
                icon: 'mdi-twitter',
                to: 'https://twitter.com/CPCCoahuila'
            },
            {
                icon: 'mdi-youtube',
                to: 'https://www.youtube.com/@sistemaanticorrupciondeles8877'
            }
        ],
    }),
}
</script>
