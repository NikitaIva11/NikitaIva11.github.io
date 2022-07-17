const { default: fetch } = require("node-fetch");
class fetchFunc{
     static fetchGet(url){
               return fetch(url).then(resp=>resp.json()).catch(err=>{return})
     }
     static fetchPost(text,req, res){
          return fetch('http://localhost:7274', {
               method: 'post',
               body: text,
               headers: { 'Content-Type': 'application/json' }
          })
          .then(resp=>resp.text())
      
}
}
module.exports = {fetchFunc}