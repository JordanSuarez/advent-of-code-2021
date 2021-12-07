const fs = require('fs')

const data = fs.readFileSync('./data.txt', 'utf-8')
    .split(',')
    .map(v => parseInt(v))

function firstCalcConsumption(position, step) {
    return Math.abs(position - step)
}

function secondCalcConsumption(position, step) {
    const calc = Math.abs(position - step)

    let result = 0
    for (let i = 0; i <= calc; i++){
        result += i
    }

    return result
}

function cheapestConsumption(sum) {
    const consumptions = []

    for (let step = 1; step <= data.length; step++) {
        let consumption = 0

        for (let position of data) {
            consumption += sum(position, step)
        }

        consumptions.push(consumption)
    }

    return Math.min(...consumptions)
}

console.log('First part result =', cheapestConsumption(firstCalcConsumption))
console.log('Second part result =', cheapestConsumption(secondCalcConsumption))

