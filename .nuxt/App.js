import Vue from 'vue'

import {
  getMatchedComponentsInstances,
  promisify,
  globalHandleError
} from './utils'

import NuxtError from '../layouts/error.vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../assets/scss/app.scss'

import _6f6c098b from '../layouts/default.vue'

const layouts = { "_default": _6f6c098b }

export default {
  head: {"title":"Julian Springaux","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"msapplication-TileColor","content":"#ffffff"},{"name":"msapplication-TileImage","content":"\u002Fimages\u002Ffavicon\u002Fms-icon-144x144.png"},{"name":"theme-color","content":"#ffffff"},{"property":"og:title","content":"Julian Springaux"},{"property":"og:type","content":"website"},{"property":"og:url","content":"https:\u002F\u002Fjulian-printemps.web.app\u002F"},{"property":"og:image","content":"https:\u002F\u002Fjulian-printemps.web.app\u002Fimages\u002Fogp.png"},{"property":"og:site_name","content":"Julian Springaux"},{"name":"twitter:card","content":"summary_large_image"},{"hid":"description","name":"description","content":"Web engineer from France coding in Tokyo"},{"property":"og:description","content":"Web engineer from France coding in Tokyo"},{"name":"twitter:site","content":"Web engineer from France coding in Tokyo"},{"name":"twitter:title","content":"Julian Springaux"},{"name":"twitter:description","content":"Web engineer from France coding in Tokyo"},{"name":"twitter:image","content":"https:\u002F\u002Fjulian-printemps.web.app\u002Fimages\u002Fogp.png"},{"itemprop":"image","content":"https:\u002F\u002Fjulian-printemps.web.app\u002Fimages\u002Fogp.png"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"julian-printemps"},{"hid":"author","name":"author","content":"Julian"}],"link":[{"rel":"icon","sizes":"16x16 32x32 48x48 64x64","type":"image\u002Fx-icon","href":"\u002Fimages\u002Ffavicon\u002Ffavicon.ico"},{"rel":"apple-touch-icon","sizes":"57x57","type":"image\u002Fpng","href":"\u002Fimages\u002Ffavicon\u002Fapple-icon-57x57.png"},{"rel":"apple-touch-icon","sizes":"60x60","type":"image\u002Fpng","href":"\u002Fimages\u002Ffavicon\u002Fapple-icon-60x60.png"},{"rel":"apple-touch-icon","sizes":"72x72","type":"image\u002Fpng","href":"\u002Fimages\u002Ffavicon\u002Fapple-icon-72x72.png"},{"rel":"apple-touch-icon","sizes":"76x76","type":"image\u002Fpng","href":"\u002Fimages\u002Ffavicon\u002Fapple-icon-76x76.png"},{"rel":"apple-touch-icon","sizes":"114x114","type":"image\u002Fpng","href":"\u002Fimages\u002Ffavicon\u002Fapple-icon-114x114.png"},{"rel":"apple-touch-icon","sizes":"120x120","type":"image\u002Fpng","href":"\u002Fimages\u002Ffavicon\u002Fapple-icon-120x120.png"},{"rel":"apple-touch-icon","sizes":"144x144","type":"image\u002Fpng","href":"\u002Fimages\u002Ffavicon\u002Fapple-icon-144x144.png"},{"rel":"apple-touch-icon","sizes":"152x152","type":"image\u002Fpng","href":"\u002Fimages\u002Ffavicon\u002Fapple-icon-152x152.png"},{"rel":"apple-touch-icon","sizes":"180x180","type":"image\u002Fpng","href":"\u002Fimages\u002Ffavicon\u002Fapple-icon-180x180.png"},{"rel":"icon","sizes":"192x192","type":"image\u002Fpng","href":"\u002Fimages\u002Ffavicon\u002Fandroid-icon-192x192.png"},{"rel":"icon","sizes":"32x32","type":"image\u002Fpng","href":"\u002Fimages\u002Ffavicon\u002Ffavicon-32x32.png"},{"rel":"icon","sizes":"96x96","type":"image\u002Fpng","href":"\u002Fimages\u002Ffavicon\u002Ffavicon-96x96.png"},{"rel":"icon","sizes":"16x16","type":"image\u002Fpng","href":"\u002Fimages\u002Ffavicon\u002Ffavicon-16x16.png"},{"rel":"manifest","href":"\u002Fimages\u002Ffavicon\u002Fmanifest.json"},{"rel":"canonical","href":"https:\u002F\u002Fjulian-printemps.web.app\u002F"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Courgette|Crushed|Roboto:300,500"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"}],"style":[],"script":[],"htmlAttrs":{"lang":"en"}},

  render (h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })

    if (this.nuxt.err && NuxtError.layout) {
      this.setLayout(
        typeof NuxtError.layout === 'function'
          ? NuxtError.layout(this.context)
          : NuxtError.layout
      )
    }

    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter (el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,

      transitionEl
    ])
  },

  data: () => ({
    isOnline: true,

    layout: null,
    layoutName: ''
  }),

  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this

      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
    // Add $nuxt.context
    this.context = this.$options.context
  },

  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline () {
      return !this.isOnline
    }
  },

  methods: {
    refreshOnlineStatus () {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    async refresh () {
      const pages = getMatchedComponentsInstances(this.$route)

      if (!pages.length) {
        return
      }
      this.$loading.start()

      const promises = pages.map((page) => {
        const p = []

        if (page.$options.fetch) {
          p.push(promisify(page.$options.fetch, this.context))
        }

        if (page.$options.asyncData) {
          p.push(
            promisify(page.$options.asyncData, this.context)
              .then((newData) => {
                for (const key in newData) {
                  Vue.set(page.$data, key, newData[key])
                }
              })
          )
        }

        return Promise.all(p)
      })
      try {
        await Promise.all(promises)
      } catch (error) {
        this.$loading.fail()
        globalHandleError(error)
        this.error(error)
      }
      this.$loading.finish()
    },

    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) {
          this.$loading.fail()
        }
        if (this.$loading.finish) {
          this.$loading.finish()
        }
      }
    },

    setLayout (layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },

  components: {
    NuxtLoading
  }
}
