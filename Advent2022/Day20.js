const fs = require("fs");
const internal = require("stream");
const input = fs.readFileSync('Day20Input.txt', 'utf-8').replaceAll('\r', '').split('\n');

function decode() {
    let itemsAndKeys = [];
    input.forEach(code => {
        itemsAndKeys.push({
            val: parseInt(code),
            key: crypto.randomUUID()
        })
    });
    let shifted = itemsAndKeys.slice();
    itemsAndKeys.forEach(item => {
        //get new index
        //splice item out of shifted
        //should now have 2 arrays and the item 

        //
    })
}


