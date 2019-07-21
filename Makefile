BIN_PATH=/usr/local/bin
AUTO_START_PATH=/usr/share/gnome/autostart
SYSTEMD_PATH=/lib/systemd

install:
	cp xrandr-brightness ${BIN_PATH}
	mkdir -p ${AUTO_START_PATH}
	cp xrandr-brightness.desktop ${AUTO_START_PATH}
	cp systemd/system-sleep/* ${SYSTEMD_PATH}/system-sleep

uninstall:
	rm ${BIN_PATH}/xrandr-brightness ${AUTO_START_PATH}/xrandr-brightness.desktop
	ls systemd/system-sleep | xargs -I {} rm ${SYSTEMD_PATH}/system-sleep/{}
