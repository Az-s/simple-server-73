const express = require('express');

const app = express();

const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello, world!\n');
});

app.listen(port, () => {
    console.log('We are live on ' + port);
});