declare namespace Meiju {
  interface AppInfo {
    appPlatform: string;
    appVersion: string;
  }
  interface DeviceInfo {
    deviceId: string;
    deviceName: string;
    deviceType: string;
    deviceSn: string;
    deviceSnDecrypt: string;
    deviceSubType: string;
    roomId: string;
    roomName: string;
    isOnline: string;
    masterId: string;
    attrs: string;
    deviceIcon: string;
    subDeviceIcon: string;
    deviceSn8: string;
    isLimit?: boolean;
    status?: string;
  }
  interface HomeInfo {
    homeId: string;
    isOwner: string;
    isLocal: string;
    roleId: string;
    homeName: string;
    address: string;
    areaid: string;
    coordinate: string;
    deviceList: Array<Meiju.DeviceInfo>;
    roomList: Array<Meiju.Room>;
    selectRoomId: string;
  }
  interface UserInfo {
    uid: string;
    userId: string;
    avatar: string;
    nickName: string;
    mobile: string;
    userName: string;
    signature: string;
    email: string;
    sex: string;
    homeId: string;
  }
  interface Room {
    roomId: string;
    name: string;
    des: string;
    icon: string;
    isDefault: string;
  }
}
