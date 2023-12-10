const express = require('express');

const LISTEN_PORT = 3000
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(LISTEN_PORT)