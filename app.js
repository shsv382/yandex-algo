var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


let counter = 0;

rl.on('line', function (cmd) {
    if (counter === 0) {
        counter++;
    } else {
        cmd = cmd.split(' ');
        for (let i = Math.floor(cmd.length / 2 - 1); i >= 0; i--) {
            let pos = i;
            while(pos * 2 + 2 < cmd.length) {
                let min_son_idx = pos * 2 + 1;
                if (cmd[pos * 2 + 2] < cmd[min_son_idx]) {
                    min_son_idx = pos * 2 + 2;
                }
                if (cmd[pos] > cmd[min_son_idx]) {
                    [cmd[pos], cmd[min_son_idx]] = [cmd[min_son_idx], cmd[pos]];
                    pos = min_son_idx;
                } else {
                    break;
                }
            }
        }
    }
    console.log(cmd);
});

