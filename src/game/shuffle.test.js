import { describe, expect, it } from 'vitest';
import { shuffle } from './shuffle.js';

describe('shuffle', () => {
  it('returns a new array with the same items', () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffle(input);

    expect(result).not.toBe(input);
    expect(result).toHaveLength(input.length);
    expect([...result].sort()).toEqual([...input].sort());
    expect(input).toEqual([1, 2, 3, 4, 5]);
  });
});
