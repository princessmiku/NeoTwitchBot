const tmi = require('tmi.js')
const autoMSG = require('./autoMSG.js')

// Bot account User name
var name = "";
// Channel/Kanal Name
var channelName = "";
// OAuth Passwort -> https://twitchapps.com/tmi/
var password = "";
// Chat Nachricht beim Online gehen des Bots
var startMSG = "Ich bin nun Online";
// Prefix 
var Prefix = "!";


//  Help List
// Auto Nachrichten werden automatisch eingebunden,
// um diese dann noch sperat angefragt werden zukönnen
var helplist = ""

// Auto Nachrichten können hier eingetragen werden
// sowie Einstllungen
// readme lesen dort sind die code schnipsel
autoMSG.addAutoMSG("Twitter", "Schaut doch mal auf meinen Twitter vorbei :P");




//
// Hier kommt nur noch code
// der ausgefürt wird
//
const options = {
    options: {
        debug: true
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: name,
        password: password
    },
    channels: ['tedy400'],
}
const client = new tmi.client(options);
client.connect();
var counter = 0;
var maxcount = Object.keys(autoMSG.getEvents()).length;

autoMSG.getEvents().forEach(function(x){
    helplist += " " + Prefix + x[0] + ","
})

client.on('connected', (address, port) => {
    client.action(channelName, startMSG);
    
})

client.on('chat', (channel, user, message, self) => {
    if (message.startsWith(Prefix)) {
        command = message.replace(Prefix, "").toLocaleLowerCase()
        autoMSG.getEvents().forEach(function(x){
            if (command == x[0].toLocaleLowerCase()) {
                client.action(channelName, x[1])
            }})

        if (command == "help") {
            client.action(channelName, helplist.substr(0, helplist.length-1))
        }
        
    }
})
function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low)
  }

inter = Number(autoMSG.getSendInterval()) * Number(1000)
var sendAutofunc = setInterval(function(){
    if(autoMSG.getShuffel()) {
        var num = randomIntInc(0, maxcount - 1);
        client.action(channelName, autoMSG.getEvents()[num][1])
    
    } else {
        if (counter == maxcount) {
            counter *= 0
        }
        client.action(channelName, autoMSG.getEvents()[counter][1]);
        counter += 1
    }
    
}, inter);