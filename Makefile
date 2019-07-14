BIN_PATH=/usr/local/bin/
AUTO_START_PATH=/usr/share/gnome/autostart/

install:
	cp xrandr-brightness ${BIN_PATH}
	mkdir -p ${AUTO_START_PATH}
	cp xrandr-brightness.desktop ${AUTO_START_PATH}

uninstall:
	rm ${BIN_PATH}xrandr-brightness ${AUTO_START_PATH}xrandr-brightness.desktop
