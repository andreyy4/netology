const EventEmitter = require('events');

class ChatApp extends EventEmitter {
    /**
     * @param {String} title
     */

    constructor(title) {
        super();
        this.title = title;

        // Посылать каждую секунду сообщение
        setInterval(() => {
            this.emit('message', `${this.title}: ping-pong`);
        }, 1000)
    }

    on(eventName) {
        let max = this.getMaxListeners() || this.defaultMaxListeners;
        console.log(this.title,eventName,this.listenerCount(eventName))
        //
        if (this.listenerCount(eventName) < max) {
            super.on.apply(this, arguments);
        } else {
            this.emit('error', new Error('max limit'))
        }
    }

    close() {
        this.removeAllListeners(['message']);
        // this.removeListener();
        this.emit('close');
    }
}

module.exports = ChatApp;