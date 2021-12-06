const fs = require('fs')

const numbers = fs.readFileSync('./numbers.txt', 'utf-8')
    .split(',')
    .map(v => parseInt(v))

const data = fs.readFileSync('./data.txt', 'utf-8')
    .split(/\n/)
    .filter(v => v !== '')
    .map(v => v.split(' ')
        .filter(v => v !== '')
        .map(v => parseInt(v))
    )

const sliceIntoChunks = (arr, chunkSize) => {
    const res = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }

    return res;
}

const grids = sliceIntoChunks(data, 5)

const replaceNumber = (grid, number) => {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === number) {
                grid[i][j] = null
            }
        }
    }
}

const checkLineIsWon = (grid) => {
    for (let i = 0; i < grid.length; i++) {
        const line = grid[i].filter(v => v !== null)

        if (line.length === 0) {
            return true
        }
    }

    return false
}

const checkColumnIsWon = (grid) => {
    for (let i = 0; i < grid.length; i++) {
        const column = grid.map(v => v[i]).filter(v => v !== null)

        if (column.length === 0) {
            return true
        }
    }

    return false
}

const play = () => {
    for (let number of numbers) {
        for (let grid of grids) {
            replaceNumber(grid, number)

            if (checkLineIsWon(grid) || checkColumnIsWon(grid)) {
                return {
                    grid,
                    number,
                }
            }
        }
    }
}

const sum = (grid) => {
    let result = 0

    for (let line of grid) {
        result += line.reduce((prev, curr) => prev + curr)
    }

    return result
}

const result = () => {
    const { grid, number } = play()

    return sum(grid) * number
}

console.log(result())


