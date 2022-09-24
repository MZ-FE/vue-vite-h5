import { ref } from 'vue';
import { defineStore } from 'pinia';
import { routes as constantRoute } from '@/router';

export const useRouteStore = defineStore('route', () => {
  const keepAliveComponents = ref<string[]>([]);
  const routes = ref(constantRoute);
  return { keepAliveComponents, routes };
});
