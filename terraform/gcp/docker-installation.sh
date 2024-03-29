#! /usr/bin/env bash

sudo apt-get -y update
curl -fsSL https://download.docker.com/linux/ubuntu/gpg |  sudo apt-key add
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
sudo apt-get -y update
sudo apt-get -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo usermod -aG docker $USER