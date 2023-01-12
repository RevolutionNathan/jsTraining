let testData = [1, 7, 5, 7, 5, 4, 7, 4];


function objTest(array, arrSize) {
    let pairs = [];

    array.forEach(element => {
        if (pairs[element]) {
            pairs[element].count++;
        } else {
            pairs[element] = 
            {
                value: element,
                count: 1
            }
        }
    });

    let oddOccurences = pairs.filter(obj => obj.count%2 !== 0);

    console.table(oddOccurences);
}

objTest(testData, 8);


