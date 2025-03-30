import { players } from "./player.js";
import { appleElement, createNewApple } from "./world.js";
import { addTail } from "./player.js";

//checks if the head of the snake collisioned against something
export function collision() {
  const headPlayer = players[0];
  if (headPlayer.x == appleElement.x && headPlayer.y == appleElement.y) {
    addTail();
    createNewApple();
  }
}
export function playerCollided() {
  const positions = new Map();
  const head = players[0];
  if (head.x < 0 || head.x >= 1280 || head.y < 0 || head.y >= 720) return true;

  for (const player of players) {
    const { x, y } = player;
    if (positions.get(`${x},${y}`) != undefined) return true;
    positions.set(`${x},${y}`, true);
  }
}

export function isThereCollisionInAnyPartOfTheSnake(appleElement) {
  const { x, y } = appleElement;
  for (const player of players) {
    if (player.x == x && player.y == y) return true;
  }
  return false;
}
