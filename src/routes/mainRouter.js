const Router = require('express')
const handleHistory = require('../controllers/history.controller')

const mainRouter = new Router()

mainRouter.get('/history', handleHistory)

module.exports = mainRouter