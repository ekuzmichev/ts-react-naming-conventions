// TODO: How to name the file? kebab-case.ts or PascalCase.ts?

export const isNullish = <T>(t: T): boolean => t === null || t === undefined;

export const isNotNullish = <T>(t: T): boolean => !isNullish(t);
