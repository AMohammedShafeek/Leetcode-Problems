var findDisappearedNumbers = function (nums) {
    let Nums = new Set(nums)
    let missing = []
    let n = nums.length

    for (let i = 1; i <= n; i++) {
        if (!Nums.has(i)){
            missing.push(i)
        }
    }
    return missing
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
