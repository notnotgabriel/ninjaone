export const sortingTypes = ['ascending', 'descending'] as const

export type SortingType = (typeof sortingTypes)[number]
