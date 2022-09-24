import { defineStore } from 'pinia';
import { ref } from 'vue';

// 可以使用compositionAPI定义store，更加简洁健壮
export const useGlobalStore = defineStore('global', () => {
  const isDarkTheme = ref(false);
  const transitionName = ref('fade');
  function toggleTheme() {
    isDarkTheme.value = !isDarkTheme.value;
  }
  return { isDarkTheme, transitionName, toggleTheme };
});
