const array1 = [142, 112, 54, 69, 148, 45, 63, 158, 38, 60, 124, 142, 130, 179, 117, 36, 191, 43, 89, 107, 41, 143, 65, 49, 47, 6, 91, 130, 171, 151, 7, 102, 194, 149, 30, 24, 85, 155, 157, 41, 167, 177, 132, 109, 145, 40, 27, 124, 138, 139, 119, 83, 130, 142, 34, 116, 40, 59, 105, 131, 178, 107, 74, 187, 22, 146, 125, 73, 71, 30, 178, 174, 98, 113];
const array2 = [1,2,3,7,5]


subarraySum(arr, n, s)
    {
      if(s == 0) return [-1]
      let left = 0, right = 0, sum = 0;
      while(right < n) {
          if(sum+arr[right] <= s) {
              sum = sum + arr[right];
              right++;
          } else {
              sum = sum - arr[left];
              left++;
          }
          
          if(sum == s) {
            
              return [left+1, right]
          }
      }
      return [-1]
    }


 //Function to find a continuous sub-array which adds up to a given number.
//  function subarraySum(arr, n, s) {
//     let startingIndex = 0;
//     let sum = arr[startingIndex];
//     let nextIndex = startingIndex + 1;

//     while (sum != s) {
//         if (nextIndex >= arr.length) {
//             startingIndex++;
//             nextIndex = startingIndex + 1; 
//             sum = arr[startingIndex];
//         }
//         if (startingIndex >= arr.length) {
//             break;
//         }

//         sum += arr[nextIndex];
//         nextIndex++;

//         if (sum == s ) {
//             return [startingIndex+1, nextIndex];
//         }

//     }
    
//     return [-1];
//  }

// var answer = subarraySum(array1, 74, 665);
var answer = subarraySum(array2, 5, 12);
//expected 2, 4
console.log('debugging is cool');

//still not fast enough
// function subarraySum(arr, n, s) {
//     for (let i = 0; i < arr.length; i++) {
//         let sum = arr[i];
//         let nextIndex = i;
//         while (sum != s) {
//             nextIndex++;
//             if (nextIndex >= arr.length) {
//                 break;
//             }
//             sum += arr[nextIndex];
//         }
//         if (sum == s ) {
//             return [i+1, nextIndex+1];
//         }
//     }
//     return [-1];
//  }

//not fast enough
// function subarraySum(arr, n, s) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 2; j <= arr.length; j++) {
//             const subArraySub = arr.slice(i, j);
//             let sum = subArraySub.reduce((pV, cV) => pV + cV, 0)
//             if (sum === s) {
//                 return [i + 1, j];
//             } 
//         }
//     }
//     return [-1];
//  }