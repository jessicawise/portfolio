import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import StreetSmarts from './views/streetsmarts/index.vue'
import FleetTracker from './views/streetsmarts/fleet-tracker.vue'
import TollRedesign from './views/streetsmarts/tolls.vue'
import AutomatedMessaging from './views/streetsmarts/automated_messaging.vue'

import Venture from './views/venture/index.vue'
import Fidelity from './views/fidelity/index.vue'

// @Jessica: Rename these to the project names
import FidelityRedesign from './views/fidelity/redesign.vue'
import Fidelity17a6 from './views/fidelity/17a6.vue'

import Fun from './views/fun/index.vue'

import Animations from './views/Animations.vue'
import Drawings from './views/Drawings.vue'
import RouterView from './views/RouterView.vue'
import Route404 from './views/404.vue'

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
          component: StreetSmarts,
          children: [
            {
              name: 'ss-index',
              path: '',
              redirect: 'fleet-tracker'
            },
            {
              name: 'fleet_tracker',
              path: 'fleet-tracker',
              component: FleetTracker,
            },
            {
              name: 'tolls',
              path: 'tolls',
              component: TollRedesign,
            },
            {
              name: 'automated_messaging',
              path: 'messaging',
              component: AutomatedMessaging,
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
          component: Fidelity,
          children: [
            {
              name: 'f-index',
              path: '',
              redirect: 'redesign'
            },
            {
              name: 'redesign',
              path: 'redesign',
              component: FidelityRedesign,
            },
            {
              name: '17a6',
              path: '17a6',
              component: Fidelity17a6,
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
    },
    {

      path: '*',
      component: Route404
    }
  ]
})
