const processHistory = require("../services/history.service")

async function handleHistory(req, res) {
    try {
        const history = await processHistory(req.body.id)
        res.status(200).json({ history })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = handleHistory