const {shuffleArray} = require('./utils')
let {bots} = require('./data.js')

describe('shuffleArray should', () => {

    test('shuffleArray() should return an array', ()=> {
        let shuffledArray = shuffleArray(bots);
        let shuffledArray2 = shuffleArray('array');
        expect(Array.isArray(shuffledArray)).toBe(true)
        expect(Array.isArray(shuffledArray2)).toBe(true)
    })

    test('shuffleArray length and original array length should be equal', () => {
        let shuffleArrayLength = shuffleArray(bots).length;
        expect(shuffleArrayLength).toEqual(bots.length)
    })

    test('test for same elements in array', () => {
        let originalArr = bots
        let testArr = shuffleArray(bots).sort((a, b) => a.id - b.id)
        expect(originalArr[0]).toEqual(testArr[0])
 
    })
})

// console.log(shuffleArray(bots).length)
// console.log(bots.length) 
