const express = require('express')
const app = express()
const cors = require('cors')
const AuthRoutes = require('./router/AuthRoutes')
const UserRoutes = require('./router/UserRoutes')
const errorMiddleware = require('./middlewares/error-middleware')
const ContactRoutes = require('./router/ContactRoutes')

const port = 2700

app.use(cors())
app.use(express.json())
app.use('/auth',AuthRoutes)
app.use('/users',UserRoutes)
app.use('/contact',ContactRoutes)
app.use(errorMiddleware)
app.listen(port, () => {
     console.log(`Example app listening on port ${port}`)
})