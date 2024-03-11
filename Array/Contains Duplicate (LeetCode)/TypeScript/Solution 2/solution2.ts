function containsDuplicate(nums: number[]): boolean {
    const numSet = new Set(nums);
    if(numSet.size === nums.length) return false
    else return true
};