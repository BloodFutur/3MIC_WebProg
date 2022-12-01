import { Square } from './enums.mjs';

// Blueprint for the first level
export const level1Blueprint = [[ Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall ],
                         [ Square.Wall, Square.Destination, Square.Box, Square.Floor, Square.Player, Square.Wall ],
                         [ Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall, Square.Wall ]];
