function formatPaymentData(paymentData) {
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

    return transactionData
}

module.exports = formatPaymentData