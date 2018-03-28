import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Skills from '@/sections/Skills'
import Aboutme from '@/sections/Aboutme'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hashbang: false,
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        { path: '/', component: Aboutme },
        { path: '/skills', component: Skills }
      ]
    }
  ]
})
