import { generatePlayground } from '/modules/playground.mjs'
import { levelsBlueprint } from '/modules/levels.mjs'
import { MoveDirection } from '/modules/enums.mjs'
import { fillLevelsSelection, selectLevel, LevelManager } from '/modules/levelSelection.mjs'
import { Timer } from '/modules/timer.mjs'
import { TutorialControler } from '/modules/tutorialControler.mjs'
import { Gamer } from '/modules/scoreboard.mjs'

let canvas = document.getElementById('canvas');
let difficultySlider = document.getElementById('difficulty-slider');
let mouseOnCanvas = false;
canvas.addEventListener("mouseenter",() => {
  mouseOnCanvas = true;
  difficultySlider.disabled = true;
});
canvas.addEventListener("mouseleave",() => {
  mouseOnCanvas = false;
  difficultySlider.disabled = false;
});
let ctx = canvas.getContext('2d');
let gameState = {
  playground: generatePlayground(levelsBlueprint[0].structure, canvas.width, canvas.height),
  width: canvas.width,
  height: canvas.height,
  timer: new Timer(1500, () => {
    alert("Les vaches mangent le foin");
  }),
  playable: false,
  levelManager: new LevelManager( () => {
    alert("Toutes les bottes sont rangées");
    gameState.timer.stop();
  } ),
  levelId: 0,
  tutorial: new TutorialControler(),
};

fillLevelsSelection(gameState, ctx);
window.ctx = ctx
window.addEventListener("keydown", (event) => {
  if (!event.defaultPrevented && mouseOnCanvas) {
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
        gameState.levelManager.next(ctx, gameState);
      }
    } else {
      switch (event.key) {
        case "ArrowRight":
        case " ":
        case "Enter":
          gameState.tutorial.next();
          if (gameState.tutorial.isFinished()) {
            gameState.playable = true;
            gameState.timer.start();
          }
          break;
        default:
          break;
      }
    }
  }
});

//let table = document.getElementById("scoreTable");
let joueur = new Gamer("user", 0);
joueur.Scoreboard();
window.gamestate = gameState;
gameState.playground.draw(ctx);

