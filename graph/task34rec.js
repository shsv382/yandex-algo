const fs = require('fs');
let graph = [];
let graphLength = 0;

// построение графа
fs.readFileSync("input.txt", "utf8").toString().trim().split('\n').map((item, i) => {
    if (i === 0) {
        item = item.split(" ").map(j => j.trim());
        graphLength = item[0];
        if (item[0] == 0) {
            fs.appendFileSync("output.txt", `-1`);
            process.exit();
        }
    }
    if (i > 0) {
        item = item.split(" ").map(j => j.trim())
        if (!graph[item[0]]) {
            graph[item[0]] = []
        }
        graph[item[0]].push(item[1]);
    }
});

// DFS
function dfs(graph, visited, sort, now) {
    if(visited[now] == 1) {
        fs.appendFileSync("output.txt", `-1`);
        process.exit();
    }
    if(visited[now] == 2) {
        return
    }
    visited[now] = 1;
    if(graph[now]) {
        graph[now].forEach(neig => {
            dfs(graph, visited, sort, neig);
        });
    }
    visited[now] = 2;
    sort.push(now);
}

let visited = [];
let sort = [];

for (let j=1; j<=graphLength; j++) {
    if (!visited[j]) {
        dfs(graph, visited, sort, j);
    }
}

sort = sort.reverse();
fs.appendFileSync("output.txt", sort.join(' '));