import { describe, expect, it } from 'vitest';
import { loadTopScore, saveTopScore } from './storage.js';

describe('score storage', () => {
  it('saves and loads the top score', () => {
    window.localStorage.clear();
    expect(loadTopScore()).toBe(0);
    saveTopScore(7);
    expect(loadTopScore()).toBe(7);
  });

  it('treats invalid stored values as zero', () => {
    window.localStorage.setItem('clicker-game-top-score', 'nope');
    expect(loadTopScore()).toBe(0);
  });
});
