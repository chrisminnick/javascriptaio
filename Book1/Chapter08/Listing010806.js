const convertMilesToKM = function (distanceInMiles) {
  const distanceInKM = distanceInMiles * 1.609;
  return distanceInKM;
};

console.log(convertMilesToKM(5));
