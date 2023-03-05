const fs = require('fs');
let graph = [];

fs.readFileSync("input.txt", "utf8").toString().trim().split('\n').map((item, i) => {
    if (i === 0) {
        item = item.split(" ").map(j => j.trim());
        if (item[0] != 0 && item[1] == 0) {
            fs.appendFileSync("output.txt", `1
            1`);
            process.exit();
        } else if (item[0] == 0) {
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

function dfs(graph, visited, now) {
    visited[now] = now;
    if(graph[now]) {
        graph[now].forEach(neig => {
            if (!visited[neig]) {
                dfs(graph, visited, neig);
            }
        });
    }
}

let visited = [];

// let now = 0;
// while (now < graph.length) {
    //     if (graph[now]) {
        //         dfs(graph, visited, now);
        //         break;
        //     }
        //     now++;
        // }
        
dfs(graph, visited, 1);
let result = visited.reduce(function(accumulator, item) {
    if (item) accumulator.push(item);
    return accumulator;
}, []);

if (result.length) {
    fs.appendFileSync("output.txt", (result.length).toString());
    fs.appendFileSync("output.txt", '\r\n');
    fs.appendFileSync("output.txt", result.join(' ').trim());
} else {
    fs.appendFileSync("output.txt", '0');
    fs.appendFileSync("output.txt", '\r\n');
    fs.appendFileSync("output.txt", '0');
}