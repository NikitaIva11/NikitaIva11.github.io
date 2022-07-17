const { chatIdWriter } = require("../chatIdWriter/chatIdWriter");
const { getPostBody } = require("../getPostBody/getPostBody");
const fs = require('fs');
async function sendBody(req, res, bot) {
     try {
          let values = await Promise.all([chatIdWriter.readFile(), getPostBody(req, res)]);
          let [chatId, body] = values
          chatId.users.forEach(el => {
               bot.sendMessage(el, body)
               .catch((err) => {
                    let newArr = chatId.users.filter(els => els != el)
                    chatId.users = newArr;
                    fs.writeFileSync('./chatsId/chatId.json', JSON.stringify(chatId))
               })
          })
     } catch (error) {
          console.log(error)
     }
}
module.exports = { sendBody }