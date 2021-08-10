import Vue from 'vue'
import VueRouter from 'vue-router'
import TrafficLight from '../views/TrafficLight.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'home',
    path: '/',
    component: TrafficLight,
    props: { curCol: 'none' },
  },
  {
    name: 'red',
    path: '/red',
    component: TrafficLight,
    props: { curCol: 'red', time: 10000 },
  },
  {
    name: 'yellow',
    path: '/yellow',
    component: TrafficLight,
    props: { curCol: 'yellow', time: 3000 },
  },
  {
    name: 'green',
    path: '/green',
    component: TrafficLight,
    props: { curCol: 'green', time: 15000 },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'home') {
    router.push('red');
  } else {
    next();
  }
});

export default router
