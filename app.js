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
    }
    pop() {
        if (this.length < 1) return 'error';
        this.head = (this.head + 1) % 10;
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
}

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
        console.log(`second ${count}`)
    } else if (!player2.size()) {
        console.log(`first ${count}`)
    } else {
        console.log('botva')
    }
    return
}


console.log(main([ '2 4 6 8 0', '1 3 5 7 9' ]));