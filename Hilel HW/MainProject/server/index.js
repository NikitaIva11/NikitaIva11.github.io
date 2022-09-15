const express = require('express');
const cors = require('cors')
const MainRoutes = require('./routes/MainRoutes/MainRoutes');

const app = express()

const PORT = 2700

app.use(cors())
app.use(express.json())
app.use('/api',MainRoutes)
app.use( express.static('/public'))


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})