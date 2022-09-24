<template>
  <van-config-provider
    :theme="globalStore.isDarkTheme ? 'dark' : 'light'"
    :theme-vars="themeVars"
    :theme-vars-dark="themeVarsDark"
    :theme-vars-light="themeVarsLight"
  >
    <slot></slot>
  </van-config-provider>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '@/store/modules/global';

const globalStore = useGlobalStore();
// 可以在这配置主题
const themeVars = {};
const themeVarsLight = {};
const themeVarsDark = {};
</script>
