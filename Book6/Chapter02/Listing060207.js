import React, { useState, useEffect } from 'react';

function App() {
  const numberOfObstacles = 100;
  return (
    <Map numberOfObstacles={numberOfObstacles}>
      <Ball />
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

function Ball() {
  return <div id="ball"></div>;
}

function Obstacle({ obstaclePosition }) {
  return <div className="obstacle" style={obstaclePosition}></div>;
}

export default App;
