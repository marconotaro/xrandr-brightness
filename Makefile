BIN_PATH=/usr/local/bin
AUTO_START_PATH=/usr/share/gnome/autostart
SYSTEMD_PATH=/lib/systemd

install:
	npm install -g xrandr-brightness
	sudo ln -s $$(npm -g bin)/xrandr-brightness ${BIN_PATH}
	sudo mkdir -p ${AUTO_START_PATH}
	sudo cp xrandr-brightness.desktop ${AUTO_START_PATH}
	sudo cp systemd/system-sleep/* ${SYSTEMD_PATH}/system-sleep

install-python:
	sudo cp xrandr-brightness-python/xrandr-brightness ${BIN_PATH}
	sudo mkdir -p ${AUTO_START_PATH}
	sudo cp xrandr-brightness.desktop ${AUTO_START_PATH}
	sudo cp systemd/system-sleep/* ${SYSTEMD_PATH}/system-sleep

uninstall:
	npm remove -g xrandr-brightness
	sudo rm ${BIN_PATH}/xrandr-brightness ${AUTO_START_PATH}/xrandr-brightness.desktop
	ls systemd/system-sleep | xargs -I {} sudo rm ${SYSTEMD_PATH}/system-sleep/{}

uninstall-python:
	sudo rm ${BIN_PATH}/xrandr-brightness ${AUTO_START_PATH}/xrandr-brightness.desktop
	ls systemd/system-sleep | xargs -I {} sudo rm ${SYSTEMD_PATH}/system-sleep/{}
