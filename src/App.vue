<template>
  <div id="app">
    <svg-sprites></svg-sprites>
    <header-video videomp="./assets/images/mainvideo.mp4"></header-video>

    <header class="header">
      <nav class="nav">
        <ul class="menu horizontal align-center">
          <li><a href="#about" v-smooth-scroll="{ duration: 1000, offset: -52 }">About me</a></li>
          <li><a href="#skills" v-smooth-scroll="{ duration: 1000, offset: -52 }">Skills</a></li>
          <li><a href="#works" v-smooth-scroll="{ duration: 1000, offset: -52 }">Works</a></li>
          <li><a href="#contact" v-smooth-scroll="{ duration: 1000, offset: -52 }">Contact</a></li>
          <!-- <li><router-link to="/work">Work</router-link></li> -->
        </ul>
      </nav>
    </header>

    <transition :name="transitionName" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
import SvgSprites from '@/components/SvgSprites'
import HeaderVideo from '@/components/HeaderVideo'
import vueSmoothScroll from 'vue-smoothscroll'
Vue.use(vueSmoothScroll)

Vue.component('svg-sprites', SvgSprites)
Vue.component('header-video', HeaderVideo)

export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slider-left',
      targetElem: document.getElementById('skills'),
      navitems: [
        { item: {
          'title': 'Javacript, jQuery, Ember.js, Vue.js',
          'level': 75
        }}
      ]
    }
  }
}
</script>
