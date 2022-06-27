<template>
  <van-nav-bar :title="t('language')" left-text="返回" left-arrow />

  <van-skeleton title :row="3" />

  <van-radio-group v-model="locale">
    <van-radio name="zh-CN">中文</van-radio>
    <van-radio name="en">English</van-radio>
  </van-radio-group>

  <i-carbon-accessibility />
  <i-mdi-account-box class="text-2rem" />
  <i-custom-avatar />

  <div class="mt-6 text-30px">{{ t('welcome to') }}1122333</div>
  <div>
    <van-button type="primary" @click="router.push({ name: 'process' })">
      <span class="font-sans">MarkdownPage</span>
    </van-button>
    <van-button type="success" @click="router.push({ name: '401' })">401</van-button>
    <van-button type="default" @click="router.push({ name: '404' })">404</van-button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const { t, locale } = useI18n();
</script>

<style lang="scss" scoped>
a {
  @apply text-sky-400 hover:(text-sky-600) transition-all ease-out duration-100;
}
</style>
