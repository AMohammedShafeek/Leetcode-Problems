var shuffle = function(nums, n) {
    let x = []
    let y = []
    let ans = []
    for(let i=0; i<nums.length; i++){
        if(i<n){
            x.push(nums[i])
        } else {
            y.push(nums[i])
        }
    }

    for(let i=0; i<n; i++){
        ans.push(x[i])
        ans.push(y[i])
    }
    return ans
};

console.log(shuffle([1,2,5,6,4,9], 3));
