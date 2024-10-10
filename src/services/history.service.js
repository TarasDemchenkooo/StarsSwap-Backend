const User = require("../models/user")

async function processHistory(id) {
    try {
        const user = await User.findOne({ id })
        return user ? user.transactions : null
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = processHistory