import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'
import Form from '../components/Form'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'iMain',
    component: Main,
    props: true
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,
    props: true
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
