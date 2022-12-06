import { levelsBlueprint } from '/modules/levels.mjs'
import { generatePlayground } from '/modules/playground.mjs'
import { Timer } from '/modules/timer.mjs'

export const selectLevel = (ctx, gameState, id) => {
  gameState.playground = generatePlayground(levelsBlueprint[id].structure, gameState.width, gameState.height);
  // TODO transfer expireFunction without a fail
  const expireFunc = gameState.timer.expireFunction;
  console.log(expireFunc);
  gameState.timer = new Timer(levelsBlueprint[id].time, gameState.timer.expireFunction);
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
      // let blueprint = levelsBlueprint[
      //   click.srcElement.getAttribute("array-index")
      // ];
      // gameState.playground = generatePlayground(blueprint.structure, gameState.width, gameState.height);
      // gameState.timer = new Timer(blueprint.time, gameState.timer.expireFunction);
      // gameState.playground.draw(ctx, gameState.width, gameState.height);
    });
    selectionButton.innerText = "Level" + i;
    listElement.appendChild(selectionButton);
    levelList.appendChild(listElement);
  }
}
