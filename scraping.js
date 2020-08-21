const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.vocabulary.com/dictionary/').then(response =>{
        const $ = cheerio.load(response.data);
        return $('.dynamictext').children().first().text();
    })