<template>
  <section id="works" class="section work_section">
    <h2 class="section--title">
      <strong>{{ title }}</strong>
    </h2>

    <div class="work_block--container">
      <div id="work_block_holder" class="work_block--holder">
        <ul class="work_block--list">
          <li v-for="(item, idx) in works" :key="'work_' + idx" class="work_block--item">
            <work-item :work="item" />
          </li>
        </ul>
      </div>

      <button id="work_block_prev" class=" show-for-medium button_slider prev" type="button" name="previous" @click="goPrev">
        <span><i class="icon" /></span>
      </button>
      <button id="work_block_next" class=" show-for-medium button_slider next" type="button" name="next" @click="goNext">
        <span><i class="icon" /></span>
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { workStore } from '~/store'
import WorkItem from '@/components/atoms/WorkItem.vue'

@Component({
  components: { WorkItem }
})
export default class Works extends Vue {
    title: string
    transitionName: string

    constructor () {
      super()
      this.title = 'What I\'ve done'
      this.transitionName = 'slide-right'
    }

    /**
    * @return {array} // works list
    */
    get works () {
      return workStore.works
    }

    async created () {
      await workStore.getWorks()
    }

    // methods
    goPrev () {
      window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
      let start: any = null
      const d: any = document.getElementById('work_block_holder')

      function step (timestamp: number) {
        let progress: number = 0
        if (start === null) { start = timestamp }
        progress = timestamp - start
        d.scrollLeft -= Math.min(progress / 10, 200)
        if (progress < 500) {
          requestAnimationFrame(step)
        }
      }
      requestAnimationFrame(step)
    }

    goNext () {
      window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
      let start: any = null
      const d: any = document.getElementById('work_block_holder')

      function step (timestamp: number) {
        let progress: number = 0
        if (start === null) { start = timestamp }
        progress = timestamp - start
        d.scrollLeft += Math.min(progress / 10, 200)
        if (progress < 500) {
          requestAnimationFrame(step)
        }
      }
      requestAnimationFrame(step)
    }
}
</script>
