// 11. Routers
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormInputBindingsA from '../views/FormInputBindingsA.vue'
import ParentComponent from '../views/ParentComponent.vue'
import FourFiveSix from '../views/FourFiveSix.vue'
import MouseTracker from '../views/MouseTracker.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/form-input-bindings-a',
      name: 'Form Input Bindings A',
      component: FormInputBindingsA
    },
    {
      path: '/parent-component',
      name: 'Parent Component',
      component: ParentComponent
    },
    {
      path: '/four-five-six',
      name: 'Four Five Six',
      component: FourFiveSix
    },
    {
      path: '/mouse-tracker',
      name: 'Mouse Tracker',
      component: MouseTracker
    }
  ]
})

export default router
