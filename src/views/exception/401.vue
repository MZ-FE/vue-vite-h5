<template>
  <van-empty image="network" description="401" />
</template>

<script setup lang="ts">
const router = useRouter();
const goBack = () => {
  router.push({
    name: 'home',
  });
};

let show = true;
</script>
