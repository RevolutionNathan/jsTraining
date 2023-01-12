//[]
const testData = '{([])}';
const testData1 = '()'; 
const testData2 = '[({[([{}])]})}';
const matches = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
}
// function ispar(x) {
//     let fwd = Array.from(x)
//     let bkwrd = fwd.slice().reverse();
//     for (let i = 0; i < fwd.length/2; i++) {
//         if (matches[fwd[i]] !== bkwrd[i]) {
//             return false;
//         }
        
//     }
//     return true;
// }

function ispar(x) {
    let working = Array.from(x);
    if (working.length %2 !== 0) return false;
    let left = [working.shift()];
    for (let i = 0; i < working.length; i++) {
        if (isOpen(working[i])) {
            left.push(working[i]);
        } else {
            if(matches[left[left.length - 1]] === working[i]) {
                left.pop();
            } else {
                return false;
            }
        }
    }
    console.log(left);
    return true;
}

function isOpen(char) {
    return char === '(' || char === '[' || char === '{';
}


console.log(ispar(testData));


// let a = matches[fwd[i]];
// let b = bkwrd[i];