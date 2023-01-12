// []
let testData = [1, 7, 4, 3, 4, 8, 7], n = 7, k =2;



function firstElementKTime(arr, n, k) {
    let countObjs = {};
    for (let index = 0; index < n; index++) {
        if (!countObjs[arr[index]]) {
            let obj = 
            {
                value: arr[index],
                count: 1
            };
            countObjs[[arr[index]]] = obj;
        } else {
            countObjs[arr[index]].count++;
            
        }
        if(countObjs[arr[index]].count == k) {
            return countObjs[arr[index]].value;
        } 
    }
    return -1;
}

var answer = firstElementKTime(testData, n ,k);
console.table(answer);