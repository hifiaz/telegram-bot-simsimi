const TelegramBot = require('node-telegram-bot-api');
const request = require('request');

const token = '1900074132:AAEqapGqGYXKy7q-7k2bg585DczlypZpQ5w';
const simsimiKey = 'mqm-EbYtL~UELX5K__mh0vQc6FKqIOtX2SKfK2U7';
const url = `http://sandbox.api.simsimi.com/request.p?key=${simsimiKey}&lc=id&ft=1.0&text=`

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    
    request(url + msg.text.toString(), (err, response, body) => {
        bot.sendMessage(chatId, JSON.parse(body).response);
    });
  });
