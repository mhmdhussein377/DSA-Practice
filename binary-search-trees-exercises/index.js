function Node(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

function BinarySearchTree(){
    this.root = null;
}

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