import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Storage from './views/Storage'
import Reserve from './views/Reserve'
import Summary from './views/Summary'

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
    }
  ]
})
