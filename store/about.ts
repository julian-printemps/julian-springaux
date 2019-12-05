import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { About, AboutState } from '~/types'

@Module({
  name: 'about',
  stateFactory: true,
  namespaced: true,
})
export default class AboutModule extends VuexModule implements AboutState {
  abouts: About[] = []

  @Mutation
  setAbouts(abouts: About[]) {
    this.abouts = abouts
  }

  @Action
  async getAbouts() {
    const abouts = [
      {
        id: 1,
        title: 'From France',
        iconset: 'france'
      },
      {
        id: 2,
        title: 'Speak English, French and learning Japanese',
        iconset: 'lang'
      },
      {
        id: 3,
        title: 'Live in Japan, worked in Switzerland, travel in Asia',
        iconset: 'travel'
      },
      {
        id: 4,
        title: 'Have a BSc(Hons) computer science from Oxford Brooks, and a French BSc in Web technologies',
        iconset: 'degree'
      },
      {
        id: 5,
        title: '7 years of experience, in France, Switzerland and Japan',
        iconset: 'experience'
      },
      {
        id: 6,
        title: 'Love skiing and skateboarding',
        iconset: 'sport'
      }
    ]
    this.setAbouts(abouts)
  }
}