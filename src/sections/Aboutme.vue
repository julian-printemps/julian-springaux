<template>
  <div class="about_section">
    <section id="about" class="section grid-container">
      <h2 class="section--title"><strong>{{title}}</strong></h2>

      <div class="grid-x align-center align-middle">
        <div class="cell small-12 medium-10">
          <ul class="grid-x align-medium">
            <li class="skill_block--item cell small-12 medium-6" v-for="item in aboutInfos">
              <info-item :info="item.info"></info-item>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="tokyo_block">
      <h3 class="tokyo_block--title">I'm writing code in Tokyo</h3>
      <div class="tokyo_block--bg"></div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import Info from '@/components/Info'

Vue.component('info-item', Info)

export default {
  name: 'about-section',
  props: {
  },
  data () {
    return {
      title: 'Who I am',
      transitionName: 'slide-left',
      aboutInfos: [
        { info: {
          'id': 1,
          'title': 'From France',
          'iconset': 'france'
        }},
        { info: {
          'id': 2,
          'title': 'Speak English, French and learning Japanese',
          'iconset': 'lang'
        }},
        { info: {
          'id': 3,
          'title': 'Live in Japan, worked in Switzerland, travel to Taiwan',
          'iconset': 'travel'
        }},
        { info: {
          'id': 4,
          'title': 'Have a BSc(Hons) computer science from Oxford Brooks, and a French BSc in Web technologies',
          'iconset': 'degree'
        }},
        { info: {
          'id': 5,
          'title': '6 years of experience, in France, Switzerland and Japan',
          'iconset': 'experience'
        }},
        { info: {
          'id': 6,
          'title': 'Love skiing and skateboarding',
          'iconset': 'sport'
        }}
      ]
    }
  }
}
</script>
