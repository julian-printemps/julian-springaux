import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import About from '~/store/about'
import Skill from '~/store/skill'
import Work from '~/store/work'

let aboutStore: About
let skillStore: Skill
let workStore: Work

function initialiseStores(store: Store<any>): void {
  aboutStore = getModule(About, store)
  skillStore = getModule(Skill, store)
  workStore = getModule(Work, store)
}

export {
  initialiseStores,
  aboutStore,
  skillStore,
  workStore
}