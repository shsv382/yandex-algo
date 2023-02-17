class Node {
    constructor(value, index) {
        this.value = value;
        this.index = index;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // Добавление узла в начало списка
    prepend(value, index) {
        const newNode = new Node(value, index);
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

    push(value, index) {
        this.prepend(value, index);
        return "ok";
    }
    
    pop() {
        if (this.length === 0) return false;
        const returnedValue = {...this.head, next: null};
        this.head = this.head.next;
        this.length--;
        return returnedValue;
    }
    
    back() {
        return this.head ? {...this.head, next: null} : false;
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

let args = [];

rl.on('line', function(cmd) {
    args.push(cmd);
    if (args.length > 1) {
        console.log(main(args[1]));
        args = [];
    }
});

function main(cmd) {
    let input = cmd.split(' ').map(elem => parseFloat(elem));
    let answers = [];
    let stack = new Stack();
    let last;
    for (let i=0; i<input.length; i++) {
        while (stack.size() > 0 && input[i] < stack.back().value) {
            last = stack.pop();
            answers[last.index] = i;
        }
        stack.push(input[i], i);
    }
    while (stack.size() > 0) {
        last = stack.pop();
        answers[last.index] = -1;
    }
    return answers.join(" ");
}
