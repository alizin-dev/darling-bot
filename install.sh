#!/usr/bin/bash
clear
apt-get update
apt-get upgrade
pkg install nodejs -y; pkg install nodejs-lts
clear
sh start.sh
