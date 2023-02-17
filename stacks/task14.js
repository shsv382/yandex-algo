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

let args = [];

rl.on('line', function(cmd) {
    args.push(cmd);
    if (args.length > 1) {
        console.log(main(args[1]));
        args = [];
    }
});

function main(cmd) {
    let input = cmd.split(' ').map(elem => parseInt(elem));
    let stop = new Stack();
    let way2 = new Stack();

    let i=0;
    while (i < input.length) {
        if (stop.size() === 0) {
            stop.push(input[i]);
            i++;
        } else {
            if (stop.back() > input[i]) {
                stop.push(input[i]);
                i++;
            } else {
                if (way2.back() > stop.back()) {
                    return 'NO';
                } else {
                    way2.push(stop.pop());
                }
            }
        }
    }
    while (stop.size() > 0) {
        if (way2.back() > stop.back()) {
            return 'NO';
        } else {
            way2.push(stop.pop());
        }
    }
    return 'YES';
}