const mongoose = require('mongoose')
const currencySchema = require('./currency')

const transactionSchema = new mongoose.Schema({
    address: { type: String, required: true },
    from: { type: currencySchema, required: true },
    to: { type: currencySchema, required: true },
    status: { type: String, default: 'pending' },
    timestamp: { type: Date, default: Date.now }
})

module.exports = transactionSchema