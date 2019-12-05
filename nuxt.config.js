import colors from 'vuetify/es5/util/colors'
const envSet = require(`./config/env.${process.env.NODE_ENV}.js`)

export default {
  env: envSet,
  mode: 'universal',
  /*
    ** Headers of the page
    */
  head: {
    title: 'Julian Springaux',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/images/favicon/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' },
      { property: 'og:title', content: 'Julian Springaux' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://julian-printemps.web.app/' },
      { property: 'og:image', content: 'https://julian-printemps.web.app/images/ogp.png' },
      { property: 'og:site_name', content: 'Julian Springaux' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'description', name: 'description', content: 'Web engineer from France coding in Tokyo' },
      { property: 'og:description', content: 'Web engineer from France coding in Tokyo' },
      { name: 'twitter:site', content: 'Web engineer from France coding in Tokyo' },
      { name: 'twitter:title', content: 'Julian Springaux' },
      { name: 'twitter:description', content: 'Web engineer from France coding in Tokyo' },
      { name: 'twitter:image', content: 'https://julian-printemps.web.app/images/ogp.png' },
      { itemprop: 'image', content: 'https://julian-printemps.web.app/images/ogp.png' }
    ],
    link: [
      { rel: 'icon', sizes: '16x16 32x32 48x48 64x64', type: 'image/x-icon', href: '/images/favicon/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', type: 'image/png', href: '/images/favicon/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', type: 'image/png', href: '/images/favicon/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', type: 'image/png', href: '/images/favicon/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', type: 'image/png', href: '/images/favicon/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', type: 'image/png', href: '/images/favicon/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', type: 'image/png', href: '/images/favicon/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', type: 'image/png', href: '/images/favicon/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', type: 'image/png', href: '/images/favicon/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', type: 'image/png', href: '/images/favicon/apple-icon-180x180.png' },
      { rel: 'icon', sizes: '192x192', type: 'image/png', href: '/images/favicon/android-icon-192x192.png' },
      { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/images/favicon/favicon-32x32.png' },
      { rel: 'icon', sizes: '96x96', type: 'image/png', href: '/images/favicon/favicon-96x96.png' },
      { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/images/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/images/favicon/manifest.json' },
      { rel: 'canonical', href: 'https://julian-printemps.web.app/' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Courgette|Crushed|Roboto:300,500' }
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
