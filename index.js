const express = require('express');

const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 8000;

// const password = 'encipher';
// const decoding = 'decoding';
const password = 'paswwwwword';
const depassword = 'eakoscig';

app.get('/encode/password', (req, res)=> {
    console.log(Vigenere.Cipher('password').crypt(password));
    res.send('Crypted pass ' + Vigenere.Cipher('password').crypt(password));
});

// app.get('/decode/decoding', (req, res)=> {
//     res.send('Crypted pass ' + Vigenere.Decipher('password').crypt(decoding));
// });

app.get('/decode/eakoscig', (req, res)=> {
    res.send('Crypted password ' + Vigenere.Decipher('password').crypt(depassword));
});

app.get('/', (req, res)=> {
    res.send('Hello!');
});

app.listen(port, () => {
    console.log('Were are live on http:localhost:' + port)
});