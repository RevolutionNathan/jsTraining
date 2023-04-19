






let test = ['orange', 'apple', 'banana', 'pear'];

const sortStrings = (array) => {
    let retval = [];
    array.forEach(string => {
        retval.push(Array.from(string).sort().join(''));
    });
    return retval;
  }

  console.log(sortStrings(test));