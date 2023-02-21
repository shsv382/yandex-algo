class Queue {
    constructor() {
        this.array = new Array(10);
        this.head = 0;
        this.tail = 1;
        this.length = 0;
    }
    push(n) {
        this.array[this.tail] = parseInt(n);
        this.tail = (this.tail + 1) % 10;
        this.length++;
        return 'ok';
    }
    pop() {
        if (this.length < 1) return 'error';
        this.head = (this.head + 1) % 10
        let answer = this.array[this.head];
        this.array[this.head] = null;
        this.length--;
        return answer;
    }
    front() {
        if (this.length < 1) return 'error';
        return this.array[(this.head + 1)%10];
    }
    size() {
        return this.length;
    }
    clear() {
        this.array = new Array(10);
        this.head = 0;
        this.tail = 1;
        this.length = 0;
        return 'ok';
    }
}

var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let args = [];

rl.on('line', function (cmd) {
    args.push(cmd);
    if (args.length > 1) {
        console.log(main(args));
        args = [];
    }
});

function main(args) {
    let player1 = new Queue();
    let player2 = new Queue();
    
    args = args.map(item => item.split(' '));
    for(let i=0; i<5; i++) {
        player1.push(args[0][i]);
        player2.push(args[1][i]);
    }
    
    let count = 0;
    let a, b;
    while (player1.size() > 0 && player2.size() > 0 && count < 10**6) {
        [a, b] = [player1.pop(), player2.pop()];
        if((a > b && !(a === 9 && b === 0)) || (a === 0 && b === 9)) {
            player1.push(a);
            player1.push(b);
        } else {
            player2.push(a);
            player2.push(b);
        }
        count++;
    }
    if (!player1.size()) {
        return `second ${count}`
    } else if (!player2.size()) {
        return `first ${count}`
    } else {
        return 'botva'
    }
}
