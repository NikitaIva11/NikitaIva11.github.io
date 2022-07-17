const fs = require('fs');
class chatIdWriter {
     static readFile() {
          return new Promise((resolve, reject) => {
               fs.readFile('./chatsId/chatId.json', 'utf8', (err, data) => {
                    if (err) {
                         console.error(err);
                         reject(err)
                         return;
                    }
                    resolve(JSON.parse(data))
               });
          })
     }
     static async writeFile(chatId) {
          try {
               let data = await this.readFile()
               let arrVal = []
               data.users.forEach(el => {
                    arrVal.push(el)
               });
               if (!arrVal.includes(chatId)) {
                    data.users.push(chatId)
                    fs.writeFileSync('./chatsId/chatId.json', JSON.stringify(data))
               }else{
                    return;
               }
          } catch (error) {
               console.log(error)
          }
     
     }
}
module.exports = { chatIdWriter }