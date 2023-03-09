<template>
  <v-app dark>
    <v-navigation-drawer 
      v-model="drawer"
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      mini-variant-width="65"
      width="auto"
      :permanent="$vuetify.breakpoint.mdAndUp"
      dark
      
      :color="colorNav"
      fixed
      app
      
      
    > 
      <v-list>

      
        <v-list-item  @click.stop="miniVariant = !miniVariant">
        <v-list-item-icon>
          <v-icon>mdi-apps</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Menu</v-list-item-title>
      </v-list-item>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          
         
          @click.stop="drawer = !drawer"
        >
          <v-list-item-action >
            
          <div v-if="item.icon">  <v-icon :color="item.color">{{ item.icon }} </v-icon></div>
          <div v-if="item.avatar">  <v-avatar size="25"><img  :src="require('@/static/img/botonera/' + item.avatar)" alt="azimut"></v-avatar></div>
          <div v-if="item.peac">  <v-avatar size="25"> <img  src="@/static/img/botonera/peaclog.png" alt="peac"></v-avatar></div>
          <div v-if="item.sistema">  <v-avatar size="25"> <img  src="@/static/img/botonera/sistemalog.png" alt="azimut"></v-avatar></div>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }} </v-list-item-title>
          </v-list-item-content>
          
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar dark
      :clipped-left="clipped"
      fixed
      :color="colorNav"
      
      app
    >
     <v-app-bar-nav-icon  v-if="$vuetify.breakpoint.mdAndDown" @click.stop="drawer = !drawer" />
      
     
      
      <v-toolbar-title> <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
      <v-avatar size="25"> <img  src="@/static/img/cpc.png" alt="Icono Sea"/></v-avatar> 

      </v-btn> {{ title }} </v-toolbar-title>
     
      <v-spacer />
  <!-- * Aqui va el buscador -->
<!-- 
  <div class="gcse-search"></div>
  <v-text-field id="123456"></v-text-field>
      <v-btn v-for="(icon,i) in icons" :href="icon.to" :key="i" class="mx-4 white--text" icon>
                <v-icon size="24px">
                    {{ icon.icon }}
                </v-icon>
            </v-btn> -->
           
      <v-switch
        class="mt-4 ml-8" 
        v-model="$vuetify.theme.dark"
        inset
        label="Modo-Obscuro"
        persistent-hint
        
      ></v-switch>
     
  
    
    </v-app-bar>
    
    <v-main>
      <lineUp/>
      <v-container class="mb-8 pa-3" >
        <v-row justify="center">
        <v-col cols="12" xl="11">
        <Nuxt />
        </v-col></v-row>
      </v-container>
      <footerN />
    </v-main>

    



  </v-app>
</template>

<script>
import lineUp from '@/components/LineUp'
import footerN from '@/components/Footer'


export default {
  name: 'DefaultLayout',
  
  components: {
    footerN,
    lineUp
  },
  data () {
    return {
      colorNav: '#383550',
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Inicio',
          to: '/',
          color: 'deep-purple lighten-2'
        },
        {
          icon: 'mdi-magnify',
          title: 'Transparencia',
          to: '/transparencia',
          color: 'teal lighten-1'
        },
    
       
        {
          avatar: 'cpclog.png',
          title: 'Quienes Somos',
          to: '/cpc',
          color: 'purple lighten-2'
        },
        {
          icon: 'mdi-webhook',
          title: 'Red Ciudadana',
          to: '/redCiudadana',
          color: 'pink'
        },
        {
          icon: 'mdi-script-text',
          title: 'Sesiones de pleno',
          to: '/sesiones',
          color: ''
        },
        {
          icon: 'mdi-newspaper-variant-outline',
          title: 'Comunicados',
          to: '/comunicados',
          color: 'amber darken-1'
        },
        {
          icon: 'mdi-briefcase-plus-outline',
          title: 'Convocatorias',
          to: '/convocatorias',
          color: 'blue-grey'
        },
        {
          icon: 'mdi-monitor-dashboard',
          title: 'Sitios de Interés',
          to: '/sitios',
          color: 'light-blue '
        },
     
        {
          icon: 'mdi-chart-arc',
          title: 'Indicadores',
          to: '/indicadores',
          color: 'red accent-1'
        },
        {
          icon: 'mdi-card-account-phone-outline',
          title: 'Contacto',
          to: '/contacto',
          color: ''
        },
        
        
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'CPC',
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
        
    }
  },
  methods:{

  },
  created(){
    
  
    },
    mounted() {
  const script = document.createElement("script");
  script.setAttribute("src", "https://cse.google.com/cse.js?cx=123456");
  script.setAttribute("async", "");
  document.head.appendChild(script);
},

}
</script>
