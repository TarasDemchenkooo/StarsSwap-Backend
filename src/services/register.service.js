const User = require('../models/user')

async function processRegister(id) {
    const user = new User({
        id,
        transactions: [],
        settings: {}
    })

    try {
        await user.save()
        return true
    } catch (error) {
        throw new Error('User registration failed')
    }
}

module.exports = processRegister