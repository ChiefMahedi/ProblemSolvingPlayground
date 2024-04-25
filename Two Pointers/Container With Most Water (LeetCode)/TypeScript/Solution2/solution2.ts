function maxArea(height: number[]): number {
    let maxAmount = 0;
    let leftPointer = 0;
    let rightPointer = height.length - 1;
    while (leftPointer < rightPointer) {
        const calculatedAmount = Math.min(height[leftPointer], height[rightPointer]) * (rightPointer - leftPointer);
        maxAmount = Math.max(maxAmount, calculatedAmount);
        if (height[leftPointer] < height[rightPointer]) 
        {
            leftPointer++;
        }
        else
        {
            rightPointer--;
        }
    }
    return maxAmount;
};