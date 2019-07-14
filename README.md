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

xrandr-brightness is a python script that depends on:
* python3
* xrandr
* make (for installation)

Run the tool to see all options:
```
$ ./xrandr-brightness
Control OLED display brightness by running xrandr commands.

xrandr-brightness brightness max-brightness - set brightness manually
xrandr-brightness apply - apply brightness from system setting
xrandr-brightness watch - continuously update to system setting
```

You can install to auto-start a daemon when logging-in to a Gnome session:
```
$ sudo make install
cp xrandr-brightness /usr/local/bin/
mkdir -p /usr/share/gnome/autostart/
cp xrandr-brightness.desktop /usr/share/gnome/autostart/
```

The daemon will start on your next login.
You can change brightness using the brightness key or any other method
that controls the display "backlight".

You can also uninstall it:
```
$ sudo make uninstall
rm /usr/local/bin/xrandr-brightness /usr/share/gnome/autostart/xrandr-bright
ness.desktop
```
