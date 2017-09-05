import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/components/Landing';
import Amount from '@/components/Amount';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/convert',
      name: 'Amount',
      component: Amount,
    },
  ],
});
