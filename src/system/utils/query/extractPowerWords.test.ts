import fc from 'fast-check'
import { extractPowerWords } from './extractPowerWords'

function filterSpecialChars(arr: string[]): string[] {
  const specialChars = /[^!"'#$%&()*+,\-./:;<=>?@[\\\]^_`{|}~\s]/g
  return arr
    .map(str => str.replace(specialChars, ''))
    .filter(str => str.trim() !== '')
}

describe('extractPowerWords', () => {
  it('should return an empty array for an empty query', () => {
    const result = extractPowerWords('', ['power'], ['banned'])
    expect(result).toEqual([[], []])
  })
  it('should extract power words and remove banned words from the query', () => {
    const result = extractPowerWords(
      'Power word1 banned word2 Power word3',
      ['power', 'word1', 'word3'],
      ['banned'],
    )
    expect(result).toEqual([['power', 'word1', 'word3'], ['word2']])
  })
  it('should ignore case when checking power words and banned words', () => {
    const result = extractPowerWords(
      'POWER Word1 BANNED word2 power WORD3',
      ['power', 'word1', 'word3'],
      ['banned'],
    )
    expect(result).toEqual([['power', 'word1', 'word3'], ['word2']])
  })
  it('should remove unwanted characters from the query', () => {
    const result = extractPowerWords(
      'Power! word1? banned, word2.',
      ['power', 'word1'],
      ['banned'],
    )
    expect(result).toEqual([['power', 'word1'], ['word2']])
  })
  it('should handle hyphenated words', () => {
    const result = extractPowerWords(
      'Power word1 hyphen-ated-word banned word2',
      ['power', 'word1', 'hyphen-ated-word'],
      ['banned'],
    )
    expect(result).toEqual([['power', 'word1', 'hyphen-ated-word'], ['word2']])
  })
  it('should not remove apostrophes or hyphens from power words', () => {
    const result = extractPowerWords(
      "Power word1 don't hyphen-word banned word2",
      ['power', "don't", 'hyphen-word'],
      ['banned'],
    )
    expect(result).toEqual([
      ['power', "don't", 'hyphen-word'],
      ['word1', 'word2'],
    ])
  })

  it('should extract power words and remove banned words from the query', () => {
    fc.assert(
      fc.property(
        fc.array(fc.string(), { minLength: 1, maxLength: 100 }),
        fc.array(fc.string(), { minLength: 1, maxLength: 100 }),
        fc.array(fc.string(), { minLength: 1, maxLength: 100 }),
        fc.array(fc.string(), { minLength: 1, maxLength: 100 }),
        (powerWords, bannedWords, includedWords, excludedWords) => {
          const query = filterSpecialChars([
            ...powerWords,
            ...includedWords,
            ...bannedWords,
            ...excludedWords,
          ]).join(' ')

          const [matches, processedWords] = extractPowerWords(
            query,
            powerWords,
            bannedWords,
          )

          // expect(matches).toEqual(
          //   expect.arrayContaining(powerWords.concat(includedWords)),
          // )

          // expect(processedWords).toEqual(
          //   expect.arrayContaining(
          //     filterSpecialChars(
          //       includedWords.concat(filterSpecialChars(excludedWords)),
          //     ),
          //   ),
          // )

          expect(matches).not.toEqual(expect.arrayContaining(bannedWords))
          expect(matches).toHaveLength([...new Set(matches)].length)
          expect(processedWords).not.toEqual(
            expect.arrayContaining(powerWords.concat(bannedWords)),
          )
        },
      ),
    )
  })
})
