const EventEmitter = require('events');

// create a custom event emitter
class myEmitter extends EventEmitter {}

// instantiate the custom event emitter
const myEmitter = new myEmitter();
// register event listener
myEmitter.on('event',()=>{
    console.log(`Event occurred!`);
});
// emit the event
myEmitter.emit('event');