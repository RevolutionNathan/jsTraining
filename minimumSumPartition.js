// []

// function MissingNumber(array, n) {
//     let retval = 0;
//     array.forEach(element => {
//     if (!array.find(element => element == element + 1) && !((element + 1) > n)) {
//         retval = element + 1;
//     } 
//   });
//   if (retval === undefined) { 
//     retval = array[n - 1];
// }
//   return retval;
// }

let input = [6,1,2,8,3,4,7,10,5];
let input1 = [1];
var result = MissingNumber(input1, 2);
console.log(result);


// function MissingNumber(array, n) {
//     array.sort();
//     if(array[0] != 1) {
//         return 1;
//     }
//     for(let i = 0; i < array.length; i++) { 
//         if (((array[i + 1]) - array[i]) > 1) {
//             return array[i] + 1;
//         } 
//     }
//     return array [n - 1];
// } 

function MissingNumber(array, n) {
    let set = new Set(array);
    
    for (let index = 1; index <= n; index++) {
        if (!set.has(index)) {
            return index; 
        }
        
    }
}

