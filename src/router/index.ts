import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';
import { createGuard } from './guard';

// 从modules目录动态导入路由
const modules = import.meta.glob('./modules/**/*.ts', { eager: true }) as {
  [key: string]: {
    default: RouteRecordRaw[];
  };
};
const routes: RouteRecordRaw[] = [];
Object.keys(modules).forEach((key) => {
  const module = modules[key].default || {};
  const modList = Array.isArray(module) ? [...module] : [module];
  routes.push(...modList);
});

const router: Router = createRouter({
  // 新的vue-router4 使用 history路由模式 和 base前缀
  history: createWebHistory(import.meta.env.VITE_BASE),
  routes,
});

createGuard(router);

export { routes };
export default router;
