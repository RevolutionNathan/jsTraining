var message = 'really wish debugging would work';

console.log(message);
console.log('debugging is cool');

function PermuatationsOfString(results) {
    let workingString = results[results.length - 1];
    let next = `${workingString.substring(1)}${workingString.substring(0, 1)}`;
    
    if (results.length == workingString.length) {
        return Array.from(new Set(results));
    }
    
    results.push(next);
    PermuatationsOfString(results);
}

function Factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * Factorial( n - 1 );
    }
}

var results = PermuatationsOfString(['aabb']);
console.log(results);
