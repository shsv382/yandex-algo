const fs = require('fs');

let goodness = 0;
fs.readFileSync("input.txt", "utf8").toString().trim().split('\n').forEach((item, i, arr) => {
    if (i>0 && i<arr.length-1) {
        goodness += Math.min(item, arr[i+1]);
    }
})

console.log(goodness);