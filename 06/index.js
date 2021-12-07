const fs = require('fs')

const data = fs.readFileSync('./data.txt', 'utf-8')
    .split(',')
    .map(v => parseInt(v))

function age(arr) {
    let newFish = 0

    const day = arr[arr.length -1].map(age => {
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
    const ages = [data]

    for (let i = 0; i < 80; i++) {
        ages.push(age(ages))
    }

    return ages[ages.length - 1].length
}

console.log('First part result =', firstPart())
