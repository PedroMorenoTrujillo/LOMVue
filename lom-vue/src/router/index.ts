import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import IntroView from '../views/IntroView.vue'
import QuizView from '../views/QuizView.vue'
import ResumeView from '../views/ResumeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'intro',
    component: IntroView
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: QuizView
  },
  {
    path: '/resume',
    name: 'resume',
    component: ResumeView
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
