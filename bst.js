


function isBST(root) {
    let rootVal = root.data;

    function isLeftLessThanRoot(node, parentNode) {
        //console.log(node);
        if (node === null || parentNode === null) {
            return;
        }
        if (isNaN(node.data) || node.data > parentNode.data ) {
            console.log(node, 1);
            return 0;
        }
        if ( node.left === null) {
            //console.log(node, 1);
           return 1;
        }
        return isLeftLessThanRoot(node.left, node) === 1 
            ? isRightGreaterThanRoot(node.right, node)
            : 0;

    }
    
    function isRightGreaterThanRoot(node, parentNode) {
        //console.log(node);
        if (node === null || parentNode === null) {
            return;
        }
        if (isNaN(node.data) || node.data < parentNode.data) {
            console.log(node, 0);
            return 0;
        }
        if ( node.right === null) {
            //console.log('last right node', node.data);
           return 1;
        }
        return isRightGreaterThanRoot(node.right, node) === 1 
            ? isLeftLessThanRoot(node.left, node)
            : 0;

    }
    
    function checkTree() {
        let lV = isLeftLessThanRoot(root, root);
        if (lV === 1 ) {
            return isRightGreaterThanRoot(root, root)
        } else { 
            return 0;
        }
    }


    function checkValue(node, expression)

    return checkTree();
}