const path = require('path')

const paths = {}
paths.backlightPath = '/sys/class/backlight/intel_backlight'
paths.brightnessPath = path.join(paths.backlightPath, 'brightness')
paths.maxBrightnessPath = path.join(paths.backlightPath, 'max_brightness')

module.exports = paths
