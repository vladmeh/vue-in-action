<template>
    <div>
        <my-header :cart-item-count="cartItemCount"></my-header>
        <main class="py-10 container mx-auto">
            <div class="flex mb-10 items-center"
                 v-for="product in sortedProducts"
                 :key="product.id"
            >
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
                        <div>
                            <button class="button button-blue focus:outline-none"
                                    @click="addToCart(product)"
                                    v-if="canAddToCart(product)"
                            >Add to Cart
                            </button>
                            <button class="button button-blue is-outlined focus:outline-none"
                                    v-else
                            >Add to Cart
                            </button>
                            <span class="font-medium ml-4"
                                  v-if="product.availableInventory - cartCount(product.id) === 0"
                            >All Out!</span>
                            <span class="font-medium ml-4"
                                  v-else-if="product.availableInventory - cartCount(product.id) < 5"
                            >Only {{ product.availableInventory - cartCount(product.id) }} left!</span>
                            <span class="font-medium ml-4"
                                  v-else
                            >By Now!</span>
                        </div>
                        <div>
                                <span class="text-xl"
                                      :class="{'rating-active' : checkRating(n, product)}"
                                      v-for="n in 5"
                                      :key="n"
                                >☆</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import axios from 'axios';
    import MyHeader from './Header';

    export default {
        name: "Main",
        data() {
            return {
                products: [],
                cart: [],
            }
        },
        created() {
            axios.get('../data/products.json')
                .then((response) => {
                    this.products = response.data.products;
                });
        },
        methods: {
            addToCart(product) {
                this.cart.push(product.id);
            },
            checkRating(n, product) {
                return product.rating - n >= 0;
            },
            canAddToCart(product) {
                return product.availableInventory > this.cartCount(product.id);
            },
            cartCount(id) {
                let count = 0;
                for (let i = 0; i < this.cart.length; i++) {
                    if (this.cart[i] === id) {
                        count++;
                    }
                }
                return count;
            },
        },
        computed: {
            cartItemCount() {
                return this.cart.length || '';
            },
            sortedProducts() {
                if (this.products.length > 0) {
                    let productsArray = this.products.slice(0);

                    function compare(a, b) {
                        if (a.title.toLowerCase() < b.title.toLowerCase()) {
                            return -1;
                        }
                        if (a.title.toLowerCase() > b.title.toLowerCase()) {
                            return 1;
                        }
                        return 0;
                    }

                    return productsArray.sort(compare);
                }
            }
        },
        components: {
            MyHeader
        }
    }
</script>

<style scoped lang="scss">
    .rating-active:before {
        content: "\2605";
        position: absolute;
    }
</style>
