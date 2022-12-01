export class Position {
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
    return this.x < pos.x && this.y < pos.y;
  }

  isEqual(pos) {
    return this.x === pos.x && this.y === pos.y;
  }
}

export const copyPosition = (pos) => {
  return new Position(pos.x, pos.y);
}
