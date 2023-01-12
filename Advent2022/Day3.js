const fs = require("fs");
const input = fs.readFileSync('Day3Input.txt', 'utf-8').replaceAll('\r', '').split('\n');

priorites = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20 , u: 21, v: 22, w: 23, x: 24, y: 54, z: 26, A: 27, B: 28, C: 29, D: 30, E: 31, F: 32, G: 33, H: 34, I: 35, J: 36, K: 37, L: 38, M: 39, N: 40, O: 41, P: 42, Q: 43, R: 44, S: 45, T: 46 , U: 47, V: 48, W: 49, X: 50, Y: 51, Z: 52};

function getSharedCompartmentValues() {
    var total = 0;
    input.forEach(pack => {
        var firstCompartment = pack.substring(0, (pack.length/2));
        var secondCompartment = pack.substring((pack.length/2));

        for (let letter of firstCompartment) {
            if (secondCompartment.includes(letter)) {
                console.log(`${letter} worth ${priorites[letter]} added`);
                total += priorites[letter];
                console.log(`new total: ${total}`);
                break;
            }
        }
    });
    console.log(total);
}

function getGroupBadgeCompartmentValues() {
    var total = 0;
    packs: for (let index = 0; index < input.length; index += 3) {
        const firstPack = input[index];
        const secondPack = input[index + 1];
        const thirdPack = input[index + 2];

        for (let letter of firstPack) {
            if (secondPack.includes(letter) && thirdPack.includes(letter)) {
                console.log(`${letter} worth ${priorites[letter]} added`);
                total += priorites[letter];
                console.log(`new total: ${total}`);
                break;
            }
        }
    }
    console.log(total);
}


//getSharedCompartmentValues();
getGroupBadgeCompartmentValues();


