const express = require('express');
const crypto = require('crypto');
const app = express();
const Worker = require('webworker-threads').Worker;

function sad() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    });
}

app.get('/', (req, res) => {
    const worker = new Worker(function() {
      this.onmessage = function() {
        let counter = 0;
        while (counter < 1e9) {
          counter++;
        }
  
        postMessage(counter);
      };
    });
  
    worker.onmessage = function(message) {
      console.log(message.data);
      res.send('' + message.data);
    };
  
    // when we call server postMessage it start executing worker onmessage
    // and worker postMessage send result to server onmessage
    worker.postMessage();
  });

app.get('/fast', (req, res) => {
    res.send('I am Fast');
});

app.listen(3000);