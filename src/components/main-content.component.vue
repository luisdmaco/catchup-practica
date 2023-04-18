<template>
  <!-- Utiliza la directiva v-for para iterar a través de la
  matriz de artículos y renderizar un componente article-card
  para cada artículo -->
    <div v-for="article in articles">
        <article-card :article="article"></article-card>
    </div>
</template>

<script>
import ArticleCard from "@/components/article-card.component.vue";
export default {
    name: "main-content",
    components: {ArticleCard},
    props: {
        // Define una propiedad de entrada llamada "articles" que se
        // utiliza para pasar la matriz de artículos al componente
        // "main-content"
        articles: Array
    }
}
</script>

<style scoped>
</style>