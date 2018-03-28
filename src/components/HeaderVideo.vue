<template>
  <section class="header_video">
    <h1 class="header_video--title">
      <!-- <strong>Hi, I'm Julian</strong>I'm writing code in Tokyo. -->
      <strong>Julian Springaux</strong>Front-end magician
    </h1>

    <svg  xmlns="http://www.w3.org/2000/svg"  width="1920px" height="1080px" preserveAspectRatio="xMidYMid slice">
      <defs>
        <mask id="mask" x="0" y="0" width="100%" height="100%" >
          <rect x="0" y="0" width="100%" height="100%"/>
          <image xlink:href="../assets/images/logo-reverse.svg" x="20%" y="7%" height="65%" width="60%" />
          <!-- <text x="50%" y="90%">Julian Springaux</text> -->
        </mask>
      </defs>
      <rect x="0" y="0" width="100%" height="100%"/>
    </svg>

    <div class="header_video--video" v-html="headerVideoInner"></div>
  </section>
</template>

<script>
export default {
  name: 'header-video',
  props: {
    videomp: String,
    headerText: String
  },
  data () {
    return {
      headerVideoInner: ''
    }
  },

  mounted: function () {
    let viewportwidth = document.documentElement.clientWidth
    if (viewportwidth > 654) {
      this.headerVideoInner = `<video id="video" autoplay="autoplay" muted="muted" preload="auto" loop="loop" playsinline>
        <source src="/static/video/mainvideo.mp4" type="video/mp4">
      </video>`
    }
  }
}
</script>
