require('dotenv').config()

function checkPayment(paymentData) {
    const actualPrice = Math.ceil(paymentData.tonPrice / Number(process.env.STAR_PRICE))
    const requestedPrice = Math.ceil(paymentData.from.amount / paymentData.to.amount * (1 - Number(process.env.COMISSION)))
    const isCorrectPrice = Math.abs(actualPrice - requestedPrice) <= 10
    
    return isCorrectPrice
}

module.exports = checkPayment