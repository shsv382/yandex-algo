var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on('line', function (cmd) {
    console.log(answer(cmd));
});

function answer(args) {
    let [a, b] = args.split(" ");
    return parseInt(a) + parseInt(b);
}