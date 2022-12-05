import { Square } from '/modules/enums.mjs';

// Blueprint for the first level
export const level1Blueprint = [[ Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall ],
                                [ Square.Wall, Square.Destination, Square.Box, Square.Floor, Square.Player, Square.Wall ],
                                [ Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall ]];
                              
// Blueprint for the second level
export const level2Blueprint = [
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
