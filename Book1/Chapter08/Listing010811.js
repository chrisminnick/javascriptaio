const myCar = {
  speed: 0,
  operate(speedLimit, callback) {
    boundCallback = callback.bind(this);
    boundCallback(speedLimit);
    console.log(`myCar is driving at ${this.speed}`);
  },
};
function drive(speed) {
  this.speed = speed;
  console.log(`Driving at ${this.speed}`);
}
myCar.operate(55, drive);
