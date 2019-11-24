import React, { Component } from "react";
import Tile from "./Tile";
import './tiles.css';

export default class Tiles extends Component {
  state = {
    clicked: [],
    nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  };

  componentDidMount() {
    this.setState(prevState => ({
      nums: this.shuffle(prevState.nums)
    }));
  }

  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  handleTileClick = val => {
    console.log("current array", this.state.clicked);
    console.log("clicked", val);
    if (this.state.clicked.includes(val)) {
      alert("YOU LOSE");

      this.setState(() => ({
        clicked: []
      }));
    } else {
      const copyArr = this.state.clicked.slice();
      copyArr.push(val);
      this.setState(() => ({
        clicked: copyArr
      }));
    }
    this.setState(prevState => ({
      nums: this.shuffle(prevState.nums)
    }));
  };

  render() {
    //const nums = [1,2,3,4,5,6,7,8,9,10,11,12];

    return (
      <div className="container tiles">
        <div className="row">
          {this.state.nums.map((x, i) => (
            <div className="col-md-4">
              <Tile handleClick={() => this.handleTileClick(x)} value={x} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
