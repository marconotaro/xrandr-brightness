const path = require('path')
const fs = require('fs')

const defaultSettings = {}
defaultSettings.backlightPath = '/sys/class/backlight/intel_backlight'
defaultSettings.brightnessPath = path.join(defaultSettings.backlightPath, 'brightness')
defaultSettings.maxBrightessPath = path.join(defaultSettings.backlightPath, 'max_brightness')

const watchBrightness = function (callback, settings = defaultSettings) {
  if (typeof callback !== 'function') {
    return false
  }

  fs.watch(
    settings.brightnessPath,
    function (eventType, fileName) {
      callback(eventType, fileName)
    }
  )

  return true
}

module.exports = watchBrightness
