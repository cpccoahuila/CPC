

<template>
    <v-container  class="min-height-vh">
    
        <v-row>
            <v-col>
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2" :icon="page.icon" prominent>
    
                    <div align="center" class="mb-5 text-xl-h1 text-md-h3 ">{{page.title}}</div>
    
                </v-alert>
    
                <v-card class="mt-3 pa-10"  color="article">
                    <v-col aling="center" justify="center" >

                       <!-- <div v-for=" e in indicadores">
                           <h1>{{e.titulo}}</h1>
                           <h4>{{e.texto}}</h4>
                          <a :href="require('@/static/indicadores' + e.documento)">{{e.link}}</a> 
                           

                        </div>-->
                        
                  
                    </v-col>

                    <v-col aling="center" justify="center" >

                  
                    </v-col>
    
                </v-card>
    
         
    
               
            </v-col>
        </v-row>
    </v-container>
    </template>
    
    <script>
    export default {
        name: 'Indicadores',
        data() {
            return {
                page: {
                    color: 'green lighten-2',
                    title: 'Indicadores',
                    icon: 'mdi-comma-circle-outline'
                },

                //indicadores: [
                    //{
                    //titulo: "Corporación Latinobarómetro, Informe 2023",
                    //texto: "",
                    //link: "Ver",
                    //documento: "/latinobarometro-informe-2023.pdf"
                   // },
                    //{
                    //titulo: "Transparencia Internacional",
                    //texto: "",
                    //link: "Ver",
                    //documento: "/transparencia-internacional.pdf"
                    //},
                    //{
                    //titulo: "Coahuila ENVIPE 2023",
                    //texto: "",
                    //link: "Ver",
                    //documento: "/coahuila-envipe-2023.pdf"
                    //},
                    //{
                    //titulo: "IMCO 2023",
                    //texto: "",
                    //link: "Ver",
                    //documento: "/imco-2023.pdf"
                    //},


                //]
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
    