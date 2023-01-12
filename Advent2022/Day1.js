const fs = require("fs");
const input = fs.readFileSync('Day2Input.txt', 'utf-8').replaceAll('\r', '').split('\n');

//console.log(input);
//[]

function calculateTotals() {
    let combined = [];
    let current = 0;

    input.forEach(element => {
        let val = parseInt(element);
        if (isNaN(val)) {
            combined.push(current);
            current = 0;
        } else {
            current += val;
        }
        //console.log(leaders[0], leaders[1], leaders[2]);
    });
    return combined;
}

function findThreeHighest() {
    let totals = calculateTotals();
    console.log(totals.sort().reverse());
    console.log(totals[0] + totals[1] +totals[2]);

    const getTopThreeElves = (calories) => calories.sort((a, b) => b - a).slice(0, 3);
    let topThree = getTopThreeElves(totals);
    const totalCaloriesTopThree = (calories) => getTopThreeElvesOt(totals).reduce((acc, current) => acc + current, 0);
}


findThreeHighest();

function findElfWithMost() {
    let highest = 0;
    let current = 0;

    input.forEach(element => {
        let val = parseInt(element);
        if (isNaN(val)) {
            if (current > highest) {
                highest = current
            }
            current = 0;
        } else {
            current += val;
        }
        
    });

    console.log(highest);
}

//findElfWithMost();


