const https = require('https');

const startTime = Date.now();

function networkCall() {
    https.request('https://www.google.com', (res) => {
        res.on('data', () => { })
        res.on('end', () => {
            console.log('Time Taken : ', Date.now() - startTime);
        })
    }).end()
}

networkCall();
networkCall();
networkCall();
networkCall();
networkCall();


