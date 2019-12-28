var TelegramBot = require('node-telegram-bot-api');
var bot = new TelegramBot(token, { polling: true });
const pt = require('path');
var pz = pt.parse('./songs/')
const fs = require('fs');
const songg = require('./songg');


bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "choose from the key board ", {
        "reply_markup": {
            "keyboard": [
                ["Slowrock", "Disco"],
                ["Walz", "Regge"],
                ["Welo"]
            ]
        }
    });

});

bot.on('message', (msg) => {

    var hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
        bot.sendMessage(msg.chat.id, "hi bro | sis  " + msg.from.first_name + "  welcome to Gerji apostolic church choir bot");

        // bot.sendMessage(msg.chat.id, "Hello dear user");
    }
    var song = "song";

    if (msg.text.toString().toLowerCase().includes(song)) {
        fs.readFile('title.txt', 'utf-8', (error, cont) => {
            if (cont) {
                bot.sendMessage(msg.chat.id, cont)

                songg.songF();
            } else if (error) {
                bot.sendMessage(msg.chat.id, error);
            }
        })

    }

    // for (int i = 0; i < )

    var bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye)) {
        bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
    }
})
