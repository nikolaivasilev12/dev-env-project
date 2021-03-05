const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
var md5 = require('md5');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/characters', async (req, res) => {
    const privateKey = '43a919584f43a3b8a21baa2b53c4755cc006df92'
    const publicKey = '2d90c2e1f19a1f1c9c5e06349ceb5b9c'
    const ts = new Date().getTime()

    var result = null;
    await axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${md5(ts+privateKey+publicKey)}`)
    .then(res => {
        result = res.data
    }).catch(err => {
        console.log(err)
    })
    res.json(result);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});