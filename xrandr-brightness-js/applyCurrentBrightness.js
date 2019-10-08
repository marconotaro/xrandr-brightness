const defaultSettings = require('./defaultBrightnessPaths')
const fsPromises = require('fs').promises
const setBrightness = require('./setBrightness')

const applyCurrentBrightness = async function (settings = defaultSettings) {
  const openFilePromises = [
    fsPromises.open(settings.brightnessPath),
    fsPromises.open(settings.maxBrightnessPath)
  ]

  return await Promise
    .all(openFilePromises)
    .then(([brightness, maxBrightness]) => Promise.all([fsPromises.readFile(brightness, 'utf8'), fsPromises.readFile(maxBrightness, 'utf8')]))
    .then(([brightness, maxBrightness]) => setBrightness(brightness, maxBrightness))
}

module.exports = applyCurrentBrightness
