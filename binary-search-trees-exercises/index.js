function Node(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

function BinarySearchTree(){
    this.root = null;
}

// DFSInOrder
// This function should search through each node in the binary search tree using in-order depth first search and return an array containing each node's value.

// DFSPreOrder
BinarySearchTree.prototype.DFSPreOrder = function () {
    const array = []

    function preOrderDFS(node) {
        if(node === null) return

        array.push(node)
        preOrderDFS(node.left)
        preOrderDFS(node.right)
    }

    preOrderDFS(this.root)
    return array
}

// First we create a new array to store the nodes, then we create a function to implement the pre order dfs on every node so it has to work recursively (if there is no node we do nothing, otherwise we push the value of the node then execute the pre order function on the left node and then on the right node of the node I am on)



// ############################

// DFSInOrder
// This function should search through each node in the binary search tree using in-order depth first search and return an array containing each node's value.

BinarySearchTree.prototype.DFSInOrder = function () {
    const array = []

    function InOrderDFS(node) {
        if(node === null) return

        InOrderDFS(node.left)
        array.push(node)
        InOrderDFS(node.right)
    }

    InOrderDFS(this.root)
    return array
}

// First we create a new array to store the nodes, then we create a function to implement the in order dfs on every node so it has to work recursively (if there is no node we do nothing, otherwise we execute the in order function on the left node and then we push the value of the node we are on and finally we execute the in order function on the right node of the node we are on)


// #######################

// DFSPostOrder
// This function should search through each node in the binary search tree using post-order depth first search and return an array containing each node's value.

BinarySearchTree.prototype.DFSPostOrder = function () {
    const array = []

    function PostOrderDFS(node) {
        if(node === null) return

        PostOrderDFS(node.left)
        PostOrderDFS(node.right)
        array.push(node)
    }

    PostOrderDFS(this.root)
    return array
}

// First we create a new array to store the nodes, then we create a function to implement the post order dfs on every node so it has to work recursively (if there is no node we do nothing, otherwise we execute the post order function on the left node and then on the right node of the node we are on and finally we push the value of the node we are on )