function longestConsecutive(nums: number[]): number {
    nums.sort(function(a, b){return a - b});
    let maxLength = 0;
    let length = 1;
    for(let i = 0; i < nums.length; i++)
    {

        if(nums[i]+1 === nums[i+1])
        {
            length++;
            maxLength = Math.max(maxLength, length);
        }
        else if(nums[i] === nums[i+1])
        {
            continue;
        }
        else
        {
             length = 1;
             maxLength = Math.max(maxLength, length);
        }
    }
    return maxLength;
};