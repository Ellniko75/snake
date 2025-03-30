const movement = {
  right: true,
  left: false,
  down: false,
  up: false,
};
let playerWidthAndHeight = 40;
export let players = [
  {
    x: 0,
    y: 0,
  },
];

document.addEventListener("keydown", (e) => {
  const { key } = e;
  if (key == "d" && !movement.left) {
    clearAll();
    movement.right = true;
  }
  if (key == "s" && !movement.up) {
    clearAll();
    movement.down = true;
  }
  if (key == "a" && !movement.right) {
    clearAll();
    movement.left = true;
  }
  if (key == "w" && !movement.down) {
    clearAll();
    movement.up = true;
  }
});

function clearAll() {
  movement.down = false;
  movement.up = false;
  movement.right = false;
  movement.left = false;
}

let previousPos = { x: players[0].x, y: players[0].y };
function movePlayer() {
  //store the head position before moving
  previousPos.x = players[0].x;
  previousPos.y = players[0].y;
  //move head

  if (movement.left) {
    players[0].x -= playerWidthAndHeight;
  }
  if (movement.right) {
    players[0].x += playerWidthAndHeight;
  }
  if (movement.up) {
    players[0].y -= playerWidthAndHeight;
  }
  if (movement.down) {
    players[0].y += playerWidthAndHeight;
  }

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
export function restart() {
  clearAll();
  movement.right = true;
  players = [
    {
      x: 0,
      y: 0,
    },
  ];
}
