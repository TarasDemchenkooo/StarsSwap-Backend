const User = require('../models/user')

async function processRegister(id) {
    try {
        const user = await User.findOne({ id })

        if (user) {
            return true
        } else {
            const user = new User({
                id,
                transactions: [],
                settings: {}
            })

            await user.save()
            return true
        }
    } catch (error) {
        throw new Error('User registration failed')
    }
}

module.exports = processRegister