var myAtoi = function(s) {
    let i = 0
    let sign = 1
    let result = 0

    const MIN32 = -(2**31)
    const MAX32 = (2**31)-1

    while(i<s.length && s[i]===" "){
        i++
    }
    if(i<s.length && (s[i]==="-" || s[i]==="+")){
        if(s[i]==="-"){
            sign = -1
        }
        i++
    }
    while(i<s.length && (s[i]>="0" && s[i]<="9")){
        let digit = s[i]-"0"
        if(result>Math.floor(MAX32/10) || result===Math.floor(MAX32/10) && digit>7){
            if(sign===1){
                return MAX32
            }
            return MIN32
        }
        result = result * 10 + digit
        i++
    }
    return result * sign
};
let s = "   -200a00000002a1 47483650abc123"
console.log(myAtoi(s));
