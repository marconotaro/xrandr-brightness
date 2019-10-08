const showUsage = function () {
  console.log(`Control OLED display brightness by running xrandr commands.

xrandr-brightness brightness max-brightness - set brightness manually
xrandr-brightness apply - apply brightness from system setting
xrandr-brightness watch - continuously update to system setting
`)
}

module.exports = showUsage
