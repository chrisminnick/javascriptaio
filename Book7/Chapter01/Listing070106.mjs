export function triangleArea(base, height) {
  return (base * height) / 2;
}

export function trianglePerimeter(side1, side2, side3) {
  return side1 + side2 + side3;
}

export function triangleHypotenuse(side1, side2) {
  return Math.sqrt(side1 * side1 + side2 * side2);
}

export function triangleLeg(hypotenuse, side) {
  return Math.sqrt(hypotenuse * hypotenuse - side * side);
}

export default {
  triangleArea,
  trianglePerimeter,
  triangleHypotenuse,
  triangleLeg,
};
