const express = require('express');
const app = express();

const axios = require('axios');

app.use(express.json());

const port = 5678;

app.get('/', (req, res) => {
    res.status(200).json({message: 'Get Request ', app: 'express'});
})

app.post('/', async (req, res) => {
    const body = req.body;
    console.log('Body is ', body.url);
    // const responce = await axios.post(url, payload, {
    //     headers: {
    //         "dsd": "asdsadsa"
    //     }
    // });
    // const responce = await axios.get(body.url, {
    //     headers: {
    //         'customerHeade': 'headerValue'
    //     }
    // });
    const responce = await axios.get(body.url);
    console.log('responce ', responce.data);
    res.status(200).json({message: `Post Request Body : ${body}`, app: 'express'});
})

app.listen(port, () => {
    console.log(`server listen on port ${port}`);
})