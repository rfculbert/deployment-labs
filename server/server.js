const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/deployment.html'))
})

app.listen(4000, () => console.log('gliding on 4000'))