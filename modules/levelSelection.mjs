import { levelsBlueprint } from '/modules/levels.mjs'
import { generatePlayground } from '/modules/playground.mjs'
import { Timer } from '/modules/timer.mjs'

const prionicSequence = [0, 2, 6, 12, 20, 30, 42];

export const selectLevel = (ctx, gameState, id) => {
  gameState.playground = generatePlayground(levelsBlueprint[id].structure, gameState.width, gameState.height);
  // TODO transfer expireFunction without a fail
  // const expireFunc = () => {gameState.timer.expireFunction();};
  gameState.timer.setTime(levelsBlueprint[id].time);
  gameState.playable = true;
  gameState.tutorial.hide();
  gameState.playground.draw(ctx, gameState.width, gameState.height);
}

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

export class LevelManager {
  constructor(winFunction, StartingLevelId = 0) {
    self.CurrentLevelId = StartingLevelId;
    self.Completed = levelsBlueprint.map(() => { return false; });
    self.winFunction = winFunction;
  }

  getFirstUncompleted() {
    for( let i = 0; i < self.Completed.size; i++ ) {
      if (!self.Completed[i]) {
        return i;
      }
    }
  }

  next(ctx, gameState) {
    self.Completed[self.CurrentLevelId] = true;
    let allLevelsFinished = self.Completed.reduce((a, b) => {
      return a && b;
    }, true);
    if (allLevelsFinished) {
      self.winFunction();
    }
    self.CurrentLevelId = getFirstUncompleted();
    selectLevel(ctx, gameState, self.CurrentLevelId);
  }
}
