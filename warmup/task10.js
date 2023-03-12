const fs = require('fs');

let dict = {};
let word = fs.readFileSync("input.txt", "utf8").toString().trim();

for (let i=0; i<word.length; i++) {
    let count = (i+1) * (word.length - i);
    if(dict[word[i]]) {
        dict[word[i]] += count;
    } else {
        dict[word[i]] = count;
    }
}

Object.keys(dict).sort().map((key) => {
    fs.appendFileSync("output.txt", `${key}: ${dict[key]}`);
    fs.appendFileSync("output.txt", "\n")
})