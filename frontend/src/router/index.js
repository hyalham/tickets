import { createRouter, createWebHistory } from 'vue-router'

import HelloWorld from '/src/components/HelloWorld.vue'

const routes = [
   {
      path: '/helloworld',
      component: HelloWorld,
   },
   // {
   //    path: '/componentb',
   //    component: ComponentB,
   //    // component: () => import('/src/components/ComponentB.vue'),
   // },
]

const router = createRouter({
   history: createWebHistory('/'),
   routes
})

export default router