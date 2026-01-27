var buildArray = function (target, n) {
    let stack = []
    let index = 0
    for (let i = 1; i < n + 1; i++) {
        stack.push("Push")
        if (i === target[index]) {
            index++
        } else {
            stack.push("Pop")
        }
        if (index === target.length) {
            break
        }
    }
    return stack
};

console.log(buildArray([1, 3], 3));
