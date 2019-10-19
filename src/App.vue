<template>
    <div id="app">
        <header class="bg-gray-100 shadow-md">
            <div class="container mx-auto">
                <nav class="flex justify-between items-center py-4">
                    <h1 v-text="sitename"></h1>
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
        <main class="py-10 container mx-auto">
            <div v-if="showProduct">
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
            </div>
            <div v-else>
                <div class="max-w-5xl mx-auto overflow-hidden rounded shadow-lg">
                    <div class="bg-gray-200 px-10 py-3 text-gray-500 text-xl">Pet Depot Checkout</div>
                    <form class="p-10">
                        <div class="flex mb-4">
                            <div class="w-1/2 mr-2">
                                <label class="text-sm block" for="first-name">First Name:</label>
                                <input class="block w-full border p-2 text-xs rounded focus:outline-none"
                                       id="first-name"
                                       type="text"
                                       v-model.trim.lazy="order.firstName"
                                >
                            </div>
                            <div class="w-1/2 ml-2">
                                <label class="text-sm block" for="last-name">Last Name:</label>
                                <input class="block w-full border p-2 text-xs rounded focus:outline-none"
                                       id="last-name"
                                       type="text"
                                       v-model.trim.lazy="order.lastName"
                                >
                            </div>
                        </div>
                        <div class="flex mb-4">
                            <div class="w-full">
                                <label class="text-sm block" for="address">Address:</label>
                                <input class="block w-full border p-2 text-xs rounded focus:outline-none"
                                       id="address"
                                       type="text"
                                       v-model.trim.lazy="order.address"
                                >
                            </div>
                        </div>
                        <div class="flex mb-4">
                            <div class="w-full">
                                <label class="text-sm block" for="city">City:</label>
                                <input class="block w-full border p-2 text-xs rounded focus:outline-none"
                                       id="city"
                                       type="text"
                                       v-model.trim.lazy="order.city"
                                >
                            </div>
                        </div>
                        <div class="flex mb-4">
                            <div class="w-1/2 mr-2">
                                <label class="text-sm block" for="state">State:</label>
                                <div class="relative">
                                    <select class="block w-full border p-2 text-sm rounded focus:outline-none appearance-none leading-tight"
                                            id="state"
                                            v-model="order.state"
                                    >
                                        <option disabled value="">State</option>
                                        <option v-for="(state, key) in states"
                                                :key="state.id"
                                                :value="state"
                                                v-text="key"
                                        ></option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="w-1/2 ml-2">
                                <label class="text-sm block" for="postal-code">ZIP/Postal code:</label>
                                <input class="block w-full border p-2 text-xs rounded focus:outline-none"
                                       id="postal-code"
                                       type="number"
                                       v-model.number="order.postalCode"
                                >
                            </div>
                        </div>
                        <div class="flex mb-4">
                            <label class="flex items-center mr-2 w-1/2">
                                <input class="mr-2 leading-tight"
                                       type="checkbox"
                                       :true-value="order.sendGift"
                                       :false-value="order.dontSendGift"
                                       v-model="order.gift"
                                >
                                <span class="text-sm">Ship As Gift?</span>
                            </label>
                            <div class="w-1/2 ml-2">
                                <div class="flex justify-start">
                                    <label class="flex items-center mr-8">
                                        <input class="mr-2 leading-tight"
                                               type="radio"
                                               :value="order.home"
                                               v-model="order.method"
                                        >
                                        <span class="text-sm">Home</span>
                                    </label>
                                    <label class="flex items-center">
                                        <input class="mr-2 leading-tight"
                                               type="radio"
                                               :value="order.business"
                                               v-model="order.method"
                                        >
                                        <span class="text-sm">Business</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-end w-full">
                            <button type="submit" class="button button-blue focus:outline-none"
                                    @click.prevent="submitForm"
                            >Place Order
                            </button>
                        </div>
                    </form>
                </div>
                <div class="flex mb-4 mt-10">
                    <div class="bg-gray-200 pt-6 shadow-inner w-full">
                        <pre>
                            First Name: {{ order.firstName }}
                            Last Name: {{ order.lastName }}
                            Address: {{ order.address }}
                            City: {{ order.city }}
                            State: {{ order.state }}
                            Zip Code: {{ order.postalCode }}
                            Method: {{ order.method }}
                            Gift: {{ order.gift }}
                        </pre>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    /* eslint-disable */
    import axios from 'axios';

    export default {
        name: 'app',
        data() {
            return {
                sitename: 'Vue.js Pet Depot',
                products: [],
                cart: [],
                showProduct: true,
                order: {
                    firstName: '',
                    lastName: '',
                    address: '',
                    city: '',
                    state: '',
                    postalCode: '',
                    method: 'Home Address',
                    business: 'Business Address',
                    home: 'Home Address',
                    gift: 'Send As A Gift',
                    sendGift: 'Send As A Gift',
                    dontSendGift: 'Do Not Send As A Gift',
                },
                states: {
                    AL: 'Alabama',
                    AR: 'Arizona',
                    CA: 'California',
                    NV: 'Nevada',
                }
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
            showCheckout() {
                this.showProduct = !this.showProduct;
            },
            submitForm() {
                alert('Submitter')
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
        }
    }
</script>

<style scoped lang="scss">
    .rating-active:before {
        content: "\2605";
        position: absolute;
    }
</style>
