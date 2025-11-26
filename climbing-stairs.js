/*
Problem Description:
You are climbing a stair case. It takes n steps to reach the top. Each time you can
either climb one or two steps. In how many ways can you climb to the top?

Framework for Solving DP Problem:
1. Define the objective function

    

2. Identify base cases

    f(0) = 1
    f(1) = 1

3. Write down recurrence relation for the optimized objective function
    f(n) = f(n - 1) + f(n - 2);

4. Whats the order of execution
    bottom top

5. Where to look for the answer ?
    f(n)

Big O:

Time complexity => O(n)
Space complexity => O(n)

*/

//Code

function climbStairs(n) {
    let dp = Array(n+1);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n];
}

//Test cases
console.log(climbStairs(0)); //Expected output: 1
console.log(climbStairs(1)); //Expected output: 1
console.log(climbStairs(5)); //Expected output: 8
console.log(climbStairs(3)); //Expected output: 3
console.log(climbStairs(4)); //Expected output: 5