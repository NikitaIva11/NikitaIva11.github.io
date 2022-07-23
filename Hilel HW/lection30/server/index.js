const express = require('express')
const fs = require('fs')
const cors = require('cors')
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.set('trust proxy', true)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/createProf', (req, res) => {
  let files = fs.readdirSync('./userData');
  if (files.includes(req.body.ip + '.txt')) {
    let innerTxt = fs.readFileSync(`./userData/${req.body.ip}.txt`)
    res.send(innerTxt)
    res.end()
  } else {
    let obj = {
      user:req.body.ip,
      data:[]
    }
    fs.writeFileSync(`./userData/${req.body.ip}.txt`, JSON.stringify(obj))
    res.send(obj)
    res.end()
  }
  
})
app.post('/pushToDo',(req,res)=>{
  let files = fs.readdirSync('./userData');
  console.log(req.body)
  fs.writeFileSync(`./userData/${req.body.user}.txt`,JSON.stringify(req.body));
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})