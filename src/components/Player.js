import React, { PureComponent } from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';

class Player extends PureComponent {

  static propTypes = {
    changeScore: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
  };

  render() {
    const { 
      name,
      id,
      score,
      index,
      removePlayer,
      changeScore
    } = this.props;
    
      return (
        <div className="player">
          <span className="player-name">
            <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
            { name }
          </span>
    
          <Counter 
            score={score}
            index={index}   //pass the index
            changeScore={changeScore}  //invoke the change
          />
        </div>
      );
  }
}

export default Player;