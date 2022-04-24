<template>
  <van-nav-bar :title="t('language')" left-text="返回" left-arrow />

  <van-skeleton title :row="3" />

  <van-radio-group v-model="locale">
    <van-radio name="zh-CN">中文</van-radio>
    <van-radio name="en">English</van-radio>
  </van-radio-group>

  <icon-accessibility />
  <icon-account-box style="font-size: 2em; color: red" />

  <div class="mt-6">{{ t('welcome to') }}1122333</div>
  <div>
    <van-button type="primary" @click="router.push({ name: 'process' })">MarkdownPage</van-button>
    <van-button type="success" @click="router.push({ name: '401' })">401</van-button>
    <van-button type="default" @click="router.push({ name: '404' })">404</van-button>
  </div>
</template>

<script setup lang="ts">
import IconAccessibility from '~icons/carbon/accessibility';
import IconAccountBox from '~icons/mdi/account-box';

const router = useRouter();

const { t, locale } = useI18n();
</script>

<style lang="scss" scoped>
a {
  @apply text-sky-400 hover:(text-sky-600) transition-all ease-out duration-100;
}
</style>
