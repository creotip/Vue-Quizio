import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

Vue.use(VueRouter);
Vue.use(Meta);

import Home from '../pages/Home.vue'
import Quiz from '../pages/Quiz.vue'
import Cheatsheet from '../pages/Cheatsheet.vue'

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Home,
      name: "home"
    },

    {
      path: '/quiz',
      component: Quiz,
      name: "quiz"
    },
    {
      path: '/cheatsheet',
      component: Cheatsheet,
      name: "cheatsheet"
    },


  ]
})



