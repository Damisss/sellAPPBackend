const express = require('express')
require('./src/dataBase/dataBase')
const {middleware} = require('./src/middleware/middleware')
const {userRoutes} = require('./src/users/users.routes')
const {articlesRoutes} = require('./src/articles/articles.routes')
const app = express()
middleware(app)
app.use('/api/sell/user', userRoutes)
app.use('/api/sell/article', articlesRoutes)
app.use(express.static('upload'))

app.listen(3000, ()=>console.log('Server is running at 3000'))