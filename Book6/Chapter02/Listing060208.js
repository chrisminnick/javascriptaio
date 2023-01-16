useEffect(() => {
  const ball = document.getElementById('ball');
  const ballPosition = ball.getBoundingClientRect();
  const obstacles = document.getElementsByClassName('obstacle');
  for (let i = 0; i < obstacles.length; i++) {
    const obstaclePosition = obstacles[i].getBoundingClientRect();
    if (
      ballPosition.x < obstaclePosition.x + obstaclePosition.width &&
      ballPosition.x + ballPosition.width > obstaclePosition.x &&
      ballPosition.y < obstaclePosition.y + obstaclePosition.height &&
      ballPosition.y + ballPosition.height > obstaclePosition.y
    ) {
      alert('Game Over');
      setPosition({ x: 0, y: 0 });
    }
  }
}, [position]);
