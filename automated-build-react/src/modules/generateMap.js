export function generateMap(map, numberOfObstacles) {
  for (let i = 0; i < numberOfObstacles; i++) {
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    obstacle.style.left = Math.floor(Math.random() * 100) + 'vw';
    obstacle.style.top = Math.floor(Math.random() * 100) + 'vh';
    map.appendChild(obstacle);
    console.log(
      `Adding obstacle at ${obstacle.style.left}, ${obstacle.style.top}`
    );
  }
}
