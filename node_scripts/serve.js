const express = require('express')

const app = express()
app.use(express.static('dist'))

const port = 3000
app.listen(port, () => {
  console.log('ローカルサーバー起動 → http://localhost:3000/')
})
