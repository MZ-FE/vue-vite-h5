import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Bridge } from '@dolphin-iot/jsbridge-sdk';

export const useDeviceStore = defineStore('device', () => {
  const deviceInfo = ref<Meiju.DeviceInfo>();
  async function updateDeviceInfo() {
    const res = await Bridge.getDeviceInfo();
    deviceInfo.value = res;
    console.log('获取到设备信息:', res);
  }
  return { deviceInfo, updateDeviceInfo };
});
