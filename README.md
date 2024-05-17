# esp32 LoRa Monitor + LoRaWAN Node in one device
[LilyGo TTGO LoRa esp32](https://github.com/LilyGO/TTGO-LoRa32-V2.1) (T3_V1.6.x) + SD-card support      
V2.46-ttgo-lora32_langEN.bin  English   
V2.46-ttgo-lora32_langDE.bin  German

[TTGO-LORA32-V1.3](https://github.com/LilyGO/TTGO-LORA32/tree/LilyGO-V1.3-868)      
(For these devices, the frequency offset must sometimes be defined above -30000 Hz)      
V2.45-ttgo-loraV1.3_langEN.bin  English   
V2.45-ttgo-loraV1.3_langDE.bin  German

[Heltec WIFI LoRa esp32 V2](https://resource.heltec.cn/download/Manual%20Old/WiFi%20Lora32Manual.pdf)    
V2.45-heltec-lora32_V2_langEN.bin  English   
V2.45-heltec-lora32_V2_langDE.bin  German

* integrated web server
  
* receive + transmit LoRa or LoRaWAN packets

* MQTT, HTTP or UDP Support

* "LoRa to LoRaWAN - Bridge" Received LoRa packets can be forwarded directly to LoRaWAN. For example, all received LoRa sensors can be connected to LoRaWAN with one device

* API: MQTT/http to LoRa or LoRaWAN

* Home Assistant Auto-Discovery

Flash .bin File with esp32 Flash Tool see: [here](https://www.aeq-web.com/esp32-flash-tool-exported-program-upload-bin-hex-file/?lang=en) or [here](Flash-Instructions/Flash-Instructions.pdf)  or with web flasher [ESPWEBTOOL](https://esp.huhn.me/)  
The flash tool is only needed the first time, after which all updates can be updated directly from the UI using the update function

After flashing the bin file, an AP is opened on 192.168.1.4. On the config page you can enter your WiFi network name and password, after which the esp will be logged into your own network the next time you start it

In order for the graphics to be displayed, 3 js files must be loaded from the /lib directory via WebUI with ip/uploadjs
