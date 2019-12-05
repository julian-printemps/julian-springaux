import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { Work, WorkState } from '~/types'

@Module({
  name: 'work',
  stateFactory: true,
  namespaced: true,
})
export default class WorkModule extends VuexModule implements WorkState {
  works: Work[] = []

  @Mutation
  setWorks(works: Work[]) {
    this.works = works
  }

  @Action
  async getWorks() {
    const works = [
      {
        title: 'Sonbei',
        category: 'Personal project / Vue.js (Nuxt) / Firestore & Google Cloud Platform setup / Design',
        image: 'https://sonbei.live/img/ogp.jpg',
        url: 'https://sonbei.live/'
      },
      {
        title: 'Tekiten',
        category: 'Vue.js (Nuxt) / SSR / Data structure',
        image: 'https://tekiten.jp/img/ogp.jpg',
        url: 'https://tekiten.jp/'
      },
      {
        title: 'Santouka',
        category: 'Vue.js (Nuxt)',
        image: 'http://santouka-usa.com/img/ogp.png',
        url: 'https://santouka-usa.com/'
      },
      {
        title: 'Pikejapan',
        category: 'Vue.js (Nuxt) / Design',
        image: 'https://pikejapan.com/img/ogp.jpg',
        url: 'https://pikejapan.com/'
      },
      {
        title: 'Kirinzi',
        category: 'Wordpress / Frontend',
        image: '/images/sites/kirinzi.png',
        url: 'http://kirinzi.jp/'
      },
      {
        title: 'GrasPP',
        category: 'Wordpress / Frontend',
        image: '/images/sites/graspp.png',
        url: 'http://www.pp.u-tokyo.ac.jp/'
      }
    ]
    this.setWorks(works)
  }
}