// []
allPermutations = [];
class PermutationNode {
    // value: string;
    // childNodes: PermutationNode[];
    // remainingNodes: string[];
    value;
    childValues;
    workingPermutation;
    childNodes = [];

    constructor(value, remainingValues, parentValues) {
        this.value = value;
        this.workingPermutation = parentValues + value;
        if (remainingValues.length >= 1) {
            remainingValues.forEach(value => {
                var otherValues = remainingValues.slice();
                _ = otherValues.splice(otherValues.indexOf(value), 1);
                this.childNodes.push(new PermutationNode(value, otherValues, this.workingPermutation));
            });
        } else {
            allPermutations.push(this.workingPermutation);
        }
    }
}

function callNodes(str){
    let rootNodeValues = Array.from(str);

    let roots = [];
    rootNodeValues.forEach(rootValue => {
        var childValues = rootNodeValues.slice();
        _ = childValues.splice(childValues.indexOf(rootValue), 1);
        roots.push(new PermutationNode(rootValue, childValues, ''));
    })

    var answer = new Set(allPermutations);
    console.table(answer);
}

Object.assign(Array.prototype, {
    remove(indecOfElementToRemove) {
        var remainingValues;
        for (let index = 0; index < indecOfElementToRemove; index++) {
            remainingValues.push(this[index]);
        }
        for (let index = indecOfElementToRemove++; index < array.length; index++) {
            remainingValues.push(this[index]);
        }
    }
});

//callNodes('aabb');

//geeks for geeks recursive example
function printAllPermutationsFast(stringToPermute, l)
{
    if (stringToPermute.length < 1) {
        allPermutations.push(l + stringToPermute,"</br>");
    }
    let uset = new Set();
    for (let i = 0; i < stringToPermute.length; i++) {
        if (uset.has(stringToPermute[i]) == true) {
            continue;
        }
        else {
            uset.add(stringToPermute[i]);
        }
        let temp = "";
        if (i < stringToPermute.length - 1) {
            temp = stringToPermute.substring(0, i) + stringToPermute.substring(i + 1);
        }
        else {
            temp = stringToPermute.substring(0, i);
        }
        printAllPermutationsFast(temp, l + stringToPermute[i]);
    }
}
 
// driver code
let s = "ACBC";
s = s.split("").sort().join("");
printAllPermutationsFast(s, "");