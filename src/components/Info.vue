<template>
  <article class="info_article">
    <section class="grid-x grid-padding-x align-middle align-center">
      <h3 class="info_article--title cell auto small-order-2">{{info.title}}</h3>

      <div v-if="info.iconset === 'france'" class="cell shrink small-order-1">
        <div class="info_article--icon--holder france">
          <svg class="info_article--icon icon-cheese"><use xlink:href="#icon-cheese"></use></svg>
          <svg class="info_article--icon icon-glass"><use xlink:href="#icon-glass"></use></svg>
        </div>
      </div>
      <div v-else-if="info.iconset === 'lang'" class="cell shrink small-order-1">
        <svg class="info_article--icon icon-bubbles2"><use xlink:href="#icon-bubbles2"></use></svg>
      </div>
      <div v-else-if="info.iconset === 'travel'" class="cell shrink small-order-1">
        <div class="info_article--icon--holder countries">
          <svg class="info_article--icon icon-switzerland"><use xlink:href="#icon-switzerland-g"></use></svg>
          <svg class="info_article--icon icon-taiwan"><use xlink:href="#icon-taiwan-g"></use></svg>
          <svg class="info_article--icon icon-japan"><use xlink:href="#icon-japan-g"></use></svg>
        </div>
      </div>
      <div v-else-if="info.iconset === 'experience'" class="cell shrink small-order-1">
        <svg class="info_article--icon icon-embed"><use xlink:href="#icon-embed"></use></svg>
      </div>
      <div v-else-if="info.iconset === 'degree'" class="cell shrink small-order-1">
        <svg class="info_article--icon icon-library"><use xlink:href="#icon-library"></use></svg>
      </div>
      <div v-else-if="info.iconset === 'sport'" class="cell shrink small-order-1">
        <svg class="info_article--icon icon-mountain"><use xlink:href="#icon-mountain"></use></svg>
      </div>

    </section>
  </article>
</template>

<script>
export default {
  name: 'info-item',
  props: {
    info: Object
  },
  computed: {
  },
  data () {
    return {
    }
  }
}
</script>
