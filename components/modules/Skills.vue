<template>
  <section id="skills" class="section grid-container">
    <h2 class="section--title">
      <strong>{{ title }}</strong>
    </h2>

    <div class="grid-x align-center align-middle">
      <div class="cell small-12">
        <div class="grid-x align-center align-middle">
          <div class="cell small-12 medium-6">
            <ul class="grid-x align-right">
              <li
                v-for="(item, idx) in skills"
                :key="'skill_' + idx"
                class="skill_block--item cell small-12"
              >
                <skill-item
                  :skill="item"
                  :data-level.sync="dataLevel"
                  :active-state.sync="activeState"
                />
              </li>
            </ul>
          </div>
          <div class="cell small-12 medium-6 text-left">
            <magic :current-level="dataLevel" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { skillStore } from '~/store'
import SkillItem from '@/components/atoms/SkillItem.vue'
import Magic from '@/components/atoms/Magic.vue'
import Info from '@/components/atoms/Info.vue'

@Component({
  components: {
    SkillItem,
    Magic,
    Info
  }
})
export default class Skills extends Vue {
    title: string
    transitionName: string
    dataLevel: number
    previousLevel: number
    activeState: number
    show: boolean

    constructor () {
      super()
      this.title = 'What I know'
      this.transitionName = 'slide-left'
      this.dataLevel = 100
      this.previousLevel = 0
      this.activeState = 1
      this.show = false
    }

    /**
    * @return {array} // skills list
    */
    get skills () {
      return skillStore.skills
    }

    async created () {
      await skillStore.getSkills()
    }
}
</script>
