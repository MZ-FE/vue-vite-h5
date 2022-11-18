<template>
  <div>
    <van-nav-bar :title="t('language')" fixed placeholder />
    <van-skeleton title :row="3" class="mt-30px" />
    <van-radio-group v-model="globalStore.isDarkTheme" class="mt-30px">
      <van-radio :name="true">深色模式</van-radio>
      <van-radio :name="false">浅色模式</van-radio>
    </van-radio-group>
    <van-radio-group v-model="locale">
      <van-radio name="zh-CN">中文</van-radio>
      <van-radio name="en">English</van-radio>
    </van-radio-group>

    <p class="mt-30px text-white">unplugin-icons图标：</p>
    <i-mdi-account-box class="text-30px" />
    <i-custom-avatar class="text-30px" />
    <p>unocss图标：</p>
    <div class="i-line-md-loading-alt-loop text-30px"></div>
    <div class="i-custom-avatar text-30px"></div>
    <p>iconify在线图标：</p>
    <svg-icon icon="line-md:downloading-loop" class="text-30px"></svg-icon>
    <svg-icon icon="line-md:loading-twotone-loop" class="text-30px"></svg-icon>

    <div class="mt-6 text-30px">{{ t('welcome to') }}1122333</div>
    <div>
      <van-button type="primary" @click="toProcess">
        <span class="font-sans">MarkdownPage</span>
      </van-button>
      <van-button type="success" @click="to401">401</van-button>
      <van-button type="default" @click="to404">404</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store/modules/global';

const router = useRouter();
const globalStore = useGlobalStore();
const { t, locale } = useI18n();
const toProcess = () => {
  globalStore.transitionName = 'fade-out';
  router.push({ name: 'process' });
};
const to401 = () => {
  globalStore.transitionName = 'fade-top';
  router.push({ name: '401' });
};
const to404 = () => {
  globalStore.transitionName = 'fade-left';
  router.push({ name: '404' });
};
</script>
