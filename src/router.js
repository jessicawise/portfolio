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
import ProjectOne from './views/fidelity/project_1.vue'
import ProjectTwo from './views/fidelity/project_2.vue'

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
          component: RouterView,
          children: [
            {
              name: 'index',
              path: '',
              component: Fidelity,
            },
            {
              name: 'project_one',
              path: 'project-1',
              component: ProjectOne,
            },
            {
              name: 'project_two',
              path: 'project-2',
              component: ProjectTwo,
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
