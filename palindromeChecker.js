const isPalindrome = (str) => {
    var workingArray = Array.from(str);
    var potentialPalindrome = workingArray.toReversed().join('');
    return str.toLowerCase() == potentialPalindrome.toLowerCase() ? true : false ;
}

console.log(isPalindrome('aaa'));