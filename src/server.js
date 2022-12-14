const express = require('express')
const axios = require('axios')
const { createClient } = require('redis')

const app = express()
const port = 3003
const client = createClient()

app.get('/', async (req, res) => {
    const jsonFile = await axios.get('https://raw.githubusercontent.com/json-iterator/test-data/master/large-file.json')
    JSON.stringify(jsonFile.data)
    res.send(jsonFile.data)
})

const startup = async () => {
    await client.connect()
    app.listen(port, () => console.log(`App listening on port ${port}!`))
}

startup()