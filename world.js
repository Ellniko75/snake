import { isThereCollisionInAnyPartOfTheSnake } from "./collision.js";

export const appleElement = {
  img: new Image(20, 20),
  x: 80,
  y: 200,
  widthAnHeight: 40,
};
appleElement.img.src = "./apple.png";

export function createNewApple() {
  const maxMultiplierX = 1280 / appleElement.widthAnHeight;
  const maxMultiplierY = 720 / appleElement.widthAnHeight;

  const multiplierx = Math.floor(Math.random() * maxMultiplierX);
  const multipliery = Math.floor(Math.random() * maxMultiplierY);

  appleElement.x = appleElement.widthAnHeight * multiplierx;
  appleElement.y = appleElement.widthAnHeight * multipliery;
  if (isThereCollisionInAnyPartOfTheSnake(appleElement)) {
    const newApple = findFreeSpace(appleElement);
    appleElement.x = newApple.x;
    appleElement.y = newApple.y;
  }
}
function findFreeSpace(appleElement) {
  let apple = appleElement;

  for (let y = 0; y <= 720; y += appleElement.widthAnHeight) {
    for (let x = 0; x < 1080; x += appleElement.widthAnHeight) {
      apple.x = x;
      apple.y = y;
      if (!isThereCollisionInAnyPartOfTheSnake(apple)) {
        return apple;
      }
    }
  }
}
export function strokeApple(canvas) {
  canvas.fillStyle = "wheat";
  canvas.fillRect(
    appleElement.x,
    appleElement.y,
    appleElement.widthAnHeight,
    appleElement.widthAnHeight
  );
}
