function threeSum(nums: number[]): number[][] {
    const tripletsSet = new Set<string>();
    nums = nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        let leftPointer = i + 1;
        let rightPointer = nums.length - 1;
        
        while (leftPointer < rightPointer) {
            let currentSum = nums[i] + nums[leftPointer] + nums[rightPointer];
            
            if (currentSum > 0) {
                rightPointer -= 1;
            } else if (currentSum < 0) {
                leftPointer += 1;
            } else {
                const triplet = [nums[i], nums[leftPointer], nums[rightPointer]].sort((a, b) => a - b);
                tripletsSet.add(triplet.join(','));
                rightPointer -= 1;
            }
        }
    }
    
    return Array.from(tripletsSet).map(item => item.split(',').map(Number));
}
