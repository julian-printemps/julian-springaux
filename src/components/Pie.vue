<template>
  <div :class="classlist">
    <div class="pie">
      <div class="pie--half left"></div>
      <div class="pie--half right"></div>
      <div class="pie--inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skill-pie',
  props: {
    currentLevel: Number
  },
  data () {
    return {
      previousPieLevel: 0
    }
  },
  computed: {
    classlist: function () {
      if (this.previousPieLevel > this.currentLevel) {
        this.previousPieLevel = this.currentLevel
        return 'backward progress-' + this.currentLevel
      } else {
        this.previousPieLevel = this.currentLevel
        return 'forward big_pie progress-' + this.currentLevel
      }
    }
  }
}
</script>
