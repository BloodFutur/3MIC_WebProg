import { images } from '/modules/ressources.mjs';
import { CanMove, Square } from '/modules/enums.mjs';

class Tile {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.canMove = CanMove.No;
    this.image = new Image();
    this.imageReady = false;
  }

  isMovable() {
    return this.canMove;
  }

  draw(ctx) {
    if (this.imageReady) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    } else {
      this.image.addEventListener('load', () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        this.imageReady = true;
      }, false);
    }
  }

  setImageSrc(src) {
    this.image.src = src;
    this.image.addEventListener('load', () => {
      this.imageReady = true;
    }, false);
  }
}

export class ForegroundTile extends Tile{
  constructor(square, x, y, width, height) {
    super(x, y, width, height)
    switch(square) {
      case Square.Wall:
        this.setImageSrc( images.empty );
        this.canMove = CanMove.Yes;
        break;
      case Square.Floor:
        this.setImageSrc( images.empty );
        this.canMove = CanMove.Yes;
        break;
      case Square.Player:
        this.setImageSrc( images.player );
        this.canMove = CanMove.Maybe;
        break;
      case Square.Box:
        this.setImageSrc( images.box );
        this.canMove = CanMove.Maybe;
        break;
      case Square.Destination:
        this.setImageSrc( images.empty );
        this.canMove = CanMove.Yes;
        break;
      case Square.PlayerOnDestination:
        this.setImageSrc( images.player );
        this.canMove = CanMove.Maybe;
        break;
      case Square.BoxOnDestination:
        this.setImageSrc( images.box );
        this.canMove = CanMove.Maybe;
        break;
    }
    if ( square == Square.BoxOnDestination || square == Square.Box ) {
      this.isBox = true;
    } else {
      this.isBox = false;
    }
  }
}

export class BackgroundTile extends Tile{
  constructor(square, x, y, width, height) {
    super(x, y, width, height)
    switch(square) {
      case Square.Wall:
        this.setImageSrc( images.wall );
        this.isDestination = false;
        break;
      case Square.Floor:
        this.setImageSrc( images.floor );
        this.isDestination = false;
        break;
      case Square.Player:
        this.setImageSrc( images.floor );
        this.isDestination = false;
        break;
      case Square.Box:
        this.setImageSrc( images.floor );
        this.isDestination = false;
        break;
      case Square.Destination:
        this.setImageSrc( images.destination );
        this.isDestination = true;
        break;
      case Square.PlayerOnDestination:
        this.setImageSrc( images.destination );
        this.isDestination = true;
        break;
      case Square.BoxOnDestination:
        this.setImageSrc( images.destination );
        this.isDestination = true;
        break;
    }
    if (square === Square.Wall) {
      this.canMove = CanMove.No;
    } else {
      this.canMove = CanMove.Yes;
    }
  }
}
