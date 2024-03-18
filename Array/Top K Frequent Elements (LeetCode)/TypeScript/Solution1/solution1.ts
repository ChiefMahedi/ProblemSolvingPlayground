function topKFrequent(nums: number[], k: number): number[] {
    let tempObj = {};
    for (let i = 0; i < nums.length; i++) 
    {
        tempObj[nums[i]] = (tempObj[nums[i]] || 0) + 1;
    }
    const sortedNums = Object.keys(tempObj).sort((a, b) => tempObj[b] - tempObj[a]); 
    const result = sortedNums.slice(0, k).map(str => parseInt(str));
    
    return result;
};