# XRandR Brightness

### Control OLED display brightness by running xrandr commands.

## Introduction

This tool is a work-around for displays whose brightness contol is not
supported by the linux kernel. It preforms well on OLED displays,
since these have very dark black point and their power consumption is
relative to the brightness of the viewed content.

This tool can be used on an LCD display, but in that case you really want
to control the brightness directly using the display backlight.

This is a modified version of icc-brightness that was originally developed to work for the Lenovo ThinkPad X1 Yoga OLED display.

Instead of using ICC profiles, xrandr-brightness runs xrandr commands to adjust the brightness, leaving your ICC profile alone.

Although icc-brightness was originally developed to work for the Lenovo ThinkPad X1 Yoga OLED display, xrandr-brightness has been created to work with the Gigabyte Aero OLED display.

## Build and install

xrandr-brightness comes in two different flavors. The original script was based on the Python3 script [udifuchs/icc-brightness](https://github.com/udifuchs/icc-brightness). I am no longer supporting my Python variant because I really don't know Python. I stumbled my way through creating it well enough to understand what was happening and re-write it with node.js.

It depends on...

* node.js 10.x or higher
* npm
* xrandr
* make (for installation)

To install:

```
# Don't sudo! The makefile will sudo the appropriate commands.
make install
```

Run the tool to see all options:
```
$ xrandr-brightness
Control OLED display brightness by running xrandr commands.

xrandr-brightness brightness max-brightness - set brightness manually
xrandr-brightness apply - apply brightness from system setting
xrandr-brightness watch - continuously update to system setting
```

You can also uninstall it:
```
# Don't sudo! The makefile will sudo the appropriate commands.
make uninstall
```
