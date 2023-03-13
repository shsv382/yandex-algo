const fs = require('fs');

let n, m;
let matrix = [];
let prefix = [];

fs.readFileSync("input.txt", "utf8").toString().trim().split("\n").map((i,j,a) => {
    if (j == 0) {
        [n,m] = i.split(" ").map(Number);
        matrix[j] = new Array(m+1).fill(0);
        prefix[j] = new Array(m+1).fill(0);
    } else if (j <= n) {
        matrix[j] = [0, ...i.split(" ").map(Number)];
        prefix[j] = [0]
        for(let k=1; k<=m; k++) {
            if (j==1 && k==1) {
                prefix[j][k] = matrix[j][k]
            } else {
                prefix[j][k] = matrix[j][k] + prefix[j-1][k] + prefix[j][k-1] - prefix[j-1][k-1]
            }
        }
    } else {
        [x1, y1, x2, y2] = i.split(" ").map(Number);
        let ans = prefix[x2][y2] - prefix[x1-1][y2] - prefix[x2][y1-1] + prefix[x1-1][y1-1];
        fs.appendFileSync("output.txt", `${ans}`);
        fs.appendFileSync("output.txt", "\n")
    }
});
