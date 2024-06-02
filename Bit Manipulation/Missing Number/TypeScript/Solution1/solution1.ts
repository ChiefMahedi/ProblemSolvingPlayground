function missingNumber(nums: number[]): number {
    var result;
    var numberMap: Map<number , string> = new Map<number , string>();
    for(let i = 0; i<=nums.length; i++)
    {
        numberMap.set(i, 'missing');
    }
    for(let i = 0; i<nums.length; i++)
    {
        if(numberMap.get(nums[i]) === 'missing')
        {
            numberMap.set(nums[i], 'found');
        }
    }
    numberMap.forEach((value, key) => {
        if(value === 'missing')
        {
            result = key;
        }
    });
    return result;
};