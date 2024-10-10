const express = require('express')
const cors = require('cors')
const botInit = require('./api/tgBot')
const mongoInit = require('./api/mongo')
const userRouter = require('./routes/user.router')
require('dotenv').config()

const port = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors())
app.use('/user/:id', userRouter)

app.listen(port, () => {
    console.log('Server has been launched')

    botInit()
    mongoInit()
})
