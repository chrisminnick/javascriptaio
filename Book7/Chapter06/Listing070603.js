import EventEmitter from 'events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', (param1, param2) => {
  console.log('an event occurred!', param1, param2);
});
myEmitter.emit('event', 'something', 'something else');
