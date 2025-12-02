# LoRa P2P + LoRaWAN Node

## Overview
* integrated web server

* LoRa to MQTT, LoRa to HTTP, LoRa to UDP
  
* receive + transmit LoRa P2P and LoRaWAN packets

* Rules to execute specific commands, Scanner with LoRaWAN and Mesh activity measurement, switchable relay outputs, Auto-Discovery, Simplex-, Duplex-, Repeater-mode, etc.

* "LoRa to LoRaWAN - Bridge" for example, you can forward sensor data received via P2P to LoRaAWN 
or send control commands received via LoRaWAN back out via LoRa P2P

* The corresponding 433 MHz models are also supported
<br>

## Hardware Requirements

Heltec WIFI LoRa esp32 [V2](https://heltec.org/project/wifi-lora-32v2/) [V3](https://heltec.org/project/wifi-lora-32v3/) 
[V4](https://heltec.org/project/wifi-lora-32-v4/) [VM E213](https://heltec.org/project/vision-master-e213)/) (868/915)    

[LilyGo TTGO LoRa esp32 V2 1.6.1](https://github.com/LilyGO/TTGO-LoRa32-V2.1) + SD-card support (433/868/915)     
  
[LilyGo TTGO T3S3 H596 with SX1276](https://www.lilygo.cc/products/t3s3-v1-0?variant=42586879688885)       (868/915)   

[LilyGo TTGO T3S3 H595 with SX1262](https://www.lilygo.cc/products/t3s3-v1-0?variant=42586879721653)      (868/915)
support for SD, Oled-Display or [E-Paper-Display](https://www.bastelgarage.ch/lora/lora-kits-boards/lilygo-lora-t3s3-e-paper-esp32-s3-868mhz-sx1262)   
<br> 
   
     
You can flash your device directly using the [LoRa Monitor – Firmware Flasher](https://ronmeier.github.io/Lora-Web-Flasher)    
Note: Not all web browsers support flashing via the serial port. Please use a compatible browser (e.g., Chrome or Edge).    

After flashing, the device will open a WiFi access point (AP) named "Lora-Monitor".
Connect your smartphone (or computer) to this network, then open 192.168.4.1 in your web browser.
On the configuration page, enter your WiFi network name (SSID) and password. After saving, the ESP will automatically connect to your own network the next time it starts.

In order for the graphics to be displayed, 3 js files must be loaded from the /lib directory via WebUI
