let movement = "right";
let canMove = true;
document.addEventListener("keydown", (e) => {
  const { key } = e;

  if (!canMove) return;
  canMove = false;

  setTimeout(() => {
    canMove = true;
  }, 90);
  if (key == "d") {
    if (movement == "left") return;
    movement = "right";
  }
  if (key == "s") {
    if (movement == "up") return;
    movement = "down";
  }
  if (key == "a") {
    if (movement == "right") return;
    movement = "left";
  }
  if (key == "w") {
    if (movement == "down") return;
    movement = "up";
  }
});

let playerWidthAndHeight = 40;
export const players = [
  {
    x: 0,
    y: 0,
  },
];

let previousPos = { x: players[0].x, y: players[0].y };
function movePlayer() {
  //store the head position before moving
  previousPos.x = players[0].x;
  previousPos.y = players[0].y;
  //move head
  if (movement == "left") {
    players[0].x -= playerWidthAndHeight;
  }
  if (movement == "right") {
    players[0].x += playerWidthAndHeight;
  }
  if (movement == "up") {
    players[0].y -= playerWidthAndHeight;
  }
  if (movement == "down") {
    players[0].y += playerWidthAndHeight;
  }
  console.log(players[0].x, players[0].y);
  //set the new position of each tail to the position of the one ahead of him
  for (let i = 1; i < players.length; i++) {
    const currentPlayer = players[i];
    const currentPosX = currentPlayer.x;
    const currentPosY = currentPlayer.y;

    currentPlayer.x = previousPos.x;
    currentPlayer.y = previousPos.y;

    previousPos.x = currentPosX;
    previousPos.y = currentPosY;
  }
}

export function addTail() {
  const tailCopy = JSON.parse(JSON.stringify(players[players.length - 1]));
  if (movement == "left") {
    tailCopy.x += playerWidthAndHeight;
  } else if (movement == "right") {
    tailCopy.x -= playerWidthAndHeight;
  } else if (movement == "up") {
    tailCopy.y -= playerWidthAndHeight;
  } else {
    tailCopy.y -= playerWidthAndHeight;
  }

  players.push(tailCopy);
}
export function playerFrame(canvas) {
  movePlayer();
  canvas.fillStyle = "black";
  players.forEach((p) => {
    canvas.fillRect(p.x, p.y, playerWidthAndHeight, playerWidthAndHeight);
  });
}
