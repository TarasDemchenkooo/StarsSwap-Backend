const processPayment = require("../services/payment.service")

async function handlePayment(ctx) {
    const userId = ctx.preCheckoutQuery.from.id
    const paymentData = JSON.parse(ctx.preCheckoutQuery.invoice_payload)

    try {
        await processPayment(paymentData, userId)
        //await ctx.answerPreCheckoutQuery(true)
    } catch (error) {
        //await ctx.answerPreCheckoutQuery(false, { error })
        console.log(error)
    }
}

module.exports = handlePayment