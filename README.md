# esp32 LoRa Monitor + LoRaWAN Node in one device
Monitor V2.1-ttgo-lora32.bin for LilyGo [TTGO LoRa esp32](https://github.com/LilyGO/TTGO-LoRa32-V2.1) (T3_V1.6.1) + SD Support  (868/915 or 433)    
Monitor V2.1-heltec-lora32_V2.bin for [Heltec WIFI LoRa esp32 V2](https://resource.heltec.cn/download/Manual%20Old/WiFi%20Lora32Manual.pdf)  

* integrated web server
  
* receive + transmit LoRa packets

* MQTT, HTTP or UDP Support

* "LoRa to LoRaWAN - Bridge"  Received LoRa packets can be forwarded directly to LoRaWAN. For example, all received LoRa sensors can be connected to LoRaWAN with one device

* "http to LoRa" / "http to LoRaWAN"  

After flashing the bin file, an AP is opened on 192.168.1.4. On the config page you can enter your WiFi network name and password, after which the esp will be logged into your own network the next time you start it

In order for the graphics to be displayed, 3 js files must be loaded from the /lib directory via WebUI with ip/uploadjs
