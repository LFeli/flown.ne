export const monthRange = Array.from({ length: 12 }, (_, i) =>
  (i + 1).toString()
)

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

export const quarterMap: Record<string, string[]> = {
  '1': ['1', '2', '3'],
  '2': ['4', '5', '6'],
  '3': ['7', '8', '9'],
  '4': ['10', '11', '12'],
}
