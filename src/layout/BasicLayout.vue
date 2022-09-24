<template>
  <!-- 外面可以按需添加一些布局组件 -->
  <router-view v-slot="{ Component, route }">
    <transition :name="globalStore.transitionName" mode="out-in" appear>
      <keep-alive :include="keepAliveComponents">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </transition>
  </router-view>
</template>
<script setup lang="ts">
import { useGlobalStore } from '@/store/modules/global';
import { useRouteStore } from '@/store/modules/route';

const globalStore = useGlobalStore();
const { keepAliveComponents } = useRouteStore();
</script>
