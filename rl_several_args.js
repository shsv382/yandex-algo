var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let args = [];

rl.on('line', function (cmd) {
    if (parseInt(cmd) % 2 > 0) {
        console.log("NO");
        return;
    }
    args.push(cmd);
    if (args.length === 2) {
        console.log(answer(...args));
        args = [];
    }
});

function answer(ln, str) {
    if (ln % 2 > 0 || ln === 0) return "NO";
    let mismatches = [];
    for (let i = 0; i < ln / 2; i++) {
        if (str[i] !== str[ln/2 + i]) {
            mismatches.push(i)
            if (mismatches.length > 2) return "NO";
        }
    }
    if (mismatches.length === 0) return "YES";
    let [fst, scd] = mismatches;
    if((str[fst] === str[ln/2 + scd]) && (str[scd] === str[ln/2 + fst])) {
        return "YES"
    } else {
        return "NO"
    }
}