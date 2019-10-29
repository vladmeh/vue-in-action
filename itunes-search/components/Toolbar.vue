<template>
    <v-toolbar dark color="blue">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>
            <nuxt-link class="title" to="/">iTunes Search</nuxt-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn to="/" icon>
            <v-icon>refresh</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
    export default {
        name: "Toolbar"
    }
</script>

<style scoped lang="scss">
    .title {
        text-decoration: none !important;
        &:visited{
             color: white;
         }
    }
</style>
