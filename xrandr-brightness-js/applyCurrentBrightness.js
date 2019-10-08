const defaultSettings = require('./defaultBrightnessPaths')
const fsPromises = require('fs').promises
const setBrightness = require('./setBrightness')

const applyCurrentBrightness = async function (settings = defaultSettings) {
  const openFilePromises = [
    fsPromises.open(settings.brightnessPath),
    fsPromises.open(settings.maxBrightnessPath)
  ]
  const openFileHandles = []

  return await Promise
    .all(openFilePromises)
    .then(function ([brightness, maxBrightness]) {
      openFileHandles.push(brightness, maxBrightness)
      return Promise.all([fsPromises.readFile(brightness, 'utf8'), fsPromises.readFile(maxBrightness, 'utf8')])
    })
    .then(([brightness, maxBrightness]) => setBrightness(brightness, maxBrightness))
    .finally(function () {
      openFileHandles.forEach(handle => handle.close())
    })
}

module.exports = applyCurrentBrightness
