const express = require('express')
const handleHistory = require('../controllers/history.controller')
const handleAvatar = require('../controllers/avatar.controller')
const handleInvoiceLink = require('../controllers/invoiceLink.controller')

const userRouter = express.Router({ mergeParams: true })

userRouter.get('/history', handleHistory)
userRouter.get('/avatar', handleAvatar)
userRouter.post('/invoice', handleInvoiceLink)

module.exports = userRouter