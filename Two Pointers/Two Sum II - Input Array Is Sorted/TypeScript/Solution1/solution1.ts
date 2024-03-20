function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;
    while(left<right)
    {
        const sum = numbers[left]+numbers[right];
        const isTarget = sum === target;
        if(isTarget) return [left+1, right+1];
        const isSumGreater = sum > target;
        if(isSumGreater) right--;
        const isSumLesser = sum < target;
        if(isSumLesser) left++;
    }
    return [-1, -1];
}