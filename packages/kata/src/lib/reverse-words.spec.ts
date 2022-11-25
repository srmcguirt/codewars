import { reverseWords } from './reverse-words'
import { describe, expect, it } from 'vitest'

describe('Test reverse words', () => {
  it('letters should be reversed', () => {
    expect(reverseWords('hello')).toBe('olleh')
  })
})
