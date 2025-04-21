import { monthRange } from '@/constants/months'

/**
 * Returns a filtered list of months based on a comma-separated selection string.
 *
 * - If no value is provided, the full `monthRange` is returned.
 * - If the input is `"0"`, an empty array is returned, indicating no months selected.
 * - Otherwise, the string is split by commas and only valid months from `monthRange` are returned.
 * - If none of the selected months are valid, the full `monthRange` is returned as fallback.
 *
 * @param {string} [monthsSelected] - A comma-separated string of selected months (e.g., "1,3,5").
 * @returns {string[]} An array of valid selected months, or a fallback based on the input.
 */
export function getVisibleMonths(monthsSelected?: string): string[] {
  if (!monthsSelected) {
    return monthRange
  }

  if (monthsSelected === '0') {
    return []
  }

  const months = monthsSelected
    .split(',')
    .map(m => m.trim())
    .filter(m => monthRange.includes(m))

  return months.length > 0 ? months : monthRange
}
