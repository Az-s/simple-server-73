const express = require('express');

const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 8000;

const password = 'abc';

app.get('/encode/:string', (req, res)=> {
    res.send('Crypted pass ' + Vigenere.Cipher(password).crypt(req.params.string));
});

app.get('/decode/:string', (req, res)=> {
    res.send('Crypted pass ' + Vigenere.Decipher(password).crypt(req.params.string));
});

app.get('/', (req, res)=> {
    res.send('Hello!');
});

app.listen(port, () => {
    console.log('Were are live on http:localhost:' + port)
});