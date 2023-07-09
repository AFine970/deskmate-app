import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from 'vue-router';

const SiteChart = () => import('@/views/site_chart/SiteChart.vue');
const InfoList = () => import('@/views/student_info/InfoList.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/chart',
  },
  { path: '/chart', component: SiteChart },
  { path: '/list', component: InfoList },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
