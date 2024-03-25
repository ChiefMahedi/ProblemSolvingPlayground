function searchInsert(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length - 1;
    while(left <= right)
        {
            const middle = (left+right) >> 1;
            if(nums[middle] > target)
            {
                right = middle -1;
            }
            else if(nums[middle] < target)
            {
                    left = middle + 1;
            }
            else
            {
                return middle
            }
        }
    return left
};