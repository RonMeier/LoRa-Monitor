# LoraMonitor
Lora Monitor Programm mit Sender und LoraWAN weiterleitung 

Empfangene LoRa-Packete können via MQTT, HTTP oder UDP weitergeleitet werden

Lora Sender: verschiedene Vorlagen für sendestring können abgespeichert werden
 
Lora to LoraWAN - Bridge: empfangene Lora-Packete können direkt an Lorawan weitergeleitet werden
 

V2.1_ttgo-lora32-v1.bin für LilyGo TTGO LoRa32 mit SD Support   
V2.1_heltec_lora_32_V2.bin für Heltec WIFI LoRa 32 V2 

nach dem Flashen des bin-Files wird ein AP auf 192.168.1.4. eröffnet.
Nach Eingabe von WLAN-Netzwerkname und Passwort wird beim nächsten Start der esp im eigenen Netz angemeldet 

damit die Grafiken aangezeigt werden, müssen noch 3 Dateien via Webui (ip/uploadjs) geladen werden:   
lib/config.js   
lib/simpleRequire.js   
echarts.min.js von https://github.com/apache/echarts/tree/master/dist
