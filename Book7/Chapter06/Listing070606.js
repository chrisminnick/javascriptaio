import EventEmitter from 'events';

class Boing extends EventEmitter {}

const boing = new Boing();
console.log(`maxListeners: ${boing.getMaxListeners()} (default)`);

for (let i = 0; i < 11; i++) {
  boing.on('boing', () => {
    console.log('boing');
  });
}
boing.emit('boing');
