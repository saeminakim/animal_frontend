import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'animals',
    component: () => import('../views/AnimalList.vue')
  },
  {
    path: '/animals',
    name: 'animals',
    component: () => import('../views/AnimalList.vue')
  },
  {
    path: '/animals/:id',
    name: 'animalDetails',
    component: () => import('../views/AnimalDetails.vue'),
  },
  {
    path: '/applytype',
    name: 'applytype',
    component: () => import('../views/ApplicationType.vue'),
  },
  {
    path: '/apply/:id',
    name: 'apply',
    component: () => import('../views/NewApp.vue')
  },
  {
    path: '/applied',
    name: 'applied',
    component: () => import('../views/Applied.vue'),
  },
  {
    path: '/application',
    name: 'application',
    component: () => import('../views/getApp.vue')
  },
  {
    path: '/application/:id',
    name: 'appDetails',
    component: () => import('../views/AppDetails.vue')
  },
  {
    path: '/application/edit/:id',
    name: 'editApp',
    component: () => import('../views/EditApp.vue')
  },
  {
    path: '/edited',
    name: 'edited',
    component: () => import('../views/Edited.vue')
  },
  {
    path: '/cancel',
    name: 'cancel',
    component: () => import('../views/CancelApp.vue')
  },
  {
    path: '/canceled',
    name: 'canceled',
    component: () => import('../views/Canceled.vue')
  },


]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
