const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('I am student of Node JS!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})