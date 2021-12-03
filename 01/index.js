import puzzleInputs from './puzzle-inputs.js'

const getIncreasedInput = (inputs) => {
    let increasedInput = 0

    inputs.reduce((previousValue, currentValue) => {
        increasedInput += previousValue < currentValue ? 1 : 0

        return currentValue
    })

    return increasedInput
}

const measurements = () => {
    return puzzleInputs.map((input, index) =>
        input + puzzleInputs[index + 1] + puzzleInputs[index + 2]
    )
}

console.log('First part result =', getIncreasedInput(puzzleInputs))
console.log('Second part result =', getIncreasedInput(measurements()))
