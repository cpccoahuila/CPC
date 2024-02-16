<template>
<div>
    <v-card color="accent" class="mt-10" v-if="items.length != 0">
        <v-col cols="12" >


            <v-carousel height="">
                
                <v-carousel-item v-for="(item,i) in items" :key="i" dark>
                    <!-- Si existe documento y usamos href con requiere para acceder a el documento -->
                    <div v-if="item.doc">
                    <a :href="require('@/static/img/banners/'+item.doc)">
                    <v-img  :src="require('@/static/img/banners/'+item.src)"></v-img>
                    </a>
                    </div>
                       <!-- Si existe link, href se lee directo del dato -->
                    <div v-if="item.to">
                    <a :href="item.to">
                    <v-img  :src="item.src"></v-img>
                    </a>
                    </div>
                     <!-- Banner solo -->
                    <div v-if="!item.to && !item.doc">

                    <v-img  :src="require('@/static/img/banners/'+item.src)"></v-img>
                  
                    </div>
                   
                </v-carousel-item>
            </v-carousel>
        </v-col>

        <v-divider></v-divider>

    </v-card >
    <v-card class="mt-12">
    <v-img  :src="require('@/static/img/banners/triptico.jpg')"></v-img>
 </v-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            items: [

            // {
            //     src: "banner_unodc.png",
            //     doc: "calendario-ipo-sea-coahuila-2018.pdf"
            // },

            // {
            //     src: "banner_unodc.png",
            //     to: "https://www.google.com/"
            // },

            {
                src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/sRDd8z9PspdESwXQfrq7%2Fc032mwMamBjZ8fjAPZUp%2F2.png?alt=media&token=abb55483-ec5c-4226-bb81-ac4777f5706d",
                to: "https://www.cpccoahuila.org.mx/redCiudadana"
            },

            {
                src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/STATIC%2FGira%20de%20capacitaci%C3%B3n%20(1).png?alt=media&token=9002d1fc-32b1-45c0-b72c-0d8ae2a19134",
                to: "comunicados/capacitaciones"
            },

            {
                src: "banner-iniciativa.jpg",
                doc: "Comunicado CPC.pdf"
            },
            
            {
                 src: "banner_unodc.png",
            }
             
                

            ],
        }
    },
}
</script>
