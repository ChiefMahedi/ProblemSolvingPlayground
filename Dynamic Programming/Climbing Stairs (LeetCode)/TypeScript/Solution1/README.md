# Climbing Stairs Problem with Dynamic Programming and Memoization

## Problem Statement

You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

## Solution Explanation

The solution involves two functions: `countWays` and `climbStairs`. The `countWays` function uses recursion and memoization to efficiently compute the number of ways to reach the top, while the `climbStairs` function initializes the memoization array and starts the computation.

### Code

```typescript
function countWays(n: number, memo: number[]): number {
    if (n <= 0) return 0;
    else if (memo[n]) return memo[n];
    else if (n === 1) return 1;
    else if (n === 2) return 2;
    else {
        memo[n] = countWays(n - 1, memo) + countWays(n - 2, memo);
        return memo[n];
    }
}

function climbStairs(n: number): number {
    let memo: number[] = [];
    return countWays(n, memo);
}
```
## Function climbStairs:
- This is the main function that initializes the memoization array and calls the countWays function to get the result.
- It initializes an empty array memo to store intermediate results.
- It then calls countWays with the number of steps n and the memoization array memo.
## Function countWays:
- This is a recursive function that uses memoization to avoid redundant calculations.
### Base Cases:
- If n <= 0, it returns 0 because there are no ways to climb a staircase with 0 or negative steps.
- If n === 1, it returns 1 because there is only one way to climb 1 step.
- If n === 2, it returns 2 because there are two ways to climb 2 steps: (1 step + 1 step) or (2 steps).
### Memoization Check:
- If the result for the current n is already computed and stored in memo[n], it returns that result to avoid redundant calculations.
### Recursive Case:
- If none of the base cases apply and the result is not memoized, it recursively calculates the number of ways to climb to step n as the sum of the ways to climb to step n-1 and step n-2. 
- This is based on the idea that to reach step n, one can either come from step n-1 or step n-2.
- The result is stored in memo[n] for future reference and then returned.