const processSettings = require("../services/settings.service")

async function handleSettings(req, res) {
    try {
        const settings = await processSettings(req.params.id)
        res.status(200).json({ settings })
    } catch (error) {
        res.status(500).json({ error })
    }
}

module.exports = handleSettings