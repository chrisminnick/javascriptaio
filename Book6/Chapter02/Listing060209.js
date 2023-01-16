function detectEdgeCollision() {
  const ball = document.getElementById('ball');
  const ballPosition = ball.getBoundingClientRect();
  if (ballPosition.x < 0) {
    setPosition((prev) => {
      return { x: prev.x + 1, y: prev.y };
    });
  }
  if (ballPosition.x + ballPosition.width > window.innerWidth) {
    setPosition((prev) => {
      return { x: prev.x - 1, y: prev.y };
    });
  }
  if (ballPosition.y < 0) {
    setPosition((prev) => {
      return { x: prev.x, y: prev.y + 1 };
    });
  }
  if (ballPosition.y + ballPosition.height > window.innerHeight) {
    setPosition((prev) => {
      return { x: prev.x, y: prev.y - 1 };
    });
  }
}
