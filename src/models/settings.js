const mongoose = require('mongoose')

const settingsSchema = new mongoose.Schema({
    vibration: { type: Boolean, default: true },
    notification: { type: Boolean, default: true },
    target_asset: { type: String, default: 'TON' }
})

module.exports = settingsSchema