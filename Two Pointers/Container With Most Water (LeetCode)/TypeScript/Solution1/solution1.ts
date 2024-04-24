function maxArea(height: number[]): number {
    let maxAmount = 0;
    for(let i = 0; i<height.length; i++)
    {
        let leftPointer = i;
        let rightPointer = height.length - 1; 
        while( leftPointer < rightPointer)
        {
            const calculatedAmount = Math.min(height[leftPointer], height[rightPointer]) * (rightPointer - i);
            maxAmount = Math.max(maxAmount, calculatedAmount);
            rightPointer--;
        }
    }
    return maxAmount;
};