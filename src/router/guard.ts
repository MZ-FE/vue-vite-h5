import NProgress from 'nprogress';
import { Router } from 'vue-router';
import { useRouteStore } from '@/store/modules/route';

export function createGuard(router: Router) {
  /**
   * @description: 全局路由前置守卫，在进入路由前触发，导航在所有守卫 resolve 完之前一直处于等待中。
   * @param {RouteLocationNormalized} to  即将要进入的目标
   * @param {RouteLocationNormalizedLoaded} from  当前导航正在离开的路由
   * @return {*}
   */
  router.beforeEach((to, from) => {
    console.log('全局路由前置守卫');
    console.log('from', from);
    console.log('to', to);
    if (!NProgress.isStarted()) {
      NProgress.start();
    }
  });

  router.afterEach((to, from) => {
    // 设置页面标题
    document.title = (to.meta.title as string) || import.meta.env.VITE_APP_TITLE;
    // 在这里设置需要缓存的组件名称
    const { keepAliveComponents } = useRouteStore();
    const currentComName: any = to.matched.find((item) => item.name === to.name)?.name;
    if (currentComName && !keepAliveComponents.includes(currentComName) && to.meta?.keepAlive) {
      // 需要缓存的组件
      keepAliveComponents.push(currentComName);
    } else if (!to.meta?.keepAlive) {
      // 不需要缓存的组件
      const index = keepAliveComponents.findIndex((name) => name === currentComName);
      if (index !== -1) {
        keepAliveComponents.splice(index, 1);
      }
    }
    console.log('全局路由后置守卫');
    console.log('from', from);
    console.log('to', to);
    NProgress.done();
  });
}
