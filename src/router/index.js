import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/Main'),
    redirect: '/blogs',
    children: [
      {
        path: 'blogs',
        component: () => import('@/views/BlogItemList')
      },
      {
        path: 'detail/:blogId',
        component: () => import('@/views/BlogDetail')
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior () {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router
