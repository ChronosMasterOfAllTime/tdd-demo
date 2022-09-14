import { add } from '@/calculator'

test('string with a single number should result in the number itself', () => {
  expect(add('1')).toBe(1)
})
test('Should add integers successfully', () => {
  expect(add('1,   2  ,3,4    ,     5  ')).toBe(15)
})
test('should handle spaces and semi colons', () => {
  expect(add('1 2;3 4,5')).toBe(15)
})
test('should ignore non-numbers', () => {
  expect(add(',1,word,2,3,4,cat')).toBe(10)
})
test('should add floats', () => {
  expect(add('1,1.2,2.5')).toBe(4.7)
})
