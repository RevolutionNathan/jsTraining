// []
let testData = [1,2,3,-2,5]; 
let testData1 = [-1,-2,-3,-4];

//first attempt
// function maxSubarraySum(arr, N){
//     let max = {
//             l: 0,
//             r: 1,
//             s: arr [0]
//         };
//     for (let left = 0; left < N; left++) {
//         for (let right = left+1; right <= N; right++) {
//             let sum = arr.slice(left, right).reduce((previousValue, currentValue) => previousValue + currentValue,
//             0);
//             if (sum > max.s) {
//                 max =  {
//                     l: left,
//                     r: right,
//                     s: sum
//                 };
//             }
//         }
//     } 
//     return max.s;
// } 

var answer = maxSubarraySum(testData, 5);
console.log(answer);

//second attempt -- we only really need to know the max
function maxSubarraySum(arr, N){
    let max = arr[0];
    let curr_max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        curr_max = Math.max(arr[i], curr_max + arr[i]);

        max = Math.max(max, curr_max);
    }  
    return max;
} 