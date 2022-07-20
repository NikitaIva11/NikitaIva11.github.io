const fs = require('fs');
const { fetchFunc } = require("../fetchClass/fetchClass");
class txtMakerClass{
     static async txtSave(url){
          let date = new Date().getTime();
          let obj = {
               date:date,
               url:url
          }
          fs.writeFileSync(`./txtSaver/${date}.txt`, JSON.stringify(obj))
     }
     static async txtReadAll(req,res){
          let files = await fs.readdirSync('./txtSaver');
          let text = ''
          files.forEach(file => {
               let innerFile = JSON.parse( fs.readFileSync('./txtSaver/'+file,'utf-8'))
               text += `${new Date(innerFile.date).toDateString()}:\n${innerFile.url}\n\n`
          });
          let callBack = await fetchFunc.fetchPost(text, req, res)
          res.write(callBack);
          res.end()
     }
     static async txtReadPathAndQuery(req,res){
          let files = fs.readdirSync('./txtSaver');
          let text = ''
          files.forEach(file => {
               let innerFile = JSON.parse( fs.readFileSync('./txtSaver/'+file,'utf-8'));
               let url = new URL(innerFile.url);
               text += `${new Date(innerFile.date).toDateString()}:\n${url.pathname}${url.search}\n\n`;
          });
          let callBack = await fetchFunc.fetchPost(text, req, res)
          res.write(callBack);
          res.end()
     }
}

module.exports = {txtMakerClass}