import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm.js';

class App extends Component {
  state = {
    players: [
      {
        name: "Puppy",
        score: 0,
        id: 1
      },
      {
        name: "Kitten",
        score: 0,
        id: 2
      },
      {
        name: "Panda",
        score: 0,
        id: 3
      },
      {
        name: "Piglet",
        score: 0,
        id: 4
      }
    ]
  };

  //player id counter
  prevPlayerId = 4;


  handleScoreChange = (index, delta) => {
    this.setState( prevState => {
      // New 'players' array – a copy of the previous `players` state
      const updatedPlayers = [ ...prevState.players ];
      // A copy of the player object we're targeting
      const updatedPlayer = { ...updatedPlayers[index] };

      // Update the target player's score
      updatedPlayer.score += delta;
      // Update the 'players' array with the target player's latest score
      updatedPlayers[index] = updatedPlayer;

      // Update the `players` state without mutating the original state
      return {
        players: updatedPlayers
      };
    });
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {   //update based on previously state, make sure this.state always holds the correct updated state
      return{
        players: [
          ...prevState.players,    //presState - all previous players will the included 
          {
            name,   //name: name
            score: 0,
            id: this.prevPlayerId += 1    //increase 1 whenever the function is called
          }
        ]
      }
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="My Scoreboard" 
          players={this.state.players}    //pass the players object to the children elements
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()} 
            index={index}
            changeScore={this.handleScoreChange}    //this will run later time when interact
            removePlayer={this.handleRemovePlayer}           
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer}/>   
      </div>    //pass the function down
    );
  }
}

export default App;
