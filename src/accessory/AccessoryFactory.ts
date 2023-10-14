import { DeviceType } from '../core/MideaConstants';
import { MideaAccessory, MideaPlatform } from '../platform';
import AirConditionerAccessory from './AirConditionerAccessory';
import DehumidifierAccessory from './DehumidifierAccessory';
import MideaDevice from '../core/MideaDevice';
import { DeviceConfig } from '../platformUtils';
import MideaACDevice from '../devices/ac/MideaACDevice';
import MideaA1Device from '../devices/a1/MideaA1Device';

export default class AccessoryFactory {
  public static createAccessory<T extends MideaDevice>(
    platform: MideaPlatform,
    accessory: MideaAccessory,
    device: T,
    configDev: DeviceConfig,
  ) {
    switch (device.type) {
      case DeviceType.AIR_CONDITIONER:
        return new AirConditionerAccessory(
          platform,
          accessory,
          device as unknown as MideaACDevice,
          configDev,
        );
      case DeviceType.DEHUMIDIFIER:
        return new DehumidifierAccessory(
          platform,
          accessory,
          device as unknown as MideaA1Device,
          configDev,
        );
    }
  }
}
