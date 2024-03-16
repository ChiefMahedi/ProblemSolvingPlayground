function twoSum(nums: number[], target: number): number[] {
    const map = getMap(nums);
    return getSumIndices(nums, target, map);

};

function getMap(nums: number[])
{
    const map = new Map();
    for(let i = 0; i<nums.length; i++)
    {
        map.set(nums[i], i);
    }
    return map;
}
function getSumIndices(nums: number[], target: number, map)
{
    for(let i = 0; i< nums.length; i++)
    {
        const complement = target - nums[i];
        const index = map.get(complement);
        const isTarget = map.has(complement) && (index !== i);
        if(isTarget) return [i, index];
    }
}