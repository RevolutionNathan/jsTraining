// []
let testData = [31, 40, 93, 40, 98], n = 5;

// function leaders(arr, n) {
//     let leaders = [-1];
//     for (let indexofElement = 0; indexofElement < n; indexofElement++) {
//         //push potential new leader
//         leaders.push(arr[indexofElement]);
//         for (let indexOfLeader = 0; indexOfLeader < leaders.length; indexOfLeader++) {
//             //element is bigger than current leader
//             if (arr[indexofElement] > leaders[indexOfLeader]) {
//                 //remove element if is smaleader
//                 leaders.splice(indexOfLeader, 1);
                
//             } 
//         }
//     }
//     return leaders;
// }

//works but too slow
function leaders(arr, n) {
    let leaders = [];
    for (let i = 0; i < arr.length; i++) {
        
        leaders.push(arr[i])
        //let rest = arr.slice(i + 1, arr.length)
        for (let j = i+1; j <= n; j++) {
            if(arr[j] > arr[i]) {
                leaders.pop();
                break;
            }
            
        }
    }
    return leaders;
}

var result = leaders (testData, n);

console.log(result);

// if (arr[i] > leaders[leaders.length - 1]) {
            
// }