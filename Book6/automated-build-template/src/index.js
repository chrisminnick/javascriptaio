import { moveBall } from './modules/moveBall.js';
import { generateMap } from './modules/generateMap.js';
// set up the ball and map elements
const ball = document.getElementById('ball');
const map = document.getElementById('map');
let position = { x: 0, y: 0 };

document.addEventListener('keydown', (e) => moveBall(e, ball, position));

generateMap(map, 100);
