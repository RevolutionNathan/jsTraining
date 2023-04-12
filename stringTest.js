let capitalizeFirstChar = (s) => {
    return s.replace(s.charAt(0), s.charAt(0).toUpperCase());
}


console.log(capitalizeFirstChar("test"));



Array.prototype.myMap = function(callback) {
    let retval = [];
    for (let i = 0; i < this.length; i++) {
        retval.push(callback(this[i], i, this));
    }
    return retval;
};

let test = [1, 2, 3, 4];

console.log(test.myMap(num => num * num));