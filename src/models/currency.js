const mongoose = require('mongoose')

const currencySchema = new mongoose.Schema({
    symbol: { type: String, required: true },
    amount: { type: Number, required: true }
})

module.exports = currencySchema