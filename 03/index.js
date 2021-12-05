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

const binary = (arr, a, b) => {
    for (let j = 0; j < data[0].length; j++) {
        if (arr.length === 1) {
            break
        }

        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += parseInt(arr[i][j])
        }

        let filter = []
        if (arr.length === 2) {
            arr = arr.filter(v => {
                return v[j] === a
            })
        } else if (arr.length > 2) {
            filter = arr.filter(v => {
                if (sum >= arr.length / 2) {
                    return v[j] === a
                } else if (sum < arr.length / 2) {
                    return v[j] === b
                }

                return v[j] === a
            })
        }

        if (filter.length >= 2) {
            arr = filter
        }
    }

    return arr.join('')
}

const secondPart = () => {
    const oxygen = binary(data, '1', '0')
    const co2 = binary(data, '0', '1')

    return parseInt(oxygen, 2) * parseInt(co2, 2)
}

console.log('First part result =', firstPart())
console.log('Second part result =', secondPart())