<template>
  <div class="about_section">
    <section id="about" class="section grid-container">
      <h2 class="section--title">
        <strong>{{ title }}</strong>
      </h2>

      <div class="grid-x align-center align-middle">
        <div class="cell small-12 medium-10">
          <ul class="grid-x align-medium">
            <li v-for="(item, idx) in aboutInfos" :key="'about_' + idx" class="skill_block--item cell small-12 medium-6">
              <info :info="item" />
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="tokyo_block">
      <h3 class="tokyo_block--title">
        I'm writing code in Tokyo
      </h3>
      <div class="tokyo_block--bg" />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { aboutStore } from '~/store'
import Info from '~/components/atoms/Info.vue'

@Component({
  components: {
    Info
  }
})
export default class About extends Vue {
    title: string
    transitionName: string

    constructor () {
      super()
      this.title = 'Who I am'
      this.transitionName = 'slide-left'
    }

    /**
    * @return {array} // about information
    */
    get aboutInfos () {
      return aboutStore.abouts
    }

    async created () {
      await aboutStore.getAbouts()
    }
}
</script>
