var isPalindrome = function(x) {
    if(x<0) return false
    let reverse=parseInt(Math.abs(x).toString().split('').reverse().join(''))
    return x===reverse 
};

console.log(isPalindrome(-121))