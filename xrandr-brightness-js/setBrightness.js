const xrandr = require('./xrandr')
const getDeviceId = require('./getDeviceId')

const setBrightness = function (value, maxValue) {
  const deviceId = getDeviceId()
  if (!deviceId) {
    return false
  }

  return xrandr('--output', deviceId, '--brightness', value / maxValue).code === 0
}

module.exports = setBrightness
