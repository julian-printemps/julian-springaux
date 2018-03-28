<template>
  <section id="skills" class="section grid-container">
    <h2 class="section--title"><strong>{{title}}</strong></h2>

    <div class="grid-x align-center align-middle">
      <div class="transition_section--holder cell small-12">
        <transition :name="transitionName"
                    enter-active-class="slide-right-enter-active"
                    leave-active-class="slide-left-leave-active">
          <div v-if="show" class="transition_section">
            <div class="grid-x align-center align-middle">
              <div class="cell small-12 medium-10">
                <ul class="skill_block--list grid-x align-center">
                  <li class="skill_block--item cell shrink" v-for="item in allSkills">
                    <strong class="skill_block--all_item">{{item.skill.title}}</strong>
                  </li>
                </ul>
              </div>
              <div class="cell small-12">
                <button type="button" class="button_more back" v-on:click="switchTransition"><i class="icon"></i>Back</button>
              </div>
            </div>
          </div>
        </transition>

        <transition :name="transitionName"
                    enter-active-class="slide-left-enter-active"
                    leave-active-class="slide-right-leave-active">
          <div v-if="!show" class="transition_section">
            <div class="grid-x align-center align-middle">
              <div class="cell small-12 medium-6">
                <ul class="grid-x align-right">
                  <li class="skill_block--item cell small-12" v-for="item in skills">
                    <skill-item :skill="item.skill" :dataLevel.sync="dataLevel" :activeState.sync="activeState"></skill-item>
                  </li>
                </ul>
              </div>
              <div class="cell small-12 medium-6 text-left">
                <!-- <skill-pie :currentLevel="dataLevel" v-bind:previousPieLevel="previousLevel"></skill-pie> -->
                <skill-magic :currentLevel="dataLevel"></skill-magic>
              </div>
              <div class="cell small-12">
                <button type="button" class="button_more" v-on:click="switchTransition">More<i class="icon"></i></button>
              </div>
            </div>
          </div>
        </transition>
      </div>

    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import SkillItem from '@/components/SkillItem'
// import Pie from '@/components/Pie'
import Magic from '@/components/Magic'

Vue.component('skill-item', SkillItem)
// Vue.component('skill-pie', Pie)
Vue.component('skill-magic', Magic)

export default {
  name: 'skills-section',
  props: {
  },
  data () {
    return {
      title: 'What I know',
      transitionName: 'slide-left',
      dataLevel: 75,
      previousLevel: 0,
      activeState: 1,
      show: false,
      skills: [
        { skill: {
          'id': 1,
          'title': 'Javacript, Ember.js, Vue.js',
          'level': 75
        }},
        { skill: {
          'id': 2,
          'title': 'HTML5, SCSS, Foundation, Bulma',
          'level': 90
        }},
        { skill: {
          'id': 3,
          'title': 'PHP, Wordpress',
          'level': 80
        }},
        { skill: {
          'id': 4,
          'title': 'Rails-api, Wordpress API',
          'level': 70
        }}
      ],
      allSkills: [
        { skill: {
          'title': 'Web design'
        }},
        { skill: {
          'title': 'Web performance'
        }},
        { skill: {
          'title': 'Responsive design'
        }},
        { skill: {
          'title': 'UI / UX'
        }},
        { skill: {
          'title': 'Handlebars'
        }},
        { skill: {
          'title': 'Cordova'
        }},
        { skill: {
          'title': 'jQuery'
        }},
        { skill: {
          'title': 'HTML'
        }},
        { skill: {
          'title': 'CSS3'
        }},
        { skill: {
          'title': 'Photoshop / Illustrator / Xdesign'
        }},
        { skill: {
          'title': 'Grunt, Gulp, Webpack'
        }},
        { skill: {
          'title': 'Symfony'
        }},
        { skill: {
          'title': 'Drupal'
        }},
        { skill: {
          'title': 'JSON-ld'
        }},
        { skill: {
          'title': 'AMP'
        }},
        { skill: {
          'title': 'Project management'
        }}
      ]
    }
  },
  methods: {
    switchTransition: function () {
      if (this.show) {
        this.transitionName = 'slide-left'
        this.show = false
      } else {
        this.transitionName = 'slide-right'
        this.show = true
      }
    }
  }
}
</script>
