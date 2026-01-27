var smallerNumbersThanCurrent = function (nums) {
    let arr = []
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        count = 0
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                count += 1
            }
        }
        arr.push(count)
    }
    return arr
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
