const fs = require('fs');

let result = [];

fs.readFileSync("input.txt", "utf8").toString().trim().split('\n').forEach((item,i) => {
    if (i > 0) {
        result.push(item.split(' ').map(i => parseInt(i)));
    }
});

let xmin = Infinity;
let xmax = -Infinity;
let ymin = Infinity;
let ymax = -Infinity;

result.forEach(item => {
    if(item[0] <= xmin) xmin = item[0];
    if(item[1] <= ymin) ymin = item[1];
    if(item[0] >= xmax) xmax = item[0];
    if(item[1] >= ymax) ymax = item[1];
})

console.log(`${xmin} ${ymin} ${xmax} ${ymax}`)

// fs.appendFileSync("output.txt", dp[dp.length - 1].toString().trim());