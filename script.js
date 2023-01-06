import { generatePlayground } from '/modules/playground.mjs'
import { levelsBlueprint } from '/modules/levels.mjs'
import { MoveDirection } from '/modules/enums.mjs'
import { fillLevelsSelection, selectLevel, LevelManager } from '/modules/levelSelection.mjs'
import { Timer } from '/modules/timer.mjs'
import { TutorialControler } from '/modules/tutorialControler.mjs'
import { Scoreboard, Gamer } from '/modules/scoreboard.mjs'


// Get the canvas and the context
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

// Create the game state
// The game state is a global variable that contains all the information about the game
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
  scoreboard: new Scoreboard(),
  tutorial: new TutorialControler(),
};


fillLevelsSelection(gameState, ctx);

window.ctx = ctx
window.addEventListener("keydown", (event) => {
  if (!event.defaultPrevented && mouseOnCanvas) {
    if (gameState.playable) {
      // If the game is playable, the keyboard is used to move the player
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

      // If the game is solved, the next level is loaded
      if (gameState.playground.isSolved()) {
        gameState.levelManager.next(ctx, gameState);
      }
    } else {
      // If the game is not playable, the tutorial is displayed
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

// Add event listener to the input field to update the name
let inputName = document.getElementById("name");
inputName.addEventListener("input", (event) => { 
  inputName.setAttribute('value', event.target.value);
});

// Add event listener to the submit button to update the name
let submitButton = document.getElementById("submit-name");
submitButton.addEventListener("click", () => {
  let value = inputName.value;
  gamestate.scoreboard.updatedName(value);
});

// Draw the playground
window.gamestate = gameState;
gameState.playground.draw(ctx);

