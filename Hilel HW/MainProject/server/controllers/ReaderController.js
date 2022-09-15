const ReaderService = require("../services/ReaderService");


class ReaderController {
     async reader(req, res, next) {
          try {
               const response = await ReaderService.reader(req.params.bookId,req.params.page);
               res.send(response);
          } catch (error) {
               console.log(error);
          }

     }
}

module.exports = new ReaderController();