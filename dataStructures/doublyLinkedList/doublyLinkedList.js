import _ from 'lodash';
import DoublyLinkedListNode from './doublyLinkedListNode';

export default class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    length() {
        let currNode = this.head;
        let count = 0;
        while (currNode) {
            currNode = currNode.next;
            count++;
        }
    }

    prepend(value) {
        const newNode = new DoublyLinkedListNode(value, this.head);

        if (this.head)
            this.head.prev = newNode;
        this.head = newNode;

        if (!this.tail)
            this.tail = newNode;
        return this;
    }

    append(value) {
        const newNode = new DoublyLinkedList(value, null, this.tail);

        if (!this.head) {
            this.head = newNode;
        }
        else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        return this;
    }

    insert(value, index) {
        const length = this.length();
        if (index > length && index !== (this.length + 1)) {
            throw `Given ${index} is more than list length ${this.length}`
        }
        let currNode = this.head,
            count = 1;
        while (currNode.next) {
            if ((count + 1) === index)
                break;
            count++;
            currNode = currNode.next;
        }
        const newNode = new DoublyLinkedListNode(value, currNode, currNode.next);
        if (!currNode.next) {
            this.tail = newNode
        }
        else {
            currNode.next.prev = newNode;
        }
        current.next = newNode;
    }

    find(value) {
        if (!this.head || _.isEmpty(value))
            return;
    
        let currNode = this.head;
        while (currNode) {
            if (currNode.value === value)
                return currNode;
            currNode = currNode.next;
        }
        return;
    }

    delete(value) {
        if (!this.head)
            return;

        let deletedNode;
        while (this.head && this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
            this.head.prev = null;
        }

        let currNode = this.head;
        while (currNode) {
            if (currNode.value === value) {
                deletedNode = currNode;
                currNode.prev.next = currNode.next;
                if (!currNode.next) {
                    currNode.next.prev = currNode.prev;
                }
                currNode = currNode.next;
            }
        }
        return deletedNode;
    }

    deleteHead() {
        if (!this.head)
            return;

        const deletedHead = this.head;
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        return deletedHead;
    }

    deleteTail() {
        if (!this.head)
            return;
        
        const deletedTail = this.tail;
        if (this.tail === this.head) {
            this.tail = null
            this.head = null;
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        return deletedTail;
    }

    reverse() {
        let currNode = this.head,
            prevNode = null,
            nextNode = null;

        while (currNode) {
            nextNode = currNode.next;
            prevNode = currNode.prev;

            currNode.previous = nextNode;
            currNode.nextNode = prevNode;

            prevNode = currNode;
            currNode = nextNode;
        }
        this.tail = this.head;
        this.head = prevNode;
    }
}