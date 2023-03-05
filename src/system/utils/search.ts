// import { getUnicodeName } from 'unicode-name-2-0'

/*
  Usage:

  const str = "I was born on 22-05-1982 in a small town.";
  const blacklist = ["town"];
  const shortWordLength = 3;
  const result = splitByWords(str, shortWordLength, blacklist);
  console.log(result); // Output: ["I", "was", "born", "on", "22-05-1982", "in", "small"]

  Time (words) / space(array) is O(n), size proportional/linear to the number of words in the input string.

 */

export function splitByWords(
  str: string,
  shortWordLength: number,
  blacklist: string[],
): string[] {
  const words = str.split(' ')
  const result: string[] = []
  const dateRegex = /\d{1,2}([-/])\d{1,2}\1\d{4}/g // regex to match dates in common formats

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i]

    if (blacklist.includes(currentWord)) {
      // Skip any word that matches a word in the blacklist
      continue
    } else if (currentWord.length === 1) {
      // Skip any word that has a length of 1
      continue
    }
    // TODO FIX ME
    // else if (currentWord.match(dateRegex) != null) {
    //   let date = currentWord
    //   while (i + 1 < words.length && words[i + 1].match(dateRegex) != null) {
    //     date += ' ' + words[i + 1]
    //     i++
    //   }
    //   result.push(date)
    // }
    else if (/\d+/.test(currentWord)) {
      // If the current word contains one or more digits/numbers, join it with the following word
      if (i < words.length - 1) {
        result.push(`${currentWord}${words[i + 1]}`)
        i++ // Skip the next word since we've already processed it
      } else {
        result.push(currentWord)
      }
    } else if (currentWord.length < shortWordLength) {
      // If the current word is short, check if the next two words are also short
      if (
        i < words.length - 2 &&
        words[i + 1].length < shortWordLength &&
        words[i + 2].length < shortWordLength
      ) {
        result.push(`${currentWord}${words[i + 1]}${words[i + 2]}`)
        i += 2 // Skip the next two words since we've already processed them
      } else if (i < words.length - 1) {
        // Join with the following word if the current word has less than the specified length
        result.push(`${currentWord}${words[i + 1]}`)
        i++ // Skip the next word since we've already processed it
      } else {
        result.push(currentWord)
      }
    } else {
      result.push(currentWord)
    }

    // Join with the previous and/or following word if the current word contains a - or /
    if (/-|\//.test(currentWord)) {
      if (result.length > 1) {
        result[result.length - 2] += currentWord + result[result.length - 1]
        result.pop()
      } else if (i < words.length - 1) {
        result.push(`${currentWord}${words[i + 1]}`)
        i++ // Skip the next word since we've already processed it
      } else {
        result.push(currentWord)
      }
    }
  }

  // If the last word is short, join it with the previous word
  if (result.length > 1 && result[result.length - 1].length < shortWordLength) {
    const lastWord = result.pop()!
    result[result.length - 1] += lastWord
  }

  // If the input string contains an emoji, add its CLDR Short Name to the result array
  //   const regex = /([\uD800-\uDBFF][\uDC00-\uDFFF])/g
  //   let match
  //   while ((match = regex.exec(str)) !== null) {
  //     const emoji = match[0]
  //     const shortName = getUnicodeName(emoji, { format: 'short' })
  //     if (shortName) {
  //       result.push(shortName)
  //     } else {
  //       result.push(emoji)
  //     }
  //   }

  return result
}
