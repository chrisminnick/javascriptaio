export function testObstacleCollision() {
  const ballRect = ball.getBoundingClientRect();
  const obstacles = document.getElementsByClassName('obstacle');
  for (let i = 0; i < obstacles.length; i++) {
    const obstacleRect = obstacles[i].getBoundingClientRect();
    if (
      ballRect.left < obstacleRect.right &&
      ballRect.right > obstacleRect.left &&
      ballRect.top < obstacleRect.bottom &&
      ballRect.bottom > obstacleRect.top
    ) {
      console.log('Collision!');
    }
  }
}
