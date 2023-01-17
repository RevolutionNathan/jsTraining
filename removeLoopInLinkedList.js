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

//console.log(one, three, four);


// function removeLoop(node, last = null)
//  {
//      if (node?.next === last) {
//         node.next = null;
//         console.log(`removed the circle from list starting with ${one}`);
//         return;
//      }
//      removeLoop(node.next, node)
//  }

// function removeLoop(node) {
//     let existing = [];
//     traverse(node.next, node)
//     function traverse(head, last){

//         if(head == null)
//             return;
//         //if we have seen the last item, remove the link
//         if(existing.find((n) => n  == last)) {
//             head.next = null;
//         }
//         else {
//             existing.push(head);
//         }

//         traverse(head.next, head);
//     }
//     console.log(one);
// }

// function removeLoop(node) {
//     let slow = node.next;
//     let fast = node.next.next;

//     while(fast != null && fast.next != null) {
//         if (slow == fast) {
//             fast.next = null
//             break;
//         }
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//     console.log(one);
// }

function removeLoop(node) {
    let existing = new Set();
    let prev = null;
    let index = node;
    while (index != null) {
        if (existing.has(index)) {
            prev.next = null;
            return true;
        } else {
            existing.add(index);
            prev = index;
            index = index.next;
        }
    }
    return false;
}

removeLoop(one);