import { ref } from 'vue';
import { defineStore } from 'pinia';
import { Bridge } from '@dolphin-iot/jsbridge-sdk';

export const useAppSotre = defineStore('app', () => {
  const appPlatform = ref('');
  const appVersion = ref('');
  function isIOS() {
    return appPlatform.value !== 'android';
  }
  function appVersionNumber() {
    const version = appVersion.value
      .split('.')
      .filter((_, index) => index <= 2)
      .map((item) => item.padStart(3, '0'))
      .join('');

    return parseInt(version, 10);
  }
  async function updateAppInfo() {
    const res = await Bridge.getAppInfo();
    appPlatform.value = res.appPlatform;
    appVersion.value = res.appVersion;
    console.log(`获取到的app信息${JSON.stringify(res)}`);
  }
  return { appPlatform, appVersion, isIOS, appVersionNumber, updateAppInfo };
});
