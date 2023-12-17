const express = require('express')
const app = express()
const port = 3001
const router = require('./routes/index')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})