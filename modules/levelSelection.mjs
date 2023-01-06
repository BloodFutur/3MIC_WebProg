/**
 * @fileoverview This file contains the functions to select a level
 */
import { levelsBlueprint } from '/modules/levels.mjs'
import { generatePlayground } from '/modules/playground.mjs'
import { Timer } from '/modules/timer.mjs'

const prionicSequence = [0, 2, 6, 12, 20, 30, 42];

// This funcion is called when the player selects a level and starts the game
export const selectLevel = (ctx, gameState, id) => {
  gameState.playground = generatePlayground(levelsBlueprint[id].structure, gameState.width, gameState.height);
  gameState.timer.setTime(levelsBlueprint[id].time);
  gameState.playable = true;
  gameState.tutorial.hide();
  gameState.timer.start();
  gameState.playground.draw(ctx, gameState.width, gameState.height);
}

// This function fills the level selection menu with the levels
export const fillLevelsSelection = (gameState, ctx) => {
  let levelList = document.getElementById('level-list');
  for (let i = 0; i < levelsBlueprint.length; ++i) {
    let listElement = document.createElement("li");
    let selectionButton = document.createElement("button");
    selectionButton.setAttribute("array-index", i);
    selectionButton.addEventListener("click", (click) => {
      selectLevel(ctx, gameState, click.srcElement.getAttribute("array-index"));
    });
    selectionButton.innerText = "Level " + prionicSequence[i];
    listElement.appendChild(selectionButton);
    levelList.appendChild(listElement);
  }
}

// This class manages the levels and their completion
export class LevelManager {
  constructor(winFunction, StartingLevelId = 0) {
    self.CurrentLevelId = StartingLevelId;
    self.Completed = levelsBlueprint.map(() => { return false; });
    self.winFunction = winFunction;
    self.getFirstUncompleted = () => {
      for( let i = 0; i < self.Completed.length; i++ ) {
        if (!self.Completed[i]) {
          return i;
        }
      }
      return -1;
    };
  }

  // This function is called when the player completes a level
  // It checks if all levels are completed and calls the winFunction
  // If not, it selects the next level
  next(ctx, gameState) {
    let score = gameState.timer.getTime();
    gameState.scoreboard.updateScoreCurrentGamer(score);

    self.Completed[self.CurrentLevelId] = true;
    let allLevelsFinished = self.Completed.reduce((a, b) => {
      return a && b;
    }, true);
    if (allLevelsFinished) {
      self.winFunction();
    }
    
    self.CurrentLevelId = self.getFirstUncompleted();
    // console.log(self.CurrentLevelId);
    selectLevel(ctx, gameState, self.CurrentLevelId);
  }
}
