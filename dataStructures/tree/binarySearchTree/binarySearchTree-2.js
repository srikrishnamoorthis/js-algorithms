class BinarySearchTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    insert(value) {
        if (!this.root) {
            this.root = new BinarySearchTreeNode(value);
            return this;
        }
        this.#insertNode(this.root, value);
        return this;
    }

    #insertNode(node, value) {
        if (!node) {
            return new BinarySearchTreeNode(value);
        }
        if (value < node.value) {
            node.left = this.#insertNode(node.left, value);
            return node;
        }
        else
            node.right = this.#insertNode(node.right,value);
            return node;
    }

    find(value) {
        if (!this.root)
            return;
        
       this.#find(this.root, value);
    }

    #find(node, value) {
        if (node === null)
            return null;
        if (node.value === value)
            return node;
        else if (value < node.value)
            return this.#find(node.left, value)
        else 
            return this.#find(node.right, value);
    }

    remove(value) {
        if (!this.root)
            return;

        this.root = this.#removeNode(this.root, value);
    }

    #removeNode(node, value) {
        if (node === null)
            return null;

        if (value < node.value) {
            node.left = this.#removeNode(node.left, value);
            return node;
        }
        else if (node.value > value) {
            node.right = this.#removeNode(node.right, value);
            return node;
        }

        if (!node.left && !node.right) {
            return null;
        }
        else if (node.left && node.right) {
            const nextBiggerNode = this.findMin(node.right);
            node.value = nextBiggerNode.value;
            node.right = this.#removeNode(node.right, nextBiggerNode.value);
            return node;
        }
        else if (node.left) {
            return node.left;
        }
        else
            return node.right;
    }

    findMin(node) {
        if (node.left)
            return this.left;
        return node;
    }

    inorder(node = this.root) {
        if (!node)
            return;
        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.right);
    }

    height(node = this.root) {
        if (!node)
            return 0;
        return Math.max(this.height(node.left), this.height(node.right)) + 1;
    }
}