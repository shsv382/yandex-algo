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

// let args = [];

// rl.on('line', function(cmd) {
//     args.push(cmd);
//     if (args.length > 1) {
//         console.log(main(args[1]));
//         args = [];
//     }
// });

function main(cmd) {
    let input = cmd.split(' ').map(elem => parseInt(elem));
    let stop = new Stack();
    let way2 = new Stack();

    for (let i=0; i<input.length; i++) {
        // если текущий элемент меньше последнего в тупике или тупик пуст
        if (!stop.size() || (input[i] <= stop.back())) {
            // направить в тупик
            stop.push(input[i]);
        // иначе
        } else {
            // если последний элемент в тупике меньше последнего на пути 2
            if (stop.back() < way2.back()) {
                // вернуть 'NO'
                return 'NO';
            }
            // иначе 
            else {
                // пока последний элемент в тупике больше или равен последнему на пути 2
                // и меньше текущего элемента
                while (stop.size() && 
                        (!way2.size() || 
                            (way2.size() && 
                                stop.back() >= way2.back() &&
                                stop.back() < input[i]
                            ))) {
                    // направить из тупика на путь 2
                    way2.push(stop.pop());
                }
                // если после очистки тупика текущий элемент меньше
                if (!stop.size() || (input[i] <= stop.back())) {
                    // направить в тупик
                    stop.push(input[i]);
                }
            }
        }
    }
    // пока тупик не пуст
    while (stop.size() > 0) {
        // если последний элемент в тупике больше или равен последнего на пути 2
        if (stop.size() && (!way2.size() || (way2.size() > 0 && stop.back() >= way2.back()))) {
            // направить из тупика на путь 2
            way2.push(stop.pop());
        // иначе
        } else {
            // вернуть 'NO'
            return 'NO';
        }
    }
    // вернуть 'YES'
    return 'YES' 
}

function main2(cmd) {
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
}

console.log(main2("1 3 4 2"));