const fs = require('fs')
const ApiError = require('../exceptions/api-error')
class AuthService {
     async registration(userData) {
          const dir = fs.readdirSync(`./users/`)
          if (!dir.includes('users-in-system.json')) {
               fs.writeFileSync(`./users/users-in-system.json`, JSON.stringify({}), (err) => { if (err) throw err; })
          }
          const { email, userName, password, creationTime, lastLoginTime } = userData
          let user = ''
          const hashPassword = btoa(password)
          const userId = btoa(email)
          const file = JSON.parse( fs.readFileSync('./users/users-in-system.json', 'utf8',));

          const userExist = Object.keys(file).includes(userId)

          if (userExist) {
               throw ApiError.BadRequest('user exist')
          }
          else {
               user = {
                    ...file,
                    [userId]: {
                         email,
                         userName,
                         password: hashPassword,
                         creationTime,
                         lastLoginTime,
                         token: userId + hashPassword
                    }
               }
               fs.writeFile(`./users/users-in-system.json`, JSON.stringify(user), (err) => { if (err) throw err; })
               return { status: 200, msg: 'user create', user: { userName: userName, token: userId + hashPassword } }
          }
         

        


     }
     async login(email, password, lastLoginTime) {
          const dir = fs.readdirSync(`./users/`)
          if (!dir.includes('users-in-system.json')) {
               fs.writeFileSync(`./users/users-in-system.json`, JSON.stringify({}))
          }
          let file = JSON.parse(fs.readFileSync('./users/users-in-system.json', 'utf8'))
          let hashPassword = btoa(password)
          let userId = btoa(email)
          if (file[userId] && file[userId].token === userId + hashPassword) {
               file[userId].lastLoginTime = lastLoginTime
               fs.writeFile(`./users/users-in-system.json`, JSON.stringify(file), (err) => { if (err) throw err; })
               return { status: 200, msg: 'user login', user: { userName: file[userId].userName, token: userId + hashPassword } }
          } else {
               throw ApiError.BadRequest('wrong mail or password')
          }
     }
     async checkToken(token) {
          const dir = fs.readdirSync(`./users/`)
          if (!dir.includes('users-in-system.json')) {
               fs.writeFileSync(`./users/users-in-system.json`, JSON.stringify({}))
          }
          let file = JSON.parse(fs.readFileSync('./users/users-in-system.json', 'utf8'));
          let resp = false;
          Object.keys(file).forEach(el => {
               if (file[el].token === token) {
                    resp = { status: 200, msg: 'user login', user: { userName: file[el].userName, token: el + file[el].password } }
                    return;
               }
          })
          console.log(resp);
          if (!resp) throw ApiError.BadRequest('wrong mail or password')
          else return resp

     }
}

module.exports = new AuthService()