const fs = require('fs')

class BooksService {
     constructor() {
          this.dirname = './DATA/books-data/';
          this.files = this.readFiles();
          this.avaibleBooks = this.getAllBooks();
     }
     async readFiles() {
          return new Promise((resolve, reject) => {
               fs.readdir(this.dirname,
                    function (err, data) {
                         if (err) throw err;
                         resolve(data);
                    }
               );
          });
     }
     async getAllBooks() {
          const files = await this.files;
          return new Promise((resolve, reject) => {
               let booksData = [];
               for (let index = 0; index < files.length; index++) {
                    fs.readFile(this.dirname + files[index], 'utf-8', function (err, data) {
                         if (err) throw err;
                         const parseData = JSON.parse(data)
                         booksData.push(parseData)

                    });
                    if (index === files.length - 1) {
                         resolve(booksData)
                    };
               };
          });
     }
     async getBookById(id) {
          const files = await this.files;

          if (!files.includes(`book-${id}.json`)) return { status: 404, msg: 'book doesnt exist' };

          return new Promise((resolve, reject) => {
               fs.readFile(this.dirname + `book-${id}.json`, 'utf-8', function (err, data) {
                    if (err) throw err;
                    const parseData = JSON.parse(data)
                    resolve(parseData)
               });
          });
     }
     // async booksId(url) {
     //      return new Promise((resolve, reject) => {
     //           fs.readFile(url,'utf-8',function(err,data){
     //                if(err)throw err;
     //                const parseData = JSON.parse(data)
     //                const {name,author,year} = parseData
     //                ;
     //                let el = `${name}${author}${year}`.replace(/\s/g, '')
     //                const bookId = btoa(unescape(encodeURIComponent(el))).split('/').join('')
     //                const lol = bookId.split('')
     //                lol.length = 25
     //                parseData.id = lol.join('');
     //                fs.writeFile(`./DATA/books-data/book-${lol.join('')}.json`,JSON.stringify(parseData),function(err){if(err)throw err})
     //           })
     //      })
     // }
     // async img(url) {
     //      return new Promise((resolve, reject) => {
     //           fs.readFile(url,'base64',function(err,data){
     //                if(err)throw err;
     //                resolve(`data:image/jpeg;base64,${data}`)
     //           })
     //      })
     // }
}
module.exports = new BooksService();