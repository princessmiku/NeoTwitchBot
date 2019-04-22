# NeoTwitchBot
Ein Twitch Chat bot deren zweck es ist automatisch nachrichten zusenden, zb den Twitter Link oder Youtube Link

Zu installierende package neben node.js

    -> npm install tmi.js --save

Hier bekommst du den benötigten OAuth Password token

    -> https://twitchapps.com/tmi/


Zu editieren ist die main.js, es wird mit komentaren drauhingewiesen wo man was einstellen kann

Hinzufügen einer Nachricht die automatisch gesendet wird
    Titel = Name wie es gespeichert wird
    Text = Der Text der in Twitch ausgegeben werden soll

    -> autoMSG.addAutoMSG("Titel", "Text");

Setze einen Intervall in dem eine nachricht abgesendet wird
Standart auf 180 Sekunden, angaben in sekunden

    -> autoMSG.setSendInterval(number);

Setze die zufalls wiedergabe, bei aktivierter kann es vorkommen das 
die selbe nachricht doppelt gesendet werden kann
Standart auf true
true = an
false = aus
    
    -> autoMSG.setShuffle(true/false);
