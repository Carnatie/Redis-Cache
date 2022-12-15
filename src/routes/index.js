const bodyParser = require('body-parser')

const jsonRoute = require('../routes/jsonRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(jsonRoute)
}