import React, { useEffect, useState } from 'react';
import { TILES } from './data/tiles.js';
import { applyClick, createInitialState, restartGame } from './game/engine.js';
import { loadTopScore, saveTopScore } from './game/storage.js';
import Header from './components/Header.jsx';
import Overlay from './components/Overlay.jsx';
import TileGrid from './components/TileGrid.jsx';
import './App.css';

export default function App() {
  const [game, setGame] = useState(() => createInitialState(TILES, loadTopScore()));

  useEffect(() => {
    saveTopScore(game.topScore);
  }, [game.topScore]);

  const handleTileClick = (tileId) => {
    setGame((current) => applyClick(current, tileId));
  };

  const handleRestart = () => {
    setGame((current) => restartGame(current));
  };

  const remaining = game.tiles.length - game.clicked.length;

  return (
    <div className="app">
      <div className="app-shell">
        <Header
          score={game.score}
          topScore={game.topScore}
          remaining={remaining}
          status={game.status}
        />
        <main>
          <TileGrid
            tiles={game.tiles}
            onTileClick={handleTileClick}
            disabled={game.status !== 'playing'}
          />
        </main>
      </div>
      <Overlay
        status={game.status}
        score={game.roundScore}
        topScore={game.topScore}
        onRestart={handleRestart}
      />
    </div>
  );
}
