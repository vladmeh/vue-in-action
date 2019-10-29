<template>
    <div id="e3" style="max-width: 400px; margin: auto;"
         class="grey lighten-3">
        <v-container
                fluid
                style="min-height: 0;"
                grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card target="_blank" :href="url" :color="color">
                        <v-container fluid grid-list-lg>
                            <v-layout row>
                                <v-flex xs7>
                                    <v-card-title
                                            class="headline"
                                            v-text="title"
                                    ></v-card-title>
                                    <v-card-subtitle
                                            class="subtitle"
                                            v-text="artistName"
                                    ></v-card-subtitle>
                                </v-flex>
                                <v-flex xs5>
                                    <v-avatar
                                            class="ma-3"
                                            size="125"
                                            tile
                                    >
                                        <v-img :src="image"></v-img>
                                    </v-avatar>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
    export default {
        props: ['title', 'image', 'artistName', 'url', 'color'],
    }
</script>
<style>
    .subtitle{
        text-align: start;
    }
</style>
