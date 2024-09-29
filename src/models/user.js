const mongoose = require('mongoose')
const transactionSchema = require('./transaction')

const userSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    transactions: [transactionSchema]
})

const User = mongoose.model('User', userSchema)

module.exports = User