const fs = require('fs');

let os = [];
fs.readFileSync("input.txt", "utf8").toString().trim().split('\n').forEach((item, i, arr) => {
    if (i > 1) {
        let [a,b] = item.split(" ").map(Number);
        let i = 0;
        while(i < os.length) {
            if (a <= os[i][1] && os[i][0] <= b) {
                os.splice(i, 1);
            } else {
                i++
            }
        };
        os.push([a,b])
    }
})

console.log(os.length);