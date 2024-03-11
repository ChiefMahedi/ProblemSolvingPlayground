function containsDuplicate(nums: number[]): boolean {
    for(let left = 0; left<nums.length; left++ )
    {
        for(let right = left+1; right<nums.length; right++)
        {
            if(nums[left] === nums[right])
            {
                return true
            }
        }
    }
    return false
};