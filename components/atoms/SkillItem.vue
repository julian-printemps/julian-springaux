<template>
  <article :class="classList" @click="setCurrentLevel">
    <section class="skill_block--section grid-x grid-padding-x align-middle">
      <h3 class="skill_block--title cell" :class="isActive ? 'active' : ''">
        <strong>{{ skill.title }}</strong>
      </h3>
    </section>
  </article>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class SkillItem extends Vue {
    @Prop({
      type: Object,
      default: 0
    }) readonly skill: any | undefined
    @Prop({
      type: Number,
      default: 0
    }) readonly activeState: number | undefined

    get isActive () {
      return this.activeState === this.skill.id
    }

    get classList () {
      let res = 'skill_block title_magic_' + this.skill.level
      if (this.isActive) {
        res += ' active'
      }
      return res
    }

    setCurrentLevel () {
      this.$emit('update:activeState', this.skill.id)
      this.$emit('update:dataLevel', this.skill.level)
    }
}
</script>
