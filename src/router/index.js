import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main'),
    children: [
      {
        path: 'blogs',
        component: () => import('../views/BlogItemList')
      },
      {
        path: 'blogDetail/:blogId',
        component: () => import('../views/BlogDetail')
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
