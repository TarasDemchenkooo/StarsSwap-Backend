const processAvatar = require("../services/avatar.service")

async function handleAvatar(req, res) {    
    try {
        const avatarStream = await processAvatar(req.params.id)
        avatarStream.pipe(res)
    } catch (error) {
        res.status(500).json({ error })
    }
}

module.exports = handleAvatar