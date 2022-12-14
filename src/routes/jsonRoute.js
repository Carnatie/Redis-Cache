const { Router } = require('express')
const axios = require('axios')
const redis = require('redis')

const client = redis.createClient();

const router = Router()

client.connect()
client.on('error', (err) => console.log('Redis Client Error', err));

router
    .get('/', async (req, res) => {
        const jsonFromCache = await client.get("jsonFile")
        if (jsonFromCache){
            return res.send(JSON.parse(jsonFromCache))
        }
        const jsonFile = await axios.get('https://raw.githubusercontent.com/json-iterator/test-data/master/large-file.json')
        await client.set("jsonFile", JSON.stringify(jsonFile.data), { EX: 320 })
        res.send(jsonFile.data)
    })

module.exports = router