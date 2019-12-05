<template>
  <div :class="classlist">
    <div class="magic--inner">
      <svg class="icon icon-magic">
        <use xlink:href="#icon-magic" />
      </svg>
    </div>

    <svg class="magic--star first icon-star">
      <use xlink:href="#icon-star" />
    </svg>
    <svg class="magic--star second icon-star">
      <use xlink:href="#icon-star" />
    </svg>
    <svg class="magic--star large last icon-star">
      <use xlink:href="#icon-star" />
    </svg>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Magic extends Vue {
    @Prop({
      type: Number,
      default: 0
    }) readonly currentLevel: number | undefined

    get classlist () {
      return 'magic magic_' + this.currentLevel
    }
}
</script>
