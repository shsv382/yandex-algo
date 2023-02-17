class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // Добавление узла в начало списка
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
}

class Stack extends LinkedList {
    constructor() {
        super();
    }

    push(value) {
        this.prepend(value);
        return "ok";
    }
    
    pop() {
        if (this.length === 0) return 'error';
        const returnedValue = this.head.value;
        this.head = this.head.next;
        this.length--;
        return returnedValue;
    }
    
    back() {
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

let stack = new Stack();

rl.on('line', function (cmd) {
    let arg = cmd.split(' ');
    switch(arg[0]) {
        case 'push':
            console.log(stack.push(arg[1]));
            break;
        case 'pop':
            console.log(stack.pop());
            break;
        case 'back':
            console.log(stack.back());
            break;
        case 'size':
            console.log(stack.size());
            break;
        case 'clear':
            console.log(stack.clear());
            break;
        case 'exit':
            console.log("bye");
            process.exit();
        default:
            break;
    }
});
