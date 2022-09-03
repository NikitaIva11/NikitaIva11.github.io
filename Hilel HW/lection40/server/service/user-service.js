const fs = require('fs')
class UserService {
     async getUsers() {
          let file = JSON.parse(fs.readFileSync('./users/users-in-system.json', 'utf8'))
          console.log(file);
          return file
     }
}

module.exports = new UserService()