import { Square } from '/modules/enums.mjs';

// Blueprint for the first level
//
const level1Blueprint = {
  structure:[[ Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall ],
            [ Square.Wall, Square.Destination, Square.Box, Square.Floor, Square.Player, Square.Wall ],
            [ Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall ]],
  time: 1000,
};
// Blueprint for the second level
const level2Blueprint = {
  structure: [
    [Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Floor, Square.Floor ],
    [Square.Wall, Square.Destination, Square.Destination, Square.Floor, Square.Floor, Square.Wall, Square.Floor, Square.Floor, Square.Floor, Square.Floor, Square.Floor, Square.Wall, Square.Wall, Square.Wall],
    [Square.Wall, Square.Destination, Square.Destination, Square.Floor, Square.Floor, Square.Wall, Square.Floor, Square.Box, Square.Floor, Square.Floor, Square.Box, Square.Floor, Square.Floor, Square.Wall],
    [Square.Wall, Square.Destination, Square.Destination, Square.Floor, Square.Floor, Square.Wall, Square.Box, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Floor, Square.Floor, Square.Wall],
    [Square.Wall, Square.Destination, Square.Destination, Square.Floor, Square.Floor, Square.Floor, Square.Floor, Square.Player, Square.Floor, Square.Wall, Square.Wall, Square.Floor, Square.Floor, Square.Wall],
    [Square.Wall, Square.Destination, Square.Destination, Square.Floor, Square.Floor, Square.Wall, Square.Floor, Square.Wall, Square.Floor, Square.Floor, Square.Box, Square.Floor, Square.Wall, Square.Wall],
    [Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Floor, Square.Wall, Square.Wall, Square.Box, Square.Floor, Square.Box, Square.Floor, Square.Wall ],
    [Square.Floor, Square.Floor, Square.Wall, Square.Floor, Square.Box, Square.Floor, Square.Floor, Square.Box, Square.Floor, Square.Box, Square.Floor, Square.Box, Square.Floor, Square.Wall ],
    [Square.Floor, Square.Floor, Square.Wall, Square.Floor, Square.Floor, Square.Floor, Square.Floor, Square.Wall, Square.Floor, Square.Floor, Square.Floor, Square.Floor, Square.Floor, Square.Wall ],
    [Square.Floor, Square.Floor, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall ],
  ],
  time: 23000,
};

const level3Blueprint = {
  structure: [
    [Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall,],
    [Square.Wall, Square.Floor, Square.Floor, Square.Floor, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall,],
    [Square.Wall, Square.Floor, Square.Box, Square.Floor, Square.Destination, Square.Destination, Square.Destination, Square.Wall, Square.Wall, Square.Wall,],
    [Square.Wall, Square.Wall, Square.Destination, Square.Box, Square.Box, Square.Destination, Square.Floor, Square.Floor, Square.Wall, Square.Wall,],
    [Square.Wall, Square.Wall, Square.Destination, Square.Destination, Square.Floor, Square.Box, Square.Box, Square.Floor, Square.Wall, Square.Wall,],
    [Square.Wall, Square.Wall, Square.Destination, Square.Box, Square.Box, Square.Floor, Square.Box, Square.Floor, Square.Floor, Square.Floor],
    [Square.Wall, Square.Wall, Square.Player, Square.Destination, Square.Destination, Square.Box, Square.Box, Square.Floor, Square.Floor, Square.Wall,],
    [Square.Wall, Square.Wall, Square.Floor, Square.Floor, Square.Floor, Square.Floor, Square.Floor, Square.Wall, Square.Wall, Square.Wall,],
    [Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall,],
  ],
  time: 8000,
}

const level4Blueprint = {
  structure: [
    [Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall,],
    [Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Floor, Square.Floor, Square.Wall, Square.Wall, Square.Wall,],
    [Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Floor, Square.Box, Square.Wall, Square.Wall, Square.Wall,],
    [Square.Wall, Square.Wall, Square.Destination, Square.Floor, Square.Floor, Square.Floor, Square.Floor, Square.Floor, Square.Wall, Square.Wall, Square.Wall,],
    [Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Floor, Square.Floor, Square.Box, Square.Floor, Square.Floor, Square.Destination, Square.Wall,],
    [Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Box, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall,],
    [Square.Wall, Square.Floor, Square.Floor, Square.Wall, Square.Player, Square.Floor, Square.Box, Square.Floor, Square.Floor, Square.Destination, Square.Wall,],
    [Square.Wall, Square.Floor, Square.Floor, Square.Floor, Square.Floor, Square.Floor, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall,],
    [Square.Wall, Square.Destination, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall,],
    [Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall,],
  ],
  time: 3000,
}

export const levelsBlueprint = [
  level1Blueprint,
  level2Blueprint,
  level3Blueprint,
  level4Blueprint,
];
