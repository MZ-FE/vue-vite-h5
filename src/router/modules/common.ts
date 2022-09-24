// 不需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';
import layout from '@/layout/BasicLayout.vue';

const commonRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '123',
      icon: '',
    },
    component: layout,
    children: [
      {
        path: '',
        name: 'home-index',
        meta: {
          isKeeoAlive: true,
        },
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: 'process',
        name: 'process',
        meta: {
          title: 'Template configuration process',
          isKeeoAlive: true,
          icon: '',
        },
        component: () => import('@/views/example/MarkdownPage.vue'),
      },
      {
        path: '401',
        name: '401',
        meta: {
          title: '需要登录',
        },
        component: () => import('@/views/exception/401.vue'),
      },
      {
        path: '404',
        name: '404',
        meta: {
          title: '非常抱歉,页面走丢了',
        },
        component: () => import('@/views/exception/404.vue'),
      },
      {
        path: '/:pathMatch(.*)',
        meta: {},
        redirect: '/404',
      },
    ],
  },
];

export default commonRoutes;
