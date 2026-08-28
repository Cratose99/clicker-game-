import React, { useEffect, useRef } from 'react';
import './Overlay.css';

export default function Overlay({ status, score, topScore, onRestart }) {
  const buttonRef = useRef(null);
  const open = status === 'won' || status === 'lost';

  useEffect(() => {
    if (open) {
      buttonRef.current?.focus();
    }
  }, [open]);

  if (!open) {
    return null;
  }

  const won = status === 'won';

  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-labelledby="overlay-title">
      <div className="overlay-card">
        <p className="overlay-kicker">{won ? 'You win' : 'Game over'}</p>
        <h2 id="overlay-title">{won ? 'Full set collected' : 'Already clicked'}</h2>
        <p>
          {won
            ? 'You remembered every relic. That is a perfect 12.'
            : 'That relic was already in this run. Score drops back to zero.'}
        </p>
        <p className="overlay-scores">
          Run: {score} · Best: {topScore}
        </p>
        <button ref={buttonRef} type="button" className="overlay-btn" onClick={onRestart}>
          Play again
        </button>
      </div>
    </div>
  );
}
