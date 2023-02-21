var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let args = [];

rl.on('line', function(cmd) {
    args.push(cmd);
    if (args.length > 2) {
        console.log(main(args));
        args = [];
    }
});

function main(cmd) {
    cmd = cmd.map(time => {
        time = time.split(":");
        time = parseInt(time[0]) * 3600 + parseInt(time[1]) * 60 + parseInt(time[2]);
        return time;
    });
    if (cmd[2] < cmd[0]) cmd[2] += 24*3600;
    let ans = (cmd[1] + Math.round((cmd[2] - cmd[0]) / 2)) % (24 * 3600);

    let hours = Math.floor(ans / 3600);
    let minutes = Math.floor((ans % 3600) / 60);
    let seconds = Math.floor(ans % 60);

    return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

function format(num) {
    return Math.floor(num / 10) > 0 ? num : `0${num}`
}