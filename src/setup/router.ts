import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from 'vue-router';
const Home = () => import('@/views/site_chart/SiteChart.vue');
const About = () => import('@/views/student_info/InfoList.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  { path: '/home', component: Home },
  { path: '/chart', component: About },
  { path: '/list', component: About },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
