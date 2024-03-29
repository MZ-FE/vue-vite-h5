import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Bridge } from '@dolphin-iot/jsbridge-sdk';
import { useUserStore } from './user';

export const useHomeStore = defineStore('home', () => {
  const homeInfo = ref<Meiju.HomeInfo>();
  async function updateHomeInfo() {
    const userStore = useUserStore();
    if (!userStore.userInfo) {
      await userStore.updateUserInfo();
    }
    const res = await Bridge.getHomeInfo({
      homeId: userStore.userInfo!.homeId,
      isCurrentFamily: 1,
      hasRoomAndDeviceInfo: 1,
    });
    homeInfo.value = res;
    console.log('获取到家庭信息:', res);
  }
  return { homeInfo, updateHomeInfo };
});
