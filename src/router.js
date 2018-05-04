import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import StreetSmarts from './views/StreetSmarts.vue'
import Venture from './views/Venture.vue'
import ReEmploy from './views/ReEmploy.vue'
import Animations from './views/Animations.vue'
import Drawings from './views/Drawings.vue'
import RouterView from './views/RouterView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/works',
      name: 'works',
      component: RouterView,
      children: [
        {
          name: 'streetsmarts',
          path: 'streetsmarts',
          component: StreetSmarts
        },
        {
          name: 'venture',
          path: 'venture',
          component: Venture
        },
        {
          name: 'reemploy',
          path: 'reemploy',
          component: ReEmploy
        }
      ]
    },
    {
      path: '/fun',
      name: 'fun',
      component: RouterView,
      children: [
        {
          name: 'animations',
          path: 'animations',
          component: Animations
        },
        {
          name: 'drawings',
          path: 'drawings',
          component: Drawings
        }
      ]
    }
  ]
})
