import EventEmitter from 'events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event1', () => {
  console.log('event1 occurred!');
});
myEmitter.on('event2', () => {
  console.log('event2 occurred!');
});
myEmitter.on('event3', () => {
  console.log('event3 occurred!');
});
myEmitter.emit('event1');
myEmitter.emit('event2');
myEmitter.emit('event3');
myEmitter.removeAllListeners();
myEmitter.emit('event1');
myEmitter.emit('event2');
myEmitter.emit('event3');
