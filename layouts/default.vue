<template>
  <v-app dark>
    <v-navigation-drawer 
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      width="auto"
      fixed
      app
      
      
    >
      <v-list>
        <v-list-item>
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
          two-line
        >
          <v-list-item-action>
            
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
      color="#181818"
      app
    >
     <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
      <v-avatar size="25"> <img  src="@/static/img/sea-icon.png" alt="azimut"/></v-avatar>  
      </v-btn>
      
      <v-toolbar-title> {{ title }} </v-toolbar-title>
      
      <v-spacer />
      <v-switch
        class="mt-4" 
        v-model="$vuetify.theme.dark"
        inset
        label="Modo Obscuro"
        persistent-hint
        
      ></v-switch>
    
    </v-app-bar>
    <v-main>
      <v-container class="mb-8" >
        <Nuxt />
        
      </v-container>
      <footerN />
    </v-main>

    



  </v-app>
</template>

<script>
import footerN from '@/components/Footer'
export default {
  name: 'DefaultLayout',
  components: {
    footerN
  },
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Inicio',
          to: '/',
          color: 'cyan lighten-1'
        },
        {
          icon: 'mdi-magnify',
          title: 'Transparencia',
          to: '/transparencia',
          color: 'teal lighten-1'
        },
        {
          avatar: 'peaclog.png',
          title: 'Política Estatal Anticorrupción',
          to: '/peac',
          color: 'warning'
        },
        {
          avatar: 'sistemalog.png',
          title: 'Sistema Estatal de Información',
          to: '/sei'
        },
        {
          avatar: 'azimutlog.png',
          title: 'Revista Azimut',
          to: '/azimut',
        },
        {
          icon: 'mdi-comma-circle-outline',
          title: 'Publicaciónes',
          to: '/publicaciones'
        },
        {
          icon: 'mdi-account-group',
          title: 'Comité Coordinador',
          to: '/cc',
          color: 'orange lighte-2'
        },
        {
          avatar: 'cpclog.png',
          title: 'Comité de Participación Ciudadana',
          to: '/CPC',
          color: 'purple lighten-2'
        },
        {
          icon: 'mdi-cogs',
          title: 'Secretaría ejecutiva',
          to: '/SE',
          color: 'pink'
        },
        {
          icon: 'mdi-cog',
          title: 'Comisión Ejecutiva',
          to: '/ce',
          color: 'blue-grey'
        },
        {
          icon: 'mdi-card-account-phone-outline',
          title: 'Contacto',
          to: '/contacto'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Sea Coahuila'
    }
  }
}
</script>
