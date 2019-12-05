<template>
  <section class="header_video">
    <h1 class="header_video--title">
      <strong>Julian Springaux</strong>Web wizard
    </h1>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1920px"
      height="1080px"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <mask id="mask" x="0" y="0" width="100%" height="100%">
          <rect x="0" y="0" width="100%" height="100%" />
          <image
            xlink:href="/images/logo-reverse.svg"
            x="20%"
            y="7%"
            height="65%"
            width="60%"
          />
        </mask>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" />
    </svg>

    <div class="header_video--video" />
  </section>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class HeaderVideo extends Vue {
}
</script>
