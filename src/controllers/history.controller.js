const processHistory = require("../services/history.service")

async function handleHistory(req, res) {
    try {
        const history = await processHistory(req.params.id)
        res.status(200).json({ history })
    } catch (error) {
        res.status(500).json({ error })
    }
}

module.exports = handleHistory