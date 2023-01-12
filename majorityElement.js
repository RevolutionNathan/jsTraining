//[]
let testData = [3,1,3,3,2];
function majorityElement(a, size)
{
    let elementsAndCounts = new Map();
    let retval;

    a.forEach(element => {
        if (elementsAndCounts.has(element)) {
            elementsAndCounts.set(element, 1 + elementsAndCounts.get(element));
        } else {
            elementsAndCounts.set(element, 1);
        }
    });

    //console.table(elementsAndCounts);
    for (const [key, value] of elementsAndCounts.entries()) {
        if (value > (size/2)) {
            retval = key;
        }
    }
    if(retval) {
        return retval;
    } 
    
    return -1;
}

let answer = majorityElement(testData, 5);
console.log(answer);