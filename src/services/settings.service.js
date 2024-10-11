const User = require("../models/user")

async function processSettings(id) {
    try {
        const user = await User.findOne({ id })
        return user.settings
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = processSettings