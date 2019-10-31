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
                <div>
                    <router-link
                            :to="{name: 'Form'}"
                            active-class="active"
                            tag="button"
                            class="button is-outlined focus:outline-none"
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
                    </router-link>
                    <button v-if="!mySession"
                            class="button is-outlined focus:outline-none ml-8"
                            @click="singIn"
                    >Sing In
                    </button>
                    <button v-else
                            class="button is-outlined focus:outline-none ml-8"
                            @click="singOut"
                    ><img class="float-left h-6 mr-2 photo w-6"
                          :src="mySession.photoURL"
                    />Sing Out
                    </button>

                </div>
            </nav>
        </div>
    </header>
</template>

<script>
    import firebase from 'firebase/app';
    import 'firebase/auth';

    export default {
        name: "my-header",
        props: ['cartItemCount'],
        data() {
            return {
                sitename: 'Vue.js Pet Depot',
            }
        },
        beforeCreate() {
            firebase.auth().onAuthStateChanged((user) => {
                this.$store.commit('SET_SESSION', user || false)
            })
        },
        methods: {
            singIn() {
                let provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider).then(function (result) {
                    console.log('signed in!');
                }).catch(function (error) {
                    console.log('error ' + error);
                })
            },
            singOut() {
                firebase.auth().signOut().then(function () {
                    console.log("signed out!");
                }).catch(function (error) {
                    console.log('error ' + error)
                })
            },
        },
        computed: {
            mySession() {
                return this.$store.getters.session;
            }
        }
    }
</script>

<style scoped>

</style>
