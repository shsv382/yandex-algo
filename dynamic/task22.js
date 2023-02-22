let cnt, res;
process.stdin.on('data', data => {
    let [n, k] = data.toString().split(" ").map(i => parseInt(i));
    
    function calc(n,k) {
        let dp = [1];
        for (let i=1; i<=k; i++) {
            dp[i] = 2 ** (i - 1)
        }
        for (let j=k+1; j<n; j++) {
            dp[j] = 2 * dp[j-1] - dp[j-k-1];
        }
        return dp[n-1];
    }

    console.log(calc(n, k));
     
    // process.stdout.write(res + calc(number));
    process.exit();
});
