const apiAdapter = require('../API/utils/apiAdapter')
const { BACKEND_URL } = require('../config')

const API = apiAdapter(BACKEND_URL)
const BASE_PATH = `${BACKEND_URL}/games`

const GameService = {
  init(game) {
    return API.post(`${BASE_PATH}/start`, game)
  },
  status(gameId) {
    return API.get(`${BASE_PATH}/${gameId}/status`)
  },
  start(gameId) {
    return API.get(`${BASE_PATH}/${gameId}/start`)
  }
}

module.exports = GameService
