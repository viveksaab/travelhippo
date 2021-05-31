const express = require('express')
const config=require('./config')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/search', (req, res) => {
    res.send('search hotels!')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`)
})