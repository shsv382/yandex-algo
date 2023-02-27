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
        counter = 0;
        console.log(main(cmd).toString().trim());
    }
});

function main(cmd) {
    cmd = cmd.trim().split(' ').map(item=>parseInt(item)).sort((a,b)=>a-b);
    if (cmd.length <= 1) return 0;
    let dp = [0];
    dp.push(cmd[1] - cmd[0]);
    if (cmd.length > 2) {
        dp[2] = cmd[2] - cmd[0];
        for (let i=3; i<cmd.length; i++) {
            dp.push(Math.min(dp[i-2], dp[i-1]) + cmd[i] - cmd[i-1]);
        }
    }
    return dp[dp.length-1];
}