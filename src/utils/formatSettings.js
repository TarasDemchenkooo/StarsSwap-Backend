function formatSettings(settings) {
    const formattedSettings = {}

    Object.keys(settings).forEach(key => {
        formattedSettings[`settings.${key}`] = settings[key]
    })

    return formattedSettings
}

module.exports = formatSettings