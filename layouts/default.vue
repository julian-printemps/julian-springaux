<template>
  <v-app>
    <svg-sprites />
    <header-video />

    <div class="wrapper">
      <v-content class="main">
        <nuxt />
      </v-content>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SvgSprites from '@/components/SvgSprites.vue'
import HeaderVideo from '@/components/atoms/HeaderVideo.vue'

@Component({
  components: {
    SvgSprites,
    HeaderVideo
  }
})
export default class ErrorLayout extends Vue {}
</script>
