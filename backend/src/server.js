require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./modules/routes')
const AppError = require('./errors/AppError')
const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)
app.use(AppError)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})