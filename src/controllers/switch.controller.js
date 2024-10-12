const processSwitch = require("../services/switch.service")

async function handleSwitch(req, res) {
    const userId = req.params.id
    const keysToUpdate = req.body

    try {
        const updatedUser = await processSwitch(userId, keysToUpdate)
        res.status(200).json({ user: updatedUser })
    } catch (error) {
        res.status(500).json({ error })
    }
}

module.exports = handleSwitch