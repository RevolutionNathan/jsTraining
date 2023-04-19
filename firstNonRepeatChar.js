
let test = [];

const findCharacter = (str) => {
    let iterable = Array.from(str);
    let charCounts = {};
    iterable.forEach(char => {
        if (charCounts[char]) {
            charCounts[char].count ++;
        } else {
            charCounts[char] = {
                count: 1
            };
        }
    });
    for (const [key, value] of Object.entries(charCounts)) {
        //console.log(`${key}: ${value}`);
        if (value.count == 1) {
            return key;
        }
      }
    return null;
}

console.log(findCharacter("abcedf"));