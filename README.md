# esp32 LoRa Monitor + LoRaWAN Node
V2.1-ttgo-lora32.bin für LilyGo TTGO LoRa esp32 (T3_V1.6.1) + SD Support   
V2.1-heltec-lora32_V2.bin für Heltec WIFI LoRa esp32 V2 

* WebUI

* MQTT, HTTP oder UDP Support

* "Lora to LoraWAN - Bridge"  empfangene Lora-Packete können direkt an LoraWAN weitergeleitet werden

* "http to Lora" / "http to LoraWAN"  

nach dem Flashen des bin-Files wird ein AP auf 192.168.1.4 eröffnet.
Nach Eingabe von WLAN-Netzwerkname und Passwort wird beim nächsten Start der esp im eigenen Netz angemeldet 

damit die Grafiken angezeigt werden, müssen noch 3 js-Dateien aus dem /lib-Verzeichnis via WebUI mit ip/uploadjs geladen werden
