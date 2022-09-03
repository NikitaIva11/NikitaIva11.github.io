const contactServices = require("../service/contact-services");

class ContactController {
      async contact(req,res,next){
          try {
               const contactData = await contactServices.contact(req.body);
               return res.json(contactData)
          } catch (error) {
               next(error)
          }
     }
}
module.exports = new ContactController();