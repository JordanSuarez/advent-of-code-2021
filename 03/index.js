const fs = require('fs')

const data = fs.readFileSync('./data.txt', 'utf-8')
    .split(/\n/)

const firstPart = () => {
    let gamma = ''
    let epsilon = ''

    for (let j = 0; j < data[0].length; j++) {
        let sum = 0

        for (let i = 0; i < data.length; i++) {
            sum += parseInt(data[i][j])
        }
        if (sum > data.length / 2) {
            gamma += '1'
            epsilon += '0'
        } else {
            gamma += '0'
            epsilon += '1'

        }
    }

    return parseInt(gamma, 2) * parseInt(epsilon, 2)
}

console.log('First part result =', firstPart())

