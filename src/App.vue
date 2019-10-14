<template>
    <div id="app">
        <header class="bg-gray-100 shadow-md">
            <div class="container mx-auto">
                <nav class="flex justify-between items-center py-4">
                    <h1 v-text="sitename"></h1>
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
                }
            }
        },
        filters: {
            formatPrice: function (price) {
                if (!parseInt(price)) {
                    return "";
                }

                if (price > 99999) {
                    let priceString = (price / 100).toFixed(2);
                    let priceArray = priceString.split("").reverse();
                    let index = 3;
                    while (priceArray.length > index + 3) {
                        priceArray.splice(index + 3, 0, ",");
                        index += 4;
                    }
                    return "$" + priceArray.reverse().join("");
                } else {
                    return "$" + (price / 100).toFixed(2);
                }
            }
        }
    }
</script>
