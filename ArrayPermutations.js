

function permutations(input) {
    let baseArray = Array.from(input);
    PermuateEachArray(PermutationsOfArray(baseArray));
}

function ShiftAndConcatenate(char, workingArray, retval) {
    if (workingArray.length < 1) {
        return retval;
    }

    workingArray.forEach(element => {
        retval.push(`${char}${element}`);
    });
    
    ShiftAndConcatenate(workingArray.shift(), workingArray, retval);
}

function PermutationsOfArray(baseArray){
    let retval = [baseArray];
    baseArray.forEach(char => {
        //let newArray = ;
        retval.push(baseArray.push(char));
    });
    return retval;
}

function PermuateEachArray(twoDimensionalArray) {
    let retval = [];
    twoDimensionalArray.forEach(array => {
        (ShiftAndConcatenate(array.shift(), array, retval));
    });
    return retval;
}

function PermuatationsOfString(results) {
    let workingString = results[length - 1];
    if (results.includes(workingString)) {
        return results;
    }
    let next = `${workinstring.Substring(1)}${workingString.substring(0, 1)}`;
    results.push(next);
    PermuatationsOfString(results);
}



permutations('ab');