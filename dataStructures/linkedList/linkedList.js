import LinkedListNode from './linkedListNode';

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    length() {
        let currNode = this.head;
        let count = 0;
        while (currNode) {
            count++;
            currNode = currNode.next;
        }
        return count;
    }

    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;
        // If there is no tail yet, make new node as tail
        if (!this.tail)
            this.tail = newNode;
        return this;
    }

    append(value) {
        const newNode = new LinkedList(value);
        // If there is no head yet, make new node as head and tail
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        // Attach new node to end of the list
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    insert(value, index) {
        const length = this.length();
        // If index is more than length and is not last element, throw error
        if (index > length && index !== (length + 1))
            throw `Failed: There are only ${count} elements in the list. But given index to insert the element is ${index}`;

        // If index is 0, its equivalent to prepend
        if (index === 0) {
            this.prepend(value);
        }
        // index will be last element, its equivalent to append
        else if (length + 1 === index) {
            this.append(value)
        }
        else {
            let currNode = this.head;
            let count = 1;
            while (count < index && !currNode.next) {
                currNode = currNode.next;
                count++;
            }
            const newNode = new LinkedListNode(value, currNode.next);
            currNode.next = newNode;
        }
        return this;
    }

    delete(value) {
        if (!this.head)
            return null;

        let deletedNode;
        while (this.head && this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currNode = this.head;
        if (currNode) {
            while (currNode.next) {
                if (currNode.next.value === value) {
                    deletedNode = currNode.next;
                    currNode.next = currNode.next.next;
                }
                else {
                    currNode = currNode.next;
                }
            }
        }

        if (this.tail.value === value)
            this.tail = currNode;
        return deletedNode;
    }

    find(value) {
        if (!this.head)
            return null;
    
        let currNode = this.head;
        while(currNode) {
            if (currNode.value === value) {
                return currNode;
            }
            currNode = currNode.next;
        }
        return null;
    }

    deleteHead() {
        if (!this.head)
            return null;

        const deletedHead = this.head;
        if (this.head.next) {
            this.head = this.head.next;
        }
        else {
            this.head = null;
            this.tail = null;
        }
        return deletedHead;
    }

    deleteTail() {
        if (!this.head)
            return null;
            
        const deletedTail = this.tail;
        
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }

        let currNode = this.head;
        while (currNode.next) {
            if (!currNode.next.next) {
                currNode.next = null;
            }
            currNode = currNode.next;
        }
        this.tail = currNode;
        return deletedTail;
    }

    reverse() {
        if (!this.head)
            return null;

        let currNode = this.head,
            prevNode;
        while(currNode) {
            const nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
        }
        // Reset head and Tail
        this.tail = this.head;
        this.head = prevNode;

        return this;
    }
}