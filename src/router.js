import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Storage from './components/Storage'
import Reserve from './components/Reserve'
import Summary from './components/Summary'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        { path: '/summary', name: 'summary', component: Summary },
        { path: '/storage', name: 'storage', component: Storage },
        { path: '/reserve', name: 'reserve', component: Reserve }
      ],
      redirect: '/summary'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
