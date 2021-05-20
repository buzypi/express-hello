const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello - today is May 20th'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
