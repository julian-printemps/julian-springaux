<template>
  <div :class="classlist">
    <div class="magic--inner">
      <svg class="icon icon-magic"><use xlink:href="#icon-magic"></use></svg>
    </div>

    <svg class="magic--star first icon-star"><use xlink:href="#icon-star"></use></svg>
    <svg class="magic--star second icon-star"><use xlink:href="#icon-star"></use></svg>
    <svg class="magic--star large last icon-star"><use xlink:href="#icon-star"></use></svg>
  </div>
</template>

<script>
export default {
  name: 'magic',
  props: {
    currentLevel: Number
  },
  data () {
    return {
    }
  },
  computed: {
    classlist: function () {
      return 'magic magic_' + this.currentLevel
    }
  }
}
</script>
