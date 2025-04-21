import { monthRange } from '@/constants/months'

/**
 * Returns a filtered list of visible months based on a start and end month.
 *
 * If no start or end is provided, the full `monthRange` is returned.
 * If the start month is greater than the end month, an empty array is returned.
 *
 * @param {string} [start] - The starting month as a string (e.g., "3" for March).
 * @param {string} [end] - The ending month as a string (e.g., "8" for August).
 * @returns {string[]} An array of months as strings within the specified range.
 */
export function getVisibleMonths(start?: string, end?: string): string[] {
  if (!start || !end) {
    return monthRange
  }

  const startInt = Number.parseInt(start)
  const endInt = Number.parseInt(end)

  if (startInt > endInt) {
    return []
  }

  return monthRange.filter(month => {
    const monthInt = Number.parseInt(month)

    return monthInt >= startInt && monthInt <= endInt
  })
}
