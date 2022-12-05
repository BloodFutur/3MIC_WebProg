import { levelsBlueprint } from '/modules/levels.mjs'

export const fillLevelSelection = () => {
  let levelList = document.getElementById('level-list');
  for (let i = 0; i < levelsBlueprint.size; ++i) {
    let listElement = document.createElement("li");
    let selectionButton = document.createElement("button");
    selectionButton.setAttribute("array-index", index);
    // selectionButton.addEventListener
  }
}
