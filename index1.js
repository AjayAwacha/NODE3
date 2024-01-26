const cluster = require('cluster');

// is file running in master mode
if (cluster.isMaster) {
    // execute index.js again
    // but in child mode
    console.log('Master cluster');
    cluster.fork();
    cluster.fork();
} else {
    // I am child execute like normal server
    // do nothing else
    console.log('Child');
    const express = require('express');
    const crypto = require('crypto');
    const app = express();

    // const doWork = (duration) => {
    //     const startTime = Date.now();
    //     while (Date.now() - startTime < duration) { }
    // }

    function sad() {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        });
    }

    app.get('/', (req, res) => {
        sad();
        console.log('This is log test with pm2');
        res.send('Hi There');
    });

    app.get('/fast', (req, res) => {
        res.send('I am Fast');
    });

    app.listen(3000);
}
