import React from 'react';
import './Header.css';

export default function Header({ score, topScore, remaining, status }) {
  const hint =
    status === 'won'
      ? 'Perfect run. Every relic clicked once.'
      : status === 'lost'
        ? 'You clicked a relic twice. Board reset.'
        : 'Click each relic once. The board shuffles after every click.';

  return (
    <header className="game-header">
      <div className="brand">
        <p className="eyebrow">Memory clicker</p>
        <h1>Clicker Game</h1>
        <p className="hint" aria-live="polite">
          {hint}
        </p>
      </div>
      <dl className="scores">
        <div>
          <dt>Score</dt>
          <dd data-testid="score">{score}</dd>
        </div>
        <div>
          <dt>Top</dt>
          <dd data-testid="top-score">{topScore}</dd>
        </div>
        <div>
          <dt>Left</dt>
          <dd data-testid="remaining">{remaining}</dd>
        </div>
      </dl>
    </header>
  );
}
