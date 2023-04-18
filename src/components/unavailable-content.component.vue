<template>
    <div class="grid align-content-start">
        <div class="col-12">
            <h4>News Service is unavailable now</h4>
        </div>
        <div class="col-12" v-for="error in errors">
            <h6>{{ error }}</h6>
        </div>
    </div>
</template>

<script>
export default {
    name: "unavailable-content",
    props: {
        errors: null,
    }
}
</script>

<style scoped>
</style>