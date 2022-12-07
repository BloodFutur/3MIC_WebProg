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

export const levelsBlueprint = [
  level1Blueprint,
  level2Blueprint,
]
