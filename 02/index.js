import fs from 'fs'

const data = fs.readFileSync('./data.txt', 'utf-8')
    .split(/\n/)
    .map(v => v.split(" "))

const loop = (mapper) => data.forEach(v => mapper[v[0]](parseInt(v[1])))

const firstPart = () => {
    let horizontal = 0
    let depth = 0

    const direction = {
        forward: (v) => horizontal += v,
        down: (v) => depth += v,
        up: (v) => depth -= v,
    }

    loop(direction)

    return horizontal * depth
}

const secondPart = () => {
    let horizontal = 0
    let depth = 0
    let aim = 0

    const direction = {
        forward: (v) => {
            horizontal += v
            depth += v * aim
        },
        down: (v) => aim += v,
        up: (v) => aim -= v,
    }

    loop(direction)

    return horizontal * depth
}

console.log(firstPart())
console.log(secondPart())
