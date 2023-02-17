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
    console.log(main(cmd));
});

function main(cmd) {
    if(!cmd.length) return 0;
    let digits = new Stack();
    // let ops = new Stack();
    for (let i=0; i<cmd.length; i++) {
        // если приходит пробел - игнорируем
        if (cmd[i] == ' ') {
            continue;
        }
        // если приходит цифра - записываем в digits
        else if (parseInt(cmd[i]) || parseInt(cmd[i]) === 0) {
            digits.push(parseInt(cmd[i]))
        }
        // если приходит операнд - выполняем 
        // на предпоследнем и последнем элементах
        // результат записываем в digits
        else {
            let b = digits.pop();
            let a = digits.pop();
            let res;
            switch(cmd[i]) {
                case '+':
                    res = a + b;
                    break;
                case '-':
                    res = a - b;
                    break;
                case '*':
                    res = a * b;
                    break;
                case '/':
                    res = a / b;
                    break;
                default:
                    break;
            }
            digits.push(res)
        }
    }
    return digits.pop();
}