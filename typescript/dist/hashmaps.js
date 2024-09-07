"use strict";
let charMap = new Map([
    ["a", "O....."], ["b", "O.O..."], ["c", "OO...."], ["d", "OO.O.."], ["e", "O..O.."], ["f", "OOO..."], ["g", "OOOO.."], ["h", "O.OO.."], ["i", ".OO..."], ["j", ".OOO.."], ["k", "O...O."], ["l", "O.O.O."], ["m", "OO..O."],
    ["n", "OO.OO."], ["o", "O..OO."], ["p", "OOO.O."], ["q", "OOOOO."], ["r", "O.OOO."], ["s", ".OO.O."], ["t", ".OOOO."], ["u", "O...OO"], ["v", "O.O.OO"], ["w", ".OOO.O"], ["x", "OO..OO"], ["y", "OO.OOO"], ["z", "O..OOO"],
    ["1", "O....."], ["2", "O.O..."], ["3", "OO...."], ["4", "OO.O.."], ["5", "O..O.."], ["6", "OOO..."], ["7", "OOOO.."], ["8", "O.OO.."], ["9", ".OO..."], ["0", ".OOO.."], [".", "..OO.O"], [",", "..O..."], ["?", "..O.OO"],
    ["!", "..OOO."], [":", "..OO.."], [";", "..O.O."], ["-", "....OO"], ["/", ".O..O."], ["<", ".O.O.O"], [">", "O..OO."], ["(", "O.O..O"], [")", ".O.OO."], [" ", "......"]
]);
let brailleMap = new Map([
    ["O.....", "a"], ["O.O...", "b"], ["OO....", "c"], ["OO.O..", "d"], ["O..O..", "e"], ["OOO...", "f"], ["OOOO..", "g"], ["O.OO..", "h"], [".OO...", "i"], [".OOO..", "j"], ["O...O.", "k"], ["O.O.O.", "l"], ["OO..O.", "m"],
    ["OO.OO.", "n"], ["O..OO.", "o"], ["OOO.O.", "p"], ["OOOOO.", "q"], ["O.OOO.", "r"], [".OO.O.", "s"], [".OOOO.", "t"], ["O...OO", "u"], ["O.O.OO", "v"], [".OOO.O", "W"], ["OO..OO", "x"], ["OO.OOO", "y"], ["O..OOO", "z"],
    ["1", "O....."], ["2", "O.O..."], ["3", "OO...."], ["4", "OO.O.."], ["5", "O..O.."], ["6", "OOO..."], ["7", "OOOO.."], ["8", "O.OO.."], ["9", ".OO..."], ["0", ".OOO.."], [".", "..OO.O"], [",", "..O..."], ["?", "..O.OO"],
    ["..OOO.", "!"], ["..OO..", ":"], ["..O.O.", ";"], ["....OO", "-"], [".O..O.", "/"], [".O.O.O", "<"], ["O..OO.", ">"], ["O.O..O", "("], [".O.OO.", ")"], ["......", " "]
]);
//# sourceMappingURL=hashmaps.js.map