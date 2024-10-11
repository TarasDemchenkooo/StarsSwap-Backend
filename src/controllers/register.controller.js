const processRegister = require("../services/register.service")

async function handleRegister(req, res) {
    try {
        const status = await processRegister(req.params.id)
        res.status(200).json({ status })
    } catch (error) {
        res.status(500).json({ status: false })
    }
}

module.exports = handleRegister