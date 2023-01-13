let one, three, four;

one = {
    data: 1, 
    next: null
};
three = {
    data: 3, 
    next: null
};
four = {
    data: 4, 
    next: null
};


one.next = three;
three.next = four;
four.next = three; 

console.log(one, three, four);


// function removeLoop(node, last = null)
//  {
//      if (node?.next === last) {
//         node.next = null;
//         console.log(`removed the circle from list starting with ${one}`);
//         return;
//      }
//      removeLoop(node.next, node)
//  }

function removeLoop(node) {
    while(node.next) {
        cutLoop(node, node.next)
    }
    removeLoop(node.next);
}

 function cutLoop(node, nodeToFind) {
    while(node.next) {
        if(node.next == nodeToFind) {
            node.next == null;
            return;
        }
        cutLoop(node.next, nodeToFind);
    }
 }

 removeLoop(one);