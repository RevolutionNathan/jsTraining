let arrivals = [0900, 0940, 0950, 1100, 1500, 1800];
let departures = [0910, 1200, 1120, 1130, 1900, 2000];

// const fs = require("fs");
// const arrivalsText = fs.readFileSync('arrivals.txt', 'utf-8');
// const departuresText = fs.readFileSync('departures.txt', 'utf-8');
// let arrivals = JSON.parse(arrivalsText);
// let departures = JSON.parse(departuresText);
// function findPlatform(arrivals, departures, n) {
//     let platforms = [{
//             hasTrain: true,
//             departure: departures[0]
//         }];
//     //for each arrival, iterate the collection of platforms, adjusting as needed
//     for (let i = 1; i < arrivals.length; i++) {
//         for (let j = 0; j < platforms.length; j++) {
//             if(platforms[j].departure >= arrivals[i]) {
//                 platforms.push({
//                     hasTrain: true,
//                     departure: departures[i]
//                 })
//                 break;
//             }
//             if (platforms[j].departure <= arrivals[i]) {
//                 platforms[j].departure = departures[i];
//                 platforms[j].hasTrain = true;
//                 break;
//             }
//         }
//     }
//     console.table(platforms);
// }

//only works for sorted times 
// function findPlatform(arrivals, departures, n) {
//     let platforms = [departures[0]];
//     let maxCount = 1;
//     for (let i = 1; i < arrivals.length; i++) {
//         //for every arrival, remove since-departed trains from platforms
//         for (let j = 0; j < platforms.length; j++) {
//             if(arrivals[i] > platforms[j]) {
//                 platforms.splice(j, 1);
//             }
//         }
//         //now put the newly-arrived train at a platform
//         platforms.push(departures[i]);
//         if(platforms.length > maxCount) {
//             maxCount = platforms.length
//         }
//     }
//     return maxCount;
// }

//just had to sort that shit
function findPlatform(arrivals, departures, n) {
    let trains = [];

    for (let i = 0; i < arrivals.length; i++) {
        trains.push({
            arrival: arrivals[i],
            departure: departures[i]
        });
    }
    trains.sort((a, b) => a.arrival - b.arrival);

    let platforms = [trains[0].departure];

    let maxCount = 1;
    for (let i = 1; i < trains.length; i++) {
        //for every arrival, remove since-departed trains from platforms
        for (let j = 0; j < platforms.length; j++) {
            if(trains[i].arrival > platforms[j]) {
                platforms.splice(j, 1);
            }
        }
        //now put the newly-arrived train at a platform
        platforms.push(trains[i].departure);
        if(platforms.length > maxCount) {
            maxCount = platforms.length
        }
    }
    return maxCount;
}

console.log(findPlatform(arrivals, departures, 0));
