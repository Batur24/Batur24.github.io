import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Main from '@/components/Main'

Vue.use(Router)

let r = [
  {
    path: '/',
    name: 'Main',
    component: Main
  }
]

export default new Router({
  routes: r
})
