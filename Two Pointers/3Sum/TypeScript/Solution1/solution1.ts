//Time complexity --> O(n^3)
//Space complexity -->  O(m), where m is the number of unique triplets with a zero sum
function threeSum(nums: number[]): number[][] {
    const triplets: number[][] = [];
    const tripletsSet = new Set<string>();
    for (let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++)
        {
            if(i === j)
            {
                break;
            }
            for(let k = j + 1; k < nums.length; k++)
            {
                if(j === k || i === k)
                {
                    break;
                }
                const sum = nums[i] + nums[j] + nums[k]
                if(sum === 0)
                {
                        const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                        tripletsSet.add(triplet.join(','))
                }
            }
        }
    }
    for(const item of tripletsSet)
    {
        const tripletArray = item.split(',').map(Number);
        triplets.push(tripletArray)
    }
    return triplets;
};