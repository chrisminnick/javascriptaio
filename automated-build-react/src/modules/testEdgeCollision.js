export function testEdgeCollision() {
  const ballRect = ball.getBoundingClientRect();
  const mapRect = map.getBoundingClientRect();
  if (
    ballRect.left < mapRect.left ||
    ballRect.right > mapRect.right ||
    ballRect.top < mapRect.top ||
    ballRect.bottom > mapRect.bottom
  ) {
    console.log('Collision!');
  }
}
