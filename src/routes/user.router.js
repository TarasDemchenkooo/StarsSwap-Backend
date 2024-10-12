const express = require('express')
const handleHistory = require('../controllers/history.controller')
const handleAvatar = require('../controllers/avatar.controller')
const handleInvoiceLink = require('../controllers/invoiceLink.controller')
const handleSettings = require('../controllers/settings.controller')
const handleRegister = require('../controllers/register.controller')
const handleSwitch = require('../controllers/switch.controller')

const userRouter = express.Router({ mergeParams: true })

userRouter.post('/register', handleRegister)
userRouter.post('/invoice', handleInvoiceLink)
userRouter.get('/history', handleHistory)
userRouter.get('/avatar', handleAvatar)
userRouter.get('/settings', handleSettings)
userRouter.patch('/settings', handleSwitch)

module.exports = userRouter