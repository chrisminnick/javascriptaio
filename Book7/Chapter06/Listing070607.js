import EventEmitter from 'events';

class Boing extends EventEmitter {}

const boing = new Boing();
console.log(`maxListeners: ${boing.getMaxListeners()} (default)`);
boing.setMaxListeners(11);
console.log(`maxListeners: ${boing.getMaxListeners()} (set to 11)`);
for (let i = 0; i < 11; i++) {
  boing.on('boing', () => {
    console.log('boing');
  });
}
boing.emit('boing');
