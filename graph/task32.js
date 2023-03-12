const fs = require('fs');
let graph = [];
let graphLength = 0;
let edges = 0;

fs.readFileSync("input.txt", "utf8").toString().trim().split('\n').map((item, i) => {
    if (i === 0) {
        item = item.split(" ").map(Number);
        graphLength = item[0];
        edges = item[1];
        if (graphLength == 0) {
            fs.appendFileSync("output.txt", `0
            0`);
            process.exit();
        } else if (edges == 0) {
            console.log(graphLength.toString());
            for (let i=1; i<=graphLength; i++) {
                console.log(`
1
${i}`);
            }
            process.exit();
        }
    }
    if (i > 0) {
        item = item.split(" ").map(Number)
        if (!graph[item[0]]) {
            graph[item[0]] = [item[1]]
        } else {
            graph[item[0]].push(item[1]);
        }
        if (!graph[item[1]]) {
            graph[item[1]] = [item[0]]
        } else {
            graph[item[1]].push(item[0]);
        }
    }
});

function dfs(graph, visited, localVisited, now) {
    let stack = [now];
    visited[now] = now;
    localVisited.push(now);
    while(stack.length) {
        now = stack.pop()
        if(graph[now]) {
            graph[now].forEach(neig => {
                if (!visited[neig]) {
                    visited[neig] = neig;
                    localVisited.push(neig);
                    stack.push(neig);
                }
            });
        }
    }
    return localVisited;
}

let visited = [];
let localVisited = [];
let output = [];
// let componentsCount = 0;

for (let j=1; j<=graphLength; j++) {
    if (!visited[j]) {
        localVisited = [];
        output.push(dfs(graph, visited, localVisited, j));
    }
}

console.log(output.length);
output.forEach(item => {
    console.log(`
${item.length}    
${item.join(' ').trim()}`)
})
