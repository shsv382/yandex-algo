const fs = require('fs');
let graph = [];
let graphLength = 0;

let matrix = fs.readFileSync("input.txt", "utf8").toString().trim().split('\r\n').map(i => {
    i = ("0 " + i).trim();
    return i.split(' ');
});

graphLength = parseInt(matrix[0][1]);
for (let i=1; i <= graphLength; i++) {
    for (let j=i+1; j <= graphLength; j++) {
        if (!graph[i]) graph[i] = [];
        if (!graph[j]) graph[j] = [];
        if (matrix[i][j] == '1') {
            graph[i].push(j);
            graph[j].push(i);
        }
    }
}

function dfs(graph, visited, color, now) {
    if (visited[now] === 3 - color) {
        console.log("YES");
        fs.appendFileSync("output.txt", `YES`);
        process.exit();
    }
    visited[now] = color;
    if(graph[now]) {
        graph[now].forEach(neig => {
            if (visited[neig] === color) {
                console.log("YES");
                fs.appendFileSync("output.txt", `YES`);
                process.exit();
            }
            if (!visited[neig]) {
                dfs(graph, visited, 3 - color, neig);
            }
        });
    }
}

let visited = [];
let color = 1;

for (let j=1; j<=graphLength; j++) {
    if (!visited[j]) {
        dfs(graph, visited, color, j);
    }
}

console.log("NO");
fs.appendFileSync("output.txt", "NO");