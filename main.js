const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
var md5 = require('md5');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const privateKey = '43a919584f43a3b8a21baa2b53c4755cc006df92'
const publicKey = '2d90c2e1f19a1f1c9c5e06349ceb5b9c'
const ts = new Date().getTime()

//CHARACTERS
/* get all characters */
app.get('/characters', async (req, res) => {
    var result = null;
    await axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${md5(ts + privateKey + publicKey)}`,
        {
            params: {
                offset: (req.query.page - 1) * 20
            }
        }).then(res => {
            result = res.data
        }).catch(err => {
            console.log(err)
        })
    res.json(result);
});

/* Get Single Character */
app.get('/character', async (req, res) => {
    let result = null;
    const charId = req.query.charId

    await axios.get(`http://gateway.marvel.com/v1/public/characters/${charId}?ts=${ts}&apikey=${publicKey}&hash=${md5(ts + privateKey + publicKey)}`,
    ).then(res => {
        result = res.data
    }).catch(err => {
        console.log(err)
    })
    res.json(result);
});


//COMICS
//GET ALL Comics
app.get('/comics', async (req, res) => {
    var result = null;
    await axios.get(`http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${md5(ts + privateKey + publicKey)}`,
        {
            params: {
                offset: (req.query.page - 1) * 20
            }
        }).then(res => {
            result = res.data
        }).catch(err => {
            console.log(err)
        })
    res.json(result);
});

/* Get Single Comics details */
app.get('/comic', async (req, res) => {
    let result = null;
    const comicsId = req.query.comicsId

    await axios.get(`http://gateway.marvel.com/v1/public/comics/${comicsId}?ts=${ts}&apikey=${publicKey}&hash=${md5(ts + privateKey + publicKey)}`,
    ).then(res => {
        result = res.data
    }).catch(err => {
        console.log(err)
    })
    res.json(result);
});


//SERIES
//GET ALL Series
app.get('/series', async (req, res) => {
    var result = null;
    await axios.get(`http://gateway.marvel.com/v1/public/series?ts=${ts}&apikey=${publicKey}&hash=${md5(ts + privateKey + publicKey)}`,
        {
            params: {
                offset: (req.query.page - 1) * 20
            }
        }).then(res => {
            result = res.data
        }).catch(err => {
            console.log(err)
        })
    res.json(result);
});

/* Get Single Serie details */
app.get('/serie', async (req, res) => {
    let result = null;
    const SerieId = req.query.SerieId

    await axios.get(`http://gateway.marvel.com/v1/public/series/${SerieId}?ts=${ts}&apikey=${publicKey}&hash=${md5(ts + privateKey + publicKey)}`,
    ).then(res => {
        result = res.data
    }).catch(err => {
        console.log(err)
    })
    res.json(result);
});


//SERIES
//GET ALL Stories
app.get('/stories', async (req, res) => {
    var result = null;
    await axios.get(`http://gateway.marvel.com/v1/public/stories?ts=${ts}&apikey=${publicKey}&hash=${md5(ts + privateKey + publicKey)}`,
        {
            params: {
                offset: (req.query.page - 1) * 20
            }
        }).then(res => {
            result = res.data
        }).catch(err => {
            console.log(err)
        })
    res.json(result);
});
/* Get Single Story details */
app.get('/story', async (req, res) => {
    let result = null;
    const StoryId = req.query.StoryId

    await axios.get(`http://gateway.marvel.com/v1/public/stories/${StoryId}?ts=${ts}&apikey=${publicKey}&hash=${md5(ts + privateKey + publicKey)}`,
    ).then(res => {
        result = res.data
    }).catch(err => {
        console.log(err)
    })
    res.json(result);
});

//SEARCH
//Search character
app.get('/char', async (req, res) => {
    var result = null;
    const searchChar = req.query.searchChar
    await axios.get(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchChar}&ts=${ts}&apikey=${publicKey}&hash=${md5(ts + privateKey + publicKey)}`,
        {
            params: {
                offset: (req.query.searchPage - 1) * 20
            }
        }).then(res => {
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