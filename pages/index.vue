<template>
  <div>
    <about />
    <skills />
    <works />
    <contact />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import About from '@/components/modules/About.vue'
import Skills from '@/components/modules/Skills.vue'
import Works from '@/components/modules/Works.vue'
import Contact from '@/components/modules/Contact.vue'

@Component({
  components: {
    About,
    Skills,
    Works,
    Contact
  }
})
export default class Home extends Vue {
}
</script>
