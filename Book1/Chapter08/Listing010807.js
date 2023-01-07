function getThere(distance) {
  let estimatedTripDuration;
  if (water === true) {
    const getSwimTime = function () {
      return distance / 2;
    };
    estimatedTripDuration = getSwimTime();
  } else {
    const getWalkTime = function () {
      return distance / 4;
    };
    estimatedTripDuration = getWalkTime();
  }
  return estimatedTripDuration;
}

let water = true;
let distance = 30;

console.log(`It will take ${getThere(distance)} hours to get there.`);
