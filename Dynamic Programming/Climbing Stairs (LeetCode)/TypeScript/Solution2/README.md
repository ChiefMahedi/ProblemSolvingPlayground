# Climbing Stairs Problem with Dynamic Programming

## Problem Statement

You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

## Solution Explanation

The solution involves one function: `climbStairs`. It calculates the number of distinct ways to climb a staircase with n steps, where you can either take 1 step or 2 steps at a time.

### Code

```typescript
function climbStairs(n: number): number {
    let ways: number[] = [];
    ways[0] = 1;
    ways[1] = 2;
    for(let i = 2; i<n; i++)
    {
        ways[i] = ways[i-1] + ways[i-2]
    }
    return ways[n-1]
};
```
## Function climbStairs:

### Base Cases:
Initialization:
- An empty array ways is initialized to store the number of ways to reach each step.
- ways[0] = 1; There is 1 way to stay on the ground (0 steps), which is doing nothing.
- ways[1] = 1; There is 1 way to climb 1 step, which is taking one step.
Loop to Fill the Array:
- This loop starts from i = 2 and iterates up to i = n.
- ways[i] = ways[i-1] + ways[i-2]; The number of ways to reach step i is the sum of the ways to reach the previous step (i-1) and the step before that (i-2).
- This is because from step i-1, you can take one step to reach step i.
From step i-2, you can take two steps to reach step i.

## Time Complexity:
- O(n): Since each value from 2 to n is computed only once and stored in the ways array, the total number of computations is linear. Each iteration of the loop performs a constant amount of work.
### Space Complexity:
- O(n): The ways array is of size n+1 to store results for all values from 0 to n. Therefore, the space complexity is linear in terms of n