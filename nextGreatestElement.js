
let data = [1, 3, 2, 4];
let data1 = [6, 8, 0, 1, 3];

//eorking but apparently too slow
function nextLargerElement(arr, n) {
    let retval = [];
    
    arr.forEach(element => {
        let workingIndex = arr.indexOf(element);
        //let workingArray = arr.slice(workingIndex + 1);
        
        for (let i = workingIndex + 1; i <= arr.length + 1; i++) {
            if (arr[i] > element) {
                retval.push(arr[i]);
                break;
            } else if (i > arr.length) {
                retval.push(-1);
            }
        }
    });
    return retval;
}

console.log(nextLargerElement(data1, 5));

// JS code to implement the approach
//this is apparently faster, but idk why since it is looping more
function nextLargerElement(arr, n)
{
    var s = [];
    
    // iterating over the array
    for (var i = 0; i < arr.length; i++)
    {
        while (s.length > 0 && s[s.length - 1]["value"] < arr[i])
        {
            // updating the array as per the stack top
            var d = s.pop();
            arr[d["ind"]] = arr[i];
        }
        // pushing values to stack
        s.push({"value": arr[i], "ind": i});
    }
    
    // updating the array as per the stack top
    while (s.length > 0)
    {
        d = s.pop();
        arr[d["ind"]] = -1;
    }
    return arr;
    
}

// Driver Code
var arr = [6, 8, 0, 1, 3];
var n = 5;

// Function call
console.log(nextLargerElement(arr, n));