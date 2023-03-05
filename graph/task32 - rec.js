const fs = require('fs');
let graph = [];
let graphLength = 0;

fs.readFileSync("input.txt", "utf8").toString().trim().split('\n').map((item, i) => {
    if (i === 0) {
        item = item.split(" ").map(j => j.trim());
        graphLength = item[0];
        if (item[0] == 0) {
            fs.appendFileSync("output.txt", `0
            0`);
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

function dfs(graph, visited, localVisited, now) {
    visited[now] = now;
    localVisited.push(now);
    if(graph[now]) {
        graph[now].forEach(neig => {
            if (!visited[neig]) {
                dfs(graph, visited, localVisited, neig);
            }
        });
    }
}

let visited = [];
let localVisited = [];
let output = [];
// let componentsCount = 0;

for (let j=1; j<=graphLength; j++) {
    if (!visited[j]) {
        localVisited = [];
        dfs(graph, visited, localVisited, j);
        output.push(localVisited);
    }
}

fs.appendFileSync("output.txt", (output.length).toString());
fs.appendFileSync("output.txt", '\r\n');

output.forEach(item => {
    fs.appendFileSync("output.txt", (item.length).toString());
    fs.appendFileSync("output.txt", '\r\n');
    fs.appendFileSync("output.txt", item.join(' ').trim());
    fs.appendFileSync("output.txt", '\r\n');
})

// let result = visited.reduce(function(accumulator, item) {
//     if (item) accumulator.push(item);
//     return accumulator;
// }, []);

// if (result.length) {
//     fs.appendFileSync("output.txt", (result.length).toString());
//     fs.appendFileSync("output.txt", '\r\n');
//     fs.appendFileSync("output.txt", result.join(' ').trim());
// } else {
//     fs.appendFileSync("output.txt", '0');
//     fs.appendFileSync("output.txt", '\r\n');
//     fs.appendFileSync("output.txt", '0');
// }