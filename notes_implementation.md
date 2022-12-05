# Implementation

```js

enum BackgroundTile {Wall, Floor, Destination};
enum ForegroundTile {Player, Box, Empty};

let playground = {
    background<Layer, BackgroundTile>: {
        tiles<BackgroundTile>: [[]]
    },
    foreground<Layer, ForegroundTile>: {
        tiles<ForegroundTile>: [[]]
    },
    move(sourcePos, destPos) {
        if (this.move(destPos, ))
    }
};
```

