/**
 * An array of strings representing all months in a year (from "1" to "12").
 * Useful for iterating over or displaying month numbers as strings.
 *
 * @example
 * console.log(monthRange); // ["1", "2", ..., "12"]
 */
export const monthRange = Array.from({ length: 12 }, (_, i) =>
  (i + 1).toString()
)

/**
 * A mapping from month numbers (as strings) to their corresponding lowercase month names.
 *
 * @example
 * console.log(monthsMap["1"]); // "january"
 */
export const monthsMap: Record<string, string> = {
  '1': 'january',
  '2': 'february',
  '3': 'march',
  '4': 'april',
  '5': 'may',
  '6': 'june',
  '7': 'july',
  '8': 'august',
  '9': 'september',
  '10': 'october',
  '11': 'november',
  '12': 'december',
}

/**
 * An array of all lowercase English month names in calendar order.
 *
 * Derived from `monthsMap`, useful for iterating, rendering columns, etc.
 *
 * @example
 * console.log(monthKeys); // ["january", "february", ..., "december"]
 */
export const monthKeys = Object.values(monthsMap)

/**
 * A mapping from quarter numbers (as strings) to arrays of corresponding month numbers (as strings).
 *
 * @example
 * console.log(quarterMap["1"]); // ["1", "2", "3"]
 */
export const quarterMap: Record<string, string[]> = {
  '1': ['1', '2', '3'],
  '2': ['4', '5', '6'],
  '3': ['7', '8', '9'],
  '4': ['10', '11', '12'],
}
