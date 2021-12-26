const { Router } = require('express')
const restaurantRoutes = require('../restaurants/routes/restaurants.routes')

const routes = Router()

routes.get('/', (req, res) => {
  return res.status(200).json({ message: 'Welcome!'})
})

routes.use(restaurantRoutes)

module.exports = routes