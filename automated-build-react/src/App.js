import React, { useState, useEffect } from 'react';

function App() {
  useEffect(() => {
    document.addEventListener('keydown', moveBall);
    return () => {
      document.removeEventListener('keydown', moveBall);
    };
  }, []);

  const numberOfObstacles = 100;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const moveBall = (e) => {
    switch (e.key) {
      case 'ArrowUp':
        setPosition((prev) => {
          return { x: prev.x, y: prev.y - 1 };
        });
        break;
      case 'ArrowDown':
        setPosition((prev) => {
          return { x: prev.x, y: prev.y + 1 };
        });
        break;
      case 'ArrowLeft':
        setPosition((prev) => {
          return { x: prev.x - 1, y: prev.y };
        });
        break;
      case 'ArrowRight':
        setPosition((prev) => {
          return { x: prev.x + 1, y: prev.y };
        });
        break;
    }
  };

  return (
    <Map numberOfObstacles={numberOfObstacles}>
      <Ball position={position} setPosition={setPosition} />
    </Map>
  );
}

function Map({ children, numberOfObstacles }) {
  const [obstacles, setObstacles] = useState([]);
  useEffect(() => {
    const map = generateMap(numberOfObstacles);
    setObstacles(map);
  }, []);
  const obstaclePositions = Array(numberOfObstacles)
    .fill()
    .map(() => {
      const x = Math.floor(Math.random() * 100) + 'vw';
      const y = Math.floor(Math.random() * 100) + 'vh';
      return { left: x, top: y };
    });
  const generateMap = (numberOfObstacles) => {
    const obstacles = [];
    for (let i = 0; i < numberOfObstacles; i++) {
      obstacles[i] = (
        <Obstacle obstaclePosition={obstaclePositions[i]} key={i} />
      );
    }
    return obstacles;
  };

  return (
    <>
      {obstacles}
      {children}
    </>
  );
}

function Ball({ position, setPosition }) {
  useEffect(() => {
    detectEdgeCollision();
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
  return (
    <div
      id="ball"
      style={{
        left: position.x + 'vh',
        top: position.y + 'vh',
      }}
    ></div>
  );
}

function Obstacle({ obstaclePosition }) {
  return <div className="obstacle" style={obstaclePosition}></div>;
}

export default App;
