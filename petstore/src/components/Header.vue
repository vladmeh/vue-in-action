<template>
    <header class="bg-gray-100 shadow-md">
        <div class="container mx-auto">
            <nav class="flex justify-between items-center py-4">
                <h1>
                    <router-link
                            :to="{name: 'iMain'}"
                            v-text="sitename"
                    ></router-link>
                </h1>
                <button class="button is-outlined focus:outline-none"
                        @click="showCheckout"
                >
                    <span :class="cartItemCount !== '' ? 'mr-2' : ''" v-text="cartItemCount"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="stroke-current inline-block h-4 w-4 mb-1 mr-1">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Checkout
                </button>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: "my-header",
        props: ['cartItemCount'],
        data() {
            return {
                sitename: 'Vue.js Pet Depot',
            }
        },
        methods: {
            showCheckout(){
                this.$router.push({name: 'Form'})
            }
        }
    }
</script>

<style scoped>

</style>
