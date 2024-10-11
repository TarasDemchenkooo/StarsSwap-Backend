const express = require('express')
const handleHistory = require('../controllers/history.controller')
const handleAvatar = require('../controllers/avatar.controller')
const handleInvoiceLink = require('../controllers/invoiceLink.controller')
const handleSettings = require('../controllers/settings.controller')
const handleRegister = require('../controllers/register.controller')

const userRouter = express.Router({ mergeParams: true })

userRouter.get('/register', handleRegister)
userRouter.post('/invoice', handleInvoiceLink)
userRouter.get('/history', handleHistory)
userRouter.get('/settings', handleSettings)
userRouter.get('/avatar', handleAvatar)

module.exports = userRouter