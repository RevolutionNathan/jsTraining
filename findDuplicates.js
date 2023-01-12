//[]
const testData = [0,3,1,2]; 
const testData1 = [2,3,1,2,3]; 
const testData2 = [0, 3, 1, 2];
// function duplicates(a, n) {
//     let dupes = [];
//     for (const num in a) {
//         if (a.slice(a.indexOf(num)).find(num)) {

//         }
//     }
// }

function duplicates(a, n) {
    let dupes = [];
    for (const num of a) {
        if (dupes[num]) {
            dupes[num].count ++;
        } else {
            dupes[num] = 
            {
                value: num,
                count: 1
            }
        }
    }
    let retval = dupes.filter(num => {
        return num.count > 1;
    }).map(num => num.value);

    
    return retval.length > 0 ? retval : - 1;
}
console.log(duplicates(testData2));