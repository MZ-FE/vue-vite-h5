<template>
  <van-nav-bar title="404标题" left-text="返回" left-arrow @click-left="goBack" />

  <van-empty image="network" description="404" />
</template>

<script setup lang="ts">
const router = useRouter();
const goBack = () => {
  router.push({
    name: 'home',
  });
};
</script>
