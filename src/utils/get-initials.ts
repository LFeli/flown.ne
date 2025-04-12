/**
 * Function that extracts the initials from a given string.
 * It takes the first letter of each word, converts them to uppercase,
 * and returns up to two initials.
 * @param value - The input string to extract initials from.
 * @returns {string} A string containing up to two uppercase initials.
 */
export function getInitials(value: string) {
  const initials = value
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('')

  return initials
}
