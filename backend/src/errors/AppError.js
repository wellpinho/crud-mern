const { Router } = require('express')

const AppError = Router()

AppError.get('*', (req, res) => {
  return res.status(401).json({error: 'Not found!'})
})

module.exports = AppError