import BinarySearchTreeNode from "./binarySearchTreeNode.js";

export default class BinarySearchTree {
    constructor() {
        this.root = new BinarySearchTreeNode(null);
    }

    insert(value) {
        this.root.insert(value);
    }

    remove(value) {
        this.root.remove(value);
        return this.root;
    }

    contains(value) {
        !!this.root.find(value);
    }

    toString() {
        return this.root.traverseInOrder().toString();
    }

    depth() {
        return this.root.depth();
    }
}