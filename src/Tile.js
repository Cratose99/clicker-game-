import React from 'react'

const Tile = props => (
    <div onClick={props.handleClick} style={{ width: '150px', height: '150px', border: '3px solid black'}}>{props.value}</div>
);

export default Tile;
