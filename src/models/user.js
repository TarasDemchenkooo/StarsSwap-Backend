const mongoose = require('mongoose')
const transactionSchema = require('./transaction')
const settingsSchema = require('./settings')

const userSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    transactions: [transactionSchema],
    settings: { type: settingsSchema, required: true }
})

const User = mongoose.model('User', userSchema)

module.exports = User