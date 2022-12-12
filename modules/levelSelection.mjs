import { levelsBlueprint } from '/modules/levels.mjs'
import { generatePlayground } from '/modules/playground.mjs'
import { Timer } from '/modules/timer.mjs'

export const selectLevel = (ctx, gameState, id) => {
  console.log(ctx);
  console.log(gameState);
  console.log(id);
  gameState.playground = generatePlayground(levelsBlueprint[id].structure, gameState.width, gameState.height);
  // TODO transfer expireFunction without a fail
  // const expireFunc = () => {gameState.timer.expireFunction();};
  gameState.timer.setTime(levelsBlueprint[id].time);
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
    selectionButton.innerText = "Level " + i;
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

  next(ctx, gameState) {
    self.Completed[self.CurrentLevelId] = true;
    console.log(self.Completed);
    let allLevelsFinished = self.Completed.reduce((a, b) => {
      return a && b;
    }, true);
    console.log(allLevelsFinished);
    if (allLevelsFinished) {
      self.winFunction();
    }
    self.CurrentLevelId++;
    selectLevel(ctx, gameState, self.CurrentLevelId);
  }
}
