const mongoose = require('mongoose')

function mongoInit() {
    mongoose.connect(process.env.DB_URL)
        .then(() => console.log('Connected to db'))
        .catch(error => console.log(error))
}

module.exports = mongoInit