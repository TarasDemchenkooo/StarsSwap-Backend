const bot = require("../config/tgBotConfig")
require('dotenv').config()

async function processProfilePhoto(id) {
    const photos = await bot.telegram.getUserProfilePhotos(id)

    if (photos.total_count === 0) {
        throw new Error(`User doesn't have a profile photo.`)
    }

    const fileId = photos.photos[0][0].file_id
    const file = await bot.telegram.getFile(fileId)
    const url = `https://api.telegram.org/file/bot${process.env.BOT_TOKEN}/${file.file_path}`

    return url
}

module.exports = processProfilePhoto