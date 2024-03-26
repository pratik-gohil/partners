import 'server-only'

export const getDictionary = async (dictionaries: () => Promise<any>) => dictionaries()