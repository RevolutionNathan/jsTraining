//[i]

let testData = [1, 2, 3];

// Create an empty array mapArr.
// Loop through array elements.
// Call function mapFunc with the current element as the argument.
// Push the result of the mapFunc function to the mapArr array.
// Return the mapArr array after going through all the elements.


Array.prototype.myMap = function(callback) {
    let retval = [];
    this.forEach(element => retval.push(callback(element)));
    return retval;
  };

  //this is from the site, idk why they are passing three arguments to the callback
//   Array.prototype.myMap = function(callback) {
//     const result = [];
    
//     for (let i = 0; i < this.length; i++) {
//       result.push(callback(this[i], i, this));
//     }
    
//     return result;
//   };

  testData.myMap(num => num * 2);

