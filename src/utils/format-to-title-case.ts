const titleCaseExceptions = new Set([
  'de',
  'da',
  'do',
  'dos',
  'das',
  'e',
  'em',
  'com',
  'para',
  'por',
  'a',
  'o',
  'as',
  'os',
  'no',
  'na',
  'nos',
  'nas',
])

function capitalizeFirstLetter(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

/**
 * Converts a string to Title Case, capitalizing the first letter of each word,
 * except for common prepositions and articles, unless they appear at the beginning.
 *
 * @param text - The input string to format.
 * @returns The formatted string in Title Case.
 */
export function formatToTitleCase(text: string): string {
  if (!text) {
    return ''
  }

  return text
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      const isFirstWord = index === 0
      const isException = titleCaseExceptions.has(word)

      return isException && !isFirstWord ? word : capitalizeFirstLetter(word)
    })
    .join(' ')
}
