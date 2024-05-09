function rob(nums: number[]): number {
    const n: number = nums.length;
    if (n === 0) return 0;
    const dp: number[] = new Array(n + 1).fill(0);
    dp[n] = 0;
    dp[n - 1] = nums[n - 1];
    
    for (let i = n - 2; i >= 0; i--) {
        dp[i] = Math.max(nums[i] + dp[i + 2], dp[i + 1]);
    }
    
    return dp[0];
}
