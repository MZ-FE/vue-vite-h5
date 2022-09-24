<template>
  <div>
    <van-nav-bar title="MD转HTML" left-text="返回" left-arrow @click-left="goBack" />
    <ZhProcess></ZhProcess>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store/modules/global';

const globalStore = useGlobalStore();
const router = useRouter();
const goBack = () => {
  globalStore.transitionName = 'fade-in';
  router.push({
    name: 'home-index',
  });
};
</script>
