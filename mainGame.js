import { playerFrame } from "./player.js";
import { strokeApple } from "./world.js";
import { collision, playerCollided } from "./collision.js";
import { showDeadMessage } from "./UI.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let playing = true;
setInterval(() => {
  if (!playing) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  collision();
  strokeApple(ctx);
  playerFrame(ctx);
  if (playerCollided()) {
    playing = false;
    showDeadMessage();
  }
}, 90);

export function restartMainLoop() {
  playing = true;
}
