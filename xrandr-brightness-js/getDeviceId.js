const xrandr = require('./xrandr')

let deviceId

const getDeviceId = function () {
  if (typeof deviceId === 'undefined') {
    deviceId = xrandr().stdout.split(/[\n\r]+/)
      .filter(line => !line.includes('HDMI'))
      .filter(line => line.includes('connected primary'))
      .map(line => line.replace(/\s.*$/, ''))
      [0]
  }

  return deviceId
}

module.exports = getDeviceId
