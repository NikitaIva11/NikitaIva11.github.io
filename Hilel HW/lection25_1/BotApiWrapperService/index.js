const TelegramBot = require('node-telegram-bot-api');
let http = require('http');
let static = require('node-static');
const { chatIdWriter } = require("./chatIdWriter/chatIdWriter");
const { sendBody } = require("./sendBody/sendBody");

let file = new static.Server('.');
let port = 7274;

const token = '5454616552:AAExx5NH1_XjD7VSKHuO5pY342zLe_rlhYo';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
     const chatId = msg.chat.id;
     chatIdWriter.writeFile(chatId)
     bot.sendMessage(chatId,
          `Вы можете отправить такие запросы как:\n\nПрогноз температуры на 24 часа:\nhttp://localhost:7070/weather/forecast/24\nТакже можно передать координаты вашего города:\nhttp://localhost:7070/weather/forecast/24?lat={}&lon={}\n\nПрогноз погоды сейчас:\nhttp://localhost:7070/weather/current\nТакже можно передать координаты вашего города:\nhttp://localhost:7070/weather/current?lat={}&lon={}\n\nКурс криптовалют:\nhttp://localhost:7070/binance?BTC&ETH
          `
          )
});

http.createServer(function (req, res) {
     if(res)sendBody(req, res,bot);
     file.serve(req, res);
}).listen(port)


