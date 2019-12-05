<template>
  <article class="work_block">
    <a
      :href="work.url"
      :title="work.title"
      class="work_block--link"
      target="_blank"
    >
      <section class="work_block--section">
        <h3 class="work_block--title">
          <strong>{{ work.title }}</strong>
        </h3>
        <p class="work_block--category">{{ work.category }}</p>
      </section>
    </a>
    <figure class="work_block--image">
      <img :src="work.image" :alt="work.title">
    </figure>
  </article>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class WorkItem extends Vue {
    @Prop({
      type: Object,
      default: 0
    }) readonly work: any | undefined
}
</script>
