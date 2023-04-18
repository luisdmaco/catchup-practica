<template>
    <div class="w-full">
        <div>
            <pv-menubar class="sticky bg-primary">
                <!-- first button labeled CatchUp-inicio
                     it triggers the toggleSidebar function.-->
                <template #start>
                    <pv-button label="CatchUp-inicio" icon="pi pi-bars"
                               @click="toggleSidebar"/>
                </template>
                <!-- second button labeled CatchUp-end
                     it triggers the toggleSidebar function.-->
                <template #end>
                    <pv-button label="CatchUp-end" icon="pi pi-bars"
                               @click="toggleSidebar"/>
                </template>
            </pv-menubar>
        </div>
        <div>
            <main-content v-if="errors" :articles="articles"></main-content>
            <unavailable-content v-else :errors="errors"></unavailable-content>
        </div>
    </div>
</template>
<script>
import { NewsApiService } from "@/news/services/news-api.service";
//importamos el API creado por nosotros
import MainContent from "@/components/main-content.component.vue";
import UnavailableContent from "@/components/unavailable-content.component.vue";
export default {
    name: 'App',
    components: {UnavailableContent, MainContent},
    //function data
    data() {
        return {
            sidebarVisible: false,
            articles: [],
            errors: [],
            newsApi: new NewsApiService()
            //creamos una instancia de la API que hicimos
        }// declaramos los valores que tiene el documento
    },

    created() {
        console.log('created');
        this.getArticlesForSource('bbc-news');
        //el primer articulo que aparecerá será bbc news
    },

    //methods created by developer
    methods: {
        //Fetch Articles for selected Source
        getArticlesForSource(sourceId) {
            //recupera articulos de la API de noticias 'newsApi'
            //utilizando el sourceID como parámetro
            this.newsApi.getArticlesForSource(sourceId)
                //try: then maneja la respuesta de la solicitud del API
                .then(response => {
                    // Si la solicitud es exitosa, actualizar la
                    // propiedad "articles" con los artículos
                    // que el API devuelve
                    this.articles = response.data.articles;
                    console.log(response.data);
                })
                // Si se produce un error, manejarlo y agregarlo
                // al array "errors" del componente
                .catch(e => {
                    this.errors.push(e);
                });
            //acá solo se agregan los artículos
        },

        //Fetch Articles for selected Source with Logo URL
        getArticlesForSourceWithURL(source) {
            // Obtener una lista de artículos relacionados con la fuente
            // de noticias que se especifica en el parámetro "source.id"
            this.newsApi.getArticlesForSource(source.id)
                // Si la solicitud a la API es exitosa, actualizar la
                // propiedad "articles" del componente con los artículos
                // de la respuesta de la API
                .then(response => {
                    this.articles = response.data.articles;

                    // Agregar la URL del logotipo de la fuente
                    // de noticias a cada artículo
                    this.articles.map(article =>
                        article.source.urlToLogo = source.urlToLogo
                    );

                    console.log(response.data);
                })
                // Si se produce un error, manejarlo y agregarlo
                // al array "errors" del componente
                .catch(e => {
                    this.errors.push(e);
                });
        }, //acá se le agrega el logo a cada uno

        //On Source selected
        setSource(source) {
            this.getArticlesForSourceWithURL(source);
            this.sidebarVisible = !this.sidebarVisible;
        },

        toggleSidebar() {
            this.sidebarVisible = !this.sidebarVisible;
        }
    }
}
</script>
