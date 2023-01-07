const favoriteFood = 'tacos';

makeDinner(favoriteFood);

function makeDinner(whatToMake) {
  console.log(`I see you want ${whatToMake}.`);
  whatToMake = 'salad';
  console.log(`I've decided to make ${whatToMake} instead.`);
}
