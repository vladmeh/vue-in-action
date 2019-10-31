<template>
    <div>
        <my-header :cart-item-count="cartItemCount"></my-header>
        <main class="py-10 container mx-auto">
            <div class="flex mb-10 items-center"
                 v-for="product in sortedProducts"
            >
                <div class="w-1/3">
                    <figure>
                        <img :src="product.image" :alt="product.title">
                    </figure>
                </div>
                <div class="w-1/3 pl-20">
                    <router-link
                            tag="h1"
                            :to="{ name: 'Id', params: {id: product.id}}"
                            class="mb-8 text-4xl cursor-pointer"
                            v-text="product.title"
                    ></router-link>
                    <p v-html="product.description"></p>
                    <p :text-content.prop="product.price | formatPrice" class="price"></p>
                    <div class="flex items-center justify-between mt-10">
                        <div>
                            <button class="button button-blue focus:outline-none"
                                    @click="addToCart(product)"
                                    v-if="canAddToCart(product)"
                            >Add to Cart
                            </button>
                            <button class="button button-blue focus:outline-none opacity-50 cursor-not-allowed"
                                    v-else
                            >Add to Cart
                            </button>
                            <transition name="bounce" mode="out-in">
                                <span class="font-medium ml-4"
                                      v-if="product.availableInventory - cartCount(product.id) === 0"
                                      key="0"
                                >All Out!</span>
                                <span class="font-medium ml-4"
                                      v-else-if="product.availableInventory - cartCount(product.id) < 5"
                                      key=""
                                >Only {{ product.availableInventory - cartCount(product.id) }} left!</span>
                                <span class="font-medium ml-4"
                                      v-else
                                      key=""
                                >By Now!</span>
                            </transition>
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
    import MyHeader from './Header';
    import {mapGetters} from 'vuex';
    import {productsRef} from "../firebase";

    export default {
        name: "Main",
        firebase: {
            products: productsRef
        },
        data() {
            return {
                products: [],
                cart: [],
            }
        },
        // created() {
        //     this.$store.dispatch('initStore');
        // },
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
            ...mapGetters([
                // 'products',
                'session'
            ]),
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
            },
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

    .bounce-enter-active {
        animation: shake 0.72s cubic-bezier(.37, .07, .19, .97);
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
    }

    @keyframes shake {
        10%, 90% {
            color: red;
            transform: translate3d(-1px, 0, 0);
        }
        20%, 80% {
            transform: translate3d(2px, 0, 0);
        }
        30%, 50%, 70% {
            color: red;
            transform: translate3d(-4px, 0, 0);
        }
        40%, 60% {
            transform: translate3d(4px, 0, 0);
        }
    }
</style>
