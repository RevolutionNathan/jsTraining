











let test = ['cat', 'dog', 'elephant'];



const findLongest = (array) => {
    let retval = {
        word: '',
        index: null,
        currentLength: 0
    };

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.length > retval.currentLength) {
            retval.word = element;
            retval.index = i;
            retval.currentLength = element.length;
        }
    }

    return retval.word;
}

console.log(findLongest(test));