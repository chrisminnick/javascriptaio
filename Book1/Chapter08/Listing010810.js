const myTruck = {
  speed: 0,
};
const myCar = {
  speed: 0,
};
function drive(vehicle, speedLimit) {
  vehicle.speed = speedLimit;
  console.log(`Driving at ${vehicle.speed}mph.`);
}
