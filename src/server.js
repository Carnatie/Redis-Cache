const express = require('express')

const routes = require('./routes/index')

const app = express()
const port = 3003

routes(app)

app.listen(port, () => console.log(`App listening on port ${port}!`))