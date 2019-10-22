<template>
    <div>
        <my-header></my-header>
        <main class="py-10 container mx-auto">
            <div class="flex mb-10 items-center">
                <div class="w-1/3">
                    <figure>
                        <img :src="product.image" :alt="product.title">
                    </figure>
                </div>
                <div class="w-1/3 pl-20">
                    <h1 class="mb-8 text-4xl" v-text="product.title"></h1>
                    <p v-html="product.description"></p>
                    <p :text-content.prop="product.price | formatPrice" class="price"></p>
                    <div class="flex items-center justify-between mt-10">
                        <router-link :to="{ name: 'Edit' }"
                                     tag="button"
                                     class="button button-blue focus:outline-none"
                        >Edit Product</router-link>
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import MyHeader from "./Header";
    import axios from 'axios';

    export default {
        name: "Product",
        components: {MyHeader},
        data() {
            return {
                product: {}
            }
        },
        created() {
            axios.get('../data/products.json')
                .then((response) => {
                    this.product = response.data.products.filter(
                        data => parseInt(data.id) === parseInt(this.$route.params.id)
                    )[0];
                    this.product.image = '/' + this.product.image;
                });
        },
    }
</script>

<style scoped>

</style>
