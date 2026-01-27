var evalRPN = function (tokens) {
    let stack = []
    for (let i of tokens) {
        if (!(i === "+" || i === "-" || i === "*" || i === "/")) {
            stack.push(Number(i))
        } else {
            let b = stack.pop()
            let a = stack.pop()

            if (i === "+") stack.push(a + b)
            if (i === "-") stack.push(a - b)
            if (i === "*") stack.push(a * b)
            if (i === "/") stack.push(Math.trunc(a / b))
        }
    }
    return stack[0]
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));
