const express = require('express')
const logger = require('../logger/logger')
const GameService = require('../service/gameService')
const { handleError } = require('../utils/errorHandlers')

const gameController = () => {
  const router = express.Router()
  
  router.post('/start', (req, res) => {
    GameService.init(req.body)
      .then(({ data }) => res.send(data))
      .catch((error) => {
        const customError = { message: 'Failed to start game' }
        logger.logAPIError(req, error, customError)
        handleError(error, res, customError)
      })
  })
  
  router.get('/:gameId/status', (req, res) => {
    GameService.status(req.params.gameId)
      .then(({ data }) => res.send(data))
      .catch((error) => {
        const customError = { message: 'Failed to get game status', gameId: req.params.gameId }
        logger.logAPIError(req, error, customError)
        handleError(error, res, customError)
      })
  })
  
  router.get('/:gameId/start', (req, res) => {
    GameService.start(req.params.gameId)
      .then(({ data }) => res.send(data))
      .catch((error) => {
        const customError = { message: 'Failed to start game', gameId: req.params.gameId }
        logger.logAPIError(req, error, customError)
        handleError(error, res, customError)
      })
  })
  
  return router
}

module.exports = gameController()
