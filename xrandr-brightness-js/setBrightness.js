const xrandr = require('./xrandr')
const getDeviceId = require('./getDeviceId')

const defaultMinValue = 0.1

const setBrightness = function (value, maxValue, minValue = defaultMinValue) {
  const deviceId = getDeviceId()
  if (!deviceId) {
    return false
  }

  return xrandr('--output', deviceId, '--brightness', Math.max(minValue, value / maxValue)).code === 0
}

module.exports = setBrightness
