const fs = require('fs');
let graph = [];
let graphLength = 0;

fs.readFileSync("input.txt", "utf8").toString().trim().split('\n').map((item, i, arr) => {
    if (i === 0) {
        item = item.split(" ").map(j => j.trim());
        graphLength = item[0];
        if (item[0] == 0) {
            fs.appendFileSync("output.txt", `NO`);
            process.exit();
        }
    }
    if (i > 0) {
        item = item.split(" ").map(j => j.trim())
        if (!graph[item[0]]) {
            graph[item[0]] = []
        }
        graph[item[0]].push(item[1]);
        if (!graph[item[1]]) {
            graph[item[1]] = []
        }
        graph[item[1]].push(item[0]);
    }
});

function dfs(graph, visited, color, now) {
    if (visited[now] === 3 - color) {
        console.log("NO");
        fs.appendFileSync("output.txt", `NO`);
        process.exit();
    }
    visited[now] = color;
    if(graph[now]) {
        graph[now].forEach(neig => {
            if (visited[neig] === color) {
                console.log("NO");
                fs.appendFileSync("output.txt", `NO`);
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

console.log("YES");
fs.appendFileSync("output.txt", "YES");