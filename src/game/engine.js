import { shuffle } from './shuffle.js';

export function createInitialState(tiles, topScore = 0) {
  return {
    tiles: shuffle(tiles),
    clicked: [],
    score: 0,
    roundScore: 0,
    topScore,
    status: 'playing',
  };
}

export function applyClick(state, tileId, shuffleFn = shuffle) {
  if (state.status !== 'playing') {
    return state;
  }

  if (state.clicked.includes(tileId)) {
    return {
      ...state,
      clicked: [],
      score: 0,
      roundScore: state.score,
      tiles: shuffleFn(state.tiles),
      status: 'lost',
    };
  }

  const clicked = [...state.clicked, tileId];
  const score = clicked.length;
  const topScore = Math.max(state.topScore, score);
  const won = score === state.tiles.length;

  return {
    ...state,
    clicked,
    score,
    roundScore: score,
    topScore,
    tiles: shuffleFn(state.tiles),
    status: won ? 'won' : 'playing',
  };
}

export function restartGame(state, shuffleFn = shuffle) {
  return {
    ...state,
    tiles: shuffleFn(state.tiles),
    clicked: [],
    score: 0,
    roundScore: 0,
    status: 'playing',
  };
}
