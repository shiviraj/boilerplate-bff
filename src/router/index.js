const express = require('express')
const userController = require('../controller/userController')
const gameController = require('../controller/gameController')

const router = express.Router()

router.use('/users', userController)
router.use('/games', gameController)

module.exports = router
