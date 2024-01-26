// setTimeout(() => {
//     console.log('Event loop not exist until this function not complete execution');
// }, 6000)

const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const startTime = Date.now();

function networkCall() {
    https.request('https://www.google.com', (res) => {
        res.on('data', () => { })
        res.on('end', () => {
            console.log('Request Time Taken : ', Date.now() - startTime);
        })
    }).end()
}

function sad() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log('pbkdf2 Time Taken ', Date.now() - startTime);
    });
}

networkCall();  // always execute first not related to network call

fs.readFile('multitask.js', 'utf-8', () => {
    console.log('File IO Time Taken : ', Date.now() - startTime);
})

sad();
sad();
sad();
sad();

// pbkdf2 and FO both have four thread pool to execute operation but File system take time to execute that's why it come in secound no