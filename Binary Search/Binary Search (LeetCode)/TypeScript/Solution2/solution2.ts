function binarySearch(nums: number[], target: number, left: number, right: number): number {
    if (left > right) {
        return -1;
    }

    const middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
        return middle;
    } else if (nums[middle] > target) {
        return binarySearch(nums, target, left, middle - 1);
    } else {
        return binarySearch(nums, target, middle + 1, right);
    }
}

function search(nums: number[], target: number): number {
    return binarySearch(nums, target, 0, nums.length - 1);
}
