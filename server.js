const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('<h1>Hello, world!</h1>');
});

app.get('/:string', (req, res) => {
    res.send(req.params.string);
});

app.listen(port, () => {
    console.log('We are live on http:localhost:' + port);
});

// Сделал 2 файла под задание , нужно будет поменять index - server в package.json
// наверное оптимальнее было бы сделать 2 отдельных папки , в след раз сделаю грамотнее