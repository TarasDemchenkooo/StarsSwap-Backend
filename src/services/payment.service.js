const User = require("../models/user")

async function processPayment(paymentData, userId) {
    const transactionData = {
        address: paymentData.address,
        from: {
            symbol: paymentData.from.symbol,
            amount: paymentData.from.amount
        },
        to: {
            symbol: paymentData.to.symbol,
            amount: paymentData.to.amount
        }
    }

    try {
        let user = await User.findOne({ id: userId })

        if (user) {
            user.transactions.push(transactionData)
            await user.save()
        } else {
            user = new User({
                id: userId,
                transactions: [transactionData]
            })
            await user.save()
        }
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = processPayment