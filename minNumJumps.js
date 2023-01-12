// []
let testData = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9], n = 11;
let testData1 = [2, 3, 1, 1, 2, 4, 2, 0, 1, 1], n1 = 10

let testData2 = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9], n2 = 11

let testData3 = [1, 4, 3, 2, 6, 7], n3 = 6

// function minJumps(arr, maxIndex){
//     return jump(arr, 0, arr.length, 0);
// }

function jump(arr, valueAtLastIndex, maxIndex, jumps) {
    jumps++;
    let valueAtCurrentIndex = arr[valueAtLastIndex];
    if (valueAtCurrentIndex === 0 ) {
        return -1;
    }
    if (valueAtCurrentIndex >= maxIndex || (valueAtCurrentIndex + valueAtLastIndex) > maxIndex) {
        return jumps;
    }
    return jump(arr, valueAtCurrentIndex + valueAtLastIndex, maxIndex, jumps);
}

var answer = minJumps(testData1, n1);
console.log(answer);

// function minJumps(arr, n){
//     return jump(arr, 0, arr.length, 0);
// }


// function minJumps(arr, maxIndex, currentIndex = arr[0], jumps = 1){
//     let valueAtCurrentIndex = arr[currentIndex];
//     let nextIndex = valueAtCurrentIndex + currentIndex;
//     if (valueAtCurrentIndex === 0 ) {
//         return -1;
//     }
//     if (nextIndex >= (maxIndex - 1)) {
//         return jumps+1;
//     }
//     return minJumps(arr, arr.length, valueAtCurrentIndex + currentIndex, jumps+1);
// }

//solution:: loop over, setting cur to the value at 
//the next current index 
function minJumps(arr,n){
    let jump = 0
    let curr = 0 
    let res = 0
     
    for(let i=0; i<n-1; i++){
        let nextIndexToJumpTo = arr[i] + i;
        res=Math.max(res, nextIndexToJumpTo);
        if(curr==i){
            curr=res;
            jump++;
        }
    }
    if(curr>=(n-1)){
      return jump;
    } else {
       return -1;
    }
}