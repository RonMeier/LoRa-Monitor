# LoRa P2P Monitor + LoRaWAN Node

## Overview
* integrated web server
  
* receive + transmit LoRa P2P and LoRaWAN packets

* LoRa to MQTT, LoRa to HTTP, LoRa to UDP

* Rules to execute specific commands, Scanner with LoRaWAN and Mesh activity measurement, switchable relay outputs, Auto-Discovery, Simplex-, Duplex-, Repeater-mode, etc.

* "LoRa to LoRaWAN - Bridge" for example, you can forward sensor data received via P2P to LoRaAWN 
or send control commands received via LoRaWAN back out via LoRa P2P

* The corresponding 433 MHz models are also supported
<br>


## Hardware Requirements

[Heltec WIFI LoRa esp32 V2](https://heltec.org/project/wifi-lora-32v2/)    (868/915)    

[Heltec WIFI LoRa esp32 V3](https://heltec.org/project/wifi-lora-32v3/)    (868/915)   

[LilyGo TTGO LoRa esp32 V2 1.6.1](https://github.com/LilyGO/TTGO-LoRa32-V2.1) + SD-card support (433/868/915)     

[LilyGo TTGO-LORA32-V1.3](https://github.com/LilyGO/TTGO-LORA32/tree/LilyGO-V1.3-868) (868/915)     
(For these devices, the frequency offset must sometimes be defined above -30000 Hz)      

[LilyGo TTGO T3S3 H596 with SX1276](https://www.lilygo.cc/products/t3s3-v1-0?variant=42586879688885)       (868/915)   

[LilyGo TTGO T3S3 H595 with SX1262](https://www.lilygo.cc/products/t3s3-v1-0?variant=42586879721653)      (868/915)    
support for SD, Oled-Display or [E-Paper-Display](https://www.bastelgarage.ch/lora/lora-kits-boards/lilygo-lora-t3s3-e-paper-esp32-s3-868mhz-sx1262)   

[LilyGo TTGO T3S3 H750 with LR1121](https://lilygo.cc/products/t3-s3-lr1121)      (868/915 + LoRa2.4GHz (1900-2200 + 2400-2500))    
   
You can flash your device directly using the [LoRa Monitor – Firmware Flasher](https://ronmeier.github.io/Lora-Web-Flasher)    
Note: Not all web browsers support flashing via the serial port. Please use a compatible browser (e.g., Chrome or Edge).    
The flash tool is only required for the initial installation. After that, all updates can be installed directly from the device UI using the built-in update function.

After flashing, the device will open a WiFi access point (AP) named "Lora-Monitor".
Connect your smartphone (or computer) to this network, then open 192.168.4.1 in your web browser.
On the configuration page, enter your WiFi network name (SSID) and password. After saving, the ESP will automatically connect to your own network the next time it starts.

In order for the graphics to be displayed, 3 js files must be loaded from the /lib directory via WebUI
