import colors from 'vuetify/es5/util/colors'
const envSet = require(`./config/env.${process.env.NODE_ENV}.js`)

export default {
    env: envSet,
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        { src: '~/assets/scss/app.scss', lang: 'scss' }
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        // '~/plugins/fireinit.js'
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        '@nuxtjs/vuetify',
        '@nuxt/typescript-build'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/pwa',
        '@nuxtjs/axios'
    ],
    /*
    ** vuetify module configuration
    ** https://github.com/nuxt-community/vuetify-module
    */
    vuetify: {
        treeShake: process.env.NODE_ENV === 'production',
        icons: {
            iconfont: 'mdi' // 'mdi' || 'md' || 'fa' || 'fa4'
        },
        customVariables: ['~/assets/variables.scss'],
        theme: {
            themes: {
                light: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend (config, ctx) {
        }
    }
}
