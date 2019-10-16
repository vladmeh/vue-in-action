<template>
    <div id="app">
        <header class="bg-gray-100 shadow-md">
            <div class="container mx-auto">
                <nav class="flex justify-between items-center py-4">
                    <h1 v-text="sitename"></h1>
                    <button class="button is-outlined focus:outline-none">

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
        <main class="py-4 container mx-auto">
            <div class="flex mb-4 items-center">
                <div class="w-1/3">
                    <figure>
                        <img :src="product.image" :alt="product.title">
                    </figure>
                </div>
                <div class="w-2/3">
                    <h1 class="mb-8 text-4xl" v-text="product.title"></h1>
                    <p v-html="product.description"></p>
                    <p :text-content.prop="product.price | formatPrice" class="price"></p>
                    <button class="button button-blue mt-10 focus:outline-none"
                            @click="addToCart"
                    >Add to Cart</button>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                sitename: 'Vue.js Pet Depot',
                product: {
                    id: 1001,
                    title: "Cat Food, 25lb bag",
                    description: "A 25 pound bag of <em>irresistible</em>," +
                        "organic goodness for your cat.",
                    price: 2000,
                    image: "./assets/images/product-fullsize.png"
                },
                cart: [],
            }
        },
        methods: {
            addToCart(){
                this.cart.push(this.product.id);
            }
        },
    }
</script>
