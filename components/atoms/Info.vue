<template>
  <article class="info_article">
    <section class="grid-x grid-padding-x align-middle align-center">
      <h3 class="info_article--title cell auto small-order-2">
        {{ info.title }}
      </h3>

      <div
        v-if="info.iconset === 'france'"
        class="cell shrink small-order-1"
      >
        <div class="info_article--icon--holder france">
          <svg class="info_article--icon icon-cheese">
            <use xlink:href="#icon-cheese" />
          </svg>
          <svg class="info_article--icon icon-glass">
            <use xlink:href="#icon-glass" />
          </svg>
        </div>
      </div>
      <div
        v-else-if="info.iconset === 'lang'"
        class="cell shrink small-order-1"
      >
        <svg class="info_article--icon icon-bubbles2">
          <use xlink:href="#icon-bubbles2" />
        </svg>
      </div>
      <div
        v-else-if="info.iconset === 'travel'"
        class="cell shrink small-order-1"
      >
        <div class="info_article--icon--holder countries">
          <svg class="info_article--icon icon-switzerland">
            <use xlink:href="#icon-switzerland-g" />
          </svg>
          <svg class="info_article--icon icon-taiwan">
            <use xlink:href="#icon-taiwan-g" />
          </svg>
          <svg class="info_article--icon icon-japan">
            <use xlink:href="#icon-japan-g" />
          </svg>
        </div>
      </div>
      <div
        v-else-if="info.iconset === 'experience'"
        class="cell shrink small-order-1"
      >
        <svg class="info_article--icon icon-embed">
          <use xlink:href="#icon-embed" />
        </svg>
      </div>
      <div
        v-else-if="info.iconset === 'degree'"
        class="cell shrink small-order-1"
      >
        <svg class="info_article--icon icon-library">
          <use xlink:href="#icon-library" />
        </svg>
      </div>
      <div
        v-else-if="info.iconset === 'sport'"
        class="cell shrink small-order-1"
      >
        <svg class="info_article--icon icon-mountain">
          <use xlink:href="#icon-mountain" />
        </svg>
      </div>
    </section>
  </article>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class InfoItem extends Vue {
    @Prop({
      type: Object,
      default: null
    }) readonly info: any | undefined
}
</script>
