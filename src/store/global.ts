import { defineStore } from 'pinia';
import { ref } from 'vue';

// 可以使用compositionAPI定义store，更加简洁健壮
export const useGlobalSotre = defineStore('global', () => {
  const isDarkTheme = ref(false);
  const isHideNavBar = ref(false);
  const isHideNavBarBack = ref(false);
  const transitionName = ref('none');
  function toggleTheme() {
    isDarkTheme.value = !isDarkTheme.value;
  }
  return { isDarkTheme, isHideNavBar, isHideNavBarBack, transitionName, toggleTheme };
});
