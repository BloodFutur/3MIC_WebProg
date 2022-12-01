
// Define what kind of tiles exist
export class Square {
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

export class CanMove {
  static Yes = new CanMove('Yes');
  static No = new CanMove('No');
  static Maybe = new CanMove('Maybe');

  constructor(name) {
    this.name = name;
  }
}

export class MoveDirection {
  static Right = new MoveDirection('Right');
  static Left = new MoveDirection('Left');
  static Up = new MoveDirection('Up');
  static Down = new MoveDirection('Down');

  constructor(name) {
    this.name = name;
  }
}
