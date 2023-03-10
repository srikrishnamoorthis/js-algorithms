import LinkedList from '../linkedList/linkedList';

export default class Stack {
    constructor() {
        this.linkedList = new LinkedList();
    }

    isEmpty() {
        return this.linkedList.length === 0;
    }

    push(value) {
        this.linkedList.prepend(value);
    }

    pop() {
        const removedHead = this.linkedList.deleteHead();
        return removedHead ? removedHead.value : null;
    }

    peek() {
        if (this.isEmpty())
            return null;
        return this.linkedList.head.value;
    }
}