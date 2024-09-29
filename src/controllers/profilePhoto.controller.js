const processProfilePhoto = require("../services/profilePhoto.service")

async function handleProfilePhoto(req, res) {
    try {
        const url = await processProfilePhoto(req.body.id)
        res.status(200).json({ url })
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = handleProfilePhoto