import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import Cht1 from '../components/Cht1'
import Cht2 from '../components/Cht2'
import Cht3 from '../components/Cht3'
import Cht4 from '../components/Cht4'
import Cht5 from '../components/Cht5'
import Cht6 from '../components/Cht6'
import Cht7 from '../components/Cht7'
import Cht5ChildTemplate from '../components/Cht5ChildTemplate'
import Cht5ChildEmail from '../components/Cht5ChildEmail'
import Cht5ChildProfile from '../components/Cht5ChildProfile'

const template1 = {
  template: '<div></div>'
};

const notFoundTemplate = {
  template: '<div>Not Found 404</div>'
}

const graceTemplate = {
  template: '<div>Grace</div>'
}

const routes = [
  { path: '/', component: template1 },
  { path: '/cht1', component: Cht1 },
  { path: '/cht2', component: Cht2 },
  { path: '/cht3', component: Cht3 },
  { path: '/cht4', component: Cht4 },
  { path: '/cht5/:username', component: Cht5 },
  { path: '/cht5/:username/post/:id', component: Cht5 },
  { path: '/cht5/user/:id', component: Cht5 },
  {
    path: '/settings',
    component: Cht5ChildTemplate,
    children: [
      {
        path: 'profile',
        component: Cht5ChildProfile
      },
      {
        path: 'mail',
        component: Cht5ChildEmail
      },
      {
        path: '*',
        component: notFoundTemplate
      }
    ]
  },
  { path: '/cht0', redirect: '/cht1' },
  {
    path: '*',
    component: notFoundTemplate
  },
  {
    path: '/grace',
    name: 'grace-name',
    component: graceTemplate

  },
  {
    path: '/Cht6',
    component: Cht6
  },
  {
    path: '/Cht7',
    component: Cht7
  }
]

const router = new VueRouter({
  routes
});

export default router;
