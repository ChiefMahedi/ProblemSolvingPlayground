function findTripletsWithZeroSum(nums: number[]): number[][] {
    const triplets: number[][] = [];
    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let leftPointer = i + 1;
        let rightPointer = nums.length - 1;
        while (leftPointer < rightPointer) {
            let currentSum = nums[i] + nums[leftPointer] + nums[rightPointer];

            if (currentSum > 0) {
                rightPointer -= 1;
            } else if (currentSum < 0) {
                leftPointer += 1;
            } else {
                triplets.push([nums[i], nums[leftPointer], nums[rightPointer]]);
                leftPointer += 1;
                while (nums[leftPointer] === nums[leftPointer - 1] && leftPointer < rightPointer) {
                    leftPointer += 1;
                }
            }
        }
    }
    return triplets;
}
