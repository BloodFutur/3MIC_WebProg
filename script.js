import { generatePlayground } from '/modules/playground.mjs'
import { levelsBlueprint } from '/modules/levels.mjs'
import { MoveDirection } from '/modules/enums.mjs'
import { fillLevelsSelection } from '/modules/fillLevelsSelection.mjs'
import { Timer } from '/modules/timer.mjs'
import { TutorialControler } from '/modules/tutorialControler.mjs'

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let gameState = {
  playground: generatePlayground(levelsBlueprint[0].structure, canvas.width, canvas.height),
  width: canvas.width,
  height: canvas.height,
  timer: new Timer(1500, () => {
    alert("Les vaches mangent le foin");
  }),
  playable: false,
};

let tutorial = new TutorialControler();

fillLevelsSelection(gameState, ctx);
window.ctx = ctx
window.addEventListener("keydown", (event) => {
  if (!event.defaultPrevented) {
    if (gameState.playable) {
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
    } else {
      tutorial.next();
      gameState.playable = tutorial.isFinished();
    }
  }
});

gameState.playground.draw(ctx);
