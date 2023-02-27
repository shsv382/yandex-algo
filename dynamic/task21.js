var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on('line', function (cmd) {
    cmd = parseInt(cmd);
    
    console.log(main(cmd));
});

function  main(cmd) {
    let dp = [1, 2, 4];
    if (cmd <= 2) {
        return dp[cmd]
    }
    for (let i=3; i<=cmd; i++) {
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
    }
    return dp[cmd];
}