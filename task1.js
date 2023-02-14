function hystogram(string) {
    let abc = {};
    let layers = [];
    let max = 0;

    class Node {
        constructor(letter) {
            this.value = 1;
            this.letter = letter;
            this.code = letter.charCodeAt(0);
        }
    }

    // Добавление элемента 
    for (let i=0; i<string.length; i++) {
        if(string[i].charCodeAt(0) !== 32 && string[i].charCodeAt(0) !== 10) {
            if(abc[string[i].charCodeAt(0)]) {
                abc[string[i].charCodeAt(0)].value++;
            } else {
                abc[string[i].charCodeAt(0)] = new Node(string[i]);
            }
            if (abc[string[i].charCodeAt(0)].value > max) max = abc[string[i].charCodeAt(0)].value;
        }
    }

    // Сортировка
    abc = Object.values(abc).sort((a,b) => a.code - b.code);

    // Вывод - неоптимальный
    let output = [];
    while(max > 0) {
        let str = [];
        abc.forEach(item => {
            if (item.value >= max) {
                str.push("#")
            } else {
                str.push(" ");
            }
        })
        str = str.join("");
        console.log(str)
        output.push(str);
        max--
    }
    console.log(Object.values(abc).map(node => node.letter).join(""));
    output.push(abc)

    return abc;
}

hystogram(` &
!
a
123 33
 `);
