import { levelsBlueprint } from '/modules/levels.mjs'
import { generatePlayground } from '/modules/playground.mjs'
import { Timer } from '/modules/timer.mjs'

export const fillLevelsSelection = (gameState, ctx) => {
  let levelList = document.getElementById('level-list');
  for (let i = 0; i < levelsBlueprint.length; ++i) {
    let listElement = document.createElement("li");
    let selectionButton = document.createElement("button");
    selectionButton.setAttribute("array-index", i);
    selectionButton.addEventListener("click", (click) => {
      let blueprint = levelsBlueprint[
        click.srcElement.getAttribute("array-index")
      ];
      gameState.playground = generatePlayground(blueprint.structure, canvas.width, canvas.height);
      gameState.timer = new Timer(blueprint.time, gameState.timer.expireFunction);
      gameState.playground.draw(ctx, gameState.width, gameState.height);
    });
    selectionButton.innerText = "Level" + i;
    listElement.appendChild(selectionButton);
    levelList.appendChild(listElement);
  }
}
