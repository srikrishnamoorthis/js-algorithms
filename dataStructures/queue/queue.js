import LinkedList from "../linkedList/linkedList";

export default class Queue {
    constructor() {
        this.linkedList = new LinkedList();
    }

    isEmpty() {
        return this.linkedList.length() === 0;
    }

    enqueue(value) {
        this.linkedList.append(value);
    }

    dequeue() {
        const removedHead = this.linkedList.deleteHead();
        return removedHead ? removedHead.value : null
    }

    peek() {
        if (this.isEmpty())
            return null;
        return this.linkedList.head.value;
    }
}