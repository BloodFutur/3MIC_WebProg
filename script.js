import { generatePlayground } from '/modules/playground.mjs'
import { level1Blueprint, level2Blueprint } from '/modules/levels.mjs'
import { MoveDirection } from '/modules/enums.mjs'

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
window.ctx = ctx
let playground = generatePlayground(level2Blueprint, canvas.width, canvas.height);
window.addEventListener("keydown", (event) => {
  if (!event.defaultPrevented) {
    switch (event.key) {
      case "ArrowDown":
        playground.move(MoveDirection.Down);
        break;
      case "ArrowUp":
        playground.move(MoveDirection.Up);
        break;
      case "ArrowRight":
        playground.move(MoveDirection.Right);
        break;
      case "ArrowLeft":
        playground.move(MoveDirection.Left);
        break;
      default:
        return;
        break;
    }
    playground.draw(ctx, canvas.width, canvas.height);
    if (playground.isSolved()) {
      alert("bravo");
    }
  }
});

window.playground = playground;
window.up = MoveDirection.Up;
window.down = MoveDirection.Down;
window.left = MoveDirection.Left;
window.right = MoveDirection.Right;
window.width = canvas.width;
window.height = canvas.height;

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// while (document.readyState != "complete") {
setTimeout(1000);
  // (new Promise((resolve) => {
  //   setTimeout(resolve, 100)
  // })).then(()=>{;})
// }

playground.draw(ctx);
