// i18n
import { createI18n } from 'vue-i18n';
import messages from '@intlify/vite-plugin-vue-i18n/messages';
// vue router
import router from '@/router/index';
// pinia
import store from '@/store';
import App from './App.vue';

import 'uno.css';
// 统一浏览器默认样式
import '@unocss/reset/normalize.css';
import '@/assets/styles/index.scss';
import '../locales/zh-CN.json';
import '../locales/en.json';

const i18n = createI18n({
  locale: 'zh-CN',
  messages,
});

const app = createApp(App);

app.use(router).use(store);

app.use(i18n);

app.mount('#app');
