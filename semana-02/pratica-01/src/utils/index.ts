export const getNotEquals = <T extends Record<string, unknown>>(
  itemA: T,
  itemB: T,
  keys: (keyof T)[]
): keyof T | undefined => {
  return keys.find((key) => itemA[key] !== itemB[key]);
};
