const shell = require('shelljs')
const xrandrCommand = shell.which('xrandr')

const xrandr = (...args) => shell.exec(`${xrandrCommand} ${args.join(' ')}`, {silent: true})

module.exports = xrandr
