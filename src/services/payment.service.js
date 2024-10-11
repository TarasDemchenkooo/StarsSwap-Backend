const User = require("../models/user")
const formatPaymentData = require("../utils/formatPaymentData")

async function processPayment(paymentData) {
    const id = paymentData.id

    try {
        const user = await User.findOne({ id })
        user.transactions.push(formatPaymentData(paymentData))
        await user.save()
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = processPayment