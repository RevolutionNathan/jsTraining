






const sumNumbers = (str) => {
    var numbers = str.split(',');
    let retval = Array.from(numbers, (number) => parseInt(number)).reduce((acc, cur) => acc + cur);
    return isNaN(retval) ? 0 : retval;
  }
  console.log(sumNumbers(''));