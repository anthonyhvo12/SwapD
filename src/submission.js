const path = require('path')
const express = require('express')
require('../db/mongoose.js')
const app = express()
const port = process.env.PORT
const postRouter = require('../routers/postRoutes.js')
const userRouter = require('../routers/userRoutes.js')

// define paths for express config
const publicDir =  path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')

app.set('view engine', 'pug')
app.set('views', viewsPath)
app.use(express.json())
app.use(express.static(publicDir))
app.use(postRouter)
app.use(userRouter)

app.get('', (req, res) => {
    res.sendFile(viewsPath + '/submit-post.html')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})