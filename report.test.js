const { sortPages } = require('./report.js')
const { test, expect } = require('@jest/globals')

test('sortPages 2 pages', () => {
    const input = {
        'https://website/path': 1,
        'https://website': 3
    }
    const actual = sortPages(input)
    const expected = [
        ['https://website', 3],
        ['https://website/path', 1]
    ]
    expect(actual).toEqual(expected)
})

test('sortPages 5 pages', () => {
    const input = {
        'https://website/path1': 9,
        'https://website': 3,
        'https://website/test': 4,
        'https://website/path2': 2,
        'https://website/test2': 5
    }
    const actual = sortPages(input)
    const expected = [
        ['https://website/path1', 9],
        ['https://website/test2', 5],
        ['https://website/test', 4],
        ['https://website', 3],
        ['https://website/path2', 2]
    ]
    expect(actual).toEqual(expected)
})