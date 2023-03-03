

<template>
    <v-container  class="min-height-vh">
    
        <v-row>
            <v-col>
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2" :icon="page.icon" prominent>
    
                    <div align="center" class="mb-5 text-xl-h1 text-md-h3 ">{{page.title}}</div>
    
                </v-alert>
    
                <v-card class="mt-3 pa-10"  color="article">
                    <v-col aling="center" justify="center" >

                    
                        
                  
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
                }
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
    