const fs = require('fs')

const data = fs.readFileSync('./data.txt', 'utf-8')
    .split(/\n/)
    .map(v => v.split(''))

const corruptedPoint = {
    ')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137,
}

const unclosedPoint = {
    ')': 1,
    ']': 2,
    '}': 3,
    '>': 4,
}

const signPair = {
    '{': '}',
    '[': ']',
    '(': ')',
    '<': '>',
}

function calcFirstResult(arr) {
    return arr.reduce((acc, curr) => acc + corruptedPoint[curr], 0)
}

function calcSecondResult(arr) {
    const toto = arr.map(v => v.reduce((acc, curr) => acc * 5 + unclosedPoint[curr], 0)).sort((a, b) => a - b)

    return toto[Math.floor(toto.length / 2)]
}

function findCorrupted(signs) {
    let lastSign = []
    for (let sign of signs) {
        if (signPair[sign]) {
            lastSign.push(sign)
        } else {
            if (signPair[lastSign[lastSign.length - 1]] === sign) {
                lastSign.pop()
            } else {
                return sign
            }
        }
    }

    return false
}

function findUnclosed(signs) {
    let leftSigns = []
    for (let sign of signs) {
        if (!signPair[sign]) {
            const last = leftSigns.pop()

            if (signPair[last] === sign) {
                continue
            }
        }

        leftSigns.push(sign)
    }

    return leftSigns.map(v => signPair[v]).reverse()
}

function result () {
    const corrupted = []
    const unclosed = []

    for (let line of data) {
        if (findCorrupted(line)) {
            corrupted.push(findCorrupted(line))
        }

        if (!findCorrupted(line)) {
            unclosed.push(findUnclosed(line))
        }
    }

    console.log('First part result:', calcFirstResult(corrupted))
    console.log('First part result:', calcSecondResult(unclosed))
}

result()
