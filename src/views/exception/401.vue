<template>
  <van-nav-bar title="401标题" left-text="返回" left-arrow @click-left="goBack" />

  <van-empty image="network" description="401" />
</template>

<script setup lang="ts">
const router = useRouter();
const goBack = () => {
  router.push({
    name: 'home',
  });
};
</script>
