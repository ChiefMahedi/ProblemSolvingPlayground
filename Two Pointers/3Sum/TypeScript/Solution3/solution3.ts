function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }

        let leftPointer = i + 1;
        let rightPointer = nums.length - 1;
        while (leftPointer < rightPointer) {
            let sum = nums[i] + nums[leftPointer] + nums[rightPointer];

            if (sum > 0) {
                rightPointer -= 1;
            } else if (sum < 0) {
                leftPointer += 1;
            } else {
                result.push([nums[i], nums[leftPointer], nums[rightPointer]]);
                leftPointer += 1;
                while (nums[leftPointer] == nums[leftPointer - 1] && leftPointer < rightPointer) {
                    leftPointer += 1;
                }
            }
        }
    }
    return result;
}
