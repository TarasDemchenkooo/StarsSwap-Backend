const bot = require("../config/tgBotConfig")
const handlePayment = require("../controllers/payment.controller")

function botInit() {
    bot.launch()
    console.log('Bot has been launched')

    bot.on('pre_checkout_query', handlePayment)

    process.once('SIGINT', () => bot.stop('SIGINT'))
    process.once('SIGTERM', () => bot.stop('SIGTERM'))
}

module.exports = botInit