const fs = require('fs')
const defaultSettings = require('./defaultBrightnessPaths')

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
