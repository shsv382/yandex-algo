    let number = 54;
    let counts = [0,0,1,1];

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
                } else if (counts[i/3] <= counts[i-1] && counts[i/3] <= counts[i/2]) {
                    counts[i] = counts[i/3] + 1;
                } else {
                    counts[i] = counts[i-1] + 1;
                }
            } else if (i%2 === 0 && i%3 !== 0) {
                if (counts[i/2] <= counts[i-1]) {
                    counts[i] = counts[i/2] + 1;
                } else {
                    counts[i] = counts[i-1] + 1;
                }
            } else if (i%2 !== 0 && i%3 === 0) {
                if (counts[i/3] <= counts[i-1]) {
                    counts[i] = counts[i/3] + 1;
                } else {
                    counts[i] = counts[i-1] + 1;
                }
            } else {
                counts[i] = counts[i-1] + 1;
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
            if (i%2 === 0 && i%3 === 0) {
                if (counts[i/2] <= counts[i-1] && counts[i/2] <= counts[i/3]) {
                    idxs = (i/2) + ' ' + idxs;
                    i = i/2; 
                } else if (counts[i/3] <= counts[i-1] && counts[i/3] <= counts[i/2]) {
                    idxs = (i/3) + ' ' + idxs;
                    i = i/3; 
                } else {
                    idxs = (i-1) + ' ' + idxs;
                    i = i-1; 
                }
            } else if (i%2 === 0 && i%3 !== 0) {
                if (counts[i/2] <= counts[i-1]) {
                    idxs = (i/2) + ' ' + idxs;
                    i = i/2; 
                } else {
                    idxs = (i-1) + ' ' + idxs;
                    i = i-1; 
                }
            } else if (i%2 !== 0 && i%3 === 0) {
                if (counts[i/3] <= counts[i-1]) {
                    idxs = (i/3) + ' ' + idxs;
                    i = i/3; 
                } else {
                    idxs = (i-1) + ' ' + idxs;
                    i = i-1; 
                }
            } else {
                idxs = (i-1) + ' ' + idxs;
                    i = i-1; 
            }
        }
        return idxs;
    }

    console.log(calc(number));
    // console.log(getPrevs(number).join(' '));
     
