var findErrorNums = function (nums) {
    nums.sort((a, b) => a - b);

    let duplicate = -1;
    let missing = -1;
    const n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            duplicate = nums[i];
        }
        if (nums[i + 1] - nums[i] > 1) {
            missing = nums[i] + 1;
        }
    }

    if (nums[0] !== 1) {
        missing = 1;
    }
    if (nums[n - 1] !== n) {
        missing = n;
    }

    return [duplicate, missing];
};

console.log(findErrorNums([3, 2, 2]));