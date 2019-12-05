<template>
  <v-app>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class ErrorLayout extends Vue {
    @Prop({
      type: Object,
      default: null
    }) readonly error: any | undefined

    layout () {
      return 'empty'
    }
    head () {
      return {
        title: this.error.statusCode === 404 ? this.pageNotFound : this.otherError
      }
    }

    // data
    pageNotFound: string = 'Page not found'
    otherError: string = 'An error occurred'
}
</script>
