import React from 'react';
import TileArt from './TileArt.jsx';
import './Tile.css';

export default function Tile({ tile, onClick, disabled }) {
  return (
    <button
      type="button"
      className="tile"
      style={{ '--tile-hue': tile.hue }}
      onClick={() => onClick(tile.id)}
      disabled={disabled}
      aria-label={tile.name}
    >
      <span className="tile-art">
        <TileArt id={tile.id} />
      </span>
      <span className="tile-name">{tile.name}</span>
    </button>
  );
}
