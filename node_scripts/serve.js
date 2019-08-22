let express = require('express')

let app = express()
app.use(express.static('dist'))

let port = 3000
app.listen(port, () => {
  console.log('ローカルサーバー起動 → http://localhost:3000/')
})