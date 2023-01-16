import React, { useState, useEffect } from 'react';

function App() {
  const numberOfObstacles = 100;
  const [obstaclePositions, setObstaclePositions] = useState([]);
  useEffect(() => {
    for (let i = 0; i < numberOfObstacles; i++) {
      const top = Math.floor(Math.random() * 100) + 'vw';
      const left = Math.floor(Math.random() * 100) + 'vh';
      obstaclePositions[i] = { top, left };
    }
    setObstaclePositions(obstaclePositions);
  }, [obstaclePositions]);

  return <Map obstaclePositions={obstaclePositions} />;
}

function Map({ children, obstaclePositions }) {
  console.log(obstaclePositions);
  return (
    <div>
      {obstaclePositions.map((obstaclePosition, index) => (
        <Obstacle obstaclePosition={obstaclePosition} key={index} />
      ))}
      {children}
    </div>
  );
}

function Ball() {
  return <div id="ball"></div>;
}
function Obstacle({ obstaclePosition }) {
  console.log(obstaclePosition);
  return <div className="obstacle" style={obstaclePosition}></div>;
}
export default App;
