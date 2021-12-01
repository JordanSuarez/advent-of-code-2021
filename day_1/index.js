import puzzleInputs from './puzzle-inputs.js'

const getIncreasedInput = () => {
    let increasedInput = 0

    puzzleInputs.reduce((previousValue, currentValue) => {
        increasedInput += previousValue < currentValue ? 1 : 0

        return currentValue
    })

    return increasedInput
}

console.log(getIncreasedInput())
