function generatePaymentData(paymentData) {
    const title = paymentData.to.amount + ' ' + paymentData.to.symbol

    const description = `Confirm your purchase of ${title} for ${paymentData.from.amount} ${paymentData.from.symbol}`

    const payload = {
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

    const provider_token = ''

    const currency = 'XTR'

    const prices = [{ label: title, amount: 1 }]

    return {
        title,
        description,
        payload,
        provider_token,
        currency,
        prices
    }
}

module.exports = generatePaymentData