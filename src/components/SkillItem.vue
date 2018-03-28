<template>
  <article :class="activeClass" v-on:click="setCurrentLevel">
    <section class="skill_block--section grid-x grid-padding-x align-middle">
      <h3 class="skill_block--title cell"><strong>{{skill.title}}</strong></h3>

      <!-- <div :class="classlist">
        <div class="pie">
          <div class="pie--half left"></div>
          <div class="pie--half right"></div>
          <div class="pie--inner"></div>
        </div>
      </div> -->
    </section>
  </article>
</template>

<script>
export default {
  name: 'skill-item',
  props: {
    skill: Object,
    activeState: Number
  },
  computed: {
    activeClass: function () {
      if (this.activeState === this.skill.id) {
        return 'skill_block active'
      } else {
        return 'skill_block'
      }
    },
    classlist: function () {
      return 'hide-for-medium cell auto progress-' + this.skill.level
    }
  },
  data () {
    return {
    }
  },
  methods: {
    setCurrentLevel: function () {
      this.$emit('update:activeState', this.skill.id)
      this.$emit('update:dataLevel', this.skill.level)
    }
  }
}
</script>
