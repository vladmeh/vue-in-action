<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<style lang="scss">
    .fade-enter-active, .fade-leave-active{
        transition: opacity .25s ease-in-out;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
</style>
