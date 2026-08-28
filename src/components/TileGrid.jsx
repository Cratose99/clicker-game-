import React from 'react';
import Tile from './Tile.jsx';
import './TileGrid.css';

export default function TileGrid({ tiles, onTileClick, disabled }) {
  return (
    <div className="tile-grid" role="list">
      {tiles.map((tile) => (
        <div key={tile.id} role="listitem">
          <Tile tile={tile} onClick={onTileClick} disabled={disabled} />
        </div>
      ))}
    </div>
  );
}
