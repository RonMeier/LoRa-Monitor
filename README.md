# LoRa P2P Monitor + LoRaWAN Node in one device
[Heltec WIFI LoRa esp32 V2](https://resource.heltec.cn/download/Manual%20Old/WiFi%20Lora32Manual.pdf)    
V2.7-heltec-lora32_V2_langEN.bin  English   
V2.7-heltec-lora32_V2_langDE.bin  German

[LilyGo TTGO LoRa esp32](https://github.com/LilyGO/TTGO-LoRa32-V2.1) (V1.6.x) + SD-card support      
V2.7-ttgo-lora32_V161_langEN.bin  English   
V2.7-ttgo-lora32_V161_langDE.bin  German

[LilyGo TTGO-LORA32-V1.3](https://github.com/LilyGO/TTGO-LORA32/tree/LilyGO-V1.3-868)      
(For these devices, the frequency offset must sometimes be defined above -30000 Hz)      
V2.7-ttgo-loraV1.3_langEN.bin  English   
V2.7-ttgo-loraV1.3_langDE.bin  German

[LilyGo TTGO new T3S3 V.1.x](https://www.lilygo.cc/products/t3s3-v1-0?variant=42586879688885) (H596 with SX1276)   
V2.7-ttgo-LoRa-T3S3_SX1276_langEN.bin English   
V2.7-ttgo-LoRa-T3S3_SX1276_langDE.bin German 

[LilyGo TTGO new T3S3 V.1.x](https://www.lilygo.cc/products/t3s3-v1-0?variant=42586879721653) (H595 with SX1262)   
support for SD, Oled-Display or [E-Paper-Display](https://www.bastelgarage.ch/lora/lora-kits-boards/lilygo-lora-t3s3-e-paper-esp32-s3-868mhz-sx1262)   
V2.7-ttgo-LoRa-T3S3_SX1262_langEN.bin English   
V2.7-ttgo-LoRa-T3S3_SX1262_langDE.bin German  


   
* integrated web server
  
* receive + transmit LoRa or LoRaWAN packets

* LoRa to MQTT, LoRa to HTTP, LoRa to UDP

* "LoRa to LoRaWAN - Bridge" Received LoRa packets can be forwarded directly to LoRaWAN. For example, all received LoRa sensors can be connected to LoRaWAN with one device   
  This means you only need to register one device with TTN to transfer the data from all your lora sensors and you can then read out the sensors individually again in the Payload formatter at TTN

* API: MQTT/http to LoRa or LoRaWAN

* Rules to execute specific commands, HA Auto-Discovery, Scanner, switchable relay outputs
  
* The corresponding 433 MHz models are also supported

Flash .bin File with esp32 Flash Tool see: [here](https://www.aeq-web.com/esp32-flash-tool-exported-program-upload-bin-hex-file/?lang=en) or [here](Flash-Instructions/Flash-Instructions.pdf)  or with web flasher [ESPWEBTOOL](https://esp.huhn.me/)  
The flash tool is only needed the first time, after which all updates can be updated directly from the UI using the update function

After flashing the bin file, an AP is opened at 192.168.4.1. On the config page you can enter your WiFi network name and password, after which the esp will be logged into your own network the next time you start it

In order for the graphics to be displayed, 3 js files must be loaded from the /lib directory via WebUI with ip/uploadjs
