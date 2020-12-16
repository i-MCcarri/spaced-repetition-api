const e = require("express");

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        if (this.head === null) {
            this.head = new _Node(item, this.head)
        }
        else {
            let tempNode = this.head;
            this.head = new _Node(item, tempNode)
        }
    }

    insertAt(item, pos) {
        let node = this.find(pos);
        if (node.next == null) {
            const newNode = new _Node(item, null)
            node.next = newNode;
            const obj = {
                newHead: { ...this.head.value },
                beforeMoved: { ...node.value },
                moved: item,
                afterMoved: null,
            }
            return obj;
        }
        else {
            let hold = node.next
            const newNode = new _Node(item, hold)
            node.next = newNode;
            newNode.next = hold;
            const obj = {
                newHead: { ...this.head.value },
                beforeMoved: { ...node.value },
                moved: item,
                afterMoved: { ...hold.value }
            }
            return obj;
        }
    }

    find(pos) {
        let node = this.head;
        for (let i = 1; i < pos; i++) {
            if (!node.next) {
                return node;
            }
            else {
                node = node.next
            }
        }
        return node;
    }

    removeHead() {
        if (this.head) {
            let hold = this.head;
            this.head = this.head.next
            return hold;
        }
        else {
            return null;
        }
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
}

module.exports = LinkedList;