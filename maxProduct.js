//[]
let testData = [6, -3, -10, 0, 2];
let testData2 = [2, 3, 4, 5, -1, 0];
let testData3 = [8, -2, -2, 0, 8, 0, -6, -8, -6, -1]; //288
let testData4 = [2, 3, 4, 5, -1, 0];
let testData5 = [0,2, 1, 7];
let testData6 = [-8, 5, 3, 1, 6];
let testData7 = [-4];
let testData8 = [0, 2, -5, 7];
let testData9 = [2, -8, 6, 12, 22, 27, 29, -38, -31, -29, 21, 21, 27, 32]; //n 14
let testData10 = [0, 0, -5, 0, 0]; //5
// function maxProduct(arr, n){
//     let maxProd = arr[0];
//     let workingProduct = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         workingProduct *= arr[i];
//         maxProd = Math.max(maxProd, workingProduct);
//     }
//     return maxProd;
// }

// function maxProduct(arr, n){
//     let maxProd = arr[0];
//     let workingProduct = arr[0];
//     let i = 1;
//     if (arr[0] == 0) {
//          maxProd = arr[1];
//          workingProduct = arr[1];
//          i = 2;
//          n--;
//     }
    
//     for (i; i < arr.length; i++) {
//         if (arr[i] == 0) {
//             workingProduct = arr[i + 1];
//             i++
//             continue;
//         }
//         workingProduct *= arr[i];
//         maxProd = maxProd > workingProduct ? maxProd : workingProduct;
//     }
//     if (workingProduct == undefined)  {
//         workingProduct = 0;
//     }
//     let retval = maxProd > workingProduct ? maxProd : workingProduct;
//     if (retval < 0 && n == 1) {
//         return retval;
//     }
//     if (retval < arr[n - 1]) {
//         return arr[n - 1];
//     }
//     return retval >= 0 ? retval : maxProduct(arr.reverse(), n);
// }

//i dunno. this works but also doesnt
function maxProduct(arr, n){
    let retval = arr[0];
    let sum = 1;
 
    for (let i = 0; i < arr.length; i++) {
         sum *= Number(arr[i]);
        //  retval = Math.max(Number(retval), Number(sum));
        retval = Math.max(retval, sum);
         if (sum == 0) {
             sum = 1;
         }
    }
    sum = 1;
 
    for (let j = n - 1; j > -1; j--) {
         sum *= Number(arr[j]);
         retval = Math.max(retval, sum);
         if (sum == 0) {
             sum = 1;
         }
    }
    return retval;
}

console.log(maxProduct(testData10, 5));