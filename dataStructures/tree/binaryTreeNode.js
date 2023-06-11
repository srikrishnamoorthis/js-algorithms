
export default class BinaryTreeNode {
    constructor(value = null) {
        this.left = null;
        this.right = null;
        this.value = value;
        this.parent = null;
    }

    setLeft(node) {
        if (this.left)
            this.left.parent = null;

        this.left = node;
        node.parent = this;
        return this;
    }

    setRight(node) {
        if (this.right)
            this.right.parent = null;
        this.right = node;
        node.parent = this;
        return this;
    }

    removeChild(node) {
        if (!node)
            return;

        if (this.left && this.left === node) {
            this.left = null;
            return
        }
        else if (this.right && this.right === node) {
            this.right = null;
            return;
        }
    }

    replaceChild(nodeToReplace, newNode) {
        if (!nodeToReplace || !newNode)
            return;

        if (this.left && this.left === nodeToReplace) {
            this.left = newNode;
            return;
        }
        else if (this.right && this.right === nodeToReplace) {
            this.right = newNode;
            return;
        }
    }

    static copyNode(source, target) {
        target.value = source.value;
        target.left = source.left;
        target.right = source.right;
    }

    traverseInOrder() {
        let traversed = [];
        if (this.left)
            traversed = traversed.concat(this.left.traverseInOrder());

        traversed.push(this.value);

        if (this.right)
            traversed = traversed.concat(this.right.traverseInOrder());

        return traversed;

    }

    traverPostOrder() {
        let traversed = [];
        if (this.left)
            traversed = [...traversed, ...(this.left.traverse() || [])];

        if (this.right)
            traversed = [...traversed, ...(this.right.traverse() || [])];
        traversed.push(this.value);
        return traversed;
    }

    traverPreOrder() {
        let traversed = [];
        traversed.push(this.value);
        if (this.left)
            traversed = [...traversed, ...(this.left.traverse() || [])];

        if (this.right)
            traversed = [...traversed, ...(this.right.traverse() || [])];

        return traversed;
    }

    depth() {
        let leftHeight = 0;
        if (this.left)
            leftHeight = this.left.depth();

        let rightHeight = 0;
        if (this.right)
            rightHeight = this.right.depth();

        return Math.max(leftHeight, rightHeight) + 1;
    }
}
