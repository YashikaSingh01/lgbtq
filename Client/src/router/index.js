import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingPage from '../views/LandingPage.vue'
import Blogs from '../views/Blogs.vue'
import Counselling from '../views/Counselling.vue'
import Blog1 from '../views/Blog1.vue'
import AddBlog from '../views/AddBlog.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landingPage',
    component: LandingPage
  },
  
  // {
  //   path: '/register',
  //   name: 'register',
  //   component: () => import('../views/Register.vue')
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/blog1',
    name: 'blog1',
    component: Blog1
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: Blogs
  },
  {
    path: '/blogs/:id',
    name: 'blog1',
    component: Blog1
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/counselling',
    name: 'counselling',
    component: Counselling
  },
  {
    path: '/addBlog',
    name: 'AddBlog',
    component: AddBlog
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router