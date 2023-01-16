// create an event emitter, set a listener, emit an event, and remove the listener

import EventEmitter from 'events';

class MyEmitter extends EventEmitter {}
const handleEvent = () => {
  console.log('an event occurred!');
};

const myEmitter = new MyEmitter();
myEmitter.on('event', handleEvent);
myEmitter.emit('event');
myEmitter.removeListener('event', handleEvent);
myEmitter.emit('event');
