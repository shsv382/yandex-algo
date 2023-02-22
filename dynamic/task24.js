const fs = require('fs');

let result = [
    [Infinity, Infinity, Infinity],
    [Infinity, Infinity, Infinity],
    [Infinity, Infinity, Infinity]
];

fs.readFileSync("input.txt", "utf8").toString().split('\n').forEach((item,i) => {
    if (i > 0) {
        result.push(item.split(' ').map(i => parseInt(i)));
    }
});

const dp = new Array(result.length);
dp[0] = 0;
dp[1] = 0;
dp[2] = 0;

for (let i=3; i<result.length; i++) {
    dp[i] = Math.min(dp[i-1]+result[i][0], dp[i-2]+result[i-1][1], dp[i-3]+result[i-2][2]);
}

fs.appendFileSync("output.txt", dp[dp.length - 1].toString().trim());