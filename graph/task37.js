const fs = require("fs");

class Queue {
    constructor(size) {
        this.array = new Array(size);
        this.head = 0;
        this.tail = 1;
        this.length = 0;
    }
    push(n) {
        this.array[this.tail] = parseInt(n);
        this.tail = (this.tail + 1) % this.array.length;
        this.length++;
        return 'ok';
    }
    pop() {
        if (this.length < 1) return 'error';
        this.head = (this.head + 1) % this.array.length
        let answer = this.array[this.head];
        this.array[this.head] = null;
        this.length--;
        return answer;
    }
    front() {
        if (this.length < 1) return 'error';
        return this.array[(this.head + 1)%this.array.length];
    }
    size() {
        return this.length;
    }
    clear() {
        this.array = new Array(this.array.length);
        this.head = 0;
        this.tail = 1;
        this.length = 0;
        return 'ok';
    }
}

let graphLength = 0;
let matrix = fs.readFileSync("input.txt", "utf8").toString().trim().split("\n").map((i,j,a) => {
    if (j == 0) {
        graphLength = parseInt(i);
    } else if (j < a.length - 1) i = ("0 " + i).trim();
    return i.split(" ");
});

let [src, dest] = matrix.pop().map(i => parseInt(i));
if (src == dest) {
    fs.appendFileSync("output.txt", "0");
    process.exit();
}

let queue = new Queue(graphLength);
let length = 0;
let marks = new Array(graphLength + 1);
let prev = new Array(graphLength + 1);
marks[src] = -1;
prev[src] = -1;
let current;
queue.push(src);
while (queue.size() > 0) {
    current = queue.pop();
    for(let i=1; i<=graphLength; i++) {
        if (dest == current) {
            fs.appendFileSync("output.txt", marks[current].toString().trim());
            fs.appendFileSync("output.txt", "\n")
            let way = [current];
            while(prev[current] !== -1) {
                way.push(prev[current]);
                current = prev[current];
            }
            fs.appendFileSync("output.txt", way.reverse().join(" ").trim());
            process.exit();
        }
        if (matrix[current][i].trim() == 1 && !marks[i]) {
            marks[i] = (marks[current] === -1) ? 1 : marks[current] + 1;
            prev[i] = current;
            queue.push(i);
        }
    }
}
fs.appendFileSync("output.txt", "-1");
process.exit();
