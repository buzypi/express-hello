const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello - today is Feb 14th - third change!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
