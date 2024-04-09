function minCostClimbingStairs(cost: number[]): number {
    const n: number = cost.length;
    const memo: number[] = new Array(n).fill(-1);

    function findMinCost(index: number): number {
        if (index <= 1) {
            return cost[index];
        }

        if (memo[index] !== -1) {
            return memo[index];
        }

        const oneStep = findMinCost(index - 1);
        const twoSteps = findMinCost(index - 2);

        memo[index] = cost[index] + Math.min(oneStep, twoSteps);
        return memo[index];
    }

    return Math.min(findMinCost(n - 1), findMinCost(n - 2));
}