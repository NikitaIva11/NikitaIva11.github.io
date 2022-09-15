const fs = require('fs')
class ReaderService {

     async reader(id,page){
          return new Promise((resolve, reject) => {
               fs.readFile(`./DATA/books-pages/pages-${id}.json`, function(err,data){
                    if(err)throw err;
                    const parsedData = JSON.parse(data)
                    resolve(parsedData[page-1]);
               })
          })
     }

}
module.exports = new ReaderService();