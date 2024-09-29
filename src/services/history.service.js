const User = require("../models/user")

async function processHistory(id) {
    try {
        const user = await User.findOne({ id })
        return user.transactions
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = processHistory