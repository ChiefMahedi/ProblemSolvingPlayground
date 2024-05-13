function longestConsecutive(nums: number[]): number {
    const numberSet = new Set(nums);
    let longest = 0;
    for(const number of numberSet)
    {
        if(!numberSet.has(number - 1))
        {
            let length = 0;
            while (numberSet.has(number + length)) {
                length += 1;
            }
            longest = Math.max(length, longest);
        }
    }
    return longest;
};