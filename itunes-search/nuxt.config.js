module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'iTunes Search App',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'iTunes search project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
        ]
    },
    /*
    ** Customize the progress bar color
    */
    loading: { color: '#3B8070' },

    plugins: ['~plugins/vuetify.js'],
    /*
    ** Build configuration
    */
    build: {
        vendor: ['axios']
    },

    buildModules: [
        '@nuxtjs/vuetify',
    ]
};

