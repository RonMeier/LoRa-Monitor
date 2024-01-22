# esp32 LoRa Monitor + LoRaWAN Node in one device
Monitor V2.1-ttgo-lora32.bin for LilyGo [TTGO LoRa esp32](https://github.com/LilyGO/TTGO-LoRa32-V2.1) (T3_V1.6.1) + SD Support  (868/915 or 433)    
Monitor V2.1-heltec-lora32_V2.bin for [Heltec WIFI LoRa esp32 V2](https://resource.heltec.cn/download/Manual%20Old/WiFi%20Lora32Manual.pdf)  

* integrated web server
  
* receive + transmit LoRa packets

* MQTT, HTTP oder UDP Support

* "LoRa to LoRaWAN - Bridge"  Received LoRa packets can be forwarded directly to LoRaWAN. For example, all received LoRa sensors can be connected to LoRaWAN with one device

* "http to LoRa" / "http to LoRaWAN"  

nach dem Flashen des bin-Files wird ein AP auf 192.168.1.4 eröffnet.
Nach Eingabe von WLAN-Netzwerkname und Passwort wird beim nächsten Start der esp im eigenen Netz angemeldet 

damit die Grafiken angezeigt werden, müssen noch 3 js-Dateien aus dem /lib-Verzeichnis via WebUI mit ip/uploadjs geladen werden
