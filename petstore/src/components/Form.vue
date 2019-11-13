<template>
    <div>
        <my-header :cart-item-count="cartItemCount"></my-header>
        <main class="py-10 container mx-auto">
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
        </main>
    </div>
</template>

<script>
    import MyHeader from './Header';

    export default {
        name: "Form",
        props: ['cartItemCount'],
        data() {
            return {
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
                },
                madeOrder: false,
            }
        },
        methods: {
            submitForm() {
                return this.madeOrder = true;
            },
        },
        components: {
            MyHeader
        }
    }
</script>

<style scoped>

</style>
