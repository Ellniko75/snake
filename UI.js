const uiEl = document.querySelector(".UI-message");
import { restartMainLoop } from "./mainGame.js";
import { restart } from "./player.js";

export function showDeadMessage() {
  uiEl.style.visibility = "visible";
}
const restartButton = document.querySelector(".restartButton");

restartButton.addEventListener("click", () => {
  restart();
  uiEl.style.visibility = "hidden";
  restartMainLoop();
});
