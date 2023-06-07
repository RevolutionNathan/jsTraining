



//[]

// const maxCharacters = (str) => {
//     let charCounts = new Map();
//     for (const char of str) {
//         if(!charCounts.get(char)) {
//             charCounts.set(char, {
//                 count: 1
//             })
//         } else {
//             charCounts.get(char).count ++;
//         }
//     }
//     let retval = Array.from(charCounts);
//     console.log(charCounts);
//   }
const maxCharacters = (str) => {
    let charCounts = {};
    for (const char of str) {
        if(charCounts[char] == undefined) {
            charCounts[char] = {
                count: 1
            }
        } else {
            charCounts[char].count ++;
        }
    }
    let retval = null
    let curr = 0;
    for (const obj in charCounts) {
        if(charCounts[obj].count > curr) {
            curr = charCounts[obj].count;
            retval = obj;
        }
    };
    return retval;
  }

  

  console.log(maxCharacters('aabcd'));



  //console.log(test.find(findGreatestCount)); // undefined, not found
