<template>
  <article class="work_block">
    <a :href="work.url" :title="work.title" class="work_block--link" target="_blank">
      <section class="work_block--section">
        <h3 class="work_block--title"><strong>{{work.title}}</strong></h3>
        <p class="work_block--category">{{work.category}}</p>
      </section>
    </a>
    <figure class="work_block--image">
      <img v-lazy="work.image" :alt="work.title">
    </figure>
  </article>
</template>

<script>
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: '/static/images/oval.svg',
  attempt: 1
})

export default {
  name: 'work-item',
  props: {
    work: Object
  },
  data () {
    return {
    }
  }
}
</script>
