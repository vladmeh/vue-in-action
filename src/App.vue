<template>
    <div id="app">
        <h1 v-text="sitename"></h1>
    </div>
</template>

<script>
    let APP_LOG_LIFECYCLE_EVENTS = true;

    export default {
        name: 'app',
        data() {
            return {
                sitename: 'Vue.js Pet Depot'
            }
        },
        beforeCreate() {
            if (APP_LOG_LIFECYCLE_EVENTS){
                console.log("beforeCreated");
            }
        },
        created() {
            if (APP_LOG_LIFECYCLE_EVENTS){
                console.log("created");
            }
        },
        beforeMount() {
            if (APP_LOG_LIFECYCLE_EVENTS){
                console.log("beforeMount");
            }
        },
        mounted() {
            if (APP_LOG_LIFECYCLE_EVENTS){
                console.log("mounted");
            }
        },
        beforeUpdate() {
            if (APP_LOG_LIFECYCLE_EVENTS){
                console.log("beforeUpdate");
            }
        },
        updated() {
            if (APP_LOG_LIFECYCLE_EVENTS){
                console.log("updated");
            }
        },
        beforeDestroy() {
            if (APP_LOG_LIFECYCLE_EVENTS){
                console.log("beforeDestroy");
            }
        },
        destroyed() {
            if (APP_LOG_LIFECYCLE_EVENTS){
                console.log("destroyed");
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
