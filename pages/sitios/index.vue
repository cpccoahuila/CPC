<template>
<v-container>

    <v-row>
        <v-col>
            <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2" :icon="page.icon" prominent>

                <div align="center" class="mb-5 text-xl-h1 text-md-h3 ">{{page.title}}</div>

            </v-alert>
            

        

            <v-card class="mt-10 pa-3">
                <v-card-title class="justify-center mb-5">
                    <div class=" text-xl-h2 text-md-h4"> Organismos y miembros vinculados a la labor de la entidad</div>
                </v-card-title>
                <v-row>
                    <v-col cols="12" xl="4" lg="6" sm="12" v-for="(i,index) in integrantes" :key="index">
                        <v-card shaped class="mx-auto mt-8 pa-3" color="cc" min-height="330" light>
                            <v-col>
                                <v-row align="center" class="fill-height">
                                    <v-col align-self="start" class="pa-0" cols="6">
                                        <v-avatar class="profile" size="164">
                                            <v-img :src="require('@/static/img/cc/'+ i.foto)"></v-img>

                                        </v-avatar>

                                    </v-col>
                                    <v-col align-self="start" class="pa-1" cols="6">

                                        <v-img max-width="60%" :src="require('@/static/img/'+ i.img)"></v-img>

                                    </v-col>

                                    <v-col class="py-0">
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title class="text-h6">
                                                    {{i.nombre}}
                                                </v-list-item-title>
                                                <v-list-item-text>{{ i.cargo }}</v-list-item-text>
                                            </v-list-item-content>

                                        </v-list-item>
                                        <v-btn :href="i.web" color="blue lighten-2" text>
                                            <v-icon left>
                                                mdi-link
                                            </v-icon>

                                            Sitio web
                                        </v-btn>
                                    </v-col>

                                </v-row>

                            </v-col>
                            <div class="text-center">
                                <v-dialog v-model="i.dialog" max-width="900px">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn :color="page.color" fab small dark absolute top right v-on="on">
                                            <v-icon>mdi-plus</v-icon>
                                        </v-btn>
                                    </template>

                                    <v-card>
                                        <div v-for="(e,index) in i.curriculum" :key="index">
                                            <v-card-title class="bluegreyt">
                                                {{e.subtitulo}}
                                            </v-card-title>

                                            <v-card-text>
                                                <v-list> 
                                                    <v-list-item v-for=" (item,i) in e.lista" :key="i" dense>
                                                    <v-icon>mdi-fountain-pen-tip</v-icon>    {{ item }}
                                                    </v-list-item>
                                                </v-list>

                                            </v-card-text>
                                        </div>

                                        <v-divider></v-divider>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="primary" text @click="i.dialog = false">
                                                Cerrar
                                            </v-btn>
                                        </v-card-actions>

                                    </v-card>

                                </v-dialog>
                            </div>

                        </v-card>

                    </v-col>

                </v-row>

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
           
            dialog: false,
            page: {
                color: 'blue darken-3',
                title: 'Organismos',
                icon: 'mdi-account-group',
                presentacion: [{
                        titulo: 'Funciones',
                        texto: 'El Comit?? Coordinador del Sistema Anticorrupci??n del Estado de Coahuila de Zaragoza es la instancia responsable de establecer mecanismos de coordinaci??n entre los integrantes del Sistema Estatal, y de ??ste con el Sistema Nacional, y tendr?? bajo su encargo el dise??o, promoci??n y evaluaci??n de pol??ticas p??blicas locales de prevenci??n y combate a la corrupci??n.'
                    },
                    {
                        titulo: 'Misi??n',
                        texto: 'Somos un ??rgano Rector que dise??a, promociona y eval??a las pol??ticas p??blicas integrales para la prevenci??n y el combate a la corrupci??n, a trav??s del establecimiento de mecanismos eficaces de coordinaci??n y colaboraci??n entre los integrantes del Sistema Estatal Anticorrupci??n alineado al Sistema Nacional.'
                    },
                    {
                        titulo: 'Visi??n',
                        texto: 'Ser un ??rgano Rector garante en la adopci??n de medidas para el fortalecimiento Institucional en la prevenci??n, detecci??n y sanci??n, que permitan erradicar la opacidad, los actos il??citos y de corrupci??n e incrementen la confianza de los ciudadanos respecto a las instituciones.'
                    }

                ]
            },
            integrantes: [

                {
                   
                    nombre: 'ELID?? ALEJANDRINA ACOSTA REYES ',
                    cargo: 'Secretaria T??cnica del Sistema Estatal Anticorrupci??n',
                    foto: 'st-ear.jpg',
                    img: 'seac.png',
                    web: 'https://www.seacoahuila.org.mx/',
                    mail: 'elide.acosta@seacoahuila.org.mx',
                    curriculum: [{
                        subtitulo: 'Email',
                        lista:  ['elide.acosta@seacoahuila.org.mx']
                    }]
              
                },
                {
                    nombre: 'MIGUEL FELIPE MERY AYUP',
                    dialog: false,
                    cargo: 'Presidente del Tribunal Superior de Justicia y del Consejo de la Judicatura del Poder Judicial del Estado de Coahuila de Zaragoza.',
                    foto: 'cc-pjecz-mfma.jpg',
                    img: 'cc-pjecz.png',
                    web: 'https://www.pjecz.gob.mx/',
                    curriculum: [{
                            subtitulo: 'Formaci??n Acad??mica',
                            lista: [
                                'Maestr??a en Pol??tica Aplicada, Instituciones y Procesos Pol??ticos. Instituto Universitario de Investigaci??n Ortega y Gasset. 2007.',
                                'Licenciado en Derecho. Facultad de Jurisprudencia de la Universidad Aut??noma de Coahuila. 1996.',
                                'Diplomado en Gobernanza Local y Liderazgo Territorial. Fundaci??n Ortega y Gasset. 2018',
                            ]
                        },
                        {
                            subtitulo: 'Experiencia Laboral',
                            lista: [
                                'Noviembre 2019 a la fecha: Magistrado Presidente del Poder Judicial del Estado de Coahuila. Poder Judicial del Estado de Coahuila de Zaragoza.',
                                '2018 a octubre 2019: Magistrado Presidente de la Sala Regional. Poder Judicial del Estado de Coahuila de Zaragoza.',
                                '2014-2017: Primer Regidor de Torre??n. Republicano Ayuntamiento de Torre??n, Coahuila de Zaragoza.',
                                '2010-2013: Secretario del Republicano Ayuntamiento. Gobierno Municipal de Torre??n, Coahuila de Zaragoza.',
                                '2009: Subsecretario de Desarrollo y Cooperaci??n Pol??tica. Gobierno del Estado de Coahuila de Zaragoza.',
                                '2003-2005: Diputado Local. Congreso del Estado de Coahuila de Zaragoza.',
                                '2000-2002: Director General de Desarollo Social. Gobierno Municipal de Torre??n, Coahuila de Zaragoza.',
                                '1996-1999: Secretario Particular Adjunto del Gobernador. Gobierno del Estado de Coahuila de Zaragoza',
                            ]
                        },
                        {
                            subtitulo: 'Logros y proyectos realizados',
                            lista: [
                                'Autor del Libro "La Nueva V??a, hacia un modelo de ciudad". 2017.',
                                'Sistema de Normatividad Municipal. 2015.',
                                'Re-ingenier??a administrativa del Gobierno Municipal. 2014.',
                                'Monitor de Cabildo. 2011-2012.'
                            ]
                        },

                        {
                            subtitulo: 'Actividades Acad??micas',
                            lista: [
                                'Catedr??tico en la Maestr??a en Pol??ticas P??blicas',
                                'Catedr??tico en Derecho Constitucional en la UAdeC',
                                'Catedr??tico en Teor??a del Estado en la UAdeC',
                                'Catedr??tico en Pol??ticas P??blicas en la UAdeC',
                                'Catedr??tico en Administraci??n P??blica en la UAdeC',
                                'Catedr??tico en Administraci??n en la UAdeC',
                            ]
                        }
                    ]
                },

                {
                    nombre: 'MANUEL RAM??REZ BRIONES',
                    cargo: 'Auditor Superior del Estado de Coahuila de Zaragoza.',
                    foto: 'cc-asec-as.png',
                    img: 'cc-asec.png',
                    web: 'https://www.asecoahuila.gob.mx/',
                    curriculum: [{
                            subtitulo: 'Datos Profesionales',
                            lista: ['Contador P??blico (1981-1985), por la Universidad Aut??noma de Coahuila, Torre??n, Coahuila']
                        },
                        {
                            subtitulo: 'Trayectoria Profesional',
                            lista: [
                                'Auditor Especial de Planeaci??n y Servicios Administrativos de la ASEC',
                                'Auditor de Planeaci??n e Informaci??n de la ASEC',
                                'Auditor Especial de Cumplimiento Financiero de la ASEC',
                                'Auditor Especial de Desempe??o de la ASEC',
                                'Encargado de la Direcci??n General de Evaluaci??n y Seguimiento SEFIN',
                                'Director General de Impuestos SEFIN',
                                'Despacho de Asesor??a a Entidades Gubernamentales como Socio Director',
                                'Director de Contabilidad del Municipio de Torre??n',
                                'Jefe de Departamento de Contabilidad del Municipio de Torre??n'
                            ]
                        },
                        {
                            subtitulo: 'Trayectoria Acad??mica',
                            lista: ['Catedr??tico de las materias Auditor??a y Contabilidad (1992-1996) UAdeC',
                                'Auditor en la Contralor??a General (Enero 1990 a enero 1996) UAdeC'
                            ]
                        },
                    ]

                },

                {
                    nombre: 'MAESTRO JES??S HOMERO FLORES MIER',
                    cargo: 'Titular de la Fiscal??a Especializada en Delitos por Hechos de Corrupci??n.',
                    foto: 'cc-fech-jhfm.jpg',
                    img: 'cc-fehc.png',
                    web: 'https://www.fehc.gob.mx/',
                    curriculum: [{
                            subtitulo: 'Datos Profesionales',
                            lista: [
                                'Es Maestro y Licenciado en Derecho, por la Facultad de Jurisprudencia de la Universidad Aut??noma de Coahuila.',
                                'Es el Titular de la Fiscal??a Especializada en Delitos por Hechos de Corrupci??n del Estado de Coahuila de Zaragoza.',
                                'Es Presidente de la Comisi??n de Pol??ticas Publicas y estudios en Materia de Prevenci??n, Detecci??n, Evaluaci??n, e Investigaci??n de Delitos de la Convenci??n Nacional de Fiscales Anticorrupci??n.',
                                'Anteriormente fungi?? como Comisionado Presidente del Instituto Coahuilense de Acceso a la Informaci??n P??blica del Estado de Coahuila de Zaragoza.'
                            ]
                        },
                        {
                            subtitulo: 'Ha cursado las maestr??as en',
                            lista: [
                                'Derechos Humanos con acentuaci??n en Gobierno Abierto y Rendici??n de Cuentas en la Facultad de Jurisprudencia;',
                                'Gobernanza y Derechos Humanos en la Universidad Aut??noma del Noreste.'
                            ]
                        },
                        {
                            subtitulo: 'Ha tomado diversos cursos como',
                            lista: [
                                'Taller de Gerencia Pol??tica de Proyectos de Cambio, The George Washington University, en Washington, D.C.',
                                'Curso Internacional sobre "Gobierno Abierto" en la subsede de la Comisi??n Econ??mica para Am??rica Latina y el Caribe - CEPAL;',
                                'Modulo sobre Derecho Penal "Nueva Legislaci??n para la Procuraci??n de Justicia y Seguridad P??blica".',
                                'Seminario "Constituci??n, Democracia y Elecciones: La Reforma que Viene" en el Instituto de Investigaciones Jur??dicas de la UNAM.',
                                'Cuarto Foro Regional de Difusi??n del C??digo Modelo del Proceso Penal Acusatorio para los Estados de la Federaci??n, impartido por el Poder Judicial del Estado de Coahuila de Zaragoza y la Comisi??n Nacional de Tribunales Superiores de Justicia.'
                            ]
                        },
                        {
                            subtitulo: 'Se desempe???? como',
                            lista: [
                                'Coordinador y Fundador de la Comisi??n de Gesti??n Documental, Tecnolog??as de la Informaci??n y Gobierno Abierto de la Conferencia Mexicana para el Acceso a la Informaci??n.',
                                'Integrante de la Comisi??n de Indicadores, Evaluaci??n e Investigaci??n y Comisi??n de Archivos y Gesti??n Documental.',
                                'Coordinador de los Institutos de Transparencia del Pa??s represent??ndolos en la transici??n al actual Sistema Nacional de Transparencia.',
                                'Representante en el Consejo Nacional de Archivos de los Institutos y Consejos Estatales de Transparencia.',
                                'Ha impartido diversas pl??ticas y conferencias en relaci??n a temas en materia de anticorrupci??n, de acceso a la informaci??n, datos personales, redes sociales y archivos, en eventos Internacionales y Nacionales, organizadas por Instituciones especialistas en las materias.'
                            ]
                        },
                    ]

                },

                {
                    nombre: 'TERESA GUAJARDO BERLANGA',
                    cargo: 'Secretaria de Fiscalizaci??n y Rendici??n de Cuentas del Estado de Coahuila de Zaragoza.',
                    foto: 'cc-sefirc-tgb.jpg',
                    img: 'cc-sefirc.png',
                    web: 'http://www.sefircoahuila.gob.mx/',
                    curriculum: [{
                            subtitulo: 'Formaci??n Acad??mica',
                            lista: [
                                'Es Licenciada en Derecho por la Facultad de Jurisprudencia de la Universidad Aut??noma de Coahuila.'
                            ]
                        },
                        {
                            subtitulo: 'Cuenta con diversos diplomados, tales como:',
                            lista: [
                                'Diplomado en Transparencia y Buen Gobierno por el Instituto Tecnol??gico de Estudios Superiores de Monterrey.',
                                'Diplomado en Pol??ticas P??blicas, Gerencia y Gobierno Local por el Colegio Nacional de Ciencias Pol??ticas y Administraci??n P??blica A.C.',
                                'Diplomado en materia de Derechos Humanos por la Universidad Aut??noma de Coahuila, Comisi??n Nacional de Derechos Humanos y Comisi??n de Derechos Humanos del Estado de Coahuila Cuenta con certificaci??n en materia de Protecci??n de Datos Personales en posesi??n de los particulares por el Instituto Nacional de Acceso a la Informaci??n.',
                                'Diplomado Virtual de Contabilidad Gubernamental por la Asociaci??n Nacional de Organismos de Fiscalizaci??n Superior y Control Gubernamental A.C.'
                            ]
                        },
                        {
                            subtitulo: 'Otras Actividades Profesionales',
                            lista: [
                                'Fue Presidenta del Instituto Coahuilense de Acceso a la Informaci??n P??blica; del cual form?? parte activa durante 13 a??os.',
                                'Coordin?? la Comisi??n de Educaci??n de la COMAIP, impulso una nueva Ley de Acceso a la Informaci??n P??blica y Protecci??n de Datos Personales ante el Congreso del Estado de Coahuila de Zaragoza, convirti??ndose nuestro Estado y su Legislaci??n referentes a nivel nacional en la materia.',
                                'Dentro del Sistema Nacional de Transparencia ocupo la Secretaria T??cnica de la Comisi??n de los Derechos Humanos, Equidad de G??nero e Inclusi??n Social.',
                                'En el aspecto acad??mico ha desempe??ado actividades de docencia en educaci??n universitaria de Instituciones P??blicas y Privadas de la Regi??n Carbon??fera y de la Capital del Estado de Coahuila.',
                                'Es Conferencista en materia de Transparencia, Acceso a la Informaci??n, Rendici??n de Cuentas y Protecci??n de Datos Personales y ha escrito diversos art??culos publicados en un medio de comunicaci??n.'
                            ]
                        },

                    ]

                },

                {
                    nombre: 'LUIS GONZ??LEZ BRISE??O',
                    cargo: 'Comisionado Presidente del Instituto Coahuilense de Acceso a la Informaci??n P??blica.',
                    foto: 'cc-icai-lgb.jpg',
                    img: 'cc-ica.png',
                    web: 'http://www.icai.org.mx/',
                    curriculum: [{
                            subtitulo: 'Formaci??n Acad??mica',
                            lista: [
                                ' Licenciado en Derecho por la Facultad de Jurisprudencia de la Universidad Aut??noma de Coahuila.',
                                'Maestro en Derecho Fiscal por la Universidad del Valle de M??xico.',
                                'Master en Normativa de Protecci??n de Datos en el Sector Sanitario por la Universidad de C??diz, Espa??a.',
                                'Especialista en Protecci??n de Datos Personales y Privacidad por la Universidad de Murcia, Espa??a.'
                            ]
                        },
                        {
                            subtitulo: 'Experiencia Profesiona',
                            lista: [
                                'Comisionado Presidente del ICAI.',
                                ' Miembro de la Asociaci??n Profesional Espa??ola de Privacidad, con sede en Espa??a.',
                                ' Miembro de la Comisi??n de Datos Personales de la Conferencia Mexicana para el Acceso a la Informaci??n P??blica.'
                            ]
                        },
                        {
                            subtitulo: 'Publicacioness',
                            lista: [
                                'Dentro de publicaciones se encuentran el art??culo de opini??n titulado "Clasificaci??n de las boletas electorales como dato personal".publicado en la Revista Lex, julio - agosto 2011. ',
                                '"Evoluci??n constitucional del derecho a la informaci??n y del derecho de acceso a la informaci??n p??blica en M??xico", publicado en la Revista Lex, abril - mayo 2012. '
                            ]
                        },
                        {
                            subtitulo: 'Participaci??n en congresos, encuentros y seminarios',
                            lista: [
                                ' Particip?? en el curso "El Derecho a la Protecci??n de Datos Personales", impartido por la Agencia Espa??ola de Protecci??n de Datos y la Fundaci??n CEDDET.',
                                ' Colabor?? como ponente en el "7o Congreso Nacional de Organismos P??blicos Aut??nomos", realizado en la ciudad de Puebla, Puebla.'
                            ]
                        },

                    ]

                },
                {
                    nombre: 'JES??S GERARDO SOTOMAYOR HERN??NDEZ',
                    cargo: 'Magistrado Presidente del Tribunal de Justicia Administrativa de Coahuila de Zaragoza.',
                    foto: 'cc-tjacz.jpg',
                    img: 'cc-tjacz.png',
                    web: 'http://www.tjacoahuila.org/',
                    curriculum: [{
                            subtitulo: 'Formaci??n Acad??mica',
                            lista: [
                                'Licenciado en Derecho Facultad de Derecho de la UADEC unidad Torre??n.',
                                'Diplomado en Gesti??n P??blica por la Universidad Iberoamericana de la Laguna.',
                                'Especializaci??n en el Sistema Integral de Justicia Penal para Adolescentes.',
                            ]
                        },
                        {
                            subtitulo: 'Experiencia Laboral',
                            lista: [
                                'Magistrado de la Sala Especializada en Materia de Responsabilidades Administrativas del Tribunal de Justicia Administrativa de Coahuila de Zaragoza.',
                                'Subsecretario de Asuntos Jur??dicos en el Republicano Ayuntamiento de Torre??n.',
                                'Director del Instituto de Investigaciones Jur??dicas y Parlamentarias del Congreso del Estado de Coahuila.',
                                'Asesor en la Secretar??a General de Gobierno del Estado de Coahuila.',
                                'Secretaria de Desarrollo Social en el Republicano Ayuntamiento de Torre??n.',
                                'Secretario Abogado y Agente del Ministerio P??blico por Ministerio de Ley.Procuradur??a General de Justicia del Estado de Coahuila Regi??n Laguna',
                            ]
                        },
                        {
                            subtitulo: 'Actividades Acad??micas',
                            lista: [
                                'Taller de Destrezas de Litigaci??n en Juicios Orales(2019).',
                                'Taller de Pr??cticas Parlamentarias.',
                                'Taller de Juicio Oral Familiar',
                                'Curso de Contralor??a Din??mica.',
                                'Curso sobre T??picos Fiscales de la Actualidad',
                                'Curso Reformas Fiscales(2017)',
                                'Curso de Reducci??n de Pagos Provisionales.',
                                'Curso Amparo Administrativo',
                                'Curso Amparo Fiscal',
                                'Programa de Sensibilizaci??n y Capacitaci??n dirigida a Abogados.',
                                'Taller de Juicio Oral en Materia Mercantil(2016)',
                                'Catedr??tico de la Preparatoria Venustiano Carranza en Materia de L??gica.',
                                'Catedr??tico de la Universidad La Salle en Materia Derecho Administrativo.',
                            ]
                        },
                        {
                            subtitulo: 'Otras Actividades en las que ha participado',
                            lista: [
                                'Vocal en el Consejo Regional de la Abogac??a.',
                                'Secretario en el Consejo Regional de la Abogac??a.',
                                'Presidente del Colegio Regional de Abogados de la Laguna.',
                                'Secretario del Colegio Regional de Abogados de la Laguna.',
                                'Titular en el Bufete Jur??dico Gratuito del Colegio Regional de la Laguna',
                            ]
                        },

                    ]

                },

                // Termina integrantes
            ]

        }
        // Termina DATA

    }

}
</script>

<style lang="scss" scoped>

    </style>
