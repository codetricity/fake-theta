import { VercelRequest, VercelResponse } from '@vercel/node';
import { invalidHeaderParameterError } from '../../src/error';
import { modelHeader } from '../../src/execute/commands/config-headers';
import { getModel } from '../../src/execute/commands/models';
import { log } from '../../src/utils/logger';

const response = {
  x: {
    fingerprint: 'FIG_0001',
    state: {
      _apiVersion: 2,
      _batteryInsert: true,
      batteryLevel: 0.33,
      _batteryState: 'disconnect',
      _batteryTemp: 27,
      _boardTemp: 25,
      _cameraError: [],
      _captureStatus: 'idle',
      _capturedPictures: 0,
      _currentMicrophone: 'Internal',
      _currentStorage: 'IN',
      _externalGpsInfo: {
        gpsInfo: {
          _altitude: 999.0,
          _dateTimeZone: '2014:05:17 17:04:29',
          _datum: 'WGS84',
          lat: 23.532,
          lng: 23.532,
        },
      },
      _function: 'normal',
      _internalGpsInfo: {},
      _latestFileUrl: 'http://192.168.1.1/files/100RICOH/R0010015.JPG',
      _mySettingChanged: false,
      _pluginRunning: false,
      _pluginWebServer: false,
      _recordableTime: 0,
      _recordedTime: 0,
      _storageID: '90014a68423861503e030277e0c2b500',
      storageUri: 'http://192.168.1.1/files/',
    },
  },
  z1: {
    fingerprint: 'FIG_0001',
    state: {
      _apiVersion: 2,
      batteryLevel: 0.33,
      _batteryState: 'disconnect',
      _batteryTemp: 26,
      _boardTemp: 26,
      _cameraError: [],
      _captureStatus: 'idle',
      _capturedPictures: 0,
      _compositeShootingElapsedTime: 0,
      _externalGpsInfo: {
        gpsInfo: {
          _altitude: 999,
          _dateTimeZone: '2014:05:18 01:04:29+08:00',
          _datum: 'WGS84',
          lat: 23.532,
          lng: 23.532,
        },
      },
      _function: 'normal',
      _internalGpsInfo: {},
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

export default (req: VercelRequest, res: VercelResponse): void => {
  const model = getModel(req);

  if (model === undefined) {
    invalidHeaderParameterError(res, modelHeader);
    return;
  }

  res.status(200).json(response[model]);

  log(req, res);
};
