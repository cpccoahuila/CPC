

<template>
    <v-container >
    
        <v-row>
            <v-col>
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2" :icon="page.icon" prominent>
    
                    <div align="center" class="mb-5 text-xl-h1 text-md-h3 ">{{page.title}}</div>
    
                </v-alert>
    
                <v-card class="mt-3 "  color="article">
                    <v-col aling="center" justify="center" >
    
                  
                    </v-col>
    
                </v-card>
    
         
    
               
            </v-col>
        </v-row>
    </v-container>
    </template>
    
    <script>
    export default {
        name: 'sei',
        data() {
            return {
                page: {
                    color: 'info',
                    title: 'Contacto',
                    icon: 'mdi-card-account-phone-outline'
                }
            }
    
        }
    }
    </script>
    
    <style lang="scss" scoped>
    
    </style>
    