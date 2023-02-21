function main(cmd) {
    cmd = cmd.map(time => {
        time = time.split(":");
        time = parseInt(time[0]) * 3600 + parseInt(time[1]) * 60 + parseInt(time[2]);
        return time;
    });
    let ans = (cmd[1] + Math.round((cmd[2] - cmd[0]) / 2)) % (24 * 3600);

    let hours = Math.floor(ans / 3600);
    let minutes = Math.floor((ans % 3600) / 60);
    let seconds = Math.floor(ans % 60);

    function format(num) {
        return Math.floor(num / 10) > 0 ? num : `0${num}`
    }
    return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

console.log(main(['15:01:00', '18:09:45', '15:01:40']))