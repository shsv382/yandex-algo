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
        if (this.length === 0) return false;
        const returnedValue = this.head.value;
        this.head = this.head.next;
        this.length--;
        return returnedValue;
    }
    
    back() {
        return this.head ? this.head.value : false;
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

rl.on('line', function(cmd) {
    if (cmd.length % 2) {
        console.log('no');
        return 'no';
    } 
    const match = {
        '}': '{',
        ']': '[',
        ')': '('
    }
    let stack = new Stack();

    for (let i = 0; i < cmd.length; i++) {
        if (
            cmd[i] === '{' ||
            cmd[i] === '[' ||
            cmd[i] === '('
        ) {
            stack.push(cmd[i]);
        } else {
            if (stack.size() < 0 || stack.back() !== match[cmd[i]]) {
                console.log('no');
                return 'no';
            } else {
                stack.pop();
            }
        }
    }

    let answer = (stack.size() !== 0) ? 'no' : 'yes';
    console.log(answer);
    return answer;
});

