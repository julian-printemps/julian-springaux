<template>
  <section id="works" class="section work_section">
    <h2 class="section--title"><strong>{{title}}</strong></h2>

    <div class="work_block--container">
      <div id="work_block_holder" class="work_block--holder">
        <ul class="work_block--list">
          <li class="work_block--item" v-for="item in works">
            <work-item v-bind:work="item.work"></work-item>
          </li>
        </ul>
      </div>

      <button id="work_block_prev" class=" show-for-medium button_slider prev" type="button" name="previous" v-on:click="goPrev"><span><i class="icon"></i></span></button>
      <button id="work_block_next" class=" show-for-medium button_slider next" type="button" name="next" v-on:click="goNext"><span><i class="icon"></i></span></button>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import WorkItem from '@/components/WorkItem'

Vue.component('work-item', WorkItem)

export default {
  name: 'works-section',
  props: {
  },
  data () {
    return {
      title: 'What I\'ve done',
      transitionName: 'slide-right',
      works: [
        { work: {
          'title': 'Junkichi',
          'category': 'Vue.js',
          'image': './static/images/sites/junkichi.png',
          'url': 'https://junkichiusa.com/'
        }},
        { work: {
          'title': 'Pikejapan',
          'category': 'Vue.js',
          'image': './static/images/sites/pikejapan.jpg',
          'url': 'https://pikejapan.com/'
        }},
        { work: {
          'title': 'Tabegamisama',
          'category': 'Front-end',
          'image': './static/images/sites/tabegamisama.png',
          'url': 'https://tabegamisama.com/'
        }},
        { work: {
          'title': 'Kirinzi',
          'category': 'Wordpress / Front-end',
          'image': './static/images/sites/kirinzi.png',
          'url': 'http://kirinzi.jp/'
        }},
        { work: {
          'title': 'Concrete',
          'category': 'Wordpress / Front-end / Design',
          'image': './static/images/sites/concrete.png',
          'url': 'http://www.the-concrete.org/'
        }},
        { work: {
          'title': 'GrasPP',
          'category': 'Wordpress / Front-end',
          'image': './static/images/sites/graspp.png',
          'url': 'http://www.pp.u-tokyo.ac.jp/'
        }},
        { work: {
          'title': 'Anthropoid',
          'category': 'Wordpress / Front-end',
          'image': './static/images/sites/anthropoid.jpg',
          'url': 'http://shoot-heydrich.com/'
        }},
        { work: {
          'title': 'R500',
          'category': 'Wordpress / Front-end / Desgin',
          'image': './static/images/sites/r500_logo.png',
          'url': 'http://r500.co/'
        }}
      ]
    }
  },
  methods: {
    goPrev: function () {
      window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
      let start = null
      let d = document.getElementById('work_block_holder')

      function step (timestamp) {
        let progress
        if (start === null) start = timestamp
        progress = timestamp - start
        d.scrollLeft -= Math.min(progress / 10, 200)
        if (progress < 500) {
          requestAnimationFrame(step)
        }
      }
      requestAnimationFrame(step)
    },
    goNext: function () {
      window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
      let start = null
      let d = document.getElementById('work_block_holder')

      function step (timestamp) {
        let progress
        if (start === null) start = timestamp
        progress = timestamp - start
        d.scrollLeft += Math.min(progress / 10, 200)
        if (progress < 500) {
          requestAnimationFrame(step)
        }
      }
      requestAnimationFrame(step)
    }
  }
}
</script>
