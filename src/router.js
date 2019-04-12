import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import StreetSmarts from './views/streetsmarts/index.vue'
import FleetTracker from './views/streetsmarts/fleet-tracker.vue'
import Venture from './views/venture/index.vue'
import Fidelity from './views/fidelity/index.vue'
import Fun from './views/fun/index.vue'

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
          component: RouterView,
          children: [
            {
              name: 'index',
              path: '',
              component: StreetSmarts,
            },
            {
              name: 'fleet_tracker',
              path: 'fleet-tracker',
              component: FleetTracker,
            }
          ]
        },
        {
          name: 'venture',
          path: 'venture',
          component: Venture
        },
        {
          name: 'fidelity',
          path: 'fidelity',
          component: RouterView,
          children: [
            {
              name: 'index',
              path: '',
              component: Fidelity,
            },
            {
              name: 'fleet_tracker',
              path: 'fleet-tracker',
              component: FleetTracker,
            }
          ]
        }
      ]
    },
    {
      path: '/fun',
      name: 'fun',
      component: RouterView,
      children: [
        {
          name: 'index',
          path: '',
          component: Fun,
        },
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
