/**
 * Generates an array of numbers from `start` to `end` (inclusive).
 *
 * @param {number} start - The starting number of the range.
 * @param {number} end - The ending number of the range.
 * @return {number[]} An array of numbers from `start` to `end`.
 */

export const rangeArray = (start: number, end: number): number[] => {
  return Array(end - start)
    .fill(null)
    .map((_, i) => i + start);
};
