const STORAGE_KEY = 'clicker-game-top-score';

export function loadTopScore() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const value = Number.parseInt(raw, 10);
    if (Number.isFinite(value) && value >= 0) {
      return value;
    }
  } catch {
    // Ignore missing or blocked storage (private browsing, tests).
  }
  return 0;
}

export function saveTopScore(score) {
  try {
    window.localStorage.setItem(STORAGE_KEY, String(score));
  } catch {
    // Ignore write failures so gameplay can continue.
  }
}
