const fs = require('fs')

const data = fs.readFileSync('./data.txt', 'utf-8')
    .split(/\n/)
    .map(v => v.split(''))

const point = {
    ')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137,
}

const signPair = {
    '{': '}',
    '[': ']',
    '(': ')',
    '<': '>',
}

function calcResult(arr) {
    return arr.reduce((acc, curr) => acc + point[curr], 0)
}

function findCorrupted(signs) {
    let lastSign = []
    for (let sign of signs) {
        if (signPair[sign]) {
            lastSign.push(sign)
        } else {
            if (signPair[lastSign[lastSign.length - 1]] === sign) {
                lastSign.splice(lastSign.length - 1, 1)
            } else {
                return sign
            }
        }
    }

    return false
}

function result () {
    const corrupteds = []
    for (let line of data) {
        const corrupted = findCorrupted(line)

        if (corrupted) {
            corrupteds.push(corrupted)
        }
    }

    return calcResult(corrupteds)
}

console.log('First part result:', result())
