const metricConversions = require('./metricConversions');

const convertToMetric = (value, unit) => {
  switch (unit) {
    case 'in':
      return metricConversions.inchesToCentimeters(value);
    case 'gl':
      return metricConversions.gallonsToLiters(value);
    case 'lb':
      return metricConversions.poundsToKilograms(value);
    case 'mi':
      return metricConversions.milesToKilometers(value);
    default:
      return value;
  }
};
console.log(`One inch is ${convertToMetric(1, 'in')} centimeters.`);
