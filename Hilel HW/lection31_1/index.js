const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
app.all('/users/:userid', (req, res) => {
     try {
          let files = fs.readdirSync(`./users`);
          let out = '';
          switch (req.params.userid) {
               case 'first':
                    out = fs.readFileSync(`./users/${files[0]}/${req.method.toLowerCase()}.json`)
                    res.end(out)
                    break;
               case 'last':
                    out = fs.readFileSync(`./users/${files[files.length-1]}/${req.method.toLowerCase()}.json`)
                    res.end(out)
                    break;
               case 'all':
                    out = files.map(el => fs.readFileSync(`./users/${el}/${req.method.toLowerCase()}.json`, 'utf-8'))
                    res.end(JSON.stringify(out))
                    break;
               default:
                    let user = fs.readFileSync(`.${req.path}/${req.method.toLowerCase()}.json`)
                    res.end(user)
                    break;
          }
     } catch (error) {
          console.log(error)
          res.end('404')
     }

})
app.all('/users/', async (req, res) => {
     try {
          let files = fs.readdirSync(`.${req.path}`)
          let out = files.map(el => fs.readFileSync(`.${req.path}${el}/${req.method.toLowerCase()}.json`, 'utf-8'))
          res.end(JSON.stringify(out))
     } catch (error) {
          console.log(error)
          res.end('404')
     }

})

app.listen(port, () => {
     console.log(`Example app listening on port ${port}`)
})