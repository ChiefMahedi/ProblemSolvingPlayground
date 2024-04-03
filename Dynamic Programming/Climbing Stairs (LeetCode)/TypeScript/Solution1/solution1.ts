function countWays(n: number, memo: number[]): number
{
    if(n <= 0) return 0;
    else if(memo[n]) return memo[n];
    else if (n === 1) return 1;
    else if (n === 2) return 2;
    else{
       memo[n] = countWays(n-1, memo) + countWays(n-2, memo);
       return memo[n];
    }

}
function climbStairs(n: number): number {
    let memo: number[] = [];
    return countWays(n,memo);
};