import { createRouter, createWebHistory } from 'vue-router';

import IletsAr from '../components/ar/IletsCoursesPage.vue';
import IletsEn from '../components/en/IletsCoursesPage.vue';

const englishRoutes = [
  { path: '/en/', name: 'IletsEn', component: IletsEn },
];

const arabicRoutes = [
  { path: '/', name: 'IletsAr', component: IletsAr },
];

const routes = [
  ...englishRoutes,
  ...arabicRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;