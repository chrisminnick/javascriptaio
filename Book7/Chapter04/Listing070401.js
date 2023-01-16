import fs from 'fs';

const fd = fs.open('data.txt', 'w+', (err, fd) => {
  if (err) {
    console.log(err);
    return;
  } else {
    const buffer = Buffer.alloc(100);
    for (let i = 0; i < 100; i++) {
      buffer[i] = Math.floor(Math.random() * 93) + 33;
    }
    fs.write(fd, buffer, 0, 100, 0, (err, written, buffer) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log(`Your new secure password is ${buffer.toString('ascii')}`);
      }
    });
    fs.close(fd, (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  }
});
