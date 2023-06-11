import BinaryTreeNode from "../binaryTreeNode.js";

export default class BinarySearchTreeNode extends BinaryTreeNode {
    constructor(value = null) {
        super(value);
    }

    insert(value) {
        if (this.value === null) {
            this.value = value;
            return this;
        }

        if (value < this.value) {
            if (this.left)
                return this.left.insert(value);

            const newNode = new BinarySearchTreeNode(value);
            return this.setLeft(newNode);
        }
        else {
            if (this.right)
                return this.right.insert(value);

            const newNode = new BinarySearchTreeNode(value);
            return this.setRight(newNode);
        }
    }

    remove(value) {
        const nodeToRemove = this.find(value);

        if (!nodeToRemove) {
            console.log('Given value does not exist');
            return;
        }
       
        const { parent } = nodeToRemove;
        if (!nodeToRemove.left && !nodeToRemove.right) {
            if (parent) {
                parent.removeChild(nodeToRemove);
                nodeToRemove.parent = null;
            }
            else {
                nodeToRemove.value = null;
            }
        }
        else if (nodeToRemove.left && nodeToRemove.right) {
            const nextBiggerNode = nodeToRemove.right.findMin();
            this.remove(nextBiggerNode.value);
            nodeToRemove.value = nextBiggerNode.value;
        }
        else {
            const child = nodeToRemove.left || nodeToRemove.right;
            console.log(child.value);
            if (parent) {
                parent.replaceChild(nodeToRemove, child);
            }
            else {
                BinaryTreeNode.copyNode(child, nodeToRemove);
            }
            nodeToRemove.parent = null;
        }
    }

    find(value) {
        if (this.value === value) {
            return this;
        }
        if (this.left && value < this.value)
            return this.left.find(value);
        else if (this.right && value > this.value)
            return this.right.find(value);
        return;
    }

    findMin() {
        if (!this.left)
            return this;
        return this.left.findMin();
    }
}