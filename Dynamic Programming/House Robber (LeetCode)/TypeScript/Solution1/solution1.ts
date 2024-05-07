function rob(nums: number[]): number {
    const n: number = nums.length;
    const memo:number[] =[]
    function maxProfit(currentHouse: number): number {
        if (currentHouse >= n) return 0;
        if(memo[currentHouse] !== undefined) return memo[currentHouse];
        const amount = Math.max(nums[currentHouse] + maxProfit(currentHouse + 2), maxProfit(currentHouse + 1));
        memo[currentHouse] = amount;
        return amount;
    };
    return maxProfit(0);
}