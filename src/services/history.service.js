const User = require("../models/user")

async function processHistory(id) {
    try {
        const user = await User.findOne({ id })

        if (user.transactions.length === 0) {
            return null
        } else {
            return user.transactions
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = processHistory