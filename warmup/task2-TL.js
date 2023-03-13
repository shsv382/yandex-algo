const fs = require('fs');

let [changes, string] = fs.readFileSync("input.txt", "utf8").toString().trim().split('\n')

function main(changes, string) {
    let max = 0;
    if (changes >= string.length) return changes;

    for (let i=0; i<string.length; i++) {
        let currentMax = 0;
        let changesLost = changes;
        for (let j=i; j<string.length; j++) {
            if(string[i] !== string[j]) {
                changesLost--;
                if (changesLost < 0) break;
            }
            currentMax++;
            if (currentMax > max) max = currentMax;
        }
        if (max >= string.length - i) {
        	break
        }
    }
    return max;
}

console.log(main(changes, string));