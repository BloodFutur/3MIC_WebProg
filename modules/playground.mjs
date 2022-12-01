import { Square, CanMove, MoveDirection } from '/modules/enums.mjs'
import { Position, copyPosition } from '/modules/position.mjs'
import { ForegroundTile, BackgroundTile } from '/modules/tiles.mjs'

// define where the player can move
// generate a level Object from a blueprint
export const generatePlayground = (levelBlueprint, canvasWidth, canvasHeight) => {
  let playerExists = false;
  let background = [];
  let foreground = [];
  let boxCount = 0;
  let destinationCount = 0;
  const playgroundWidth = levelBlueprint[0].length;
  const playgroundHeight = levelBlueprint.length;
  const tileWidth = canvasWidth / playgroundWidth;
  const tileHeight = canvasHeight / playgroundHeight;
  let playerPos = {
    x: NaN,
    y: NaN,
  };
  levelBlueprint.forEach((levelRow, indexRow) => {
    background.push([]);
    foreground.push([]);
    levelRow.forEach((square, indexColumn) => {
      switch (square) {
        case Square.Player:
        case Square.PlayerOnDestination:
          if (playerExists) {
            alert("Player already exists.");
          }
          playerExists = true;
          playerPos = new Position(indexColumn, indexRow);
          break;
        case Square.Box:
          boxCount++;
          break;
        case Square.Destination:
          destinationCount++;
          break;
        default:
          break;
      }
      foreground[indexRow].push(new ForegroundTile(square, indexColumn * tileWidth, indexRow * tileHeight, tileWidth, tileHeight));
      background[indexRow].push(new BackgroundTile(square, indexColumn * tileWidth, indexRow * tileHeight, tileWidth, tileHeight));
    });
  });
  if (boxCount != destinationCount) {
    alert("boxCount != destinationCount")
  }
  return {
    foreground: foreground,
    background: background,
    width: playgroundWidth,
    height: playgroundHeight,
    playerPos: playerPos,
    canMove(pos) {
      const foregroundAnswer = this.foreground[pos.y][pos.x].isMovable();
      const backgroundAnswer = this.background[pos.y][pos.x].isMovable();
      if (backgroundAnswer == CanMove.No) {
        return CanMove.No;
      } else {
        return foregroundAnswer;
      }
    },
    move(direction) {
      let aux = copyPosition(this.playerPos);
      let willMove = false;
      let finishedChecking = false;
      let moveCount = 0;
      while (aux.isWithin({x: this.width, y: this.height}) && !finishedChecking) {
        switch(this.canMove(aux)) {
          case CanMove.Yes:
            willMove = true;
            finishedChecking = true;
            break;
          case CanMove.No:
            willMove = false;
            finishedChecking = true;
            break;
          case CanMove.Maybe:
            aux.move(direction);
            moveCount++;
            break;
        }
      }
      if (willMove) {
        this.playerPos.move(direction);
        let posOfObjectToMove = copyPosition(aux);
        for (let i = 0; i < moveCount; i++) {
          posOfObjectToMove.moveBackwards(direction);
          [this.foreground[aux.y][aux.x], this.foreground[posOfObjectToMove.y][posOfObjectToMove.x]] =
            [this.foreground[posOfObjectToMove.y][posOfObjectToMove.x], this.foreground[aux.y][aux.x]];
          [this.foreground[aux.y][aux.x].x, this.foreground[posOfObjectToMove.y][posOfObjectToMove.x].x] =
            [this.foreground[posOfObjectToMove.y][posOfObjectToMove.x].x, this.foreground[aux.y][aux.x].x];
          [this.foreground[aux.y][aux.x].y, this.foreground[posOfObjectToMove.y][posOfObjectToMove.x].y] =
            [this.foreground[posOfObjectToMove.y][posOfObjectToMove.x].y, this.foreground[aux.y][aux.x].y];
          aux.moveBackwards(direction);
        }
      }
    },
    draw(ctx, width, height) {
      ctx.clearRect(0, 0, width, height);
      for (let row of this.background) {
        for (let tile of row) {
          tile.draw(ctx);
        }
      }
      for (let row of this.foreground) {
        for (let tile of row) {
          tile.draw(ctx);
        }
      }
    },
    isSolved() {
      for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
          if ( this.background[y][x].isDestination ) {
            if ( !this.foreground[y][x].isBox ) {
              return false;
            }
          }
        }
      }
      return true;
    }
  };
}
