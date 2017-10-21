import Vue from 'vue'
import Router from 'vue-router'

import Bulma from 'bulma'
import 'bulma/css/bulma.css'

import Home from '@/components/Home'
import Examples from '@/components/Examples'
import Accelerometer from '@/components/Accelerometer'
import Gyroscope from '@/components/Gyroscope'
import Geolocation from '@/components/Geolocation'
import Documentation from '@/components/Documentation'
import About from '@/components/About'
import GetStarted from '@/components/GetStarted'

Vue.use(Router)
Vue.use(Bulma)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Examples',
      name: 'Examples',
      component: Examples,
      children : [
        {
          path: 'Accelerometer',
          name: 'Accelerometer',
          component: Accelerometer
        },
        {
          path: 'Gyroscope',
          name: 'Gyroscope',
          component: Gyroscope
        },
        {
          path: 'Geolocation',
          name: 'Geolocation',
          component: Geolocation
        }
      ]
    },
    {
      path: '/Documentation',
      name: 'Documentation',
      component: Documentation,
      children : [
        {
          path: 'GetStarted',
          name: 'GetStarted',
          component: GetStarted
        },
        {
          path: 'About',
          name: 'About',
          component: About
        }
      ]
    },
  ]
})
