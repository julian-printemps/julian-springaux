import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { Skill, SkillState } from '~/types'

@Module({
  name: 'skill',
  stateFactory: true,
  namespaced: true,
})
export default class SkillModule extends VuexModule implements SkillState {
  skills: Skill[] = []

  @Mutation
  setSkills(skills: Skill[]) {
    this.skills = skills
  }

  @Action
  async getSkills() {
    const skills = [
      {
        id: 1,
        title: 'Nuxt.js, Vue.js, Javacript',
        level: 100
      },
      {
        id: 2,
        title:
          'HTML5, CSS3, SCSS, Foundation, Material Design',
        level: 90
      },
      {
        id: 3,
        title: 'Firestore, Google Cloud Platform, AWS',
        level: 80
      },
      {
        id: 4,
        title: 'UI/UX, SPA, Web design, Web performance',
        level: 70
      },
      {
        id: 5,
        title: 'Rails API, Wordpress API, PHP',
        level: 60
      },
      {
        id: 6,
        title: 'Grunt, Gulp, Webpack',
        level: 50
      },
      {
        id: 7,
        title: 'Photoshop, Illustrator, Xdesign, VS Code, Webstorm',
        level: 40
      }
    ]
    this.setSkills(skills)
  }
}