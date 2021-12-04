const fs = require('fs')

const data = fs.readFileSync('./data.txt', 'utf-8')
    .split(/\n/)
    .map(v => parseInt(v))

const getIncreasedInput = (inputs) => {
    let increasedInput = 0

    inputs.reduce((previousValue, currentValue) => {
        increasedInput += previousValue < currentValue ? 1 : 0

        return currentValue
    })

    return increasedInput
}

const measurements = () => {
    return data.map((input, index) =>
        input + data[index + 1] + data[index + 2]
    )
}

console.log('First part result =', getIncreasedInput(data))
console.log('Second part result =', getIncreasedInput(measurements()))
