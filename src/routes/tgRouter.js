const Router = require('express')
const handleInvoiceLink = require('../controllers/invoiceLink.controller')
const handleProfilePhoto = require('../controllers/profilePhoto.controller')

const tgRouter = new Router()

tgRouter.post('/invoice', handleInvoiceLink)
tgRouter.get('/pfp', handleProfilePhoto)

module.exports = tgRouter