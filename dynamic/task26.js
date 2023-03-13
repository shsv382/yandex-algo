const fs = require("fs");

let matrix = [];
let n, m;
fs.readFileSync("input.txt", "utf8").toString().trim().split("\n").forEach((item, idx) => {
    if(idx == 0) {
        [n, m] = item.split(' ').map(Number);
    } else if(idx > 0) {
        matrix[idx - 1] = item.split(' ').map(Number);
    }
})

let resultMatrix = new Array(n);
for (let i=0; i<n; i++) {
    resultMatrix[i] = [];
    for (let j=0; j<m; j++) {
        if (i === 0 && j === 0) {
            resultMatrix[i][j] = matrix[i][j]
        } else if (i === 0 && j > 0) {
            resultMatrix[i][j] = resultMatrix[i][j-1] + matrix[i][j];
        } else if (i > 0 && j === 0) {
            resultMatrix[i][j] = resultMatrix[i-1][j] + matrix[i][j];
        } else {
            resultMatrix[i][j] = Math.min(resultMatrix[i][j-1], resultMatrix[i-1][j]) + matrix[i][j];
        }
    }
}

console.log(resultMatrix[n-1][m-1]);