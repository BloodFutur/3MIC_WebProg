import { generatePlayground } from '/modules/playground.mjs'
import {levelsBlueprint } from '/modules/levels.mjs'
import { MoveDirection } from '/modules/enums.mjs'
import { fillLevelsSelection } from '/modules/fillLevelsSelection.mjs'

fillLevelSelection();
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
window.ctx = ctx
<<<<<<< HEAD
let playground = generatePlayground(levelsBlueprint[0], canvas.width, canvas.height);
=======
let playground = generatePlayground(level2Blueprint, canvas.width, canvas.height);
>>>>>>> 380cebd36dc4e3a1f3af185d1a7e3f0adb3e04d1
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

//function qui met à jour le temps

let time = 10;

function timer(){
  let txt = document.getElementById('timer');
  let level = 0;
  let afficher = "Time : " + time;
  txt.innerHTML= afficher;
  
  time = time <= 0 ? 0 : time -1;
  if (time == )
  {
  clearInterval(maVar);
  }

}
 
let maVar = setInterval(timer, 1000);
if (time == 0){
  alert('Terminé YAsmine')
}
// while (document.readyState != "complete") {
/*function set_time(){
  minutes=Math.floor
}*/

function Pause(){
  time = time -10;
}

// while (document.readyState != "complete") {
setTimeout(1000);
 

playground.draw(ctx);
