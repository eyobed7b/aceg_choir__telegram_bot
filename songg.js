var TelegramBot = require('node-telegram-bot-api');
var token = '1038796578:AAFXYT_ouncVnXHAXjMXBd9MuQMrLTu5fy0';
var bot = new TelegramBot(token, { polling: true });
const pt = require('path');
var pz = pt.parse('./songs/')
const fs = require('fs');

function songF() {


    fs.readFile('title.txt', 'utf-8', (er, cont) => {
        var title = cont.toString().split('#e#');
        //console.log(title.toString() + '\n')
        for (var i = 0; i < title.length; i++) {
            // console.log("hello")
            if (msg.text.toString().toLowerCase().includes(title[i])) {
                bot.sendMessage(msg.chat.id, title[i])

            }
        }
    })









}
module.exports.songF = songF;