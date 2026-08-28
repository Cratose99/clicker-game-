import { describe, expect, it } from 'vitest';
import { applyClick, createInitialState, restartGame } from './engine.js';

const tiles = [
  { id: 'a', name: 'A' },
  { id: 'b', name: 'B' },
  { id: 'c', name: 'C' },
];

const keepOrder = (items) => items;

describe('game engine', () => {
  it('starts a shuffled playing run at score zero', () => {
    const state = createInitialState(tiles, 4);
    expect(state.score).toBe(0);
    expect(state.topScore).toBe(4);
    expect(state.status).toBe('playing');
    expect(state.clicked).toEqual([]);
    expect(state.tiles).toHaveLength(3);
  });

  it('scores unique clicks and records a new top score', () => {
    const start = { ...createInitialState(tiles, 0), tiles };
    const next = applyClick(start, 'a', keepOrder);

    expect(next.score).toBe(1);
    expect(next.topScore).toBe(1);
    expect(next.clicked).toEqual(['a']);
    expect(next.status).toBe('playing');
  });

  it('wins when every tile has been clicked once', () => {
    let state = { ...createInitialState(tiles, 0), tiles };
    state = applyClick(state, 'a', keepOrder);
    state = applyClick(state, 'b', keepOrder);
    state = applyClick(state, 'c', keepOrder);

    expect(state.status).toBe('won');
    expect(state.score).toBe(3);
    expect(state.topScore).toBe(3);
  });

  it('resets the run after a duplicate click and keeps the top score', () => {
    let state = { ...createInitialState(tiles, 0), tiles };
    state = applyClick(state, 'a', keepOrder);
    state = applyClick(state, 'a', keepOrder);

    expect(state.status).toBe('lost');
    expect(state.score).toBe(0);
    expect(state.roundScore).toBe(1);
    expect(state.clicked).toEqual([]);
    expect(state.topScore).toBe(1);
  });

  it('ignores clicks after the round has ended', () => {
    const lost = {
      tiles,
      clicked: [],
      score: 0,
      roundScore: 2,
      topScore: 2,
      status: 'lost',
    };
    expect(applyClick(lost, 'b', keepOrder)).toBe(lost);
  });

  it('restarts while keeping the best score', () => {
    const lost = {
      tiles,
      clicked: [],
      score: 0,
      roundScore: 2,
      topScore: 2,
      status: 'lost',
    };
    const next = restartGame(lost, keepOrder);
    expect(next.status).toBe('playing');
    expect(next.score).toBe(0);
    expect(next.topScore).toBe(2);
  });
});
