<template>
  <div>
    <van-nav-bar class="fixed w-100vw" title="404标题" left-text="返回" left-arrow @click-left="goBack" />
    <van-empty class="mt-[var(--van-nav-bar-height)]" image="network" description="404" />
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store/modules/global';

const globalStore = useGlobalStore();
const router = useRouter();
const goBack = () => {
  globalStore.transitionName = 'fade-right';
  router.push({
    name: 'home-index',
  });
};
</script>
