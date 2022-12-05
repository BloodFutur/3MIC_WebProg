import { Square } from '/modules/enums.mjs';

// Blueprint for the first level
//
const level1Blueprint = [[ Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall ],
                                [ Square.Wall, Square.Destination, Square.Box, Square.Floor, Square.Player, Square.Wall ],
                                [ Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall ]];
<<<<<<< HEAD

const level2Blueprint = [
=======
                              
// Blueprint for the second level
export const level2Blueprint = [
>>>>>>> 380cebd36dc4e3a1f3af185d1a7e3f0adb3e04d1
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
  ];

export const levelsBlueprint = [
  level1Blueprint,
  level2Blueprint,
]
