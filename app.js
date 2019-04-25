const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello - today is Apr 25th - change 2'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
