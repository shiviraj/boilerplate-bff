const express = require('express')
const oauthController = require('../controller/oauthController')
const userController = require('../controller/userController')

const router = express.Router()

router.use('/oauth', oauthController)
router.use('/users', userController)

module.exports = router
