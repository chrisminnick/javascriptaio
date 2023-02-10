import { triangleArea, trianglePerimeter } from './Listing070106.mjs';

function triangleMaker(size) {
  const area = triangleArea(size, size);
  const perimeter = trianglePerimeter(size, size, size);

  const triangle = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      if (j < size - i - 1) {
        row.push('  ');
      } else {
        row.push(' *  ');
      }
    }
    triangle.push(row.join(''));
  }
  return {
    area,
    perimeter,
    triangle,
  };
}

const { area, perimeter, triangle } = triangleMaker(18);
console.log(`Area: ${area}`);
console.log(`Perimeter: ${perimeter}`);
console.log(triangle.join('\n'));
