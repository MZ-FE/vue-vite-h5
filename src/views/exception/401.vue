<template>
  <div>
    <van-nav-bar class="w-100vw" title="401标题" left-text="返回" fixed placeholder left-arrow @click-left="goBack" />
    <van-empty image="network" description="401" />
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store/modules/global';

const globalStore = useGlobalStore();
const router = useRouter();
const goBack = () => {
  globalStore.transitionName = 'fade-bottom';
  router.push({
    name: 'home-index',
  });
};
</script>
