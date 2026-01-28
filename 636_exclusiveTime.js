var exclusiveTime = function (n, logs) {
    let stack = []
    let result = new Array(n).fill(0)
    let prevTime = 0

    for (let log of logs) {
        let [id, type, time] = log.split(":")
        id = Number(id)
        time = Number(time)

        if (type === "start") {
            if (stack.length > 0) {
                result[stack[stack.length - 1]] += time - prevTime
            }
            stack.push(id)
            prevTime = time
        } else {
            let finished = stack.pop()
            result[finished] += time - prevTime + 1
            prevTime = time + 1
        }
    }

    return result
};

let n = 1,
    logs = [
        "0:start:0",
        "0:start:2",
        "0:end:5",
        "0:start:6",
        "0:end:6",
        "0:end:7"
    ]
console.log(exclusiveTime(n, logs));
