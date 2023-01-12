
class Node {
    data;
    left;
    right;
}

let root= new Node();
root.data = 2;
root.left = new Node();
root.left.data = 1;
root.right = new Node();
root.right.data = 3;


// function isBST(root) {
        
  
//     const checkValue = (node, parentNode) => {
//         if (node === null) {
//             return;
//         }
//         console.log(node.data);
//         let retval = true;
//         if (node.left !== null) {
//             retval = checkValue(isLessThanParent(node.left, node)) 
//         }
//         if (retval && node.right !== null) {
//             retval = checkValue(isGreaterThanParent(node.right, node));
//         } 
//         return retval;
//     }
//     let retval = checkValue(root, root);
//     console.log(retval);
// }

// isBST(root);
function isBST(root) {
    //const isGreaterThanChild = (node, childNode) => { console.log(node, childNode); return node.data > childNode.data}

    //const isLessThanChild = (node, parentNode) => { console.log(node, parentNode); return node.data < parentNode.data}

    const isValInRightPlace = (node, parentNode) => { 
        console.log(node, parentNode); 
        return (((node?.data < node?.right?.data)  ?? true) && ((node?.data > node?.left?.data) ?? true))
    }
    function checkValues(node) {
        if (node === null) {
            return;
        }
        let retval = isValInRightPlace(node, node.left)
        if (retval) {
            checkValues(node.left);
            checkValues(node);
        } else {}
        
    }

    //checkValues
  
}




// const getArea = (a, b) => {return a * b}

// var area = getArea(2, 4);

// function addArea(areaA, areaB) {
//     return areaA + areaB
// }

// var result  = addArea(getArea(2, 4), getArea(10, 1));

// console.log(result);

// const isGreaterThanParent = (node, parentNode) => { return node.data > parentNode.data}

// const isLessThanParent = (node, parentNode) => { return node.data < parentNode.data}

// const checkValue = (node, parentNode) => {
//     return 
//         node.left !== null checkValue(isLessThanParent(node.left, parentNode)) 
//             ? false 
//             : isGreaterThanParent(node.right, parentNode);
// }

// // let rootVal = root.data;

// // function isLeftLessThanRoot(node, parentNode) {
// //     //console.log(node);
// //     if (node === null || parentNode === null) {
// //         return;
// //     }
// //     if (isNaN(node.data) || node.data > parentNode.data ) {
// //         console.log(node, 0);
// //         return 0;
// //     }
// //     if ( node.left === null) {
// //         console.log(node, 1);
// //         //console.log('last left node', node);
// //        return 1;
// //     }
// //     return isLeftLessThanRoot(node.left, node) === 1 
// //         ? isRightGreaterThanRoot(node.right, node)
// //         : 0;

// // }

// // function isRightGreaterThanRoot(node, parentNode) {
// //     //console.log(node);
// //     if (node === null || parentNode === null) {
// //         return;
// //     }
// //     if (isNaN(node.data) || node.data < parentNode.data) {
// //         console.log(node, 0);
// //         return 0;
// //     }
// //     if ( node.right === null) {
// //         console.log(node, 1);
// //         //console.log('last right node', node.data);
// //        return 1;
// //     }
// //     return isRightGreaterThanRoot(node.right, node) === 1 
// //         ? isLeftLessThanRoot(node.left, node)
// //         : 0;

// // }

// // function checkTree() {
// //    // check left
   
// // }

// // return checkTree();
// // }