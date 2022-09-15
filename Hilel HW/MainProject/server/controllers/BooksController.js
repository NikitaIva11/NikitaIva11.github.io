const AuthService = require("../services/AuthService");
const BooksService = require("../services/BooksService");

class BooksController {
     async avaible(req, res, next) {
          try {
               const response = await BooksService.avaibleBooks;
               // const response = await BooksService.img('./public/cleanCod.jpg');
               // const response = await BooksService.booksId('./DATA/books-data/1.json');
               res.send(response);
          } catch (error) {
               console.log(error);
          }

     }
     async bookId(req, res, next) {
          try {
               const response = await BooksService.getBookById(req.params.id);
               res.send(response);
          } catch (error) {
               console.log(error);
          }

     }
}

module.exports = new BooksController();