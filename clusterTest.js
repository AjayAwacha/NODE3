const cluster = require('cluster');

if (cluster.isMaster) {
    console.log('Master ');

    cluster.fork();
    cluster.fork();
    cluster.fork();

} else {
    console.log('Create server here');
}

