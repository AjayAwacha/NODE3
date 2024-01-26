// EVENT LOOP 
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

function shoudContinue() {
    // check 1: Any pending setTimeout/setInterval/setImmediate
    // check 2: Any pending OS Task( server listning on port)
    // check 3: Any pending operation (long running task like file I/O)
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

while(shoudContinue()) {
    // look for : setTimeout/setInterval and execute callback
    // look for : OS Task( server listning on port) and execute callback
    // look for : file read write operation to complete
    // take and pause and hold for stuff to complte
    // execute setImmediate function callback
    // Handle close event
}

// END