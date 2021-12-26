const { Router } = require('express')

const restaurantRoutes = Router()

restaurantRoutes.get('/restaurants', (req, res) => {
  return res.status(200).json({ message: 'Welcome to restaurants'})
})

module.exports = restaurantRoutes