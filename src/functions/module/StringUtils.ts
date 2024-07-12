const isEmpty = (s: string): boolean => s === "";
const isBlank = (s: string): boolean => s?.trim() === "";

export const StringUtils = {
  isEmpty,
  isBlank,
} as const;
