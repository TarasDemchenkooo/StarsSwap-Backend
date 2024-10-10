const processPayment = require("../services/payment.service")

async function handlePayment(ctx) {
    const paymentData = JSON.parse(ctx.preCheckoutQuery.invoice_payload)

    try {
        await processPayment(paymentData)
        //await ctx.answerPreCheckoutQuery(true)
    } catch (error) {
        //await ctx.answerPreCheckoutQuery(false, { error })
    }
}

module.exports = handlePayment