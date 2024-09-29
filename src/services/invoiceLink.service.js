const bot = require("../config/tgBotConfig")
const checkPayment = require("../utils/checkPayment")
const generatePaymentData = require("../utils/generatePaymentData")

async function processInvoiceLink(paymentData) {
    const isCorrectPayment = checkPayment(paymentData)

    if (paymentData.from.amount > 100000 || paymentData.from.amount < 100 || !isCorrectPayment) {
        throw new Error(`Can't generate invoice link. Check your payment data.`)
    }

    const formattedPaymentData = generatePaymentData(paymentData)

    const invoiceLink = await bot.telegram.createInvoiceLink(formattedPaymentData)

    return invoiceLink
}

module.exports = processInvoiceLink