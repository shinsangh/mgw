import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Player from '../components/Player'
import './Player.css'
import './Board.css'


const Board = (props) => {
  return (
    <div>
      <ul className="Board">
        <li className="Player">
          <p className="name">{props.name}</p>
          <p className="score">{props.score}</p>
          {/* <button onClick={} /> */}
        </li>
      </ul>
    </div>
  );
};

export default Board;

