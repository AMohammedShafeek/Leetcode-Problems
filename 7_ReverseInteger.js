var reverse = function (x) {
    let positive = (x >= 0)
    let num = Math.abs(x)
    let last = 0
    let reversed = 0
    while (num !== 0) {
        last = Math.floor(num % 10)
        // console.log("last", last);

        reversed = (reversed * 10) + last
        // console.log("reversed", reversed);

        num = Math.floor(num / 10)
        // console.log("num", num);
    }
    if (reversed > 2147483647 || reversed < -2147483648) {
        return 0;
    }
    else if (positive) return reversed
    return reversed * -1
};

console.log(reverse(1534236469));