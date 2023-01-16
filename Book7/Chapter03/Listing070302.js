const myBuffer = Buffer.from('hello');

for (const b of myBuffer) {
  console.log(b.toString(16));
}
