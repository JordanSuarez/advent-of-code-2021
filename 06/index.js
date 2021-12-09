const fs = require('fs')

const data = fs.readFileSync('./data.txt', 'utf-8')
    .split(',')
    .map(v => parseInt(v))

function dayArray(arr) {
    let newFish = 0

    const day = arr.map(age => {
        if (age > 0) {
            return age - 1
        }

        newFish++
        return 6
    })

    for (let i = 0; i < newFish; i++) {
        day.push(8)
    }

    return day
}

function firstPart() {
    let ages = data

    for (let i = 0; i < 80; i++) {
        ages = dayArray(ages)
    }

    return ages.length
}

function lifeTimer() {
    let timer = {}

    for (let i = 0; i < 9; i++) {
        timer[i] = 0
    }

    for (let i = 0; i < data.length; i++) {
        timer[data[i]] += 1
    }

    return timer
}

function countFish(fish) {
    const countZero = fish['0'];

    for (let i = 0; i < 9; i++) {
        fish[i] = fish[i + 1];
    }

    fish['6'] += countZero;
    fish['8'] = countZero;

    return fish
}

function secondPart() {
    let timer = lifeTimer()

    for (let i = 0; i < 256; i++) {
        timer = countFish(timer)
    }

    return Object.values(timer).reduce((acc, value) => {
        return acc + value;
    })
}

console.log('Second part result =', secondPart())
console.log('First part result =', firstPart())