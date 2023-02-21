class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Добавление узла в конец списка
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

class Queue extends LinkedList {
    constructor() {
        super();
    }

    push(value) {
        this.append(value);
        return "ok";
    }
    
    pop() {
        if (this.length === 0) return 'error';
        const returnedValue = this.head.value;
        this.head = this.head.next;
        this.length--;
        return returnedValue;
    }
    
    front() {
        return this.head ? this.head.value : 'error';
    }

    size() {
        return this.length;
    }

    clear() {
        this.head = null;
        this.length = 0;
        return "ok";
    }
}

var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let queue = new Queue();

rl.on('line', function (cmd) {
    let arg = cmd.split(' ');
    switch(arg[0]) {
        case 'push':
            console.log(queue.push(arg[1]));
            break;
        case 'pop':
            console.log(queue.pop());
            break;
        case 'front':
            console.log(queue.front());
            break;
        case 'size':
            console.log(queue.size());
            break;
        case 'clear':
            console.log(queue.clear());
            break;
        case 'exit':
            console.log("bye");
            process.exit();
        default:
            break;
    }
});
