<template>
  <div class="wrapper">
    <main class="main">
      <transition :name="transitionName">
        <router-view class=""></router-view>
      </transition>

      <skill-section></skill-section>
      <work-section></work-section>
      <contact-section></contact-section>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import Skills from '@/sections/Skills'
import Works from '@/sections/Works'
import Contact from '@/sections/Contact'

Vue.component('skill-section', Skills)
Vue.component('work-section', Works)
Vue.component('contact-section', Contact)

export default {
  name: 'main',

  data () {
    return {
      transitionName: 'slide-left'
    }
  }
}
</script>

<style lang="scss"></style>
