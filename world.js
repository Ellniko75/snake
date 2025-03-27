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
