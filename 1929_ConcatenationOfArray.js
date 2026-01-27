var getConcatenation = function(nums) {
    let ans = []
    for(let i=0; i<2; i++){
        for(let i=0; i<nums.length; i++){
            ans.push(nums[i])
        }
    }
    return ans
};

console.log(getConcatenation([1,3,5,1]));
