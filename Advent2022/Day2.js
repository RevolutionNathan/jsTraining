const fs = require("fs");
const input = fs.readFileSync('Day2Input.txt', 'utf-8').replaceAll('\r', '').split('\n');

let results = {
    A: { X: 4, Y: 8, Z: 3}, 
    B: { X: 1, Y: 5, Z: 9},
    C: { X: 7, Y: 2, Z: 6}
}

let resultsRoundTwo = {
    A: { X: 3, Y: 4, Z: 8}, 
    B: { X: 1, Y: 5, Z: 9},
    C: { X: 2, Y: 6, Z: 7}
}

let getResult = (elf, me) => results[elf][me];
let getResultTwo = (elf, me) => resultsRoundTwo[elf][me];

let calculateResults = () => {
    let total = 0;
    input.forEach(element => {
        let picks = Array.from(element.replaceAll(' ', ''));
        if (picks.length > 0)
            total += getResultTwo(picks[0], picks[1]);
    });
    console.log(total);
}

calculateResults();

//             me
//rock     1 A X
//paper    2 B Y
//scissors 3 C Z