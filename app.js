class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    // Добавление узла в начало списка
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    // Вывод списка в консоль - служебный метод для визуализации
    _print() {
        console.log(`HEAD: ${this.head.value}`);
        let currentNode = this.head;
        while (currentNode.next) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(currentNode.value);
        console.log(`TAIL: ${this.tail.value}`);
    }
}

class StackByLinkedList extends LinkedList {
    constructor(value) {
        super(value);
    }

    peek() {
        return { ...this.head, next: null };
    }

    push(value) {
        this.prepend(value);
        return { ...this.head, next: null };
    }

    pop() {
        if (this.length === 0) return false;
        const returnedValue = {...this.head, next: null}
        this.head = this.head.next;
        this.length--;
        return returnedValue;
    }
}

