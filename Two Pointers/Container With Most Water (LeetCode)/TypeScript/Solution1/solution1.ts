function maxArea(height: number[]): number {
    let maxAmount = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const calculatedAmount = Math.min(height[i], height[j]) * (j - i);
            maxAmount = Math.max(maxAmount, calculatedAmount);
        }
    }
    return maxAmount;
};