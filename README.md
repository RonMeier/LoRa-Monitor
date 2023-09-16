# LoraMonitor
LoRa Empfänger und Sender mit zusätzlicher "Lora to LoraWAN" weiterleitung 

Empfangene LoRa-Packete können via MQTT, HTTP oder UDP weitergeleitet werden

"Lora to LoraWAN - Bridge"  empfangene Lora-Packete können direkt an LoraWAN weitergeleitet werden

Lora Sender: verschiedene Vorlagen für Sendetexte

Webhook: "http to Lora" oder "http to LoraWAN"  

V2.1_ttgo-lora32-v1.bin für LilyGo TTGO LoRa32 (T3_V1.6.1) mit SD Support   
V2.1_heltec_lora_32_V2.bin für Heltec WIFI LoRa 32 V2 

nach dem Flashen des bin-Files wird ein AP auf 192.168.1.4 eröffnet.
Nach Eingabe von WLAN-Netzwerkname und Passwort wird beim nächsten Start der esp im eigenen Netz angemeldet 

damit die Grafiken angezeigt werden, müssen noch 3 Dateien via Webui (ip/uploadjs) geladen werden:   
lib/config.js   
lib/simpleRequire.js   
lib/echarts.min.js
