function minCostClimbingStairs(cost: number[]): number {
    const n : number = cost.length;
    if(n===0) return 0;
    if(n==1) return cost[0];
    const minCost: number[] = new Array(n).fill(0);
    minCost[0] = cost[0];
    minCost[1] = cost[1];
    for(let i = 2; i<n; i++)
    {
        minCost[i] = cost[i]+Math.min(minCost[i-1], minCost[i-2]);
    }
    return Math.min(minCost[n - 1], minCost[n - 2]);
};