const User = require("../models/user")
const formatSettings = require("../utils/formatSettings")

async function processSwitch(id, settings) {
    try {
        const user = await User.findOneAndUpdate(
            { id },
            { $set: formatSettings(settings) },
            { new: true }
        )

        return user.settings
    } catch (error) {
        throw new Error('Server error')
    }
}

module.exports = processSwitch