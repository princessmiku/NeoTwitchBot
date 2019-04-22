settings = {
    "sendInterval": 180,
    "shuffle": true
};


var autoEvents = [];

module.exports = {

    /**
     * Füge eine Nachricht hinzu die automatisch gepostet werden soll
     * 
     * 
     * @param {string} name 
     * @param {string} text 
     */
    addAutoMSG(name, text) {
        autoEvents.push([name, text])
    },

    /**
     * Gibt die Event Liste zurück
     */
    getEvents() {
        return autoEvents
    },

    getSendInterval(){
        return settings.sendInterval
    },

    getShuffel(){
        return settings.shuffle
    },

    /**
     * Setze die zeit die vergehen soll bis die nächste nachricht gesendet wird
     * Angabe in Sekunden
     * Standart: 180
     * 
     * @param {number} time 
     */
    setSendInterval(time) {
        settings["sendInterval"] = time
    },

    /**
     * Sollen immer eine zufällige Nachricht ausgegeben werden?
     * Es kann dadurch aber vorkommen das die selbe nachricht hintereinander kommen kann
     * Standart: true
     * 
     * @param {boolean} bool 
     */
    setShuffle(bool) {
        settings["shuffle"] = bool
    }

}