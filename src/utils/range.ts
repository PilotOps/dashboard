/**
 * Creates an array of positive numbers progressing from 0 up to, but not including, the length.
 * @param length The length of the range.
 * @returns An array of number starting from 0
 */
export function range(length: number) {
  return Array.from({ length }, (_, i) => i);
}

export default range;