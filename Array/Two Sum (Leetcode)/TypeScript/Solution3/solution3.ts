function twoSum(nums: number[], target: number): number[] {
    const map = new Map()
    for(let i = 0;  i< nums.length; i++)
    {
        const num = nums[i];
        const complement = target - num;
        const index = map.get(complement);
        if(index !== undefined) return [i, index];
        map.set(num, i);

    }

};