const getArgs = require('./getArgs')
const setBrightness = require('./setBrightness')
const applyCurrentBrightness = require('./applyCurrentBrightness')
const watchBrightness = require('./watchBrightness')
const showUsage = require('./showUsage')

const main = function () {
  const args = getArgs()
  const hasArgs = args.length >= 1
  if (hasArgs && args[0].trim().toLowerCase() === 'apply') {
    if (args.length >= 3) {
      setBrightness(args[1], args[2])
    } else {
      applyCurrentBrightness()
    }
  } else if (hasArgs && args[0].trim().toLowerCase() === 'watch') {
    watchBrightness(() => applyCurrentBrightness)
  } else {
    showUsage()
  }
}

module.exports = main
