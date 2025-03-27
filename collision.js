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
