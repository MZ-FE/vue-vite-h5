// todo: 添加类型声明
declare module '@dolphin-iot/jsbridge-sdk' {
  export const Bridge: {
    getAppInfo(): Meiju.AppInfo;
    getHomeInfo(params: { homeId: string; isCurrentFamily: number; hasRoomAndDeviceInfo: number }): Meiju.HomeInfo;
    getUserInfo(): Meiju.UserInfo;
    getDeviceInfo(): Meiju.DeviceInfo;
  };
}
