const express = require('express')
const cors = require('cors')
const botInit = require('./api/tgBot')
const mongoInit = require('./api/mongo')
const tgRouter = require('./routes/tgRouter')
const mainRouter = require('./routes/mainRouter')
require('dotenv').config()

const port = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors())
app.use('/tg', tgRouter)
app.use('/', mainRouter)

app.listen(port, () => {
    console.log('Server has been launched')

    botInit()
    mongoInit()
})
