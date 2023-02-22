let cnt, res;
process.stdin.on('data', data => {
    let number = parseInt(data.toString());
    let counts = [0,0,1,1];
    let prevs = [0,1,1,1];

    function calc(num) {
        if(num <= 3) {
            return `${counts[num]}\n${getPrevs(num)}`
        }
        let i = 4;
        while(i <= num) {
            // if (counts[i]) return `${counts[i]}\n${getPrevs(i)}`;
            if (i%2 === 0 && i%3 === 0) {
                if (counts[i/2] <= counts[i-1] && counts[i/2] <= counts[i/3]) {
                    counts[i] = counts[i/2] + 1;
                    prevs[i] = i/2;
                } else if (counts[i/3] <= counts[i-1] && counts[i/3] <= counts[i/2]) {
                    counts[i] = counts[i/3] + 1;
                    prevs[i] = i/3;
                } else {
                    counts[i] = counts[i-1] + 1;
                    prevs[i] = i-1;
                }
            } else if (i%2 === 0 && i%3 !== 0) {
                if (counts[i/2] <= counts[i-1]) {
                    counts[i] = counts[i/2] + 1;
                    prevs[i] = i/2;
                } else {
                    counts[i] = counts[i-1] + 1;
                    prevs[i] = i-1;
                }
            } else if (i%2 !== 0 && i%3 === 0) {
                if (counts[i/3] <= counts[i-1]) {
                    counts[i] = counts[i/3] + 1;
                    prevs[i] = i/3;
                } else {
                    counts[i] = counts[i-1] + 1;
                    prevs[i] = i-1;
                }
            } else {
                counts[i] = counts[i-1] + 1;
                prevs[i] = i-1;
            }
            if (i < num) {
                i++
            } else {
                break;
            }
                
        }
        return `${counts[i]}\n${getPrevs(i)}`;
    }

    function getPrevs(i) {
        let idxs = `${i}`;
        while (i > 1) {
            idxs = prevs[i] + ' ' + idxs;
            i = prevs[i];
        }
        return idxs;
    }

    console.log(calc(number));
     
    // process.stdout.write(res + calc(number));
    process.exit();
});
