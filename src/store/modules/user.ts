import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Bridge } from '@dolphin-iot/jsbridge-sdk';

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<Meiju.UserInfo>();
  async function updateUserInfo() {
    const res = await Bridge.getUserInfo();
    userInfo.value = res;
    console.log('获取到用户信息:', res);
  }
  return { userInfo, updateUserInfo };
});
