import { models } from './models';

export const stateResponse: { [key in models]: unknown } = {
  x: {
    fingerprint: 'FIG_0001',
    state: {
      _apiVersion: 2,
      _batteryInsert: true,
      batteryLevel: 0.33,
      _batteryState: 'disconnect',
      _cameraError: [],
      _captureStatus: 'idle',
      _capturedPictures: 0,
      _currentMicrophone: 'Internal',
      _currentStorage: 'IN',
      _function: 'normal',
      _latestFileUrl: 'https://codetricity.github.io/fake-storage/files/100RICOH/R0010002.JPG',
      _mySettingChanged: false,
      _pluginRunning: false,
      _pluginWebServer: false,
      _recordableTime: 0,
      _recordedTime: 0,
      _storageID: '90014a68423861503e030277e0c2b500',
      storageUri: 'https://codetricity.github.io/fake-storage/files/',
    },
  },
  z1: {
    fingerprint: 'FIG_0001',
    state: {
      _apiVersion: 2,
      batteryLevel: 0.33,
      _batteryState: 'disconnect',
      _cameraError: [],
      _captureStatus: 'idle',
      _capturedPictures: 0,
      _compositeShootingElapsedTime: 0,
      _function: 'normal',
      _latestFileUrl:
        'http://192.168.1.1/files/150100525831424d42075b53ce68c300/100RICOH/R0010015.JPG',
      _mySettingChanged: false,
      _pluginRunning: false,
      _pluginWebServer: false,
      _recordableTime: 0,
      _recordedTime: 0,
      storageUri: 'http://192.168.1.1/files/150100525831424d42075b53ce68c300/',
    },
  },
};
