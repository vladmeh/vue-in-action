import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'
import Form from '../components/Form'
import Product from '../components/Product'

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
  },
  {
    path: '/product/:id',
    name: 'Id',
    component: Product,
    props: true
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
