import { generatePlayground } from '/modules/playground.mjs'
import { levelsBlueprint } from '/modules/levels.mjs'
import { MoveDirection } from '/modules/enums.mjs'
import { fillLevelsSelection } from '/modules/fillLevelsSelection.mjs'
import { Timer } from '/modules/timer.mjs'

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let gameState = {
  playground: generatePlayground(levelsBlueprint[0], canvas.width, canvas.height),
  width: canvas.width,
  height: canvas.height,
  timer: new Timer(1500, () => {
    alert("Les vaches mangent le foin");
  }),
};
// console.log(gameState.timer);

fillLevelsSelection(gameState, ctx);
window.ctx = ctx
let playground = generatePlayground(levelsBlueprint[0], canvas.width, canvas.height);
window.addEventListener("keydown", (event) => {
  if (!event.defaultPrevented) {
    switch (event.key) {
      case "ArrowDown":
        gameState.playground.move(MoveDirection.Down);
        break;
      case "ArrowUp":
        gameState.playground.move(MoveDirection.Up);
        break;
      case "ArrowRight":
        gameState.playground.move(MoveDirection.Right);
        break;
      case "ArrowLeft":
        gameState.playground.move(MoveDirection.Left);
        break;
      default:
        return;
        break;
    }
    gameState.playground.draw(ctx, canvas.width, canvas.height);
    if (gameState.playground.isSolved()) {
      alert("bravo");
    }
  }
});

window.playground = gameState.playground;
window.up = MoveDirection.Up;
window.down = MoveDirection.Down;
window.left = MoveDirection.Left;
window.right = MoveDirection.Right;
window.width = canvas.width;
window.height = canvas.height;

//function qui met à jour le temps

// let Timer = {
//   time: 10,
//   intervalControler: setInterval(() => {
//     console.log(Timer.time);
//     let txt = document.getElementById('timer');
//     let afficher = "Time : " + Timer.time;
//     txt.innerHTML= afficher;
//     if (Timer.time == 0) {
//       alert("Termine");
//     }

//     Timer.time = Timer.time <= 0 ? 0 : Timer.time -1;
//     if (Timer.time == 0)
//     {
//       clearInterval(Timer.intervalControler);
//     }
//   }, 1000),
// };

// let time = 10;

// function timer(){
//   let txt = document.getElementById('timer');
//   let level = 0;
//   let afficher = "Time : " + time;
//   txt.innerHTML= afficher;

//   time = time <= 0 ? 0 : time -1;
//   if (time == 0)
//   {
//     clearInterval(maVar);
//   }

// }

// let maVar = setInterval(timer, 1000);
// if (time == 0){
//   alert('Terminé YAsmine')
// }
// while (document.readyState != "complete") {
function set_time(){
  minutes=Math.floor
}

function Pause(){
  // time = time -10;
}

// // while (document.readyState != "complete") {
setTimeout(1000);


playground.draw(ctx);
