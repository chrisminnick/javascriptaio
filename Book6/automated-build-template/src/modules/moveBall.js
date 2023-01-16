import { testEdgeCollision } from './testEdgeCollision.js';
import { testObstacleCollision } from './testObstacleCollision.js';

export function moveBall(e, ball, position) {
  if (e.code === 'ArrowLeft') {
    position.x -= 10;
  } else if (e.code === 'ArrowRight') {
    position.x += 10;
  } else if (e.code === 'ArrowUp') {
    position.y -= 10;
  } else if (e.code === 'ArrowDown') {
    position.y += 10;
  }
  ball.style.left = position.x + 'px';
  ball.style.top = position.y + 'px';

  testEdgeCollision();
  testObstacleCollision();
}
