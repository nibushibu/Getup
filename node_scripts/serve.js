const dotenv = require('dotenv')
const express = require('express')

dotenv.config()
const port = process.env.LOCALHOST_PORT

const app = express()
app.use(express.static('dist'))

app.listen(port, () => {
  console.log(`ローカルサーバー起動 → http://localhost:${port}/`)
})
