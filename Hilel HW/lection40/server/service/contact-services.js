const fs = require('fs')
const { nextTick } = require('process')
const ApiError = require('../exceptions/api-error')
class ContactService {
     async contact(data) {
               const dir = fs.readdirSync(`./contact/`)
               if (!dir.includes('contact-questions.json')) {
                    fs.writeFileSync(`./contact/contact-questions.json`, JSON.stringify({}))
               }
               const { token, message } = data
               let contactFile = JSON.parse(fs.readFileSync('./contact/contact-questions.json', 'utf8'))
               let userFile = JSON.parse(fs.readFileSync('./users/users-in-system.json', 'utf8'))
               let resp = false;
               Object.keys(userFile).forEach(el => {
                    
                    if (userFile[el].token === token) {
                         if (contactFile[el]) {
                              contactFile[el].message.push(message)
                         } else {
                              const contact = {
                                   [el]: {
                                        message: [message]
                                   }
                              }
                              contactFile = { ...contact, ...contactFile }
                         }
                         resp = {status:200,msg:'good'}
                         return;
                    }
               })
           
               if (!resp) throw ApiError.BadRequest('wrong token')
               else {
                    fs.writeFileSync(`./contact/contact-questions.json`, JSON.stringify(contactFile))
                    return resp
               }

     }
}

module.exports = new ContactService()