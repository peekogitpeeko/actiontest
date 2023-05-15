const sum = require('./sum.js')

test('testing sum', () => {
    expect(sum(1,2)).toBe(3)
})