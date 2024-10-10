const { default: axios } = require("axios")
const bot = require("../config/tgBotConfig")
require('dotenv').config()

async function processAvatar(id) {
    try {
        const photos = await bot.telegram.getUserProfilePhotos(id)

        if (photos.total_count === 0) {
            return null
        }

        const fileId = photos.photos[0][0].file_id
        const file = await bot.telegram.getFile(fileId)
        const url = `https://api.telegram.org/file/bot${process.env.BOT_TOKEN}/${file.file_path}`

        const fileStream = await axios({
            url,
            method: 'GET',
            responseType: 'stream'
        })

        return fileStream.data
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = processAvatar