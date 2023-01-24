let data = [3,0,0,2,0,4];
let data2 = [7,4,0,9];
let data3 = [6,9,9];
let data4 = [7, 4, 0, 9];
let data5 = [8, 8, 2, 4, 5, 5, 1];
function trappingWater(arr, n)
{
    let leader = arr[0];

    let trappedOnIndexes = Array(n).fill(0);
    
    //iterate left to right
    //if higher than leader, reset leader, set zero in index of trappedOn
    //if lower than leader set leader - val in trappedOn
    for (let i = 1; i < arr.length - 1; i++) {
        if(leader <= arr[i]) {
            leader = arr[i];
            continue;
        } else{
            trappedOnIndexes[i] = leader - arr[i];
        }
    }

    //set leader to end index
    leader = arr[n - 1]
    //iterate backward
    //if higher than leader, reset leader, set zero in index of trappedOn
    //if lower than leader set leader - val in trappedOn if it is less than the val currently stored at that index
    for (let i = (n - 2); i > 0; i--) {
        if(leader <= arr[i]) {
            leader = arr[i];
            trappedOnIndexes[i] = 0;
            continue;
        } else if ((leader - arr[i]) < trappedOnIndexes[i]){
            trappedOnIndexes[i] = leader - arr[i];
        }
    }
    let total = trappedOnIndexes.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
      );
      return total;
}
console.log(trappingWater(data5, 7));