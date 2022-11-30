// Define what kind of tiles exist
class Square {
  static Wall = new Square('Wall');
  static Floor = new Square('Floor');
  static Player = new Square('Player');
  static Box = new Square('Box');
  static Destination = new Square('Destination');
  static PlayerOnDestination = new Square('PlayerOnDestination');
  static BoxOnDestination = new Square('BoxOnDestination');

  constructor(name) {
    this.name = name;
  }
}

class CanMove {
  static Yes = new CanMove('Yes');
  static No = new CanMove('No');
  static Maybe = new CanMove('Maybe');

  constructor(name) {
    this.name = name;
  }
}

const movePosition = (position, direction) => {

}

const images = {
  wall: 'wall.png',
  floor: 'floor.png',
  player: 'player.png',
  box: 'box.png',
  destination: 'destination.png',
  empty: 'empty.png',
};

// Blueprint for the first level
const level1Blueprint = [[ Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall ],
                         [ Square.Wall, Square.Destination, Square.Box, Square.Floor, Square.Player, Square.Wall ],
                         [ Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall ]];

// define where the player can move
class MoveDirection {
  static Right = new MoveDirection('Right');
  static Left = new MoveDirection('Left');
  static Up = new MoveDirection('Up');
  static Down = new MoveDirection('Down');

  constructor(name) {
    this.name = name;
  }
}

class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  move(direction) {
    switch (direction) {
      case MoveDirection.Right:
        this.x++;
        break;
      case MoveDirection.Left:
        this.x--;
        break;
      case MoveDirection.Up:
        this.y--;
        break;
      case MoveDirection.Down:
        this.y++;
        break;
    }
  }
  moveBackwards(direction) {
    switch (direction) {
      case MoveDirection.Right:
        this.x--;
        break;
      case MoveDirection.Left:
        this.x++;
        break;
      case MoveDirection.Up:
        this.y++;
        break;
      case MoveDirection.Down:
        this.y--;
        break;
    }
  }

  isWithin(pos) {
    return this.x < pos.x && this.y < pos.y
  }
}

class Tile {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.canMove = CanMove.No;
  }

  isMovable() {
    return this.canMove;
  }
}

class ForegroundTile extends Tile{
  constructor(square, x, y, width, height) {
    super(x, y, width, height)
    switch(square) {
      case Square.Wall:
        this.image = images.empty;
        this.canMove = CanMove.Yes;
        break;
      case Square.Floor:
        this.image = images.empty;
        this.canMove = CanMove.Yes;
        break;
      case Square.Player:
        this.image = images.player;
        this.canMove = CanMove.Maybe;
        break;
      case Square.Box:
        this.image = images.box;
        this.canMove = CanMove.Maybe;
        break;
      case Square.Destination:
        this.image = images.empty;
        this.canMove = CanMove.Yes;
        break;
      case Square.PlayerOnDestination:
        this.image = images.player;
        this.canMove = CanMove.Maybe;
        break;
      case Square.BoxOnDestination:
        this.image = images.box;
        this.canMove = CanMove.Maybe;
        break;
    }
  }
}

class BackgroundTile extends Tile{
  constructor(square, x, y, width, height) {
    super(x, y, width, height)
    switch(square) {
      case Square.Wall:
        this.image = images.wall;
        break;
      case Square.Floor:
        this.image = images.floor;
        break;
      case Square.Player:
        this.image = images.floor;
        break;
      case Square.Box:
        this.image = images.floor;
        break;
      case Square.Destination:
        this.image = images.destination;
        break;
      case Square.PlayerOnDestination:
        this.image = images.destination;
        break;
      case Square.BoxOnDestination:
        this.image = images.destination;
        break;
    }
    if (square === Square.Wall) {
      this.canMove = CanMove.No;
    } else {
      this.canMove = CanMove.Yes;
    }
  }
}

// generate a level Object from a blueprint
const generatePlayground = (levelBlueprint, canvasWidth, canvasHeight) => {
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
      if (backgroundAnswer === CanMove.No) {
        return CanMove.No;
      } else {
        return foregroundAnswer;
      }
    },
    move(direction) {
      let aux = this.playerPos;
      let willMove = false;
      let finishedChecking = false;
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
            break;
        }
      }
      if (willMove) {
        console.log("in playground.move");
        let posOfObjectToMove = aux;
        while (aux != this.playerPos) {
          posOfObjectToMove.moveBackwards(direction);
          console.log("I try to move");
          [this.foreground[aux.y][aux.x], this.foreground[posOfObjectToMove.y][posOfObjectToMove.x]] =
            [this.foreground[posOfObjectToMove.y][posOfObjectToMove.x], this.foreground[aux.y][aux.x]];
          aux.moveBackwards(direction);
        }
      }
    }
  };
}

let playground = generatePlayground(level1Blueprint, 500, 500);
