const myTruck = {
  speed: 0,
};
const myCar = {
  speed: 0,
};
function drive(speedLimit) {
  this.speed = speedLimit;
  console.log(`Driving at ${this.speed}mph.`);
}
